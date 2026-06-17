export interface Project {
  id: number;
  slug: string;
  name: string;
  tag: string;
  desc: string;
  bg: string;
  accent: string;
  textColor: string;
  caseStudyTheme: 'dark' | 'light';
  year: string;
  client: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  mockupBg: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'omaha-performing-arts',
    name: 'Omaha Performing Arts',
    tag: 'Web',
    desc: 'A complete digital transformation for Nebraska’s largest arts organization.',
    bg: '#f8fafc',
    accent: '#0ea5e9',
    textColor: 'text-slate-800',
    caseStudyTheme: 'light',
    year: '2023',
    client: 'Omaha Performing Arts',
    services: ['Web Design', 'Next.js Development', 'Tessitura Integration'],
    challenge: 'The organization had outgrown their legacy ticketing system and needed a faster, more reliable platform that could handle high-traffic on-sales while providing an immersive experience for arts patrons.',
    solution: 'We built a high-performance frontend using Next.js, completely decoupling the UI from the heavy legacy backend. We implemented a custom caching layer to handle traffic spikes and designed a modern, accessible interface.',
    results: [
      { label: 'Faster Load Time', value: '3x' },
      { label: 'Mobile Conversion', value: '+45%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    mockupBg: 'bg-slate-100',
  },
  {
    id: 2,
    slug: 'my-cyber-path',
    name: 'My Cyber Path',
    tag: 'Software',
    desc: 'An AI-driven career matching platform for cybersecurity professionals.',
    bg: '#0f172a',
    accent: '#10b981',
    textColor: 'text-blue-200',
    caseStudyTheme: 'dark',
    year: '2024',
    client: 'My Cyber Path',
    services: ['React Application', 'Node.js Backend', 'AI Integration'],
    challenge: 'The cybersecurity industry has a massive talent shortage, but newcomers struggle to find roles that match their specific skills and temperament. The client needed a scalable matching engine.',
    solution: 'We engineered a robust web application featuring a multi-step assessment quiz, leveraging OpenAI to map user responses to the NIST framework roles in real-time, backed by a secure PostgreSQL database.',
    results: [
      { label: 'Active Users', value: '15k+' },
      { label: 'Assessment Time', value: '<5 min' },
      { label: 'Match Accuracy', value: '94%' },
    ],
    mockupBg: 'bg-slate-900',
  },
  {
    id: 3,
    slug: 'walthill-public-schools',
    name: 'Walthill Public Schools',
    tag: 'Web · Brand',
    desc: 'Bringing a vibrant school district’s digital presence into the modern era.',
    bg: '#fef2f2',
    accent: '#ef4444',
    textColor: 'text-red-950',
    caseStudyTheme: 'light',
    year: '2022',
    client: 'Walthill Public Schools',
    services: ['Brand Identity', 'Custom CMS', 'Web Design'],
    challenge: 'The district’s website was difficult for staff to update and hard for parents to navigate on mobile devices. They needed a complete brand refresh and a modern, accessible website.',
    solution: 'We developed a fresh visual identity and a fully responsive website powered by a headless CMS, allowing staff to easily post updates, alerts, and events without technical knowledge.',
    results: [
      { label: 'Mobile Traffic', value: '68%' },
      { label: 'Admin Time Saved', value: '5 hrs/wk' },
      { label: 'Accessibility', value: 'AA' },
    ],
    mockupBg: 'bg-red-50',
  },
  {
    id: 4,
    slug: 'foster-crm',
    name: 'Foster CRM',
    tag: 'Software · Web',
    desc: 'A purpose-built CRM designed for real estate agencies to manage leads and properties.',
    bg: '#0f172a',
    accent: '#3b82f6',
    textColor: 'text-blue-200',
    caseStudyTheme: 'dark',
    year: '2023',
    client: 'Foster Real Estate',
    services: ['SaaS Development', 'System Architecture', 'UI/UX Design'],
    challenge: 'Off-the-shelf CRMs were too bloated and didn’t fit the specific workflows of the agency’s realtors. They needed a streamlined tool to manage pipelines and property listings simultaneously.',
    solution: 'We built a bespoke CRM from the ground up using Next.js and Supabase. The platform features real-time notifications, interactive pipelines, and automated MLS integrations.',
    results: [
      { label: 'Adoption Rate', value: '100%' },
      { label: 'Data Sync Time', value: '<1s' },
      { label: 'Productivity', value: '+30%' },
    ],
    mockupBg: 'bg-slate-900',
  },
  {
    id: 5,
    slug: 'hudltv',
    name: 'HudlTV',
    tag: 'Software',
    desc: 'A massive streaming platform for high school and amateur sports.',
    bg: '#000000',
    accent: '#ff5a00',
    textColor: 'text-white',
    caseStudyTheme: 'dark',
    year: '2021',
    client: 'Hudl',
    services: ['Video Engineering', 'React Development', 'High-Traffic Scaling'],
    challenge: 'Hudl needed to scale their streaming platform to handle thousands of concurrent live streams on Friday nights, requiring extreme reliability and low latency.',
    solution: 'We joined forces with their engineering team to rebuild the core video player and streaming infrastructure, optimizing the React frontend for performance across low-powered devices.',
    results: [
      { label: 'Concurrent Streams', value: '10k+' },
      { label: 'Latency', value: 'Ultra-low' },
      { label: 'Audience Reach', value: 'Millions' },
    ],
    mockupBg: 'bg-neutral-900',
  },
  {
    id: 6,
    slug: 'building-brand',
    name: 'Building Brand',
    tag: 'Brand',
    desc: 'Crafting a strategic narrative and visual system for a B2B tech consultancy.',
    bg: '#fdf4ff',
    accent: '#d946ef',
    textColor: 'text-fuchsia-950',
    caseStudyTheme: 'light',
    year: '2024',
    client: 'Building Brand Consulting',
    services: ['Brand Strategy', 'Logo Design', 'Web Design'],
    challenge: 'The consultancy was struggling to differentiate themselves in a crowded market. Their generic branding was attracting the wrong type of clients and commoditizing their services.',
    solution: 'We conducted deep market research and developed a bold new positioning strategy. We then translated this into a striking visual identity and a high-converting marketing website.',
    results: [
      { label: 'Lead Quality', value: 'High' },
      { label: 'Sales Cycle', value: '-20%' },
      { label: 'Brand Recognition', value: 'Strong' },
    ],
    mockupBg: 'bg-fuchsia-50',
  },
];
