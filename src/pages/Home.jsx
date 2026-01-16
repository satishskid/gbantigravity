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
                    <div className="bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
                        {/* Abstract BG Shape */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                        <div className="relative z-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gold mb-3">
                                    Academy Highlights
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-medium text-white">
                                    Ongoing Programs
                                </h2>
                            </div>
                            <Link to="/academy" className="btn bg-white text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all whitespace-nowrap font-bold flex items-center self-start md:self-auto group text-sm">
                                View Full Schedule <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* GenAI Institute */}
                            <div className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Institutional</div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">GenAI Institute</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Curriculum for Medical Colleges. Equipping students & faculty with essential AI literacy.
                                </p>
                            </div>

                            {/* Community Edition */}
                            <div className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
                                <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Professional Groups</div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors">Community Edition</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Tailored workshops for busy practitioners to safely integrate AI into daily practice.
                                </p>
                            </div>

                            {/* GenAI Express */}
                            <div className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">2-Week Sprint</div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">GenAI Express</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    The essential rapid-mastery program. Decode GenAI and build custom tools.
                                </p>
                            </div>

                            {/* PhyScipreneur */}
                            <div className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
                                <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">No-Code Startup</div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">PhyScipreneur</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    From Stethoscope to Start-up. Designed by Doctor-Scientists for Doctors.
                                </p>
                            </div>
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
