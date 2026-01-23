import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Loader, ArrowRight, Film, Download, Share2, MessageCircle, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { fetchMediumFeed } from '../utils/mediumService';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { QRCodeSVG } from 'qrcode.react';

const MovieCard = ({ title, aspect, thumbnail, link, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        className="group relative aspect-[2/3] overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
        onClick={() => window.open(link, "_blank")}
    >
        {thumbnail ? (
            <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
        ) : (
            <div className={`absolute inset-0 bg-gray-800 opacity-50 transition-opacity group-hover:opacity-40`} />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-xs font-bold text-gold uppercase tracking-wider mb-2 block">{aspect}</span>
            <h3 className="text-2xl font-bold font-heading text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors line-clamp-2">{title}</h3>
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Click to read the full psychoanalytic breakdown.
                </p>
            </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
            <Play className="fill-white text-white ml-1" />
        </div>
    </motion.div>
);

export default function Lens() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    // NEW: State for Dynamic Narrative Object
    const [narrativePost, setNarrativePost] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const loadContent = async () => {
            const data = await fetchMediumFeed('https://medium.com/feed/@GreyBrainer');

            // FIND LATEST NARRATIVE
            const foundNarrative = data.find(p => p.customNarrative);
            setNarrativePost(foundNarrative);

            setArticles(data);
            setLoading(false);
        };
        loadContent();
    }, []);

    // Default Fallback Narrative if none found
    const activeText = narrativePost ? narrativePost.customNarrative :
        "🎬 Today's Morning Brief: Jan 15, 2026\n\n1. Most Popular (Mass Appeal & Binge-Watching)\nTaskaree: The Smuggler's Web (Netflix) is trending #1. A gritty procedural that balances star power with realism.\n\n2. Most Critiqued\nHaq (Netflix): A courtroom drama praised for performances but debated for legal accuracy.\n\n3. Social Topics\nThe 'Parasakthi' Controversy: A goldmine for 'Creative Liberty vs. Political History' analysis.";

    // Link for sharing
    const activeLink = narrativePost ? narrativePost.link : window.location.href;

    const handleDownloadCard = async () => {
        if (cardRef.current === null) {
            return;
        }

        try {
            const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 3 });
            download(dataUrl, 'GreyBrain-Lens-Brief.png');
        } catch (err) {
            console.error('Failed to generate image', err);
        }
    };

    const handleShare = async () => {
        const compactText = activeText
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(line => line.trim())
            .join('\n');

        const shareData = {
            title: 'GreyBrain Lens Brief',
            text: `"${compactText}"\n\n- Cultural Intelligence via GreyBrain Lens`,
            url: activeLink
        };

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
                alert('Briefing copied to clipboard! You can now paste it in Telegram/WhatsApp.');
            } catch (copyErr) {
                console.error('Clipboard failed', copyErr);
                alert('Unable to share automatically. Please manually copy the text.');
            }
        };

        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.log('Share API error, falling back to clipboard', err);
                    await copyToClipboard();
                }
            }
        } else {
            await copyToClipboard();
        }
    };

    return (
        <div className="bg-black min-h-screen text-white pb-20">
            <SEO title="Lens" description="Decoding Culture. Psychoanalytic and sociological breakdowns of Indian Cinema." />
            <div className="container pt-20 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-b border-zinc-800 pb-8"
                >
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white">GreyBrain Lens <span className="text-zinc-600 text-3xl">(@GreyBrainer)</span></h1>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Decoding Culture. An academic analysis of Indian Cinema and OTT through psychoanalytic and sociological frameworks.
                        </p>

                        {/* Subtle Growth Channels */}
                        <div className="flex items-center gap-4">
                            <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest hidden sm:block">Join Life:</span>
                            <a
                                href="https://whatsapp.com/channel/0029Vb76Sl0ISTkTIjJX330N"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-[#25D366] hover:text-[#25D366] text-zinc-400 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                            >
                                <MessageCircle size={14} /> WhatsApp
                            </a>
                            <a
                                href="https://t.me/greybrainlife"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-[#0088cc] hover:text-[#0088cc] text-zinc-400 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                            >
                                <Send size={14} /> Telegram
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* NEW: Ongoing Narrative Section (Premium Card) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-20 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Film size={200} className="text-red-600" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                    </span>
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Live Intelligence Briefing</span>
                                </div>
                                {narrativePost && (
                                    <a
                                        href={narrativePost.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-zinc-500 hover:text-red-400 transition-colors uppercase tracking-wide flex items-center gap-1"
                                    >
                                        Read on Medium <ArrowRight size={12} />
                                    </a>
                                )}
                            </div>

                            {/* Full Text Layout - Compact & Styled */}
                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-sans leading-relaxed text-sm md:text-base">
                                {(() => {
                                    // Parser for Compact Clinical Style
                                    const lines = activeText.split('\n').filter(line => line.trim() !== '');
                                    return lines.map((line, i) => {
                                        const trimmed = line.trim();

                                        // 1. Headers (bold, red, block for separation)
                                        if (trimmed.startsWith('*') || /^\d+\./.test(trimmed) || trimmed.startsWith('🎬')) {
                                            return (
                                                <span key={i} className="block font-bold text-red-500 mt-3 mb-1 uppercase tracking-wide text-xs">
                                                    {trimmed.replace(/^[\*\d\.]+\s*/, '')}
                                                </span>
                                            );
                                        }

                                        // 2. Titles (Italicize "Title (Platform):")
                                        if (trimmed.includes(':')) {
                                            const parts = trimmed.split(':');
                                            const title = parts[0];
                                            const rest = parts.slice(1).join(':');
                                            return (
                                                <span key={i} className="inline mr-2">
                                                    <span className="italic text-white font-medium">{title}:</span>
                                                    <span className="text-zinc-400">{rest}</span>
                                                </span>
                                            );
                                        }

                                        // 3. Regular Text
                                        return <span key={i} className="inline text-zinc-400 mr-2">{trimmed}</span>;
                                    });
                                })()}
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-6 border-t border-zinc-800/50 mt-2">
                            <button
                                onClick={handleDownloadCard}
                                className="px-5 py-2 bg-white text-black font-bold text-[10px] uppercase tracking-wide rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
                            >
                                <Download size={14} /> Save Brief
                            </button>
                            <button
                                onClick={handleShare}
                                className="px-5 py-2 bg-zinc-800 text-white font-bold text-[10px] uppercase tracking-wide rounded-md hover:bg-zinc-700 transition-colors flex items-center gap-2 border border-zinc-700"
                            >
                                <Share2 size={14} /> Share
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* HIDDEN CINEMATIC CARD */}
                <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
                    <div
                        ref={cardRef}
                        className="bg-black p-12 w-[600px] h-[750px] flex flex-col items-center justify-between border-8 border-zinc-900 relative overflow-hidden text-center"
                    >
                        {/* Film Grain / Red Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>

                        {/* Top Branding */}
                        <div className="relative z-10 w-full flex items-center justify-between border-b border-zinc-800 pb-6">
                            <div className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm">
                                GREYBRAIN.LENS
                            </div>
                            <div className="text-zinc-600 text-xs uppercase tracking-widest">
                                Cultural Intelligence
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 py-8 w-full text-left">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-red-600/10 text-red-500 text-[10px] font-bold uppercase tracking-widest border border-red-600/20 rounded">
                                    Latest Briefing
                                </span>
                            </div>
                            <div className="text-gray-200 text-lg leading-relaxed whitespace-pre-wrap font-sans">
                                {activeText}
                            </div>
                        </div>

                        {/* Footer / QR */}
                        <div className="relative z-10 w-full flex items-end justify-between mt-8 border-t border-zinc-800 pt-6">
                            <div className="text-left">
                                <p className="text-sm font-bold text-white uppercase tracking-wide">GreyBrain Lens</p>
                                <p className="text-xs text-zinc-500 mt-1">Reframing the Narrative</p>
                            </div>
                            <div className="bg-white p-2 rounded-lg">
                                <QRCodeSVG value={`https://greybrain.ai/lens`} size={80} level="M" />
                            </div>
                        </div>
                    </div>
                </div>



                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader className="animate-spin text-white" size={32} />
                    </div>
                ) : articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Filter OUT the narrative post so it doesn't appear twice */}
                        {articles
                            .filter(post => post !== narrativePost)
                            .map((post, index) => (
                                <MovieCard
                                    key={index}
                                    title={post.title}
                                    aspect={post.categories[0] || "Cultural Analysis"}
                                    thumbnail={post.thumbnail}
                                    link={post.link}
                                    delay={0.1 * index}
                                />
                            ))}
                    </div>
                ) : (
                    <div className="text-gray-500 text-center py-20">
                        No cinematic breakdowns found. Check back later.
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center border-t border-gray-800 pt-16"
                >
                    <h3 className="text-2xl font-heading mb-4">See what others miss.</h3>
                    <p className="text-gray-400 mb-8">Sharpen your critical thinking and cultural analysis skills in The Academy.</p>
                    <Link to="/academy" className="btn btn-primary px-8 py-3 bg-white text-black hover:bg-gray-200 border-none">
                        Enroll in Academy
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
