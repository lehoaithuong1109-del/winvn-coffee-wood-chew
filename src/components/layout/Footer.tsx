import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube, ExternalLink } from 'lucide-react';
import { navLinks } from '../../data/mockData';

const address = '70 Street 10, Van Phuc Urban Area, Ho Chi Minh City, Vietnam';
const mapLat = 10.8431371;
const mapLng = 106.7097682;
const mapsLink = 'https://maps.app.goo.gl/1xjZCZEsNRHyPQ5e8';

export default function Footer() {
  return (
    <footer className="bg-beige text-dark">
      <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="WINVN Coffee Wood Chew" className="w-9 h-9 rounded-full object-contain shrink-0"  loading="lazy" />
            <span className="flex flex-col leading-none gap-1">
              <span className="text-xl font-header font-bold text-coffee">Coffee Wood Chew</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-navy">By WINVN Int</span>
            </span>
          </Link>
          <ul className="space-y-3 text-base text-dark/65">
            <li className="flex gap-3 items-start">
              <Mail className="w-5 h-5 text-coffee shrink-0 mt-0.5" />
              info@winvnint.com
            </li>
            <li className="flex gap-3 items-start">
              <Phone className="w-5 h-5 text-coffee shrink-0 mt-0.5" />
              +84 123 456 789
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-coffee shrink-0 mt-0.5" />
              {address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-header text-xl font-bold mb-6">Explore</h3>
          <ul className="space-y-4 text-base text-dark/65">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-coffee transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-header text-xl font-bold mb-6">Get in Touch</h3>
          <div className="flex gap-3">
            <a href="mailto:Sale@winvnint.com" aria-label="Email" className="w-12 h-12 rounded-full border flex items-center justify-center hover:text-white transition-all text-accent-orange border-accent-orange/25 hover:bg-accent-orange hover:border-accent-orange">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/coffee-wood-chew-winvn-int-co-ltd-1b9323394/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full border flex items-center justify-center hover:text-white transition-all text-[#0A66C2] border-[#0A66C2]/25 hover:bg-[#0A66C2] hover:border-[#0A66C2]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61581148330861" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border flex items-center justify-center hover:text-white transition-all text-[#1877F2] border-[#1877F2]/25 hover:bg-[#1877F2] hover:border-[#1877F2]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@CoffeeWoodChew" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-full border flex items-center justify-center hover:text-white transition-all text-[#FF0000] border-[#FF0000]/25 hover:bg-[#FF0000] hover:border-[#FF0000]">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl overflow-hidden border border-dark/10 aspect-square">
            <iframe
              title="WINVN location map"
              src={`https://www.google.com/maps?q=${mapLat},${mapLng}&z=17&output=embed`}
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-coffee hover:underline"
          >
            Open in Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="bg-dark text-beige/50 py-5 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] uppercase tracking-widest text-center">
          <p>© {new Date().getFullYear()} Coffeewoodchew.com - WINVN INT CO.,LTD All Rights Reserved.</p>
          <p>Coffee Wood Chew Manufacturer | Viet Nam | B2B Wholesale</p>
        </div>
      </div>
    </footer>
  );
}
