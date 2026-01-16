import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Play, Info, Copy, Check, Terminal, Cpu } from 'lucide-react';
import SEO from '../components/SEO';
import { fetchMediumFeed } from '../utils/mediumService';
import { fetchTrendingModel, generateDailyPrompt } from '../services/intelligence';

// --- FEEDS ---
const FEED_CONFIG = [
    { name: 'The Clinical AI Protocol', url: 'https://medium.com/feed/@ClinicalAI', id: 'greybrain' },
    { name: 'Sage Intelligence', url: 'https://medium.com/feed/@Sage_AI', id: 'sage' },
    { name: 'he GreyBrainer Archives', url: 'https://medium.com/feed/@GreyBrainer', id: 'greybrainer' }
];

// --- COMPONENTS ---
const ArticleCard = ({ article }) => (
    <motion.a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, zIndex: 10 }}
        className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 relative rounded md:rounded-lg overflow-hidden cursor-pointer group snap-start"
    >
        <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white text-sm md:text-base font-bold leading-tight line-clamp-2 mb-1 group-hover:text-blue-400 transition-colors">
                {article.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{article.date}</span>
            </div>
        </div>
    </motion.a>
);

const ContentRail = ({ title, articles }) => {
    if (!articles || articles.length === 0) return null;
    return (
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {title} <ArrowRight className="text-blue-500 w-5 h-5 opacity-0 group-hover:opacity-100" />
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x px-1">
                {articles.map((article, i) => (
                    <ArticleCard key={i} article={article} />
                ))}
            </div>
        </div>
    );
};

const DailyPromptWidget = ({ data }) => {
    const [copied, setCopied] = useState(false);
    if (!data) return <div className="animate-pulse h-64 bg-gray-900 rounded-xl mb-8"></div>;

    const handleCopy = () => {
        navigator.clipboard.writeText(data.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6 mb-8 overflow-hidden relative group">
            <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-gold w-5 h-5" />
                <h3 className="text-gold font-bold text-sm tracking-wider uppercase">Today's DIY Prompt</h3>
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-800 font-mono text-sm text-gray-300 relative">
                <p className="whitespace-pre-wrap">{data.text}</p>
                <div className="absolute top-0 right-0 p-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold uppercase truncate max-w-[150px]">{data.title}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

const ModelSpotlightWidget = ({ data }) => {
    if (!data) return <div className="animate-pulse h-48 bg-gray-900 rounded-xl mb-8"></div>;

    return (
        <div className="bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-xl border border-blue-900/30 p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Cpu className="text-blue-400 w-5 h-5" />
                    <h3 className="text-blue-400 font-bold text-sm tracking-wider uppercase">Model of the Day</h3>
                </div>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 truncate max-w-[100px]">{data.tag}</span>
            </div>

            <h4 className="text-xl md:text-2xl font-bold font-heading text-white mb-2 truncate" title={data.name}>{data.name}</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                {data.desc}
            </p>

            <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors">
                View on HuggingFace <ArrowRight size={12} />
            </a>
        </div>
    );
};

export default function Lab() {
    const [feeds, setFeeds] = useState({ greybrain: [], sage: [], greybrainer: [] });
    const [heroArticle, setHeroArticle] = useState(null);
    const [dailyData, setDailyData] = useState({ prompt: null, model: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // 1. Fetch RSS Feeds using Robust Service
                const feedResults = await Promise.all(
                    FEED_CONFIG.map(async (feed) => {
                        const items = await fetchMediumFeed(feed.url);
                        return {
                            id: feed.id,
                            items: items || []
                        };
                    })
                );

                const newFeeds = {};
                let allArticles = [];

                feedResults.forEach(result => {
                    newFeeds[result.id] = result.items;
                    allArticles = [...allArticles, ...result.items];
                });

                // Sort purely by date to get the absolute latest across ALL channels
                allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

                const topArticle = allArticles.length > 0 ? allArticles[0] : null;
                setHeroArticle(topArticle);
                setFeeds(newFeeds);

                // 2. Fetch Aggregated Intelligence (Model + Prompt)
                const [trendingModel, generatedPrompt] = await Promise.all([
                    fetchTrendingModel(),
                    generateDailyPrompt(topArticle ? topArticle.title : 'AI in Healthcare')
                ]);

                setDailyData({
                    model: trendingModel,
                    prompt: generatedPrompt
                });

            } catch (error) {
                console.error("Error loading Lab content:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    return (
        <div className="bg-[#141414] min-h-screen text-white pb-20">
            <SEO title="The Lab" description="The GreyBrain Newsroom. Latest signals, analyses, and protocols." />

            {loading && (
                <div className="h-screen flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {!loading && heroArticle && (
                <>
                    {/* Hero Section */}
                    <div className="relative h-[70vh] w-full mb-12">
                        <div className="absolute inset-0">
                            <img
                                src={heroArticle.thumbnail}
                                alt="Hero"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-12">
                            <div className="container">
                                <div className="max-w-3xl">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded mb-4"
                                    >
                                        Latest Signal
                                    </motion.span>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-3xl md:text-6xl font-bold font-heading mb-4 leading-tight"
                                    >
                                        {heroArticle.title}
                                    </motion.h1>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-wrap gap-4 mt-8"
                                    >
                                        <a
                                            href={heroArticle.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn bg-white text-black hover:bg-gray-200 border-none px-6 py-3 flex items-center gap-2 font-bold"
                                        >
                                            <Play size={20} fill="currentColor" /> Read Analysis
                                        </a>
                                        <a
                                            href="/academy"
                                            className="btn bg-gray-600/50 hover:bg-gray-600/80 text-white border-none px-6 py-3 flex items-center gap-2 backdrop-blur-sm font-bold"
                                        >
                                            <Info size={20} /> Master This Protocol
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="container -mt-10 relative z-10 box-border">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Left: Feed Rails (2 Cols) */}
                            <div className="lg:col-span-2 space-y-8">
                                <ContentRail title="The GreyBrain Protocol" articles={feeds.greybrain} />
                                <ContentRail title="Sage Intelligence" articles={feeds.sage} />
                                <ContentRail title="The GreyBrainer Archives" articles={feeds.greybrainer} />
                            </div>

                            {/* Right: Sidebar Widgets (1 Col) */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24">
                                    <DailyPromptWidget data={dailyData.prompt} />
                                    <ModelSpotlightWidget data={dailyData.model} />

                                    <div className="mt-8 p-6 rounded-xl bg-gray-900 border border-gray-800 text-center">
                                        <h4 className="text-gray-400 font-bold mb-2">Join the Daily Signal</h4>
                                        <p className="text-xs text-gray-600 mb-4">Get these prompts delivered to WhatsApp.</p>
                                        <button className="w-full btn bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border-blue-600/30 text-sm">
                                            Subscribe to Channel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="container mt-20 text-center">
                <p className="text-gray-500 text-sm">Content streamed directly from our Neural Network (Medium)</p>
            </div>
        </div>
    );
}
