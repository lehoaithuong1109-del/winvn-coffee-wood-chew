import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Linkedin, Facebook, Youtube } from 'lucide-react';
import { cn } from '../../lib/utils';
import { navLinks } from '../../data/mockData';
import { useSampleModal } from '../../context/SampleModalContext';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:Sale@winvnint.com',
    label: 'Email',
    colorClasses: 'text-accent-orange border-accent-orange/25 hover:bg-accent-orange hover:border-accent-orange'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/coffee-wood-chew-winvn-int-co-ltd-1b9323394/',
    label: 'LinkedIn',
    colorClasses: 'text-[#0A66C2] border-[#0A66C2]/25 hover:bg-[#0A66C2] hover:border-[#0A66C2]'
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61581148330861',
    label: 'Facebook',
    colorClasses: 'text-[#1877F2] border-[#1877F2]/25 hover:bg-[#1877F2] hover:border-[#1877F2]'
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@CoffeeWoodChew',
    label: 'YouTube',
    colorClasses: 'text-[#FF0000] border-[#FF0000]/25 hover:bg-[#FF0000] hover:border-[#FF0000]'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openSampleModal } = useSampleModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass-nav py-3' : 'bg-beige/60 backdrop-blur-sm'
      )}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="WINVN Coffee Wood Chew" className="w-9 h-9 rounded-full object-contain shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-header font-bold tracking-tight text-coffee">
              Coffee Wood Chew
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-navy">
              By WINVN
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'hover-lift text-base font-medium tracking-wide relative py-1 inline-block',
                location.pathname === link.path ? 'text-coffee' : 'text-dark/80 hover:text-coffee'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-coffee"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label, colorClasses }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={cn(
                  'w-8 h-8 rounded-full border flex items-center justify-center hover:text-white transition-all',
                  colorClasses
                )}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
          <button
            onClick={openSampleModal}
            className="hover-lift-btn bg-accent-orange text-white px-6 py-2.5 rounded-full text-sm font-bold"
          >
            Get Free Samples
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-beige border-b border-dark/5 p-6 flex flex-col gap-4 lg:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-medium py-2',
                  location.pathname === link.path ? 'text-coffee' : 'text-dark'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="bg-accent-orange text-white px-6 py-3 rounded-xl text-center font-bold mt-2"
              onClick={() => {
                setIsOpen(false);
                openSampleModal();
              }}
            >
              Get Free Samples
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
