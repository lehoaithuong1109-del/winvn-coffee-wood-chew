import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SEO from '../components/layout/SEO';
import InquiryForm from '../components/sections/InquiryForm';
import { buildBreadcrumbSchema } from '../data/schema';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-beige min-h-screen">
      <SEO
        title="Contact WINVN | Request Samples & Quotations"
        description="Contact WINVN's international sales team for OEM inquiries, wholesale pricing, free samples, and catalogue downloads. Response within 24 hours."
        path="/contact"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ])}
      />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Get in Touch</span>
              <h1 className="text-5xl md:text-7xl font-header font-bold text-dark leading-tight">
                Let's Start a <br />
                <span className="text-coffee italic">Conversation.</span>
              </h1>
              <p className="text-lg text-dark/70 leading-relaxed max-w-md">
                Interested in OEM, wholesale, or samples? Our international sales team is ready to provide you with tailored solutions.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', val: 'info@winvnint.com' },
                { icon: Phone, label: 'Call Us', val: '+84 123 456 789' },
                { icon: MessageCircle, label: 'WhatsApp', val: '+84 123 456 789' },
                { icon: MapPin, label: 'Visit Us', val: 'Ho Chi Minh City, Vietnam' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-coffee shadow-sm border border-dark/5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-dark/65">{item.label}</p>
                    <p className="text-xl font-header font-bold text-dark">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-dark/5 space-y-8"
          >
            <h2 className="text-3xl font-header font-bold text-dark">Send an Inquiry</h2>
            <InquiryForm />
            <p className="text-[10px] text-center text-dark/65 uppercase tracking-widest">Typical response time: <span className="text-coffee font-bold">Within 24 hours</span></p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
