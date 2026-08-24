const SITE_ORIGIN = 'https://www.winvnint.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WINVN INT CO., LTD',
  alternateName: 'Coffee Wood Chew by WINVN',
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
  image: `${SITE_ORIGIN}/images/hero-main.jpg`,
  description: "WINVN turns discarded coffee wood from Vietnam's Central Highlands into natural, sustainable dog chews, exported to over 40 countries.",
  foundingLocation: {
    '@type': 'Place',
    name: 'Tay Nguyen, Vietnam'
  },
  founder: {
    '@type': 'Person',
    name: 'Ton That Nhat Cam'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '70 Street 10, Van Phuc Urban Area',
    addressLocality: 'Ho Chi Minh City',
    addressCountry: 'VN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'Sale@winvnint.com',
    contactType: 'sales',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Vietnamese']
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61581148330861',
    'https://www.youtube.com/@CoffeeWoodChew',
    'https://www.linkedin.com/in/coffee-wood-chew-winvn-int-co-ltd-1b9323394/'
  ]
};

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

interface SchemaProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
}

export function buildProductListSchema(products: SchemaProduct[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        category: p.category,
        description: p.description,
        image: p.images[0] ? `${SITE_ORIGIN}${p.images[0]}` : undefined,
        brand: {
          '@type': 'Brand',
          name: 'WINVN Coffee Wood Chew'
        },
        url: `${SITE_ORIGIN}/products`
      }
    }))
  };
}

interface SchemaBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  dateISO: string;
}

export function buildBlogPostingSchema(post: SchemaBlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_ORIGIN}${post.coverImage}`,
    author: {
      '@type': 'Organization',
      name: 'WINVN INT CO., LTD'
    },
    publisher: {
      '@type': 'Organization',
      name: 'WINVN INT CO., LTD',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.png`
      }
    },
    datePublished: post.dateISO,
    mainEntityOfPage: `${SITE_ORIGIN}/blog/${post.slug}`
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`
    }))
  };
}
