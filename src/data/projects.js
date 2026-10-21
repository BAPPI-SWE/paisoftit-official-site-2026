// Single source of truth for every project shown on the website.
// Data taken from the PAISOFT IT Company Profile (v1.0, October 2026).
// To add a project: copy one object, give it a unique `id`, and fill the fields.
//
// logo: put the image in  public/project-logos/  and write its path here,
//       e.g. '/project-logos/my-app.png'. If the file is missing, the coloured
//       initials are shown instead, so the site never breaks.
//
// status values:
//   'completed'   -> Completed & handed over
//   'live'        -> Live in production
//   'development' -> Currently in development
//   'product'     -> PAISOFT IT's own product

export const STATUS = {
  completed: { label: 'Completed', tone: 'emerald' },
  live: { label: 'Live in Production', tone: 'emerald' },
  development: { label: 'In Development', tone: 'amber' },
  product: { label: 'Own Product', tone: 'brand' },
};

export const projects = [
  {
    id: 'velora-cotton',
    title: 'Velora Cotton',
    category: 'E-commerce',
    platform: 'Web',
    status: 'completed',
    group: 'delivered',
    featured: true,
    accent: '#0d9488',
    logo: '/project-logos/velora-cotton.jpg',
    summary: 'E-commerce platform for a premium cotton apparel brand.',
    client: 'Velora Cotton — premium cotton apparel brand',
    sector: 'Retail & e-commerce',
    objective: 'Take the brand online with a fast, easy-to-manage store.',
    scope: [
      'Product catalogue',
      'Shopping cart and checkout',
      'Order tracking',
      "Admin tools for the client's team",
    ],
    tech: ['Angular', 'Node.js', 'MongoDB', 'Hostinger VPS'],
    duration: '12 Jun 2026 – 15 Jul 2026',
    role: 'Design, development and hand-over (sole developer)',
    statusNote: 'Completed and handed over',
    links: [{ label: 'Visit live site', url: 'https://veloracotton.com/' }],
  },
  {
    id: 'foodish-bd',
    title: 'Foodish BD',
    category: 'Mobile App',
    platform: 'Android',
    status: 'live',
    group: 'delivered',
    featured: true,
    accent: '#ea580c',
    logo: '/project-logos/foodish-bd.jpeg',
    summary: 'Online food delivery platform running a complete food delivery ecosystem.',
    client: 'Foodish BD',
    sector: 'Food delivery',
    objective: 'Run a complete food delivery ecosystem.',
    scope: [
      'Item categories',
      'Add to cart and checkout',
      'Order tracking',
      "Admin tools for the client's team",
    ],
    tech: ['Jetpack Compose', 'Kotlin', 'Node.js'],
    duration: '06 Jul 2026 – 25 Sep 2026',
    role: 'Design, development and hand-over (sole developer)',
    statusNote: 'Production live',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.yumzy.userapp&hl=en',
      },
    ],
  },
  {
    id: 'sheba-pai',
    title: 'Sheba Pai (সেবা পাই)',
    category: 'Health-tech',
    platform: 'Android & Web',
    status: 'development',
    group: 'product',
    featured: true,
    accent: '#2563eb',
    logo: '/project-logos/sheba-pai.png',
    summary:
      'Digital health-tech platform that connects patients with verified healthcare providers for home-care and medical services.',
    client: 'Proprietary product of PAISOFT IT',
    sector: 'Healthcare',
    problem:
      'Patients and families often struggle to find reliable help when dealing with hospitals — finding the right service, an assistant or attendant, or support with appointments and errands.',
    solution:
      'A mobile app where users submit a service request, get matched with a suitable service provider or helper, and track the request until it is completed.',
    scope: [
      'In-home nursing & caregiving',
      'Medicine express delivery',
      'Doctor consultation & booking',
      'Home sample collection for tests',
      'Medical equipment rental & sales',
      'Emergency patient transport',
    ],
    users: ['Patients', 'Nurses', 'Doctors', 'Medicine shops'],
    tech: ['React Native', 'Node.js', 'Express.js'],
    role: 'Own product — concept, design, development and operation',
    statusNote: 'In development (app published on Google Play)',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.paisoftlab.shebapai',
      },
      { label: 'Web app', url: 'https://sheba-pai-webapp.vercel.app/' },
    ],
  },
  {
    id: 'aladin-craft',
    title: 'Aladin Craft (আলাদিন ক্রাফট)',
    category: 'E-commerce',
    platform: 'Web',
    status: 'product',
    group: 'product',
    accent: '#7c3aed',
    summary: 'Own web platform for handicraft clothing items.',
    client: 'Proprietary product of PAISOFT IT',
    sector: 'Handicraft & clothing',
    role: 'Own product',
    statusNote: 'Own product of PAISOFT IT',
    links: [],
  },
  {
    id: 'creative-source',
    title: 'Creative Source',
    category: 'E-commerce',
    platform: 'Web',
    status: 'development',
    group: 'ongoing',
    accent: '#c2410c',
    summary: 'Online store for computers and accessories.',
    sector: 'Retail & e-commerce',
    statusNote: 'Currently in development',
    links: [],
  },
  {
    id: 'zia-cyber-force',
    title: 'Zia Cyber Force',
    category: 'Web Application',
    platform: 'Web',
    status: 'development',
    group: 'ongoing',
    accent: '#0f766e',
    summary: 'Web platform for Zia Cyber Force.',
    statusNote: 'Currently in development',
    links: [],
  },
  {
    id: 'krishak-sheba',
    title: 'Krishak Sheba',
    category: 'Mobile App',
    platform: 'Android',
    status: 'development',
    group: 'ongoing',
    accent: '#15803d',
    summary: 'Service app for farmers (কৃষক সেবা).',
    sector: 'Agriculture',
    statusNote: 'Currently in development',
    links: [],
  },
  {
    id: 'land-service',
    title: 'Land Service',
    category: 'Web Application',
    platform: 'Web',
    status: 'development',
    group: 'ongoing',
    accent: '#a16207',
    summary: 'Web platform for land-related services.',
    statusNote: 'Currently in development',
    links: [],
  },
  {
    id: 'easyfood',
    title: 'EasyFood',
    category: 'Mobile App',
    platform: 'Android',
    status: 'live',
    group: 'delivered',
    featured: true,
    accent: '#dc2626',
    logo: '/project-logos/easyfood.jpg',
    summary: 'Food ordering mobile application, live on Google Play.',
    sector: 'Food',
    statusNote: 'Production live (Google Play)',
    // Paste the Play Store link inside the quotes below, e.g.
    // links: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=...' }],
    links: [],
  },
];

export const projectGroups = [
  { id: 'delivered', label: 'Delivered & Live' },
  { id: 'product', label: 'Own Products' },
  { id: 'ongoing', label: 'Ongoing Projects' },
];

export const getProject = (id) => projects.find((p) => p.id === id);
