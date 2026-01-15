import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FeatureCard({ title, icon: Icon, text, to, delay = 0 }) {
    return (
        <Link to={to} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -8 }}
                className="glass-panel p-8 h-full flex flex-col items-start gap-4 hover:border-blue-400/50 transition-colors group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="p-3 rounded-2xl bg-blue-50 text-tech group-hover:bg-tech group-hover:text-white transition-colors duration-300 z-10">
                    <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold font-heading group-hover:text-tech transition-colors z-10">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed z-10">
                    {text}
                </p>
            </motion.div>
        </Link>
    );
}
