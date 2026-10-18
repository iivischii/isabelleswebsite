import { useEffect, useRef, useState } from 'react'
import stamp from './assets/Stamp.png'
import compu from './assets/compu.png'
import Landing from './Landing.jsx'

/* flower imports */
import flower1 from './assets/flower 1.png'
import flower2 from './assets/flower 2.png'
import flower3 from './assets/flower 3.png'
import flower4 from './assets/flower 4.png'
import flower5 from './assets/flower 5.png'
import flower6 from './assets/flower 6.png'
import flower7 from './assets/flower 7.png'
import flower8 from './assets/flower 8.png'

const flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8]

const currentYear = new Date().getFullYear()

/* =========================================================
   YOUR CONTENT
   ========================================================= */
const profile = {
  name: 'Cyrene Isabelle Wenceslao',
  school: 'National University – Dasmariñas',
  summary:
    'A BSIT student specializing in Mobile and Web Applications at National University–Dasmariñas, with UI/UX design as my specialty. I am seeking an OJT internship to grow in design and web development. Through SIKLAB, I contributed selected gameplay features, the project website, and the admin dashboard.',
  email: 'cyreneisabellewenceslao@gmail.com',
  github: 'https://github.com/iivischii',
  siklabGithub: 'https://github.com/bycoffeepowered-prog',
  linkedin: 'https://www.linkedin.com/in/cyrene-isabelle-wenceslao-4b2265444/',
  resume: '',
}

const facts = [
  { label: 'Degree', value: 'BS Information Technology' },
  { label: 'School', value: 'NU Dasmariñas' },
  { label: 'Years', value: '2023 – 2027' },
  { label: 'Languages', value: 'English & Filipino' },
]

const skills = [
  { group: 'Web',                         items: ['HTML', 'CSS', 'JavaScript', 'React.js'],                                                                    icons: ['html','css','javascript','react'] },
  { group: 'Languages',                   items: ['JavaScript', 'Dart', 'C#', 'Python'],                                                                       icons: ['javascript','dart','csharp','python'] },
  { group: 'Mobile & Games',              items: ['React Native', 'Flutter', 'Unity', 'Blender'],                                                              icons: ['react','flutter','unity','blender'] },
  { group: 'Backend & Data',              items: ['Supabase', 'Firebase', 'SQL', 'Database mgmt'],                                                             icons: ['supabase','firebase','sql','database'] },
  { group: 'Tools & Hosting',             items: ['Visual Studio', 'GitHub', 'Vercel', 'Render'],                                                              icons: ['vscode','github','vercel','render'] },
  { group: 'UI/UX & Design',              items: ['UI/UX Design', 'Figma', 'Canva', 'Krita'],                                                                  icons: ['uiux','figma','canva','krita'] },
  { group: 'Strengths',                   items: ['Quality Assurance', 'Project Mgmt', 'Documentation', 'Team Comms'],                                         icons: ['qa','pm','docs','team'] },
  { group: 'Video & AI',                  items: ['CapCut', 'Claude', 'Copilot', 'ChatGPT'],                                                                   icons: ['capcut','claude','copilot','chatgpt'] },
]

