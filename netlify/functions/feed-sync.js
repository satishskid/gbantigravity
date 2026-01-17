import Parser from 'rss-parser';

const parser = new Parser();

export const handler = async (event, context) => {
    // Only allow scheduled runs or manual POST for testing
    // Netlify scheduled functions are triggered via POST by default? No, they are just invoked.
    // But we can check for custom header or just run it.

    console.log("Starting Feed Sync...");

    try {
        // 1. Configuration
        const MEDIUM_RSS_URL = "https://medium.com/feed/@GreyBrainer"; // Corrected feed URL
        // Ensure these env vars are set in Netlify
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8481638448:AAFcm73d2xZoNtjY7tVYjBOMX3Qv0tGga-s";
        const CHAT_ID = process.env.TELEGRAM_CHANNEL_ID || "-1002968786854";

        if (!BOT_TOKEN || !CHAT_ID) {
            console.error("Missing Telegram Config");
            return { statusCode: 500, body: "Missing Config" };
        }

        // 2. Fetch RSS Feed
        const feed = await parser.parseURL(MEDIUM_RSS_URL);
        console.log(`Fetched feed: ${feed.title}`);

        // 3. Filter New Posts (Last 65 minutes to cover hourly check with buffer)
        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - 65 * 60 * 1000);

        const newPosts = feed.items.filter(item => {
            const pubDate = new Date(item.pubDate);
            return pubDate > oneHourAgo;
        });

        console.log(`Found ${newPosts.length} new posts.`);

        if (newPosts.length === 0) {
            return { statusCode: 200, body: "No new posts to sync." };
        }

        // 4. Send to Telegram
        for (const post of newPosts) {
            const message = `<b>New Article on GreyBrain Lens</b>\n\n<a href="${post.link}">${post.title}</a>\n\n${post.contentSnippet ? post.contentSnippet.substring(0, 150) + "..." : ""}\n\nRead more: ${post.link}`;

            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "HTML"
                }),
            });

            console.log(`Sent post: ${post.title}`);
        }

        return { statusCode: 200, body: `Synced ${newPosts.length} posts.` };

    } catch (error) {
        console.error("Feed Sync Error:", error);
        return { statusCode: 500, body: error.message };
    }
};
