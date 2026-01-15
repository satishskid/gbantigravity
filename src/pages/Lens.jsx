import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Loader } from 'lucide-react';
import SEO from '../components/SEO';
import { fetchMediumFeed } from '../utils/mediumService';

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

    useEffect(() => {
        const loadContent = async () => {
            const data = await fetchMediumFeed('https://medium.com/feed/@GreyBrainer');
            setArticles(data);
            setLoading(false);
        };
        loadContent();
    }, []);

    return (
        <div className="bg-black min-h-screen text-white pb-20">
            <SEO title="Lens" description="Decoding Culture. Psychoanalytic and sociological breakdowns of Indian Cinema." />
            <div className="container pt-20 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 max-w-2xl"
                >
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">GreyBrain Lens (@GreyBrainer)</h1>
                    <p className="text-xl text-gray-400">
                        Decoding Culture. An academic analysis of Indian Cinema and OTT through psychoanalytic and sociological frameworks.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader className="animate-spin text-white" size={32} />
                    </div>
                ) : articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((post, index) => (
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
