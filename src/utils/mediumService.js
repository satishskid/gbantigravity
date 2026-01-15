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
export const extractMetadata = (content) => {
    // Look for content inside double square brackets
    const promptMatch = content.match(/\[\[PROMPT:\s*(.*?)\]\]/);
    const modelMatch = content.match(/\[\[MODEL:\s*(.*?)\]\]/);
    const soulMatch = content.match(/\[\[SOUL_HACK:\s*(.*?)\]\]/);

    return {
        prompt: promptMatch ? promptMatch[1] : null,
        model: modelMatch ? modelMatch[1] : null,
        soulHack: soulMatch ? soulMatch[1] : null
    };
};

export const fetchMediumFeed = async (feedUrl) => {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('Failed to fetch feed');
        }

        return data.items.map(item => {
            const metadata = extractMetadata(item.content); // Extract metadata
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
                // Attach extracted data
                customPrompt: metadata.prompt,
                customModel: metadata.model,
                customSoulHack: metadata.soulHack
            };
        });
    } catch (error) {
        console.error("Feed Error:", error);
        return [];
    }
};
