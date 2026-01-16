export const extractImage = (content) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
};

export const extractPreview = (content, limit = 150) => {
    const text = content.replace(/<[^>]+>/g, '');
    return text.length > limit ? text.substring(0, limit) + '...' : text;
};

// NEW: Extract Special Metadata from Blog Content
// NEW: Extract Special Metadata from Blog Content
export const extractMetadata = (content) => {
    // Look for content inside double square brackets. 
    // Uses [\s\S]*? to match across newlines (for long prompts/narratives)
    const promptMatch = content.match(/\[\[PROMPT:\s*([\s\S]*?)\]\]/);
    const modelMatch = content.match(/\[\[MODEL:\s*([\s\S]*?)\]\]/);
    const soulMatch = content.match(/\[\[SOUL_HACK:\s*([\s\S]*?)\]\]/);
    const narrativeMatch = content.match(/\[\[LENS_NARRATIVE:\s*([\s\S]*?)\]\]/);

    return {
        prompt: promptMatch ? promptMatch[1].trim() : null,
        model: modelMatch ? modelMatch[1].trim() : null,
        soulHack: soulMatch ? soulMatch[1].trim() : null,
        narrative: narrativeMatch ? narrativeMatch[1].trim() : null
    };
};

const parseXMLFeed = (xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const items = Array.from(xmlDoc.querySelectorAll("item"));

    return items.map(item => {
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        // Content might be in <content:encoded> or just <description>
        const contentEncoded = item.getElementsByTagNameNS("*", "encoded")[0]?.textContent;
        const description = item.querySelector("description")?.textContent || "";
        const content = contentEncoded || description || "";
        const author = item.querySelector("creator")?.textContent || "";
        const categories = Array.from(item.querySelectorAll("category")).map(c => c.textContent);

        const metadata = extractMetadata(content);

        return {
            title,
            link,
            date: new Date(pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            thumbnail: extractImage(content),
            preview: extractPreview(content),
            categories,
            author,
            customPrompt: metadata.prompt,
            customModel: metadata.model,
            customSoulHack: metadata.soulHack,
            customNarrative: metadata.narrative
        };
    });
};

export const fetchMediumFeed = async (feedUrl) => {
    // Strategy 1: RSS2JSON (Best format)
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
        if (response.ok) {
            const data = await response.json();
            if (data.status === 'ok') {
                return data.items.map(item => {
                    const metadata = extractMetadata(item.content);
                    return {
                        title: item.title,
                        link: item.link,
                        date: new Date(item.pubDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        }),
                        thumbnail: item.thumbnail || extractImage(item.content),
                        preview: extractPreview(item.content),
                        categories: item.categories || [],
                        author: item.author,
                        customPrompt: metadata.prompt,
                        customModel: metadata.model,
                        customSoulHack: metadata.soulHack,
                        customNarrative: metadata.narrative
                    };
                });
            }
        }
        throw new Error('RSS2JSON Failed');
    } catch (err1) {
        console.warn("Primary feed fetch failed, switching to backup...", err1);

        // Strategy 2: Raw XML via CORS Proxy (Robust fallback)
        try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error('Proxy failed');

            const data = await response.json();
            if (!data.contents) throw new Error('No content in proxy');

            return parseXMLFeed(data.contents);

        } catch (err2) {
            console.error("All feed strategies failed:", err2);
            return [];
        }
    }
};
