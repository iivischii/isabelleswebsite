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
  { group: 'Web',                       items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { group: 'Languages',                 items: ['JavaScript', 'Dart', 'C#', 'Python (basic)'] },
  { group: 'Mobile & Games',            items: ['React Native', 'Flutter', 'Unity', 'Blender'] },
  { group: 'Backend & Data',            items: ['Supabase', 'Firebase', 'SQL', 'Database management'] },
  { group: 'Strengths',                 items: ['Quality Assurance', 'Project Management', 'Technical Documentation', 'Academic Writing', 'Team Communication'] },
  { group: 'Tools & Hosting',           items: ['Visual Studio', 'GitHub', 'Claude', 'Copilot', 'ChatGPT', 'Vercel', 'Render'] },
  { group: 'UI/UX & Design',            items: ['UI/UX Design', 'Figma', 'Canva'] },
  { group: 'Video Editing & Digital Art', items: ['CapCut', 'Krita'] },
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
  { id: 'interests',      label: 'Interests' },
  { id: 'skills',         label: 'Skills' },
  { id: 'hardware',       label: 'Hardware' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact' },
]

/* =========================================================
   HELPERS
   ========================================================= */
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
              <button type="button" className="brand" onClick={() => scrollTo('hero')} aria-label="Back to top">
                <span className="brand-name">DIGITAL PORTFOLIO <small>2026</small></span>
              </button>

              {/* centre flower */}
              <div className="header-center-flower" aria-hidden="true">
                <img src={flower6} alt="" />
              </div>

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
            <Interests />
            <Skills />
            <Hardware />
            <Projects />
            <Certifications />
            <Contact />
          </main>
        </div>
      )}

      {!hasEntered && <Landing onOpen={() => setHasEntered(true)} />}
    </>
  )
}
