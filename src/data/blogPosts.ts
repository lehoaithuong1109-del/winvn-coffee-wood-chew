export interface BlogContentBlock {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  dateISO: string;
  readTime: string;
  coverImage: string;
  content: BlogContentBlock[];
}

export const blogCategories = ['Pet Care', 'Our Story', 'For Brands & Wholesalers'];

export const blogPosts: BlogPost[] = [
  {
    slug: 'are-coffee-wood-chews-safe-for-dogs',
    title: 'Are Coffee Wood Chews Safe for Dogs? What Every Pet Owner Should Know',
    excerpt: 'Coffee wood is caffeine-free, dense, and naturally splinter-resistant — but not every chew on the market is made the same way. Here is what actually makes a coffee wood chew safe.',
    category: 'Pet Care',
    author: 'WINVN Team',
    date: 'Aug 18, 2026',
    dateISO: '2026-08-18',
    readTime: '5 min read',
    coverImage: '/images/craft-quality.jpg',
    content: [
      {
        type: 'paragraph',
        text: "It's a fair question the first time you see a coffee wood chew: coffee wood, for a dog? The wood used in these chews comes from the trunks and branches of retired coffee trees — plants that no longer produce enough coffee cherries to be commercially viable, usually after about 20 years. By that point, the wood itself contains no caffeine; the compound is concentrated in the cherries and beans, not the woody trunk."
      },
      {
        type: 'heading',
        text: 'What makes coffee wood different from a random stick'
      },
      {
        type: 'paragraph',
        text: 'Coffee wood is naturally dense and hard, which is exactly why it holds up to determined chewers far longer than a soft branch picked up in the backyard. That same density is also what makes it splinter into small, blunt fragments rather than sharp shards when a dog gnaws through it — a meaningful safety difference compared to softer woods.'
      },
      {
        type: 'list',
        items: [
          'No caffeine — the trunk and branches are used, not the beans or cherries',
          'No chemicals, glue, or artificial flavoring added during processing',
          'Naturally dense, so it wears down slowly instead of splintering easily',
          'Sanded and smoothed on both ends to remove sharp edges before packing'
        ]
      },
      {
        type: 'heading',
        text: 'What to look for when sourcing or buying'
      },
      {
        type: 'paragraph',
        text: "Not every coffee wood chew on the market goes through the same process. At WINVN, every piece is sun-dried for about a week, precision-cut to size, hand-sanded on both ends, then machine-dried to under 12% moisture before it's vacuum-sealed. That moisture control matters — wood that's packed too damp is exactly what leads to mold during a long shipping journey."
      },
      {
        type: 'paragraph',
        text: 'As with any chew, supervise your dog the first few times, and replace the chew once it wears down small enough to be a choking risk. No natural chew — coffee wood included — is a substitute for basic supervision.'
      }
    ]
  },
  {
    slug: 'from-waste-to-value-coffee-wood-story',
    title: 'From Waste to Value: How Discarded Coffee Wood Becomes a Dog Chew',
    excerpt: "Every year, thousands of coffee trees in Vietnam's Central Highlands are cut down simply because they're too old to yield a good harvest. This is the story of what happens to that wood next.",
    category: 'Our Story',
    author: 'WINVN Team',
    date: 'Aug 10, 2026',
    dateISO: '2026-08-10',
    readTime: '4 min read',
    coverImage: '/images/process-sourcing.jpg',
    content: [
      {
        type: 'paragraph',
        text: "WINVN's founder, Ton That Nhat Cam, grew up in Tay Nguyen — Vietnam's coffee highlands, where coffee isn't just a crop, it's the region's way of life. Coffee trees support thousands of farming families, but after around 20 years their yield declines, and they're cut down and left behind."
      },
      {
        type: 'paragraph',
        text: 'That leftover wood used to just pile up. Looking at it going to waste, the question was simple: what could be made from it that would raise farmers\' income and create real value, instead of letting a useful material rot in a field?'
      },
      {
        type: 'heading',
        text: 'Years of trial and error'
      },
      {
        type: 'paragraph',
        text: "It took years of research, testing, and plenty of failed attempts before landing on a complete, ready-to-sell product — one dense enough to be a genuinely durable chew, and processed cleanly enough to be trusted by pet parents and international retailers alike."
      },
      {
        type: 'paragraph',
        text: 'What started as orders of just 2 to 30 sticks has grown into a company producing over 5 million pieces a year, exporting Coffee Wood Chews to more than 40 countries worldwide.'
      },
      {
        type: 'heading',
        text: 'Why this matters beyond the product'
      },
      {
        type: 'paragraph',
        text: "Every batch of Coffee Wood Chews is one more branch that didn't get burned or left to rot — and one more sale that puts money back into a farming community built around coffee. That's the second life we set out to give this wood in the first place."
      }
    ]
  },
  {
    slug: 'private-label-pet-chew-buyers-guide',
    title: "A Buyer's Guide to Private Label Pet Chews: MOQs, Packaging, and Lead Times",
    excerpt: 'Sourcing a private label pet chew for the first time? Here is what actually determines your cost, timeline, and minimum order — before you request a quote.',
    category: 'For Brands & Wholesalers',
    author: 'WINVN Team',
    date: 'Aug 1, 2026',
    dateISO: '2026-08-01',
    readTime: '6 min read',
    coverImage: '/images/service-packaging.jpg',
    content: [
      {
        type: 'paragraph',
        text: "Whether you're launching a new pet brand or adding a natural chew line to an existing catalog, sourcing decisions usually come down to three things: how many units you can realistically commit to, how the product will be packaged and branded, and how long it takes to land in your warehouse."
      },
      {
        type: 'heading',
        text: '1. Minimum order quantity (MOQ)'
      },
      {
        type: 'paragraph',
        text: "A flexible MOQ is what lets a new brand test a SKU without overcommitting. WINVN's OEM program starts from just 50 units for a first test order, then scales smoothly into bulk production of thousands of pieces once you've validated demand."
      },
      {
        type: 'heading',
        text: '2. Branding and packaging'
      },
      {
        type: 'list',
        items: [
          'Laser engraving of your logo directly onto the wood — permanent, no printing or stickers to peel',
          'Custom labels in kraft paper or eco-friendly cardboard, sized to your spec',
          'Packaging formats: vacuum-sealed bags, kraft paper bags, or cloth pouches',
          'Custom branded boxes — from bulk carton sets to single-piece gift boxes with barcode or QR printing'
        ]
      },
      {
        type: 'heading',
        text: '3. Lead time and shipping'
      },
      {
        type: 'paragraph',
        text: 'Because coffee wood needs to be sun-dried, cut, sanded, and machine-dried to under 12% moisture before packing, production timelines are longer than a simple print-and-ship product. Building that time into your launch calendar — and requesting a sample before committing to a bulk order — avoids surprises later.'
      },
      {
        type: 'paragraph',
        text: 'A good supplier will also hand you complete export documentation (phytosanitary certificate, certificate of origin, fumigation) so customs clearance on your end is a formality, not a bottleneck.'
      },
      {
        type: 'paragraph',
        text: "If you're ready to move from research to a real quote, our team can walk you through sizing, packaging options, and timelines for your specific order."
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
