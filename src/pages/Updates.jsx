import { motion } from 'framer-motion';
import { Send, MessageCircle, Newspaper, ArrowRight, Brain, Sparkles, Activity, Eye, Zap } from 'lucide-react';
import { SOCIAL_URLS } from '../constants';

const UpdateCard = ({ title, description, icon: Icon, actionText, actionLink, color, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
        >
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-${color}-500`}>
                <Icon size={120} />
            </div>

            <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex-center mb-4 text-${color}-500`}>
                    <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold font-heading mb-2">{title}</h3>
                <p className="text-gray-600 mb-6 min-h-[48px]">{description}</p>

                <a
                    href={actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-${color}-600 font-semibold group-hover:gap-3 transition-all`}
                >
                    {actionText} <ArrowRight size={18} />
                </a>
            </div>
        </motion.div>
    );
};

export default function Updates() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6"
                    >
                        <Zap size={16} /> Centralized Intelligence Feed
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Stay plugged into the <span className="text-gradient">Future</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose your preferred channel to receive daily insights on Clinical AI, Soul AI, and Deep Research. One click to join.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <UpdateCard
                        title="Clinical AI & Lens"
                        description="Daily updates on medical AI breakthroughs, research summaries, and industry news."
                        icon={Activity}
                        actionText="Join Telegram Channel"
                        actionLink={SOCIAL_URLS.TELEGRAM}
                        color="blue"
                        delay={0.1}
                    />

                    <UpdateCard
                        title="Soul AI & Community"
                        description="Discussions, philosophy, and community updates directly on WhatsApp."
                        icon={Sparkles}
                        actionText="Join WhatsApp Channel"
                        actionLink={SOCIAL_URLS.WHATSAPP}
                        color="green"
                        delay={0.2}
                    />

                    <UpdateCard
                        title="Deep Dives & Articles"
                        description="Long-form articles, whitepapers, and detailed analysis on Medium."
                        icon={Newspaper}
                        actionText="Read on Medium"
                        actionLink="https://medium.com/@GreyBrainer"
                        color="purple"
                        delay={0.3}
                    />

                    <UpdateCard
                        title="Visual Intelligence"
                        description="Infographics, short-form video content, and visual summaries."
                        icon={Eye}
                        actionText="Follow on Instagram"
                        actionLink={SOCIAL_URLS.INSTAGRAM}
                        color="pink"
                        delay={0.4}
                    />
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center text-gray-500 text-sm"
                >
                    <p>Powered by GreyBrain Automation Engine</p>
                </motion.div>

            </div>
        </div>
    );
}
