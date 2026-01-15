import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Feather, Sun, Loader, ExternalLink, Sparkles, Wind } from 'lucide-react';
import SEO from '../components/SEO';
import { fetchMediumFeed } from '../utils/mediumService';

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

    useEffect(() => {
        const loadContent = async () => {
            const data = await fetchMediumFeed('https://medium.com/feed/@Sage_AI');
            setArticles(data);

            // FIND LATEST SOUL HACK
            const latestHack = data.find(p => p.customSoulHack);
            setActiveHack(latestHack ? latestHack.customSoulHack :
                "Inhale for 4 seconds. Hold for 7 seconds. Exhale for 8 seconds. This resets your cortisol baseline.");

            setLoading(false);
        };
        loadContent();
    }, []);

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            <SEO title="Soul" description="The Science of Purpose. Neuroscience meets Vedic Wisdom." />
            <div className="max-w-4xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Sun className="mx-auto text-gold mb-6 w-12 h-12" />
                    <h1 className="text-5xl font-heading font-light text-gray-800 mb-6">GreyBrain Soul (@Sage_AI)</h1>
                    <p className="text-xl text-gray-500 font-light italic">
                        "The mind is a wonderful servant, but a terrible master."
                    </p>
                </motion.div>

                {/* Soul Innovations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    {SOUL_APPS.map((app, i) => (
                        <a
                            key={i}
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
                        >
                            <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${app.bg} ${app.color}`}>
                                <app.icon size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-medium text-gray-800 mb-3 flex items-center justify-center gap-2 group-hover:text-amber-600 transition-colors">
                                {app.name}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                {app.desc}
                            </p>
                        </a>
                    ))}
                </motion.div>

                {/* NEW: Daily Soul Hack Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 }}
                    className="bg-amber-50 border border-amber-100 rounded-2xl p-8 mb-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Feather size={120} className="text-amber-900" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 text-amber-700 font-bold uppercase tracking-widest text-xs mb-4">
                            <Sparkles size={14} /> Daily Soul Hack
                        </div>
                        <h3 className="text-2xl font-heading font-light text-amber-900 mb-4 italic">
                            "{activeHack}"
                        </h3>
                        <button
                            onClick={() => navigator.clipboard.writeText(activeHack)}
                            className="text-xs font-bold text-amber-600 hover:text-amber-800 uppercase tracking-wide border-b border-amber-300 pb-1"
                        >
                            Save Mantra
                        </button>
                    </div>
                </motion.div>

                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Research Protocols</span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-16"
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
                                {index < articles.length - 1 && <hr className="border-gray-200 mt-16" />}
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-400 italic">
                            Meditating on new content...
                        </div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 p-8 bg-white border border-gray-100 rounded-2xl text-center shadow-sm"
                >
                    <Feather className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-2xl font-heading mb-2">Seek Stillness</h3>
                    <p className="text-gray-500 mb-6">Find your balance in the "Scientific Search for Peace" Protocol.</p>
                    <Link to="/academy" className="btn btn-gold px-8 bg-opacity-20 text-yellow-900 hover:bg-opacity-30">
                        View Protocol
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
