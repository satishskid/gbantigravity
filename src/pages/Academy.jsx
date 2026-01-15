import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Rocket, Users, Star, Mail, Send, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import medicalAiImg from '../assets/course_medical_ai.png';
import physcipreneurImg from '../assets/course_physcipreneur.png';
import spiritualAiImg from '../assets/course_spiritual_ai.png';

const FeatureList = ({ items, color = "text-gray-900" }) => (
    <div className="space-y-3 my-6">
        {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <div className={`mt-0.5 p-0.5 rounded-full bg-white border border-gray-100 shadow-sm ${color.replace('text-', 'text-opacity-80 text-')}`}>
                    <Check className="w-3 h-3" />
                </div>
                <span className="leading-snug">{item}</span>
            </div>
        ))}
    </div>
);

export default function Academy() {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-gray-900 selection:text-white">
            <SEO title="Academy" description="The School of Applied Intelligence. Cognition, Upgraded." />

            {/* Jony Ive Style Hero: Clean, Essential, Inevitable */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                            Grey Matter. Illuminated.
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-heading font-semibold text-gray-900 tracking-tight mb-8">
                            Cognition,<br />
                            <span className="text-gray-400">Upgraded.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                            The profound intuition of the biological mind.
                            <br className="hidden md:block" />
                            The infinite scale of the artificial. <span className="text-gray-900 font-medium">United.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Subtle Ambient Light - "The Glow" */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gray-100 to-transparent opacity-50 blur-3xl pointer-events-none -z-10" />
            </section>

            {/* Main Content Area */}
            <section className="pb-32">
                <div className="container max-w-6xl mx-auto px-6">

                    {/* SECTION 1: WORKSHOPS (The Foundation) */}
                    <div className="mb-32">
                        {/* Inviting "Why" Text */}
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block py-1 px-3 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">
                                The Professional Imperative
                            </span>
                            <h3 className="text-3xl font-heading font-medium text-gray-900 mb-6">
                                The landscape of expertise is shifting.
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We are entering an era of <strong>Limitless Opportunity</strong> for those who adapt.
                                It is not about replacement; it is about extending your reach.
                                These workshops are designed to upgrade your professional operating system—subtly, securely, and scientifically.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Med Schools - Card Refined */}
                            <div className="group bg-[#F9FAFB] rounded-[2rem] p-10 border border-gray-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Users size={120} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-1">GenAI for Medicos</h3>
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Institutional Edition</div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Empower the next generation. A single-day immersion for medical students and faculty into the anatomy of LLMs.
                                    </p>

                                    <FeatureList items={[
                                        "Anatomy & Physiology of LLMs",
                                        "AI for Learning & Campus Analytics",
                                        "Deep Research & Paper Writing"
                                    ]} color="text-blue-600" />

                                    <a href={`${EMAIL_CONTACT}?subject=Inquiry: GenAI for Medschools`} className="mt-6 inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        <span className="border-b border-gray-300 pb-0.5 group-hover:border-blue-600">Inquire for Institution</span>
                                        <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Doctors Communities - Card Refined */}
                            <div className="group bg-[#F9FAFB] rounded-[2rem] p-10 border border-gray-100 hover:border-green-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Zap size={120} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-1">GenAI for Doctors</h3>
                                    <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-6">Community Edition</div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        For specialty networks and associations. Enable confident, safe adoption in daily clinical workflows.
                                    </p>

                                    <FeatureList items={[
                                        "Clinical Workflow Integration",
                                        "Building Super-Agent Systems",
                                        "Automated Admin & Research Support"
                                    ]} color="text-green-600" />

                                    <a href={`${EMAIL_CONTACT}?subject=Inquiry: GenAI for Doctors Group`} className="mt-6 inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                        <span className="border-b border-gray-300 pb-0.5 group-hover:border-green-600">Inquire for Group</span>
                                        <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: FLAGSHIP COURSES (The Deep Dive) */}
                    <div className="space-y-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gray-200 flex-grow" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Flagship Programs</span>
                            <div className="h-px bg-gray-200 flex-grow" />
                        </div>

                        {/* GenAI Express */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden grid lg:grid-cols-2"
                        >
                            <div className="relative h-64 lg:h-auto overflow-hidden bg-gray-100 order-first lg:order-last">
                                <img src={medicalAiImg} alt="Abstract Medical AI" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 lg:to-transparent" />
                            </div>
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">Running Now</span>
                                    <span className="text-sm font-medium text-gray-400">2 Weeks • Cohort Based</span>
                                </div>
                                <h3 className="text-4xl font-heading font-bold text-gray-900 mb-4">GenAI Express</h3>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                    Transform your medical practice. Master the anatomy of LLMs, build super-agents for document creation, and strengthen your academic output. The essential bridge between medicine and machine.
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="text-blue-600 font-bold mb-1">01. Anatomy</div>
                                        <div className="text-xs text-gray-500">Core concepts & behavior</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="text-blue-600 font-bold mb-1">02. Super Agents</div>
                                        <div className="text-xs text-gray-500">Deep research summaries</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="text-blue-600 font-bold mb-1">03. Research</div>
                                        <div className="text-xs text-gray-500">Literature reviews & drafting</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="text-blue-600 font-bold mb-1">04. Capstone</div>
                                        <div className="text-xs text-gray-500">Real-world application</div>
                                    </div>
                                </div>

                                <a href={PLATFORM_URLS.LMS} target="_blank" rel="noopener noreferrer" className="btn bg-gray-900 text-white w-full md:w-auto self-start justify-center px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-black transition-all">
                                    View Schedule & Enroll
                                </a>
                            </div>
                        </motion.div>

                        {/* PhyScipreneur */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gray-900 rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden grid lg:grid-cols-2 text-white"
                        >
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-yellow-500/20 text-gold text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-500/30">Waitlist Open</span>
                                    <span className="text-sm font-medium text-gray-400">12 Weeks • MVP Builder</span>
                                </div>
                                <h3 className="text-4xl font-heading font-bold text-white mb-2">PhyScipreneur</h3>
                                <div className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-6">The Doctor's MBA</div>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    The "I² Formula": Individualisation × Industrialisation.
                                    An intensive program transforming clinical expertise into scalable ventures. We combine academic rigor with VC investment criteria to build the next generation of healthcare solutions.
                                </p>

                                <div className="space-y-3 mb-10">
                                    {["Identifying & Validating Clinical Needs", "Business & Financial Modeling", "The M³ Engine: Men, Machine, Money"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="https://t.me/greybrainsoai" target="_blank" rel="noopener noreferrer" className="btn bg-gray-800 text-white w-full md:w-auto justify-center px-6 py-4 rounded-xl hover:bg-gray-700 transition-all border border-gray-700">
                                        Join Community
                                    </a>
                                    <a href={LMS_URL} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-white w-full md:w-auto justify-center px-8 py-4 rounded-xl hover:bg-yellow-500 shadow-lg hover:shadow-gold/20 transition-all border-none">
                                        Join the Waitlist
                                    </a>
                                </div>
                            </div>
                            <div className="relative h-64 lg:h-auto overflow-hidden bg-black">
                                <img src={physcipreneurImg} alt="Medical Entrepreneurship DNA" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Spiritual Health */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFF8F0] rounded-[2rem] border border-orange-100 shadow-xl overflow-hidden grid lg:grid-cols-2"
                        >
                            <div className="relative h-64 lg:h-auto overflow-hidden bg-orange-50 order-first">
                                <img src={spiritualAiImg} alt="Digital Lotus" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FFF8F0]/30 lg:to-transparent" />
                            </div>
                            <div className="p-10 lg:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider rounded-full">Coming Soon</span>
                                </div>
                                <h3 className="text-4xl font-heading font-bold text-gray-900 mb-4">Spiritual Health</h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">
                                    "Master Ancient Wisdom with AI-Powered Vedanta."
                                </p>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Explore the profound teachings with <strong>Professor Arya</strong> - your contemplative AI guide.
                                    This course uses <strong>VedVision</strong>, our proprietary tool, to bridge ancient wisdom with modern science.
                                    Align your dopamine with your Dharma.
                                </p>

                                <a href={LMS_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white border border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-200 px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all self-start">
                                    Notify Me
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Voice of the Community</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">Created By Doctors, For Doctors.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                            <div className="text-gold text-4xl font-serif absolute top-4 left-6">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 pt-4 italic">
                                Worth it. This course helped me discover a new world of AI tools. Preparing patient materials is now simple, and I can give clear instructions for technical projects.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">AK</div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Dr. Aditya Kulkarni</div>
                                    <div className="text-xs text-gray-500">Consultant Chief Hepatology<br />Narayana Health SRCC</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                            <div className="text-gold text-4xl font-serif absolute top-4 left-6">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 pt-4 italic">
                                The 'No-Code' approach is real. It slashed my documentation time, letting me spend those reclaimed moments back with my patients. A true productivity boost.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">UB</div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Dr. Utkarsh Bhagat</div>
                                    <div className="text-xs text-gray-500">Director, Neurosurgery<br />Narayana Superspeciality</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                            <div className="text-gold text-4xl font-serif absolute top-4 left-6">"</div>
                            <p className="text-gray-600 mb-6 relative z-10 pt-4 italic">
                                Finally, a bridge between medicine and technology that speaks our language. Gaining hands-on experience with real medical data was invaluable.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">AA</div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Dr. Aswin Asok</div>
                                    <div className="text-xs text-gray-500">Senior Drug Safety Physician<br />Soterius</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe / Notify Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-4xl mx-auto px-6">
                    <div className="bg-gray-900 rounded-[2.5rem] p-12 text-center relative overflow-hidden shadow-2xl">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Join the Neural Network.</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                                Get the latest course drops, industry updates, and research papers directly to your inbox.
                            </p>

                            <a
                                href={LMS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 btn bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold shadow-lg"
                            >
                                <Mail size={20} />
                                <span>Subscribe to Updates</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof / Stats */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold font-heading text-tech mb-2">3,000+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Students Enrolled</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold font-heading text-tech mb-2">50+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold font-heading text-tech mb-2">98%</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Completion Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold font-heading text-tech mb-2">4.9/5</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Student Rating</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
