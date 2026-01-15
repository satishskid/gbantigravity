import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Brain, Send, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SOCIAL_URLS, PLATFORM_URLS } from '../constants';

const NavLink = ({ to, children, mobile = false, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseClasses = mobile
    ? "block py-3 px-4 text-lg font-medium transition-colors"
    : "relative px-3 py-2 font-medium transition-colors hover:text-tech";

  const activeClasses = mobile
    ? "text-tech bg-blue-50"
    : "text-tech";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${isActive ? activeClasses : 'text-gray-600'}`}
      onClick={onClick}
    >
      {children}
      {!mobile && isActive && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-tech"
        />
      )}
    </Link>
  );
};

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container flex-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-tech rounded-xl flex-center text-white">
              <Brain size={24} />
            </div>
            <span className={`text-xl font-bold font-heading ${isScrolled ? 'text-text' : 'text-text'}`}>
              GreyBrain.ai
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/clinical-ai">ClinicalAI</NavLink>
            <NavLink to="/soul">Soul</NavLink>
            <NavLink to="/lens">Lens</NavLink>
            <NavLink to="/academy">Academy</NavLink>

            {/* Social Icons in Header */}
            <div className="flex items-center gap-3 ml-2 border-l border-gray-200 pl-6">
              <a href={SOCIAL_URLS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#229ED9] transition-colors">
                <Send size={20} />
              </a>
              <a href={SOCIAL_URLS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>

            <a href={PLATFORM_URLS.LEAD_CAPTURE} target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-2 px-6 py-2 text-sm">
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl p-4 pt-24 md:hidden flex flex-col"
            >
              <NavLink to="/" mobile onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/clinical-ai" mobile onClick={() => setMobileMenuOpen(false)}>ClinicalAI</NavLink>
              <NavLink to="/soul" mobile onClick={() => setMobileMenuOpen(false)}>Soul</NavLink>
              <NavLink to="/lens" mobile onClick={() => setMobileMenuOpen(false)}>Lens</NavLink>
              <NavLink to="/academy" mobile onClick={() => setMobileMenuOpen(false)}>Academy</NavLink>

              <div className="flex items-center gap-4 px-4 py-3 border-t border-gray-100 mt-2">
                <a href={SOCIAL_URLS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#229ED9]">
                  <Send size={24} />
                </a>
                <a href={SOCIAL_URLS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#25D366]">
                  <MessageCircle size={24} />
                </a>
              </div>

              <a href={PLATFORM_URLS.LEAD_CAPTURE} target="_blank" rel="noopener noreferrer" className="block py-3 px-4 text-lg font-medium transition-colors text-gray-600" onClick={() => setMobileMenuOpen(false)}>Subscribe</a>
            </motion.div>
          )}
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Brain className="text-tech" />
              <span className="font-heading font-bold text-xl">GreyBrain.ai</span>
            </div>
            <p className="text-gray-400 italic">"Where Grey Matter Meets AI"</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href={SOCIAL_URLS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#229ED9] transition-colors"><Send size={18} /></a>
              <a href={SOCIAL_URLS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors"><MessageCircle size={18} /></a>
              <div className="w-px h-4 bg-gray-700 mx-2"></div>
              <a href={PLATFORM_URLS.LMS} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">AI School</a>
              <a href={SOCIAL_URLS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
              <a href={SOCIAL_URLS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href={SOCIAL_URLS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2025 GreyBrain.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
