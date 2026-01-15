import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_IMAGE = "https://greybrain.ai/og-default.jpg"; // Replace with actual hosted OG image URL later
const SITE_URL = "https://greybrain.ai";

export default function SEO({ title, description, image, type = "website" }) {
    const location = useLocation();
    const fullTitle = `${title} | GreyBrain.ai`;
    const fullUrl = `${SITE_URL}${location.pathname}`;
    const metaDesc = description || "Upgrade Your Biological Intelligence with Artificial Intelligence. The premier school for Clinical AI and Consciousness.";
    const metaImage = image || DEFAULT_IMAGE;

    useEffect(() => {
        // 1. Title
        document.title = fullTitle;

        // 2. Helper to set meta tags
        const setMeta = (name, content, attr = 'name') => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // 3. Standard Meta
        setMeta('description', metaDesc);
        setMeta('canonical', fullUrl, 'rel'); // For Link tag actually, but let's keep it simple for meta logic

        // 4. Open Graph (Facebook/LinkedIn/WhatsApp)
        setMeta('og:type', type, 'property');
        setMeta('og:title', fullTitle, 'property');
        setMeta('og:description', metaDesc, 'property');
        setMeta('og:image', metaImage, 'property');
        setMeta('og:url', fullUrl, 'property');
        setMeta('og:site_name', 'GreyBrain.ai', 'property');

        // 5. Twitter Card
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', fullTitle);
        setMeta('twitter:description', metaDesc);
        setMeta('twitter:image', metaImage);

        // Scroll to top
        window.scrollTo(0, 0);
    }, [title, description, image, fullTitle, fullUrl, metaDesc, metaImage, type]);

    return null;
}
