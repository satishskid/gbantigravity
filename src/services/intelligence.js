import { create } from 'zustand';

// --- CONFIGURATION ---
// In production, these should be environment variables. 
// For local dev, we will check if they exist, otherwise warn.
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const HF_API_URL = 'https://huggingface.co/api/models';

// --- STORE (Cache results to avoid spamming APIs) ---
export const useIntelligenceStore = create((set) => ({
    dailyPrompt: null,
    dailyModel: null,
    setDailyPrompt: (prompt) => set({ dailyPrompt: prompt }),
    setDailyModel: (model) => set({ dailyModel: model }),
}));

// --- HUGGING FACE SERVICE ---
export const fetchTrendingModel = async () => {
    try {
        // Fetch specific trending models or sort by likes/downloads
        const response = await fetch(`${HF_API_URL}?sort=likes&direction=-1&limit=5&full=true`);
        const data = await response.json();

        // Filter for interesting tasks (Text Generation, Summarization) to avoid obscure tools
        const candidates = data.filter(m =>
            m.pipeline_tag === 'text-generation' ||
            m.pipeline_tag === 'summarization' ||
            m.pipeline_tag === 'text-to-image'
        );

        const winner = candidates[0] || data[0]; // Fallback to #1

        return {
            name: winner.modelId,
            tag: winner.pipeline_tag,
            desc: `Currently trending with ${winner.likes} likes and ${winner.downloads} downloads. A leading open-source choice for ${winner.pipeline_tag}.`,
            url: `https://huggingface.co/${winner.modelId}`
        };
    } catch (error) {
        console.error("HuggingFace Fetch Error:", error);
        // Fallback Data if API fails
        return {
            name: "DeepSeek-V3",
            tag: "Text Generation",
            desc: "The Open-Source Challenger. Rivals GPT-4 in coding logic but runs efficiently.",
            url: "https://huggingface.co/deepseek-ai/deepseek-llm-67b-chat"
        };
    }
};

// --- GROQ SERVICE ---
export const generateDailyPrompt = async (contextHeadline) => {
    if (!GROQ_API_KEY) {
        console.warn("Missing VITE_GROQ_API_KEY. Using fallback prompt.");
        return {
            title: "Simulate a Medical Board",
            text: '"Act as a multidisciplinary medical board consisting of a Radiologist, Oncologist, and Internist. I will present a patient case. Debate the differential diagnosis, highlighting conflicting viewpoints, and reach a consensus treatment plan."'
        };
    }

    try {
        console.log("Generating prompt with context:", contextHeadline);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "system",
                        content: "You are an expert Prompt Engineer for medical professionals. Output raw text. No intro. No breakdown."
                    },
                    {
                        role: "user",
                        content: `Context: "${contextHeadline}".
                        Task: Create a sophisticated, copy-paste "System Prompt" that a doctor could use with an LLM to explore this topic practically.
                        Format:
                        Title: [Short Actionable Title]
                        Prompt: "[The Prompt Text]"`
                    }
                ],
                model: "llama3-8b-8192",
                temperature: 0.7,
                max_tokens: 200
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Groq API Error:", response.status, errorData);
            throw new Error(`Groq API returned ${response.status}`);
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error("Groq Invalid Response Structure:", data);
            throw new Error("Invalid response structure from Groq");
        }

        const content = data.choices[0].message.content;

        // Simple parsing (Robustness can be improved)
        const titleMatch = content.match(/Title:\s*(.+)/);
        const promptMatch = content.match(/Prompt:\s*"(.+)"/) || content.match(/Prompt:\s*(.+)/);

        return {
            title: titleMatch ? titleMatch[1] : "Daily Intelligence Protocol",
            text: promptMatch ? promptMatch[1] : content // Fallback to full text if parse fails
        };

    } catch (error) {
        console.error("Groq Generation Error:", error);
        return {
            title: "Analyze Clinical Patterns",
            text: '"Analyze the provided patient history for subtle patterns indicating rare autoimmune conditions. Cross-reference symptoms with the latest rheumatology guidelines."'
        };
    }
};