const projects = [
  {
    title: 'Personal Website',
    description: 'A fully responsive, interactive digital portfolio to get to know me professionally and personally, with a consistent grid layout.',
    tags: ['React.js', 'CSS Grid'],
    link: '',
  },
  {
    title: 'SIKLAB Website',
    description: "SIKLAB is a Philippine history adventure game designed to make learning more engaging for young learners. As Project Manager, I coordinated the team and development process, contributed selected gameplay features, and developed the project's main website and admin dashboard using React, with Supabase connecting the website's backend directly to the administrative system. One of my proudest ideas is the Review Art Wall, a feature inspired by my childhood memories of drawing on MS Paint.",
    tags: ['React.js', 'Supabase'],
    link: 'https://larongsiklab.com/',
  },
  {
    title: 'SIKLAB Admin',
    description: 'The admin dashboard was built using JSX and CSS, with Supabase connecting it directly to the main website through a unified backend. I developed its functionality to support our research and data collection, including mathematical logic for tracking group expenses and monitoring in-game and website activity.',
    tags: ['React.js', 'Supabase'],
    link: 'https://siklab-admin.vercel.app/',
  },
  {
    title: 'SIKLAB Youtube Channel',
    description: 'The videos featured on the channel were edited using the free version of CapCut, with a focus on creating kid-friendly, accessible, and easy-to-understand content for our primary audience of younger learners.',
    tags: ['CapCut', 'Youtube Creator Studio'],
    link: 'https://www.youtube.com/@PoweredByCoffee-CMNW',
  },
  {
    title: 'SIKLAB',
    description: "I independently authored the research paper and contributed extensively to the development of the game using Unity and C#. My responsibilities included designing every character with the assistance of AI tools, primarily Tripo and Krita. I developed the game's introduction and several mini-games, including a maze, a Tumbang Preso-inspired game, and a puzzle and Jackstone-inspired game.",
    tags: ['Unity', 'C#', 'Docx'],
    link: '',
  },
  {
    title: 'Augmented Realties',
    description: "Augmented Realties is an academic project exploring the intersection of real estate and augmented reality. I served as Strategy Lead and Operations Lead, creating the main website with React.js. I deliberately took a more professional approach, stepping outside my usual aesthetic to better suit the project's identity.",
    tags: ['React.js', 'AR', 'Team project'],
    link: 'https://augmentedrealties.vercel.app/',
  },
  {
    title: 'Belligoal',
    description: 'Belligoal is a personal football tracking website built around my interest in Real Madrid and Jude Bellingham. I integrated the ESPN API for football updates and deployed on Render, with UptimeRobot for uptime monitoring.',
    tags: ['React.js', 'API integration', 'Personal project'],
    link: 'https://belligoal.onrender.com',
  },
]

const certifications = [
  { title: 'TOEIC', detail: 'Test of English for International Communication', date: 'February 10, 2023' },
  { title: 'HTML and CSS', detail: 'Certiport', date: 'June 30, 2026' },
  { title: 'Databases', detail: 'Certiport', date: 'July 11, 2025' },
]

const workshopsNorgs = [
  { title: 'Tech4All: UI/UX Design Workshop', detail: 'Junior Philippine Computer Society (JPCS)', date: 'January 31, 2026' },
  { title: 'Tech4All Day 3: Full Stack Web Development and Database Integration', detail: 'Junior Philippine Computer Society (JPCS)', date: 'February 12, 2025' },
  { title: 'Junior Philippine Computer Society (JPCS)', detail: "Member of the organization's Dasmarians Chapter", date: '2025 – 2026' },
]

const navLinks = [
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'hardware',       label: 'Hardware' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'interests',      label: 'Interests' },
  { id: 'contact',        label: 'Contact' },
]

/* =========================================================
   SKILL ICONS — inline SVG, soft pink tones
   ========================================================= */
