import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Feather, Sun, Loader, ExternalLink, Sparkles, Wind, Download, Share2, MessageCircle, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { fetchMediumFeed } from '../utils/mediumService';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { QRCodeSVG } from 'qrcode.react';

const SOUL_APPS = [
    {
        name: "SageAI – ConsciousAI",
        desc: "Scholarly platform pairing Upanishadic wisdom with psychological insights, guided by your AI companion SageAI.",
        url: "https://sageai.greybrain.in/introgreybrain",
        icon: Sparkles,
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        name: "RESPIRA",
        desc: "Voice-activated AI breathing coach for daily well-being, with real-time coaching and circadian rhythm protocols.",
        url: "https://aispira.netlify.app/greybrain",
        icon: Wind,
        color: "text-sky-500",
        bg: "bg-sky-50"
    }
];

export default function Soul() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    // NEW: State for Dynamic Soul Hack
    const [activeHack, setActiveHack] = useState(null);
    const [activeHackLink, setActiveHackLink] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const loadContent = async () => {
            const data = await fetchMediumFeed('https://medium.com/feed/@Sage_AI');
            setArticles(data);

            // FIND LATEST SOUL HACK
            const latestHack = data.find(p => p.customSoulHack);
            if (latestHack && latestHack.customSoulHack) {
                setActiveHack(latestHack.customSoulHack);
                setActiveHackLink(latestHack.link);
            } else {
                setActiveHack("Inhale for 4 seconds. Hold for 7 seconds. Exhale for 8 seconds. This resets your cortisol baseline.");
                setActiveHackLink("https://medium.com/@Sage_AI"); // Fallback
            }

            setLoading(false);
        };
        loadContent();
    }, []);

    const handleDownloadCard = async () => {
        if (cardRef.current === null) {
            return;
        }

        try {
            // Temporarily make the hidden card visible for capture (logic handled by CSS normally, but ensuring it renders)
            const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 3 });
            download(dataUrl, 'GreyBrain-Soul-Hack.png');
        } catch (err) {
            console.error('Failed to generate image', err);
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: 'GreyBrain Soul Hack',
            text: `"${activeHack}" - via GreyBrain Soul\n\nRead full protocol:`,
            url: activeHackLink || window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
            alert('Soul Hack with Link copied to clipboard!');
        }
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            <SEO title="Soul" description="The Science of Purpose. Neuroscience meets Vedic Wisdom." />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 border-b border-gray-200 pb-8"
                >
                    <div className="flex flex-col items-center mb-6">
                        <Sun className="text-gold w-12 h-12 mb-4" />
                        <h1 className="text-5xl font-heading font-light text-gray-800 text-center">GreyBrain Soul <span className="text-gray-400 text-3xl">(@Sage_AI)</span></h1>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-4">
                        <p className="text-xl text-gray-500 font-light italic max-w-2xl text-center lg:text-left">
                            "The mind is a wonderful servant, but a terrible master."
                        </p>

                        {/* Subtle Growth Channels */}
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest hidden sm:block">Join Life:</span>
                            <a
                                href="https://whatsapp.com/channel/0029Vb76Sl0ISTkTIjJX330N"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-[#25D366] hover:text-[#25D366] text-gray-500 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                            >
                                <MessageCircle size={14} /> WhatsApp
                            </a>
                            <a
                                href="https://t.me/greybrainlife"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-[#0088cc] hover:text-[#0088cc] text-gray-500 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                            >
                                <Send size={14} /> Telegram
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content (2/3) */}
                    <div className="lg:col-span-2">
                        {/* Daily Soul Hack Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25 }}
                            className="bg-amber-50 border border-amber-100 rounded-2xl p-8 mb-12 text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Feather size={120} className="text-amber-900" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-amber-700 font-bold uppercase tracking-widest text-xs mb-4">
                                    <Sparkles size={14} /> Daily Soul Hack
                                </div>
                                <h3 className="text-2xl font-heading font-light text-amber-900 mb-8 italic">
                                    "{activeHack}"
                                </h3>

                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={handleDownloadCard}
                                        className="flex items-center gap-2 px-4 py-2 bg-white border border-amber-200 rounded-full text-xs font-bold text-amber-700 hover:bg-amber-100 transition-colors uppercase tracking-wide shadow-sm"
                                    >
                                        <Download size={14} /> Save Card
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-xs font-bold text-amber-800 hover:bg-amber-200 transition-colors uppercase tracking-wide shadow-sm"
                                    >
                                        <Share2 size={14} /> Share
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Research Protocols (Blog Feed) */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Research Protocols</span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-12"
                        >
                            {loading ? (
                                <div className="flex justify-center">
                                    <Loader className="animate-spin text-gray-300" />
                                </div>
                            ) : articles.length > 0 ? (
                                articles.map((post, index) => (
                                    <div key={index}>
                                        <section>
                                            <span className="block text-xs font-bold tracking-widest text-gold mb-3 uppercase">
                                                Protocol {String(articles.length - index).padStart(3, '0')}
                                            </span>
                                            <h2 className="text-3xl font-heading text-gray-900 mb-6">{post.title}</h2>
                                            <div className="prose prose-lg prose-gray">
                                                <p className="mb-4 text-gray-600">
                                                    {post.preview}
                                                </p>
                                            </div>
                                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-amber-600 hover:text-amber-700 font-medium">
                                                Read Full Protocol →
                                            </a>
                                        </section>
                                        {index < articles.length - 1 && <hr className="border-gray-200 mt-12" />}
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-400 italic">
                                    Meditating on new content...
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Sidebar Apps (1/3) */}
                    <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 lg:self-start h-fit">


                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px bg-gray-200 flex-1 lg:hidden"></div>
                            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Tools</span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        {SOUL_APPS.map((app, i) => (
                            <a
                                key={i}
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-amber-100 transition-all"
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${app.bg} ${app.color}`}>
                                    <app.icon size={24} />
                                </div>
                                <h3 className="text-lg font-heading font-medium text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                                    {app.name}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    {app.desc}
                                </p>
                            </a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 p-6 bg-white border border-gray-100 rounded-2xl text-center shadow-sm"
                        >
                            <Feather className="mx-auto text-gray-400 mb-4" size={24} />
                            <h3 className="text-lg font-heading mb-2">Seek Stillness</h3>
                            <p className="text-gray-500 text-sm mb-4">Find your balance in the "Scientific Search for Peace" Protocol.</p>
                            <Link to="/academy" className="btn btn-gold px-6 py-2 text-sm bg-opacity-20 text-yellow-900 hover:bg-opacity-30 inline-block w-full">
                                View Protocol
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
