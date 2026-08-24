export const navLinks = [
  { name: 'Products', path: '/products' },
  { name: 'Service', path: '/oem' },
  { name: 'Manufacture', path: '/manufacturing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export const productCategories = ['Coffee Wood Chew', 'Coffee Wood Chew With Rope', 'Coffee Wood Chew With Cotton', 'Gorilla Wood Chew'];

const ropeShapes = [
  {
    id: 'horizontal',
    desc: 'A single coffee wood bar strung horizontally on rope — a compact, easy-to-grip chew for everyday play.',
    codes: { cotton: 'CC02', hemp: 'CC03' },
    names: { cotton: 'Coffee Wooden Pet Toys with Cotton', hemp: 'Coffee Wooden Pet Toys with Rope' },
    cottonSizes: [
      { label: 'S', detail: '7cm x 2.5-3cm · 25-35g' },
      { label: 'M', detail: '8cm x 3-3.5cm · 60-70g' },
      { label: 'L', detail: '9cm x 3.5-4cm · 90-110g' },
      { label: 'XL', detail: '10cm x 4-5cm · 130-170g' }
    ],
    hempSizes: [
      { label: 'S', detail: '7cm x 2.5-3cm · 25-35g' },
      { label: 'M', detail: '8cm x 3-3.5cm · 60-70g' },
      { label: 'L', detail: '9cm x 3.5-4cm · 90-110g' },
      { label: 'XL', detail: '10cm x 4-5cm · 130-170g' }
    ]
  },
  {
    id: 'vertical',
    desc: 'Coffee wood bites threaded vertically along the rope for a longer-lasting, multi-bite chewing experience.',
    codes: { cotton: 'CC04', hemp: 'CC05' },
    names: { cotton: 'Coffee Wooden Pet Toys with Cotton (Vertical)', hemp: 'Coffee Wooden Pet Toys with Rope (Vertical)' },
    cottonSizes: [
      { label: 'M', detail: '18-20cm x 3.5-4cm · 39-43g' },
      { label: 'L', detail: '20-22cm x 4-4.6cm · 63-69g' },
      { label: 'XL', detail: '20-22cm x 4.6-5cm · 98-108g' },
      { label: 'XXL', detail: '22-24cm x 5.6-7cm · 119-131g' }
    ],
    hempSizes: [
      { label: 'M', detail: '18-20cm x 3.5-4cm · 39-43g' },
      { label: 'L', detail: '20-22cm x 4-4.6cm · 63-69g' },
      { label: 'XL', detail: '20-22cm x 4.6-5.5cm · 98-108g' },
      { label: 'XXL', detail: '22-24cm x 5.6-7cm · 119-131g' }
    ]
  },
  {
    id: 'double-chew',
    desc: 'Two small wooden sticks connected by rope — double the chewing points for extended play sessions.',
    codes: { cotton: 'CC06', hemp: 'CC07' },
    names: { cotton: 'Double Coffee Wooden Pet Toys with Cotton', hemp: 'Double Coffee Wooden Pet Toys with Rope' },
    cottonSizes: [
      { label: 'M', detail: '28-30cm x 3.5-4cm · 64-70g' },
      { label: 'L', detail: '30-32cm x 4-4.5cm · 129-142g' },
      { label: 'XL', detail: '30-32cm x 4.6-5.5cm · 179-197g' },
      { label: 'XXL', detail: '34-35cm x 5.6-7cm · 248-273g' }
    ],
    hempSizes: [
      { label: 'M', detail: '28-30cm x 3.5-4cm · 64-70g' },
      { label: 'L', detail: '30-32cm x 4-4.5cm · 129-142g' },
      { label: 'XL', detail: '30-32cm x 4.6-5.5cm · 179-197g' },
      { label: 'XXL', detail: '34-35cm x 5.6-7cm · 248-273g' }
    ]
  },
  {
    id: 'double-rope',
    desc: 'A wood chew flanked by two rope ends — built for tug-of-war as much as solo chewing.',
    codes: { cotton: 'CC08', hemp: 'CC09' },
    names: { cotton: 'Coffee Wooden Pet Toys with Double Cottons', hemp: 'Coffee Wooden Pet Toys with Double Ropes' },
    cottonSizes: [
      { label: 'M', detail: '30-32cm x 3-4cm · 117-129g' },
      { label: 'L', detail: '34-35cm x 4-5cm · 204-224g' },
      { label: 'XL', detail: '36-38cm x 5-6cm · 317-349g' }
    ],
    hempSizes: [
      { label: 'M', detail: '30-32cm x 3-4cm · 117-129g' },
      { label: 'L', detail: '34-35cm x 4-5cm · 204-224g' },
      { label: 'XL', detail: '36-38cm x 5-6cm · 317-349g' }
    ]
  },
  {
    id: 'single-rope',
    desc: 'A coffee wood chew with a single rope end — simple, durable, and easy for pets to carry around.',
    codes: { cotton: 'CC10', hemp: 'CC11' },
    names: { cotton: 'Coffee Wooden Pet Toys with One-Ended Single Cotton', hemp: 'Coffee Wooden Pet Toys with One-Ended Single Rope' },
    cottonSizes: [
      { label: 'S', detail: '30-32cm x 2.2-2.6cm · 70-77g' },
      { label: 'M', detail: '32-34cm x 2.8-3.5cm · 104-114g' },
      { label: 'L', detail: '34-35cm x 3.8-4.5cm · 181-199g' },
      { label: 'XL', detail: '36-38cm x 4.6-5.5cm · 304-334g' }
    ],
    hempSizes: [
      { label: 'S', detail: '30-32cm x 2.2-2.6cm · 70-77g' },
      { label: 'M', detail: '32-34cm x 2.8-3.5cm · 104-114g' },
      { label: 'L', detail: '34-35cm x 3.8-4.5cm · 181-199g' },
      { label: 'XL', detail: '36-38cm x 4.6-5.5cm · 304-334g' }
    ]
  },
  {
    id: 'single-rope-handle',
    desc: 'Adds a looped rope handle to the single-ended design — easy for owners to hold during interactive play.',
    codes: { cotton: 'CC12', hemp: 'CC13' },
    names: { cotton: 'Coffee Wooden Pet Toys with One-Ended Single Cotton and Handle', hemp: 'Coffee Wooden Pet Toys with One-Ended Single Rope and Handle' },
    cottonSizes: [
      { label: 'S', detail: '40-42cm x 2.2-2.6cm · 81-89g' },
      { label: 'M', detail: '42-44cm x 2.8-3.5cm · 167-184g' },
      { label: 'L', detail: '44-46cm x 3.8-4.5cm · 238-262g' },
      { label: 'XL', detail: '46-48cm x 4.6-5.5cm · 367-404g' }
    ],
    hempSizes: [
      { label: 'S', detail: '40-42cm x 2.2-2.6cm · 81-89g' },
      { label: 'M', detail: '42-44cm x 2.8-3.5cm · 167-184g' },
      { label: 'L', detail: '44-46cm x 3.8-4.5cm · 238-262g' },
      { label: 'XL', detail: '46-48cm x 4.6-5.5cm · 367-404g' }
    ]
  },
  {
    id: 'single-rope-ball',
    desc: 'Combines a wood chew with a rope-mounted ball for extra fetch and tug appeal.',
    codes: { cotton: 'CC14', hemp: 'CC15' },
    names: { cotton: 'Coffee Wooden Pet Toys with Cotton and Ball', hemp: 'Coffee Wooden Pet Toys with Rope and Ball' },
    cottonSizes: [
      { label: 'L', detail: '27-28cm x 3.8-4.5cm · 175-193g' },
      { label: 'XL', detail: '29-30cm x 4.6-5.5cm · 265-292g' }
    ],
    hempSizes: [
      { label: 'L', detail: '27-28cm x 3.8-4.5cm · 175-193g' },
      { label: 'XL', detail: '29-30cm x 4.6-5.5cm · 265-292g' }
    ]
  }
];

const cottonBlurb = "Natural cotton fibers are safe and help clean between your dog's teeth — especially appealing for dogs who love cotton textures. Compatible with almost any dog.";
const hempBlurb = "Woven from 100% natural hemp and jute fiber with no added binders — the natural oils help clean teeth and reduce bad breath while pets chew.";
const ropePackaging = 'Vacuum-sealed with desiccant bags as standard; supports 1/2/3-piece bundle packs and custom kraft/paper boxes with barcode or QR printing.';

const cottonProducts = ropeShapes.map((shape) => ({
  id: `cotton-${shape.id}`,
  category: 'Coffee Wood Chew With Cotton',
  name: shape.names.cotton,
  code: shape.codes.cotton,
  description: `${shape.desc} ${cottonBlurb}`,
  features: ['100% Natural Coffee Wood', 'Natural Cotton Rope', 'Safe & Non-toxic', 'Cleans Teeth While Chewing'],
  sizes: shape.cottonSizes,
  packaging: ropePackaging,
  images: [`/images/product-cotton-${shape.id}.jpg`]
}));

const hempProducts = ropeShapes.map((shape) => ({
  id: `hemp-${shape.id}`,
  category: 'Coffee Wood Chew With Rope',
  name: shape.names.hemp,
  code: shape.codes.hemp,
  description: `${shape.desc} ${hempBlurb}`,
  features: ['100% Natural Coffee Wood', 'Natural Hemp & Jute Rope', 'Reduces Bad Breath', 'No Added Binders'],
  sizes: shape.hempSizes,
  packaging: ropePackaging,
  images: [`/images/product-hemp-${shape.id}.jpg`]
}));

export const products = [
  {
    id: 'coffee-wood-chew-basic',
    category: 'Coffee Wood Chew',
    name: 'Coffee Wood Chew',
    code: 'CC01',
    description: "WINVN's signature coffee wood chew, made from branches and trunks of long-term coffee wood in Gia Lai, Vietnam — meticulously processed and strictly tested. A basic product line manufactured and controlled across 6 sizes, suitable for all dog breeds.",
    features: ['100% Natural Coffee Wood', 'No Chemicals or Additives', 'Supports Oral Hygiene', '6 Sizes for All Breeds'],
    sizes: [
      { label: 'XS', detail: '10cm x 1.5-2cm · 23-30g' },
      { label: 'S', detail: '13-14cm x 2-2.5cm · 35-45g' },
      { label: 'M', detail: '17-18cm x 2.5-3.5cm · 90-110g' },
      { label: 'L', detail: '19-20cm x 3.5-4.5cm · 110-150g' },
      { label: 'XL', detail: '20-21cm x 4.5-5.5cm · 150-225g' },
      { label: 'XXL', detail: '21-22cm x 5.5-7cm · 325-450g' }
    ],
    packaging: 'Vacuum-sealed with desiccant bags as standard; supports 1/2/3-piece bundle packs and custom kraft/paper boxes with barcode or QR printing.',
    images: [
      '/images/product-coffee-wood-chew-1.jpg',
      '/images/product-coffee-wood-chew-2.jpg',
      '/images/product-coffee-wood-chew-3.jpg'
    ]
  },
  {
    id: 'gorilla-wood-chew',
    category: 'Gorilla Wood Chew',
    name: 'Gorilla Wood Chew',
    code: 'GRL',
    description: 'Made from the thick roots and large branches of long-term coffee wood in Gia Lai, Vietnam. An extra-dense chew for aggressive chewers, sized from S to XL to suit different dog breeds.',
    features: ['Ultra-Dense Wood', 'Built for Aggressive Chewers', 'Naturally Textured Grip', '100% Natural'],
    sizes: [
      { label: 'S', detail: '5-6cm x 8cm · 155-230g' },
      { label: 'M', detail: '6-8cm x 10cm · 260-350g' },
      { label: 'L', detail: '8-10cm x 12cm · 380-460g' },
      { label: 'XL', detail: '10-12cm x 15cm · 900-1100g' }
    ],
    packaging: 'Vacuum-sealed with desiccant bags as standard; custom kraft/paper box with barcode or QR printing available on request.',
    images: [
      '/images/product-gorilla-1.jpg',
      '/images/product-gorilla-2.jpg'
    ]
  },
  ...cottonProducts,
  ...hempProducts
];

export const heroCategories = [
  { title: 'Coffee Wood Chew', image: '/images/hero-cat-basic.jpg' },
  { title: 'Coffee Wood Chew With Rope', image: '/images/hero-cat-rope.jpg' },
  { title: 'Coffee Wood Chew With Cotton', image: '/images/hero-cat-cotton.jpg' },
  { title: 'Gorilla Wood Chew', image: '/images/hero-cat-gorilla.jpg' },
];

export const stats = [
  { label: 'Countries Exported', value: '40', suffix: '+' },
  { label: 'Global Partners', value: '1,000', suffix: '+' },
  { label: 'Products / Year', value: '5-6', suffix: 'M' },
  { label: 'Moisture Guaranteed', value: '<13', suffix: '%' },
];

export const challenges = [
  {
    title: 'Inconsistent quality',
    desc: 'Batches that vary wildly and damage your reviews.',
    icon: 'TriangleAlert',
    image: '/images/challenge-quality.jpg'
  },
  {
    title: 'High MOQs',
    desc: "Minimums so large you can't test new products.",
    icon: 'Boxes',
    image: '/images/challenge-moq.jpg'
  },
  {
    title: 'No private label',
    desc: 'Generic products that never stand out on the shelf.',
    icon: 'Tag',
    image: '/images/challenge-label.jpg'
  },
  {
    title: 'Supply shortage',
    desc: 'Insufficient supply for large orders.',
    icon: 'PackageX',
    image: '/images/challenge-supply.jpg'
  },
  {
    title: 'Shipping headaches',
    desc: 'Compliance and logistics that stall every order.',
    icon: 'Truck',
    image: '/images/challenge-shipping.jpg'
  },
  {
    title: 'You need a partner',
    desc: 'Not just a manufacturer — someone who gets you to market.',
    icon: 'Handshake',
    image: '/images/challenge-partner.jpg',
    highlight: true
  }
];

export const solutions = [
  {
    title: 'Premium Coffee Wood Chews',
    image: '/images/solution-chews.jpg',
    features: ['Made from naturally aged coffee wood', 'No artificial additives, long-lasting', 'Supports dental health, all dog sizes']
  },
  {
    title: 'Private Label & Branding',
    image: '/images/solution-branding.jpg',
    features: ['Custom labels, inserts & packaging', 'Barcode & retail-ready boxes', 'Your brand, front and center']
  },
  {
    title: 'OEM & Product Development',
    image: '/images/solution-oem.jpg',
    features: ['Custom product design & sizes', 'Bundle & packaging concepts', 'Seasonal collections']
  },
  {
    title: 'Global Shipping Support',
    image: '/images/solution-shipping.jpg',
    features: ['Export documentation handled', 'Container loading & worldwide delivery', 'Amazon-standard shipping packaging']
  }
];

export const marketDemandTags = [
  'Natural', 'Sustainable', 'Long-lasting', 'Chemical-free', 'Eco-friendly', 'For aggressive chewers'
];

export const benefits = [
  {
    title: '100% Natural & Safe',
    description: 'Made from coffee wood branches that are over 20 years old, naturally processed without chemicals.',
    icon: 'Leaf'
  },
  {
    title: 'Dental Health',
    description: 'Natural wood fibers act as a toothbrush, reducing plaque and tartar buildup during chewing.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Durable & Long-lasting',
    description: 'Denser than regular wood, coffee wood provides hours of engagement for heavy chewers.',
    icon: 'Timer'
  },
  {
    title: 'Sustainable Choice',
    description: 'Ethically sourced from coffee plantations. A secondary product that gives back to farmers.',
    icon: 'Recycle'
  }
];

export const whyWinvn = [
  {
    title: 'Sustainable Sourcing',
    desc: 'Wood harvested from coffee trees over 20 years old.',
    icon: 'Leaf',
    image: '/images/why-sourcing.jpg'
  },
  {
    title: 'Factory-Direct Pricing',
    desc: 'Competitive pricing with no trading markups.',
    icon: 'BarChart3',
    image: '/images/why-pricing.jpg'
  },
  {
    title: 'Flexible MOQ',
    desc: 'Start small from 50 units and scale confidently.',
    icon: 'Ruler',
    image: '/images/why-moq.jpg'
  },
  {
    title: 'Custom Packaging',
    desc: 'Retail-ready solutions tailored to your brand.',
    icon: 'Package',
    image: '/images/why-packaging.jpg'
  },
  {
    title: 'Quality Control',
    desc: 'Inspection at every stage of production.',
    icon: 'Search',
    image: '/images/why-quality.jpg'
  },
  {
    title: 'Export Experience',
    desc: 'Serving customers across EU, US and worldwide.',
    icon: 'Truck',
    image: '/images/why-export.jpg'
  }
];

export const processSteps = [
  { title: 'Send Inquiry', desc: 'Tell us your product and market.' },
  { title: 'Discuss Needs', desc: 'Sizes, branding, packaging & MOQ.' },
  { title: 'Product Sampling', desc: 'Approve a sample you can hold.' },
  { title: 'Production', desc: 'Manufacturing & packaging.' },
  { title: 'Delivery', desc: 'Worldwide door-to-door.' }
];

export const amazonFeatures = [
  'Custom Packaging', 'FNSKU Labeling', 'FBA Preparation',
  'Photography Support', 'Brand-ready Packaging', 'Small Batch Testing'
];

export const certificates = [
  { name: 'Phytosanitary', image: '/cert-phyto.jpg' },
  { name: 'Certificate of Origin', image: '/cert-co.jpg' },
  { name: 'Fumigation', image: '/cert-fumigation.jpg' },
  { name: 'Quality Control', image: '/qc-team.jpg' }
];

export const faqs = [
  {
    question: 'What is the MOQ?',
    answer: 'From just 50 products — flexible depending on your packaging requirements, so you can test new lines without overcommitting.'
  },
  {
    question: "What is your factory's production capacity?",
    answer: 'Our facility produces 5-6 million pieces per year across a 5,000 sqm factory, with capacity reserved for large-scale B2B and Amazon FBA orders.'
  },
  {
    question: 'Can you create custom packaging?',
    answer: 'Yes. We offer fully custom retail boxes, hang-tags, poly bags, and FNSKU-ready labeling tailored to your brand guidelines.'
  },
  {
    question: 'Do you provide private label services?',
    answer: 'Absolutely. We specialize in OEM and private label services, including custom packaging, UPC barcoding, and FBA labeling.'
  },
  {
    question: 'Do you ship to the EU and USA?',
    answer: 'Yes, we regularly export to over 40 countries including the United States, Canada, the EU, and Australia, with full documentation handled.'
  },
  {
    question: 'Are your coffee wood chews safe for dogs?',
    answer: 'Yes, coffee wood chews are made from the wood of the coffee tree, which does not contain caffeine. Every batch passes triple quality control.'
  },
  {
    question: 'Can I order samples?',
    answer: 'Yes, qualified B2B partners can request free samples before committing to a bulk order — just fill out the inquiry form.'
  }
];

export const catalogueFeatures = [
  'The full product range — every size, mix and retail-ready pack with specs.',
  'A complete checklist for sourcing natural & sustainable pet items.',
  'Case studies from global clients across 40+ countries.',
  'Exclusive guidance on OEM/ODM packaging & branding.',
  'Wholesale pricing templates for quotation & reporting.'
];

export const catalogueTestimonial = {
  rating: 4.9,
  ratingCount: '50+ B2B clients',
  quote: 'This catalog gave us everything we needed to launch — we grew our pet line by 400% in just 4 months.',
  author: 'Sarah Chen',
  role: 'CEO, TechStore'
};
