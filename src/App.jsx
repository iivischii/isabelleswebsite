import { useEffect, useRef, useState } from 'react'
import stamp from './assets/Stamp.png'
import flowerClose from './assets/x-flower.png'
import compu from './assets/compu.png'
import Landing from './Landing.jsx'

const currentYear = new Date().getFullYear()

/* =========================================================
   YOUR CONTENT - edit everything here and the page updates.
   Lines marked 👈 are the ones you should fill in / check.
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
  resume: '',   // 👈 e.g. '/Resume.pdf' (put the file in /public). Your PDF has your phone + home address, so only add it if you're happy for it to be public
}

const facts = [
  { label: 'Degree', value: 'BS Information Technology' },
  { label: 'School', value: 'NU Dasmariñas' },
  { label: 'Years', value: '2023 – 2027' },
  { label: 'Languages', value: 'English, Filipino' },
]

const skills = [
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { group: 'Languages', items: ['JavaScript', 'Dart', 'C#', 'Python (basic)'] },
  { group: 'Mobile & Games', items: ['React Native', 'Flutter', 'Unity', 'Blender'] },
  { group: 'Backend & Data', items: ['Supabase', 'Firebase', 'SQL', 'Database management'] },
  { group: 'Strengths', items: ['Quality Assurance', 'Project Management', 'Technical Documentation', 'Academic Writing', 'Team Communication'] },
  { group: 'Tools & Hosting', items: ['Visual Studio', 'GitHub','Claude', 'Copilot','ChatGPT', 'Vercel', 'Render'] },
  { group: 'UI/UX & Design', items: ['UI/UX Design', 'Figma', 'Canva'] },
  { group: 'Video', items: ['CapCut', 'Video editing'] },
]

const projects = [
  {
    title: 'SIKLAB',
    description:
      'A Philippine history adventure game for young learners. I coordinated the project, contributed selected gameplay features, and built the project website and admin dashboard.',
    tags: ['Unity', 'C#', 'React.js', 'Supabase'],
    link: 'https://larongsiklab.com/',
  },
  {
    title: 'Augmented Realties',
    description:
      'A website for Napoles & Co., my team\'s entrepreneurship class project built around an AI and augmented reality blueprint app.',
    tags: ['Augmented Reality', 'AI', 'Team project'],
    link: 'https://augmentedrealties.vercel.app/',
  },
  {
    title: 'Personal Website',
    description:
      'A fully responsive, interactive personal site with a consistent grid layout, custom animations and audio.',
    tags: ['React', 'CSS Grid'],
    link: '', // 👈
  },
]

const certifications = [
  { title: 'TOEIC', detail: 'Test of English for International Communication', date: 'February 10, 2023' },
  { title: 'HTML and CSS', detail: 'Certiport', date: 'June 30, 2026' },
  { title: 'Databases', detail: 'Certiport', date: 'July 11, 2025' },
]

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'interests', label: 'Interests' },
  { id: 'skills', label: 'Skills' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/* =========================================================
   SMALL HELPERS FOR THE EFFECTS
   ========================================================= */
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
const canHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

/* a card that tilts toward the mouse and gets a pink shine (desktop only) */
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
    <div
      ref={ref}
      className={`card tilt stagger ${className}`}
      style={{ '--i': index }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section modal-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

/* =========================================================
   PAGE SECTIONS
   ========================================================= */
function Header({ onHome }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <button type="button" className="brand" onClick={onHome} aria-label="Back to cover">
          <span className="brand-name">DIGITAL PORTFOLIO <small>2026</small></span>
        </button>
        <p className="header-label">9 · 14 · 2004</p>
      </div>
    </header>
  )
}

