import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/layout/SEO';
import ContactCTA from '../components/sections/ContactCTA';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { cn } from '../lib/utils';

const categories = ['All', ...blogCategories];

export default function Blog() {
  const [active, setActive] = useState('All');

  const [featured, ...rest] = blogPosts;
  const filteredRest = active === 'All' ? rest : rest.filter((p) => p.category === active);
  const showFeatured = active === 'All' || featured.category === active;

  return (
    <div className="pt-32 pb-24 bg-beige min-h-screen">
      <SEO
        title="Blog - Coffee Wood Chew Guides & Stories | WINVN"
        description="Guides on natural pet chews, our sustainability story from Vietnam's coffee highlands, and everything B2B buyers need to know about sourcing private label pet chews."
        path="/blog"
      />

      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Blog</span>
          <h1 className="text-5xl md:text-6xl font-header font-bold text-dark leading-tight">
            The WINVN <span className="text-accent-orange italic">Journal</span>
          </h1>
          <p className="text-dark/65 leading-relaxed">
            Guides on natural pet chews, our story from Vietnam's coffee highlands, and what B2B buyers need to know before sourcing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-bold transition-all duration-300',
                active === cat ? 'bg-accent-orange text-white shadow-lg' : 'bg-white text-dark/65 hover:bg-dark/5'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {showFeatured && (
          <Link to={`/blog/${featured.slug}`} className="block mb-14 group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] border border-dark/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-beige">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-widest text-accent-orange bg-accent-orange/[0.04] px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-header font-bold text-dark leading-snug group-hover:text-coffee transition-colors">
                  {featured.title}
                </h2>
                <p className="text-dark/65 leading-relaxed">{featured.excerpt}</p>
                <p className="text-xs font-bold text-dark/65 uppercase tracking-widest">
                  {featured.author} · {featured.date} · {featured.readTime}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-coffee">
                  Read the story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          </Link>
        )}

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredRest.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.06 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-[2rem] border border-dark/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-beige">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 space-y-3 flex-grow flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-coffee">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-header font-bold text-dark leading-snug group-hover:text-coffee transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-dark/65 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                      <p className="text-[11px] font-bold text-dark/65 uppercase tracking-widest pt-2">
                        {post.date} · {post.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRest.length === 0 && !showFeatured && (
          <p className="text-center text-dark/65 py-16">No posts in this category yet.</p>
        )}
      </div>

      <ContactCTA />
    </div>
  );
}
