export const siteConfig = {
  name: 'PAISOFT IT',
  tagline: 'Thoughtful software for businesses that want to grow with confidence.',
  contact: {
    email: 'info@paisoftit.com',
    phone: '+8801755191900',
    phoneDisplay: '+880 1755-191900',
    address: 'House 4, Lane 10, Mirpur 2, Dhaka-1216, Bangladesh',
    hours: 'Sunday – Thursday: 9:00 AM – 6:00 PM (GMT+6)',
  },
  // Figures from the Company Profile (v1.0, October 2026) — keep these in sync with it.
  stats: [
    { value: '15', label: 'In-house Team Members' },
    { value: '5', label: 'Projects Completed' },
    { value: '5', label: 'Ongoing Projects' },
    { value: '6', label: 'Service Lines' },
  ],
  legal: {
    legalForm: 'Sole proprietorship',
    established: '1 July 2026',
    tradeLicense: 'TRAD/DNCC/008577/2026',
    issuedBy: 'Dhaka North City Corporation',
  },
  navigation: [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'Web App Solutions', path: '/services#web-app-solutions' },
        { name: 'E-commerce Development', path: '/services#ecommerce-development' },
        { name: 'Corporate Web Design', path: '/services#corporate-web-design' },
        { name: 'POS Software Management', path: '/services#pos-software-management' },
        { name: 'ERP Solution', path: '/services#erp-solution' },
        { name: 'Mobile App Development', path: '/services#mobile-app-development' },
      ],
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/career' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
};
