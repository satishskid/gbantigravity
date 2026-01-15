export const handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { message } = JSON.parse(event.body);

        if (!message) {
            return { statusCode: 400, body: "Message text is required" };
        }

        // --- CONFIGURATION ---
        // Ideally move these to Netlify Environment Variables (Settings > Build & Deploy > Environment)
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8481638448:AAFcm73d2xZoNtjY7tVYjBOMX3Qv0tGga-s";
        const CHAT_ID = process.env.TELEGRAM_CHANNEL_ID || "-1002968786854";
        // ---------------------

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML" // Allows bold/italic in updates
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.description);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, result: data.result }),
        };

    } catch (error) {
        console.error("Telegram Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
