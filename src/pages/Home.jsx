import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Brain, Film, ArrowRight, Activity, Cpu } from 'lucide-react';
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

            {/* The Intelligence Dock - Jony Ive Style */}
            <section className="bg-white border-b border-gray-100 py-12">
                <div className="container">
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                        {/* Zone A: The Anchor (Purpose) */}
                        <div className="lg:w-[30%] p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-800 bg-gray-900 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <ArrowRight className="text-white w-6 h-6 -rotate-45" />
                            </div>

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase block mb-3">
                                        Academy
                                    </span>
                                    <h2 className="text-2xl font-medium text-white tracking-tight leading-snug">
                                        Sync with the<br /><span className="text-gray-400">Future.</span>
                                    </h2>
                                </div>
                                <div className="mt-8">
                                    <Link to="/academy" className="text-xs font-bold text-white border-b border-gray-600 pb-1 hover:border-white transition-colors inline-flex items-center gap-2">
                                        View Full Schedule
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Zone B: The Pathways (Grid) */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-800 bg-gray-900">

                            {/* Module 1: Institutional */}
                            <Link to="/academy" className="group p-8 hover:bg-gray-800 transition-colors flex flex-col justify-center min-h-[140px]">
                                <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-2 opacity-80">
                                    Medical Colleges
                                </span>
                                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                    Institutional
                                </h3>
                                <div className="h-0 group-hover:h-4 overflow-hidden transition-all duration-300">
                                    <p className="text-[10px] text-gray-400 pt-1">Student & Faculty Curriculum</p>
                                </div>
                            </Link>

                            {/* Module 2: Community */}
                            <Link to="/academy" className="group p-8 hover:bg-gray-800 transition-colors flex flex-col justify-center min-h-[140px]">
                                <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest mb-2 opacity-80">
                                    Associations
                                </span>
                                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                    Community
                                </h3>
                                <div className="h-0 group-hover:h-4 overflow-hidden transition-all duration-300">
                                    <p className="text-[10px] text-gray-400 pt-1">Practitioner Workshops</p>
                                </div>
                            </Link>

                            {/* Module 3: Express */}
                            <Link to="/academy" className="group p-8 hover:bg-gray-800 transition-colors flex flex-col justify-center min-h-[140px]">
                                <span className="text-[9px] font-bold text-purple-500 uppercase tracking-widest mb-2 opacity-80">
                                    Sprint: 2 Weeks
                                </span>
                                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                    GenAI Express
                                </h3>
                                <div className="h-0 group-hover:h-4 overflow-hidden transition-all duration-300">
                                    <p className="text-[10px] text-gray-400 pt-1">Rapid Mastery Program</p>
                                </div>
                            </Link>

                            {/* Module 4: Venture */}
                            <Link to="/academy" className="group p-8 hover:bg-gray-800 transition-colors flex flex-col justify-center min-h-[140px]">
                                <span className="text-[9px] font-bold text-gold uppercase tracking-widest mb-2 opacity-80">
                                    Venture
                                </span>
                                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                    PhyScipreneur
                                </h3>
                                <div className="h-0 group-hover:h-4 overflow-hidden transition-all duration-300">
                                    <p className="text-[10px] text-gray-400 pt-1">No-Code Startup Incubator</p>
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
