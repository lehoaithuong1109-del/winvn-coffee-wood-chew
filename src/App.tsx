import type { RouteRecord } from 'vite-react-ssg';
import Layout from './Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import OEMService from './pages/OEMService';
import Manufacturing from './pages/Manufacturing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Redirect from './pages/Redirect';
import { blogPosts } from './data/blogPosts';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: Products },
      { path: 'oem', Component: OEMService },
      { path: 'manufacturing', Component: Manufacturing },
      { path: 'about', Component: () => <Redirect to="/manufacturing" /> },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`)
      },
      { path: '*', Component: () => <Redirect to="/" /> }
    ]
  }
];