const SkillIcon = ({ name, label }) => {
  const icons = {
    html: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#c9909f"/><path d="M7 4l2 22 7 2 7-2 2-22H7zm16.5 6H13l.3 3h9.7l-1 10-6 1.7-6-1.7-.4-5h3l.2 2.5 3.2.9 3.2-.9.3-4H12L11 10h14l-.5-0z" fill="white"/></svg>),
    css: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#a07090"/><path d="M7 4l2 22 7 2 7-2 2-22H7zm9 20.7l-5-1.4-.3-4h3l.2 2 2.1.6 2.1-.6.2-3h-7L12 8h13l-.5 5.5h-7.2l-.2 2.5h7.3l-.7 7.3-5.7 1.4z" fill="white"/></svg>),
    javascript: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#c9a86c"/><path d="M8 8h16v16H8V8zm12.5 12c0 1.5-.9 2.4-2.2 2.4-1.2 0-1.9-.6-2.3-1.4l-1.8 1c.6 1.3 2 2.2 4.1 2.2 2.4 0 4-1.3 4-3.6V14h-2.2l.4 6zm-7.2 2c-.5.9-1.5 1.5-2.8 1.5-1.5 0-2.4-.8-2.4-2H6.8c0 2.4 1.7 3.8 4.4 3.8 2.6 0 4.1-1.3 4.1-3.2 0-1.9-1.1-2.8-3.4-3.5-1.5-.5-2.1-.8-2.1-1.5 0-.6.5-1 1.3-1s1.4.4 1.8 1.2l1.8-1c-.7-1.3-1.9-2-3.5-2C9 10 8 11.3 8 12.8c0 1.9 1.2 2.7 3.3 3.4 1.4.5 2 .8 2 1.8z" fill="white"/></svg>),
    react: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#b07a8a"/><ellipse cx="16" cy="16" rx="2.5" ry="2.5" fill="#f5d0d8"/><ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#f5d0d8" strokeWidth="1.3" fill="none"/><ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#f5d0d8" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#f5d0d8" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)"/></svg>),
    dart: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#8aab9a"/><path d="M8 16L16 8h8l-8 8 8 8h-8L8 16z" fill="white"/></svg>),
    csharp: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#9a7aaa"/><text x="5" y="22" fontFamily="monospace" fontWeight="bold" fontSize="15" fill="white">C#</text></svg>),
    python: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#7a8faa"/><path d="M16 5c-3 0-5.5 1-5.5 2.5V10h5.5v1H9c-1.5 0-3 1.5-3 4.5s1.5 4.5 3 4.5h1.5v-2.5c0-1.5 1.5-3 3-3h6c1.5 0 3-1.2 3-2.5V7.5C22.5 6 19 5 16 5zm-1.5 2a1 1 0 110 2 1 1 0 010-2z" fill="#fde8ee"/><path d="M16 27c3 0 5.5-1 5.5-2.5V22h-5.5v-1H23c1.5 0 3-1.5 3-4.5s-1.5-4.5-3-4.5H21.5v2.5c0 1.5-1.5 3-3 3h-6c-1.5 0-3 1.2-3 2.5v4.5C9.5 26 13 27 16 27zm1.5-2a1 1 0 110-2 1 1 0 010 2z" fill="#fde8ee"/></svg>),
    flutter: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#8ab0c0"/><path d="M8 16L16 8l8 0-8 8 4 4-4 4H8l8-8-8-8z" fill="white" opacity="0.9"/></svg>),
    unity: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6a6a7a"/><path d="M16 5l7 4v6l-7 4-7-4V9l7-4zm0 2.3L10.5 10 16 12.7l5.5-2.7L16 7.3zm-6.5 4v5.4l5.5 2.7v-5.4L9.5 11.3zm7.5 2.7v5.4l5.5-2.7V11.3L17 14z" fill="white"/></svg>),
    blender: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#c08060"/><circle cx="16" cy="16" r="6" stroke="white" strokeWidth="1.5" fill="none"/><circle cx="16" cy="16" r="2.5" fill="white"/></svg>),
    supabase: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#5a8a78"/><path d="M17.5 5L8 19h10v8l10-14H18V5h-.5z" fill="white" opacity="0.9"/></svg>),
    firebase: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#c09060"/><path d="M10 24l2-11 4 7 2-14 5 18H10z" fill="#fde8c0"/><path d="M10 24l6-8 7 8H10z" fill="white" opacity="0.4"/></svg>),
    sql: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#7a8aaa"/><ellipse cx="16" cy="10" rx="7" ry="3" stroke="white" strokeWidth="1.3" fill="none"/><path d="M9 10v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke="white" strokeWidth="1.3"/><path d="M9 15v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke="white" strokeWidth="1.3"/></svg>),
    database: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#a9586d"/><ellipse cx="16" cy="9" rx="7" ry="2.5" stroke="white" strokeWidth="1.3" fill="none"/><path d="M9 9v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V9" stroke="white" strokeWidth="1.3"/><path d="M9 14v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" stroke="white" strokeWidth="1.3"/></svg>),
    vscode: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6a90aa"/><path d="M22 6l-8 8-4-3-2 2 4 3-4 3 2 2 4-3 8 8 2-1V7l-2-1zm0 3v14l-6-6 6-8z" fill="white"/></svg>),
    github: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6a6a7a"/><path fillRule="evenodd" clipRule="evenodd" d="M16 6a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7C10.34 23.9 9.73 22 9.73 22c-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.51 2.32 1.07 2.88.82.09-.64.34-1.07.63-1.32-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.97 1.02-2.66-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02a9.5 9.5 0 015 0c1.9-1.29 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.63.7 1.02 1.58 1.02 2.66 0 3.8-2.32 4.64-4.53 4.89.36.31.68.91.68 1.84v2.72c0 .27.18.58.69.48A10 10 0 0016 6z" fill="white"/></svg>),
    vercel: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#5a5a6a"/><path d="M16 8l10 16H6L16 8z" fill="white"/></svg>),
    render: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6aaa90"/><text x="8" y="22" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="white">R</text></svg>),
    figma: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#8a7090"/><circle cx="19" cy="16" r="4" fill="#fde8f0" opacity="0.9"/><path d="M11 24a4 4 0 004-4v-4h-4a4 4 0 000 8z" fill="#c0e8d0" opacity="0.9"/><path d="M11 16h4v-8h-4a4 4 0 000 8z" fill="#fdd0c8" opacity="0.9"/><path d="M15 8h4a4 4 0 010 8h-4V8z" fill="#f0c0b0" opacity="0.9"/><path d="M15 16h4a4 4 0 010 8h-4v-8z" fill="#d0b8e8" opacity="0.9"/></svg>),
    canva: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#9a68b8"/><path d="M22 16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.5 0 2.87.55 3.91 1.46L18.5 12.9A3.98 3.98 0 0016 12a4 4 0 000 8c1.86 0 3.41-1.27 3.87-3H16v-2h6v1z" fill="white"/></svg>),
    krita: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#7a90b8"/><circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.5" fill="none"/><path d="M16 9l2 5h5l-4 3 1.5 5-4.5-3-4.5 3 1.5-5-4-3h5z" fill="white" opacity="0.9"/></svg>),
    uiux: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#b86f83"/><rect x="8" y="10" width="16" height="12" rx="2" stroke="white" strokeWidth="1.5" fill="none"/><path d="M12 14h8M12 18h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    qa: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#7a9a7a"/><path d="M10 16l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.3" fill="none"/></svg>),
    pm: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#9a7aaa"/><rect x="8" y="9" width="5" height="14" rx="1" fill="white" opacity="0.4"/><rect x="14" y="13" width="5" height="10" rx="1" fill="white" opacity="0.7"/><rect x="20" y="11" width="4" height="12" rx="1" fill="white"/></svg>),
    docs: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6a8fb0"/><rect x="9" y="7" width="14" height="18" rx="2" stroke="white" strokeWidth="1.3" fill="none"/><path d="M12 12h8M12 16h8M12 20h5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>),
    team: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#a09060"/><circle cx="12" cy="13" r="3" stroke="white" strokeWidth="1.3" fill="none"/><circle cx="20" cy="13" r="3" stroke="white" strokeWidth="1.3" fill="none"/><path d="M6 23c0-3 2.7-5 6-5M20 18c3.3 0 6 2 6 5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>),
    capcut: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#606070"/><circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.5" fill="none"/><path d="M14 13l6 3-6 3V13z" fill="white"/></svg>),
    claude: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#c07870"/><text x="6" y="22" fontFamily="serif" fontSize="14" fontWeight="bold" fill="white">Cl</text></svg>),
    copilot: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6a88b0"/><path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" fill="white" opacity="0.4"/><path d="M13 13.5c1-.8 2.5-1 4-.3l-1.5 2.5c-.6-.3-1.3-.2-1.7.3-.5.6-.4 1.5.2 2 .6.5 1.4.4 1.9-.2l1.8 2.2c-1.5 1.3-3.8 1.2-5.1-.4-1.3-1.6-1-3.9.4-5.1z" fill="white"/></svg>),
    chatgpt: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6aaa90"/><path d="M16 7a9 9 0 00-8.5 12 9 9 0 001.5 9.5l-1 3.5 3.5-1A9 9 0 1016 7zm0 2a7 7 0 110 14A7 7 0 0116 9z" fill="white" opacity="0.9"/><path d="M12 15h8M12 18h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    writing: (<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#a08878"/><path d="M8 22l3-1 10-10-2-2L9 19l-1 3zm13-13l2-2-2-2-2 2 2 2z" fill="white"/></svg>),
  }
  return (
    <span className="skill-icon" title={label} aria-label={label}>
      {icons[name] ?? (
        <svg viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="#c9909f"/>
          <text x="4" y="21" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white">{label?.slice(0,3).toUpperCase()}</text>
        </svg>
      )}
    </span>
  )
}
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

