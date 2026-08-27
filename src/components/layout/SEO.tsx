import { Head } from 'vite-react-ssg';

const SITE_ORIGIN = 'https://winvn-coffee-wood-chew.vercel.app';
const DEFAULT_IMAGE = '/images/hero-main.jpg';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  schema?: object | object[];
  /** Set true for thin/redirect-only routes (e.g. legacy "/about") so they never get indexed. */
  noindex?: boolean;
  /** Overrides the canonical URL — use this on redirect pages to point crawlers at the real destination. */
  canonicalPath?: string;
}

export default function SEO({
  title = 'WINVN - Premium Coffee Wood Chew | B2B Pet Products',
  description = 'WINVN is a leading manufacturer of natural coffee wood dog chews in Vietnam. High-quality OEM, wholesale, and private label solutions for pet brands worldwide.',
  keywords = 'coffee wood chew, dog chew, natural pet products, B2B pet supply, Vietnam wood manufacturer, OEM pet products',
  image = DEFAULT_IMAGE,
  path = '/',
  schema,
  noindex = false,
  canonicalPath
}: SEOProps) {
  const url = `${SITE_ORIGIN}${path}`;
  const canonicalUrl = `${SITE_ORIGIN}${canonicalPath ?? path}`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE_ORIGIN}${image}`;
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WINVN Coffee Wood Chew" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImage} />

      {schemaList.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Head>
  );
}
