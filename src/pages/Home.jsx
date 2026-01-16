import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Brain, Film, ArrowRight, Activity, Cpu, Users, Rocket } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import SEO from '../components/SEO';
import brainImage from '../assets/hero-brain.png';

export default function Home() {
    return (
        <>
            <SEO
                title="Home"
                description="Grey Matter. Illuminated. The profound intuition of the biological mind. The infinite scale of the artificial. United."
            />
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Gradient & Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-blue-900/50 z-10" />
                    <img
                        src={brainImage}
                        alt="AI Brain Mesh"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-20 pt-20">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl font-heading font-black text-white leading-tight mb-8"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Grey Matter.</span> <br />
                            <span className="text-gold">Illuminated.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed"
                        >
                            The profound intuition of the biological mind. <br className="hidden md:block" />
                            The infinite scale of the artificial. <span className="text-white font-medium">United.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/academy" className="btn btn-primary text-lg px-8 py-4">
                                Begin the Synthesis <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/lab" className="btn btn-secondary text-lg px-8 py-4 border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                                Enter The Lab
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <div className="bg-gray-100 border-b border-gray-200 py-6">
                <div className="container flex-center">
                    <p className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-wider text-center">
                        Trusted by 500+ Doctors | Read on Medium | Top Voice in AI
                    </p>
                </div>
            </div>

            {/* The Intelligence Dock - Refined Cognition Rail */}
            <section className="bg-white border-b border-gray-100 py-12">
                <div className="container">
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col xl:flex-row">

                        {/* Zone A: The Core Message (Anchor) */}
                        <div className="xl:w-[28%] p-8 lg:p-10 border-b xl:border-b-0 xl:border-r border-gray-800 bg-gray-900 flex flex-col justify-between relative group min-h-[200px]">
                            {/* Top Row: Label & Action */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                                    Academy
                                </span>
                                <Link to="/academy" className="text-[10px] font-bold text-white/70 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider">
                                    View Schedule <ArrowRight size={12} />
                                </Link>
                            </div>

                            {/* Middle: Headline */}
                            <div className="mb-6">
                                <h2 className="text-3xl font-medium text-white tracking-tight leading-none mb-4">
                                    Sync with the<br /><span className="text-gray-500">Future.</span>
                                </h2>
                            </div>

                            {/* Bottom: The Explainer */}
                            <div>
                                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
                                    Unlock the infinite potential of valid creativity. We bridge biological intuition with computational scale to realize the full spectrum of human potential.
                                </p>
                            </div>
                        </div>

                        {/* Zone B: The Pathways (Expanded Grid) */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-y md:divide-y-0 divide-x divide-gray-800 bg-gray-900 border-t xl:border-t-0 border-gray-800">

                            {/* Module 1: Institutional */}
                            <Link to="/academy" className="group relative p-6 hover:bg-gray-800 transition-colors flex flex-col justify-between overflow-hidden min-h-[16rem]">
                                <div className="h-8 flex items-center">
                                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest opacity-80 z-10 w-full">
                                        Institutional
                                    </span>
                                </div>
                                {/* Watermark Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <Activity size={96} strokeWidth={0.5} className="text-gray-300 -translate-y-6" />
                                </div>
                                <div className="z-10 mt-auto w-full">
                                    <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors leading-tight mb-2 min-h-[2.5rem] flex items-end">
                                        Medical<br />Colleges
                                    </h3>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                        Faculty Curriculum
                                    </p>
                                </div>
                            </Link>

                            {/* Module 2: Community */}
                            <Link to="/academy" className="group relative p-6 hover:bg-gray-800 transition-colors flex flex-col justify-between overflow-hidden min-h-[16rem]">
                                <div className="h-8 flex items-center">
                                    <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest opacity-80 z-10 w-full">
                                        Community
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <Users size={96} strokeWidth={0.5} className="text-gray-300 -translate-y-6" />
                                </div>
                                <div className="z-10 mt-auto w-full">
                                    <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors leading-tight mb-2 min-h-[2.5rem] flex items-end">
                                        Professional<br />Groups
                                    </h3>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                        For Busy Practitioners
                                    </p>
                                </div>
                            </Link>

                            {/* Module 3: Express */}
                            <Link to="/academy" className="group relative p-6 hover:bg-gray-800 transition-colors flex flex-col justify-between overflow-hidden min-h-[16rem]">
                                <div className="h-8 flex items-center">
                                    <span className="text-[9px] font-bold text-purple-500 uppercase tracking-widest opacity-80 z-10 w-full">
                                        Sprint
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <Cpu size={96} strokeWidth={0.5} className="text-gray-300 -translate-y-6" />
                                </div>
                                <div className="z-10 mt-auto w-full">
                                    <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors leading-tight mb-2 min-h-[2.5rem] flex items-end">
                                        GenAI<br />Express
                                    </h3>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                        2-Week Mastery
                                    </p>
                                </div>
                            </Link>

                            {/* Module 4: Venture */}
                            <Link to="/academy" className="group relative p-6 hover:bg-gray-800 transition-colors flex flex-col justify-between overflow-hidden min-h-[16rem]">
                                <div className="h-8 flex items-center">
                                    <span className="text-[9px] font-bold text-gold uppercase tracking-widest opacity-80 z-10 w-full">
                                        Venture
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <Rocket size={96} strokeWidth={0.5} className="text-gray-300 -translate-y-6" />
                                </div>
                                <div className="z-10 mt-auto w-full">
                                    <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight mb-2 min-h-[2.5rem] flex items-end">
                                        Phy-Sci-<br />Entrepreneur
                                    </h3>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                        No-Code Incubator
                                    </p>
                                </div>
                            </Link>

                            {/* Module 5: Soul */}
                            <Link to="/soul" className="group relative p-6 hover:bg-gray-800 transition-colors flex flex-col justify-between overflow-hidden min-h-[16rem]">
                                <div className="h-8 flex items-center">
                                    <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest opacity-80 z-10 w-full">
                                        Spirit
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <Brain size={96} strokeWidth={0.5} className="text-gray-300 -translate-y-6" />
                                </div>
                                <div className="z-10 mt-auto w-full">
                                    <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors leading-tight mb-2 min-h-[2.5rem] flex items-end">
                                        Ancient<br />Wisdom
                                    </h3>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                        Cognitive Peace
                                    </p>
                                </div>
                            </Link>

                            {/* Module 6: Lens */}
                            <Link to="/lens" className="group relative p-6 hover:bg-gray-800 transition-colors flex flex-col justify-between overflow-hidden min-h-[16rem]">
                                <div className="h-8 flex items-center">
                                    <span className="text-[9px] font-bold text-pink-500 uppercase tracking-widest opacity-80 z-10 w-full">
                                        Creative
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <Film size={96} strokeWidth={0.5} className="text-gray-300 -translate-y-6" />
                                </div>
                                <div className="z-10 mt-auto w-full">
                                    <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors leading-tight mb-2 min-h-[2.5rem] flex items-end">
                                        Lens &<br />Cinema
                                    </h3>
                                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                        The Art of AI
                                    </p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* The 3 Faculties */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold mb-4">The Structure of Intelligence</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Three faculties designed to upgrade every aspect of your professional and personal cognition.
                        </p>
                    </div>

                    <div className="grid-3">
                        <FeatureCard
                            to="/clinical-ai"
                            icon={Stethoscope}
                            title="The Unbound Practice"
                            text="Medicine has been defined by human limitations. No longer. We harness advanced foundation models to uncover limitless clinical opportunities. Redefining the very nature of care."
                            delay={0.1}
                        />
                        <FeatureCard
                            to="/soul"
                            icon={Brain}
                            title="Wisdom Decoded"
                            text="Ancient wisdom is a dataset of immense complexity. We use computational scale to validate the Vedic through the scientific, revealing the hidden architecture of peace."
                            delay={0.2}
                        />
                        <FeatureCard
                            to="/lens"
                            icon={Film}
                            title="Creativity Inferred"
                            text="We observe art. AI sees it. We use algorithms to scientifically decipher the invisible structures of creativity—inferring the logic behind the masterpiece."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Insight / Newsletter Teaser could go here */}
        </>
    );
}