function TiltCard({ children, className = '', index = 0 }) {
  const ref = useRef(null)
  const handleMove = (e) => {
    if (!canHover() || prefersReducedMotion()) return
    const el = ref.current
    const box = el.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width
    const y = (e.clientY - box.top) / box.height
    el.style.setProperty('--ry', `${(x - 0.5) * 8}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const handleLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }
  return (
    <div ref={ref} className={`card tilt ${className}`} style={{ '--i': index }}
      onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  )
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="snap-section">
      <div className="snap-inner">
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

/* =========================================================
   SECTIONS
   ========================================================= */
function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <p className="about-text">{profile.summary}</p>
        <div className="facts">
          {facts.map((fact, i) => (
            <TiltCard key={fact.label} index={i + 1} className="fact">
              <span className="fact-label">{fact.label}</span>
              <span className="fact-value">{fact.value}</span>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Interests() {
  return (
    <Section id="interests" title="Interests" intro="A few things I enjoy outside work.">
      <div className="interest-list">
        <article className="interest-row">
          <h3>Film & Television</h3>
          <p>Frequent film enjoyer, taking inspiration from storytelling for my own art. Favourite movie is Mean Girls, favourite show is Game of Thrones.</p>
        </article>
        <article className="interest-row">
          <h3>Culinary Arts</h3>
          <p>I take cooking seriously — I take pleasure and pride in feeding people good food. Baking is a more peaceful endeavour.</p>
        </article>
        <article className="interest-row">
          <h3>Sports</h3>
          <p>A loyal Gilas supporter, and now a loyal Real Madrid fan. I've found love with football (soccer).</p>
        </article>
        <article className="interest-row">
          <h3>Comic Books</h3>
          <p>My dream is to one day have my own comic book collection — a vast library of favourite stories. And shoes.</p>
        </article>
        <article className="interest-row">
          <h3>Music</h3>
          <p>Music is so integral to my life that I truly believe it helps me work. I can't really function without it.</p>
        </article>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills & expertise">
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.group} className="skill-group-card">
            <h3 className="skill-group-title">{skill.group}</h3>
            <div className="skill-icons-row">
              {skill.items.map((item, i) => (
                <div key={item} className="skill-icon-item">
                  <SkillIcon name={skill.icons[i]} label={item} />
                  <span className="skill-icon-label">{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Hardware() {
  return (
    <Section id="hardware" title="Hardware" intro="My home setup for focused development and remote collaboration.">
      <div className="hardware-layout">
        <div className="hardware-art">
          <img src={compu} alt="Pink line-art drawing of a desktop workstation" />
        </div>
        <div className="hardware-details">
          <article className="hardware-row">
            <h3>Hardware</h3>
            <p>Desktop workstation, dedicated monitor, and peripherals.</p>
          </article>
          <article className="hardware-row">
            <h3>Development Environment</h3>
            <p>Windows 11, Visual Studio Code, Git, React, and other development tools.</p>
          </article>
          <article className="hardware-row">
            <h3>Remote Work Readiness</h3>
            <p>A workspace equipped for remote collaboration, development, and online meetings.</p>
          </article>
        </div>
      </div>
    </Section>
  )
}

function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const touchStartX = useRef(null)
  const currentProject = projects[activeProject]

  const showProject = (index) => setActiveProject((index + projects.length) % projects.length)
  const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dist = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dist) > 45) showProject(activeProject + (dist < 0 ? 1 : -1))
    touchStartX.current = null
  }
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); showProject(activeProject - 1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); showProject(activeProject + 1) }
  }

  return (
    <Section id="projects" title="Projects" intro="Things I've built along the way.">
      <div className="project-carousel"
        onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown} tabIndex={0}
        aria-label="Projects carousel. Use arrow keys to navigate.">
        <div className="project-list">
          <article className="project-row" key={currentProject.title} aria-live="polite">
            <div>
              <p className="project-type">{currentProject.tags.join(' · ')}</p>
              <h3 className="card-title">{currentProject.title}</h3>
              {currentProject.link && (
                <a href={currentProject.link} className="card-link" target="_blank" rel="noreferrer">View project ↗</a>
              )}
            </div>
            <p className="project-description">{currentProject.description}</p>
          </article>
        </div>
        <div className="project-carousel-controls">
          <button type="button" className="project-arrow" onClick={() => showProject(activeProject - 1)} aria-label="Previous project">←</button>
          <div className="project-dots" role="group">
            {projects.map((p, i) => (
              <button key={p.title} type="button"
                className={`project-dot${i === activeProject ? ' is-active' : ''}`}
                onClick={() => showProject(i)} aria-label={`Project ${i + 1}: ${p.title}`}
                aria-current={i === activeProject ? 'true' : undefined} />
            ))}
          </div>
          <button type="button" className="project-arrow" onClick={() => showProject(activeProject + 1)} aria-label="Next project">→</button>
        </div>
        <p className="project-count">{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</p>
      </div>
    </Section>
  )
}

function Certifications() {
  return (
    <Section id="certifications" title="Certifications" intro="Credentials, workshops, and professional involvement.">
      <h3 className="subhead certifications-subhead">Certifications</h3>
      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert.title} className="cert-row">
            <strong>{cert.title}</strong>
            <span>{cert.detail}</span>
            <time>{cert.date}</time>
          </div>
        ))}
      </div>
      <h3 className="subhead">Workshops &amp; Organizations</h3>
      <div className="cert-list">
        {workshopsNorgs.map((item) => (
          <div key={item.title} className="cert-row">
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
            <time>{item.date}</time>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Let's connect">
      <TiltCard className="contact">
        <p className="contact-text">
          I'm looking for an OJT internship and open to collaborations. The best way to reach me is by email. References are available upon request.
        </p>
        <div className="hero-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
          <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">Personal GitHub</a>
          <a href={profile.siklabGithub} className="btn btn-ghost" target="_blank" rel="noreferrer">SIKLAB GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn</a>}
          {profile.resume && <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">Résumé</a>}
        </div>
      </TiltCard>
      <footer className="site-footer">
        <span>NU DASMARIÑAS · BS INFORMATION TECHNOLOGY</span>
        <span>© {currentYear} Isabelle Wenceslao</span>
      </footer>
    </Section>
  )
}

/* =========================================================
   APP ROOT
   ========================================================= */
export default function App() {
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]')
    if (favicon) favicon.href = stamp
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {hasEntered && (
        <div className="portfolio-shell">
          {/* ── HEADER ── */}
          <header className="header">
            <div className="header-inner">
              {/* left label */}
              <button type="button" className="brand" onClick={() => scrollTo('hero')} aria-label="Back to top">
                <span className="brand-name">DIGITAL PORTFOLIO <small>2026</small></span>
              </button>

              {/* 8 flowers — each links to a section */}
              <nav className="flower-nav" aria-label="Section navigation">
                {navLinks.map((link, i) => (
                  <button
                    key={link.id}
                    type="button"
                    className="flower-nav-btn"
                    onClick={() => scrollTo(link.id)}
                    aria-label={`Go to ${link.label}`}
                    title={link.label}
                  >
                    <img src={flowers[i]} alt={link.label} />
                    <span className="flower-nav-label">{link.label}</span>
                  </button>
                ))}
              </nav>

              {/* right label */}
              <p className="header-label">9 · 14 · 2004</p>
            </div>
          </header>

          {/* ── SCROLL CONTAINER ── */}
          <main className="scroll-container">

            {/* HERO — snap card 1 */}
            <section id="hero" className="snap-section snap-hero">
              {/* inset border */}
              <div className="hero-border" aria-hidden="true" />

              <div className="hero-grid">
                {/* LEFT: copy */}
                <div className="hero-copy">
                  <p className="eyebrow">DIGITAL PORTFOLIO <span>·</span> 2026</p>
                  <h1 className="hero-title">
                    <span>Cyrene Isabelle</span>
                    <em>Wenceslao</em>
                  </h1>
                  <p className="hero-role">UI/UX Designer · Web Developer · Project Management</p>
                  <p className="hero-text">
                    UI/UX design is my specialty. I create thoughtful mobile and web experiences, and contribute across design, development, and project collaboration.
                  </p>
                </div>

                {/* RIGHT: index */}
                <div className="hero-index">
                  <div className="index-heading">
                    <img className="hero-stamp" src={stamp} alt="Isabelle Wenceslao stamp" />
                    <div>
                      <p className="index-kicker">A LITTLE INDEX</p>
                      <p className="index-note">Choose a page to open</p>
                    </div>
                  </div>
                  <nav className="index-list" aria-label="Portfolio sections">
                    {navLinks.map((link, i) => (
                      <button type="button" key={link.id} className="index-link" onClick={() => scrollTo(link.id)}>
                        <span className="index-number">0{i + 1}</span>
                        <span>{link.label}</span>
                        {/* flower icon instead of arrow */}
                        <img
                          className="index-flower"
                          src={flowers[i % flowers.length]}
                          alt=""
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="hero-footer">
                <span>NU DASMARIÑAS · BS INFORMATION TECHNOLOGY</span>
                <span>© {currentYear} Isabelle Wenceslao</span>
              </div>
            </section>

            {/* remaining snap-card sections */}
            <About />
            <Skills />
            <Hardware />
            <Projects />
            <Certifications />
            <Interests />
            <Contact />
          </main>
        </div>
      )}

      {!hasEntered && <Landing onOpen={() => setHasEntered(true)} />}
    </>
  )
}