function Hero({ onSelect }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title"><span>Cyrene Isabelle</span><em>Wenceslao</em></h1>
          <p className="hero-role">UI/UX Designer · Web Developer · Project Lead</p>
          <p className="hero-text">
            UI/UX design is my specialty. I create thoughtful mobile and web experiences, and contribute across design, development, and project collaboration.
          </p>
        </div>

        <div className="hero-index">
          <div className="index-heading">
            <img className="hero-stamp" src={stamp} alt="Isabelle Wenceslao stamp" />
            <div><p className="index-kicker">A LITTLE INDEX</p><p className="index-note">Choose a page to open</p></div>
          </div>
          <nav className="index-list" aria-label="Portfolio sections">
            {navLinks.map((link, index) => (
              <button type="button" key={link.id} className="index-link" onClick={() => onSelect(link.id)}>
                <span className="index-number">0{index + 1}</span>
                <span>{link.label}</span>
                <span className="index-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="hero-footer"><span>NU DASMARIÑAS · BS INFORMATION TECHNOLOGY</span><span>© {currentYear} Isabelle Wenceslao</span></div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <p className="about-text stagger" style={{ '--i': 1 }}>{profile.summary}</p>
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

function Skills() {
  return (
    <Section id="skills" title="Skills & expertise">
      <div className="skills-overview">
        {skills.map((skill) => (
          <article key={skill.group} className="skill-group">
            <h3 className="card-title">{skill.group}</h3>
            <p>{skill.items.join(' · ')}</p>
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
  return (
    <Section id="projects" title="More projects" intro="Things I’ve built along the way.">
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-row">
            <div>
              <p className="project-type">{project.tags.join(' · ')}</p>
              <h3 className="card-title">{project.title}</h3>
              {project.link && <a href={project.link} className="card-link" target="_blank" rel="noreferrer">View project ↗</a>}
            </div>
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>

      <h3 className="subhead">Certifications</h3>
      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert.title} className="cert-row">
            <strong>{cert.title}</strong>
            <span>{cert.detail}</span>
            <time>{cert.date}</time>
          </div>
        ))}
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
          <p>Enjoy exploring films and television series across different genres.</p>
        </article>
        <article className="interest-row">
          <h3>Culinary Arts</h3>
          <p>Passionate about cooking and exploring different dishes and flavors.</p>
        </article>
        <article className="interest-row">
          <h3>Sports</h3>
          <p>An avid football and basketball fan, supporting Real Madrid and Gilas Pilipinas.</p>
        </article>
        <article className="interest-row">
          <h3>Comic Books</h3>
          <p>Enjoy reading comic books and exploring stories through illustrated narratives.</p>
        </article>
        <article className="interest-row">
          <h3>Music</h3>
          <p>An enthusiastic music listener with an appreciation for diverse genres and artists.</p>
        </article>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Let’s connect">
      <TiltCard className="contact">
        <p className="contact-text">
          I’m looking for an OJT internship and open to collaborations. The best way to reach me is by email. References are available upon request.
        </p>
        <div className="hero-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
          <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">Personal GitHub</a>
          <a href={profile.siklabGithub} className="btn btn-ghost" target="_blank" rel="noreferrer">SIKLAB GitHub</a>
          {profile.linkedin && (
            <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {profile.resume && (
            <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">Résumé</a>
          )}
        </div>
      </TiltCard>
    </Section>
  )
}

export default function App() {
  const [activePanel, setActivePanel] = useState(null)
  const [hasEntered, setHasEntered] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]')
    if (favicon) favicon.href = stamp
  }, [])

  useEffect(() => {
    if (!activePanel) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActivePanel(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activePanel])

  const panels = {
    about: <About />,
    interests: <Interests />,
    skills: <Skills />,
    hardware: <Hardware />,
    projects: <Projects />,
    contact: <Contact />,
  }
  const panelLabel = navLinks.find((link) => link.id === activePanel)?.label

  return (
    <>
      <div className={`portfolio-shell ${hasEntered ? 'is-revealed' : 'is-covered'}`}>
        <Header onHome={() => setActivePanel(null)} />
        <main><Hero onSelect={setActivePanel} /></main>
        {activePanel && (
          <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setActivePanel(null)}>
            <div className="dialog-window" role="dialog" aria-modal="true" aria-label={`${panelLabel} panel`} tabIndex={-1} ref={dialogRef}>
              <div className="dialog-chrome">
                <p><span>ISABELLE / PORTFOLIO</span><span>{String(navLinks.findIndex((link) => link.id === activePanel) + 1).padStart(2, '0')} — {panelLabel}</span></p>
                <button type="button" className="dialog-close" onClick={() => setActivePanel(null)} aria-label="Close panel">
                  <img src={flowerClose} alt="" />
                </button>
              </div>
              <div className="dialog-content" key={activePanel}>{panels[activePanel]}</div>
            </div>
          </div>
        )}
      </div>
      {!hasEntered && <Landing onOpen={() => setHasEntered(true)} />}
    </>
  )
}
