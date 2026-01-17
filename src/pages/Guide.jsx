import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Activity, Sun, Database, BookOpen, ArrowRight, Zap, Terminal } from 'lucide-react';
import SEO from '../components/SEO';

const FeatureCard = ({ icon: Icon, title, desc, link, linkText, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
    >
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-400 group-hover:text-tech transition-colors">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {desc}
        </p>
        <Link to={link} className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-tech transition-colors">
            {linkText} <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
    </motion.div>
);

export default function Guide() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-gray-200 selection:text-gray-900 pb-20">
            <SEO title="The Protocol" description="The Operator's Manual for the GreyBrain Intelligence System." />

            {/* Hero Section */}
            <section className="pt-32 pb-20 container max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
                        <Terminal size={12} /> System Manual
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-semibold text-gray-900 tracking-tight mb-8">
                        The GreyBrain<br />
                        <span className="text-gray-400">Protocol.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                        This is not just a website. It is a <span className="text-gray-900 font-medium">Daily Intelligence System</span>.
                        Here is how to operate it for maximum cognitive augmentation.
                    </p>
                </motion.div>
            </section>

            {/* Core Systems Grid */}
            <section className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                <FeatureCard
                    icon={Activity}
                    title="Clinical Intelligence"
                    desc="Your daily morning round. Access AI diagnostic tools, read the latest automated research feeds, and find specific medical LLM reviews."
                    link="/clinical-ai"
                    linkText="Enter Clinical Suite"
                    delay={0.1}
                />
                <FeatureCard
                    icon={Sun}
                    title="Soul & Purpose"
                    desc="The antidote to burnout. Visit daily for a new 'Soul Hack' — a specific micro-practice or mantra to reset your nervous system."
                    link="/soul"
                    linkText="Visit Soul"
                    delay={0.2}
                />
                <FeatureCard
                    icon={Database}
                    title="The Lab"
                    desc="The central newsroom. Aggregates signals from all departments. Check the 'Daily Prompt' widget for ready-to-use GenAI commands."
                    link="/lab"
                    linkText="View The Lab"
                    delay={0.3}
                />
                <FeatureCard
                    icon={BookOpen}
                    title="Lens Narrative"
                    desc="Deep reading for complex times. A daily briefing that connects the dots between technology, biology, and society."
                    link="/lens"
                    linkText="Read Lens"
                    delay={0.4}
                />
                <FeatureCard
                    icon={Brain}
                    title="The Academy"
                    desc="Formal upgrades for your professional operating system. From 'GenAI for Medicos' to 'Spiritual Health'."
                    link="/academy"
                    linkText="Browse Courses"
                    delay={0.5}
                />
                <FeatureCard
                    icon={Zap}
                    title="Neural Link"
                    desc="Don't miss a signal. Subscribe to our centralized feed to get these updates pushed directly to your Telegram or WhatsApp."
                    link="/updates"
                    linkText="Connect Now"
                    delay={0.6}
                />
            </section>

            {/* The Daily Routine - Timeline Style */}
            <section className="container max-w-3xl mx-auto px-6">
                <div className="bg-white rounded-[2rem] p-12 border border-gray-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8 relative z-10">Suggested Daily Routine</h2>

                    <div className="space-y-8 relative z-10 border-l-2 border-gray-100 pl-8 ml-3">
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded">08:00</span>
                            <h3 className="font-bold text-gray-900">Check The Lab</h3>
                            <p className="text-sm text-gray-500 mt-1">Grab the "Prompt of the Day" and apply it to your workflow.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 px-2 py-1 bg-gray-200 text-gray-600 text-[10px] font-bold rounded">13:00</span>
                            <h3 className="font-bold text-gray-900">Micro-Dose Wisdom</h3>
                            <p className="text-sm text-gray-500 mt-1">Visit /soul for a 2-minute "Soul Hack" breathing exercise.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 px-2 py-1 bg-gray-200 text-gray-600 text-[10px] font-bold rounded">20:00</span>
                            <h3 className="font-bold text-gray-900">Deep Read</h3>
                            <p className="text-sm text-gray-500 mt-1">End the day with the Lens Narrative or a research paper.</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                        <p className="text-gray-400 italic mb-6">"Consistency is the code."</p>
                        <Link to="/" className="btn bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-black transition-all">
                            Initiate Sequence
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
