import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Loader, Boxes, ExternalLink, Activity, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { fetchMediumFeed } from '../utils/mediumService';

const INNOVATIONS = [
    {
        name: "GreyWaken",
        desc: "Interactive GenAI learning companion focused on helping learners understand LLM fundamentals.",
        url: "https://greywaken.greybrain.in/greybrain",
        icon: Sparkles,
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        name: "Clinical AI Assist",
        desc: "Multi-model clinical assistant supporting differential diagnosis and research integration.",
        url: "https://aiassist.greybrain.ai/greybrain",
        icon: Activity,
        color: "text-blue-500",
        bg: "bg-blue-50"
    }
];

export default function Health() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    // NEW: State for Dynamic Hacks
    const [activePrompt, setActivePrompt] = useState(null);
    const [activeModel, setActiveModel] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            const data = await fetchMediumFeed('https://medium.com/feed/@GreyBrain');
            setArticles(data);

            // FIND THE LATEST HACK FROM BLOGS
            const latestWithPrompt = data.find(p => p.customPrompt);
            const latestWithModel = data.find(p => p.customModel);

            setActivePrompt(latestWithPrompt ? latestWithPrompt.customPrompt :
                "Act as a senior radiologist. I will provide an MRI report text. Simplify the findings into a 5th-grade reading level explanation...");

            setActiveModel(latestWithModel ? latestWithModel.customModel : "DeepSeek-R1 (Default)");

            setLoading(false);
        };
        loadContent();
    }, []);

    return (
        <div className="container py-12 md:py-20">
            <SEO title="ClinicalAI" description="AI model reviews, clinical innovations, and intelligent tools." />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content: Innovations & Feed */}
                <div className="lg:col-span-2 space-y-16">

                    {/* NEW: Innovations Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-gray-400 font-bold uppercase tracking-widest text-xs">
                            <Boxes size={16} /> GreyBrain Innovations
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Clinical Intelligence Suite</h2>

                        <div className="grid grid-cols-1 gap-4">
                            {INNOVATIONS.map((app, i) => (
                                <a
                                    key={i}
                                    href={app.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
                                >
                                    <div className={`p-3 rounded-lg mr-5 mt-1 ${app.bg} ${app.color}`}>
                                        <app.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                            {app.name}
                                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                            {app.desc}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.section>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Blog Feed Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold font-heading mb-6 text-gray-900">Research & Protocols</h2>
                        <div className="flex flex-col gap-4">
                            {loading ? (
                                <div className="flex justify-center py-10">
                                    <Loader className="animate-spin text-tech" size={24} />
                                </div>
                            ) : articles.length > 0 ? (
                                articles.map((post, index) => (
                                    <article key={index} className="group cursor-pointer hover:bg-gray-50 p-4 -mx-4 rounded-xl transition-colors">
                                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                                            <div className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
                                                {post.categories[0] || 'Protocol'} • {post.date}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm line-clamp-2">
                                                {post.preview}
                                            </p>
                                        </a>
                                    </article>
                                ))
                            ) : (
                                <div className="text-gray-400 text-sm italic">Loading stream...</div>
                            )}
                        </div>
                    </motion.section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="sticky top-28 space-y-6"
                    >
                        {/* DYNAMIC MODEL CARD */}
                        <div className="bg-[#0F172A] p-6 rounded-2xl shadow-xl border border-slate-700">
                            <div className="flex items-center gap-2 text-blue-400 mb-4 text-xs font-bold uppercase tracking-widest">
                                <Boxes size={16} /> Model of the Day
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{activeModel}</h3>
                            <div className="text-xs text-slate-400 mb-4">Trending on HuggingFace</div>
                            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>

                        {/* DYNAMIC PROMPT CARD */}
                        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-2 text-gold mb-4">
                                <Terminal size={20} />
                                <span className="font-bold uppercase tracking-wider text-xs">Today's Protocol</span>
                            </div>
                            <div className="font-mono text-xs bg-gray-800 p-4 rounded-lg mb-4 text-green-400 leading-relaxed border-l-2 border-green-500">
                                "{activePrompt}"
                            </div>
                            <button
                                onClick={() => navigator.clipboard.writeText(activePrompt)}
                                className="w-full btn bg-white text-gray-900 hover:bg-gray-100 font-bold text-xs py-3 uppercase tracking-wide"
                            >
                                Copy Prompt
                            </button>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-lg text-blue-900 mb-2">Build your own Tools?</h4>
                            <p className="text-blue-800/70 text-sm mb-4">
                                Join the 'No-Code AI Doctor' fellowship and learn how to build apps like these.
                            </p>
                            <Link to="/academy" className="block text-center bg-blue-600 text-white font-bold py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors">
                                Join Academy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
