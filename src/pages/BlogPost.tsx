import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/layout/SEO';
import ContactCTA from '../components/sections/ContactCTA';
import { blogPosts, getBlogPostBySlug } from '../data/blogPosts';
import { buildBlogPostingSchema, buildBreadcrumbSchema } from '../data/schema';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug ?? '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-32 pb-24 bg-beige min-h-screen">
      <SEO
        title={`${post.title} | WINVN Blog`}
        description={post.excerpt}
        image={post.coverImage}
        path={`/blog/${post.slug}`}
        schema={[
          buildBlogPostingSchema(post),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` }
          ])
        ]}
      />

      <div className="section-container max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-coffee hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="space-y-4 mb-8">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent-orange bg-accent-orange/[0.04] px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-header font-bold text-dark leading-tight">
            {post.title}
          </h1>
          <p className="text-xs font-bold text-dark/65 uppercase tracking-widest">
            {post.author} · {post.date} · {post.readTime}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2.5rem] overflow-hidden aspect-[16/9] bg-white mb-10"
        >
          <img src={post.coverImage} alt={post.title} fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
        </motion.div>

        <article className="space-y-6">
          {post.content.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="text-2xl font-header font-bold text-dark pt-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={i} className="space-y-2 pl-1">
                  {block.items?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-coffee shrink-0 mt-2.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-dark/70 leading-relaxed text-lg">
                {block.text}
              </p>
            );
          })}
        </article>
      </div>

      {related.length > 0 && (
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-header font-bold text-dark mb-8">More from the Journal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                  <div className="bg-white rounded-[2rem] border border-dark/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                    <div className="aspect-[16/9] overflow-hidden bg-beige">
                      <img src={p.coverImage} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="p-6 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-coffee">{p.category}</span>
                      <h4 className="text-lg font-header font-bold text-dark leading-snug group-hover:text-coffee transition-colors">
                        {p.title}
                      </h4>
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-coffee pt-1">
                        Read more
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <ContactCTA />
    </div>
  );
}
