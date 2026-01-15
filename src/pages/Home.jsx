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

            {/* Ongoing Programs Section */}
            <section className="bg-white border-b border-gray-100 py-12">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gray-900 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
                        {/* Abstract BG Shape */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex-1">
                            <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">Ongoing Programs</span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg md:text-xl font-heading font-medium text-gray-200">
                                <span>GenAI Institute</span>
                                <span className="text-gray-600">•</span>
                                <span>Community Edition</span>
                                <span className="text-gray-600">•</span>
                                <span>GenAI Express</span>
                                <span className="text-gray-600">•</span>
                                <span>PhyScipreneur</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link to="/academy" className="btn bg-white text-gray-900 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all whitespace-nowrap font-bold flex items-center group">
                                View Academy Schedule <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
