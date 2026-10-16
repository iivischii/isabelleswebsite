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
  { label: 'Languages', value: 'English, &, Filipino' },
]

const skills = [
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { group: 'Languages', items: ['JavaScript', 'Dart', 'C#', 'Python (basic)'] },
  { group: 'Mobile & Games', items: ['React Native', 'Flutter', 'Unity', 'Blender'] },
  { group: 'Backend & Data', items: ['Supabase', 'Firebase', 'SQL', 'Database management'] },
  { group: 'Strengths', items: ['Quality Assurance', 'Project Management', 'Technical Documentation', 'Academic Writing', 'Team Communication'] },
  { group: 'Tools & Hosting', items: ['Visual Studio', 'GitHub','Claude', 'Copilot','ChatGPT', 'Vercel', 'Render'] },
  { group: 'UI/UX & Design', items: ['UI/UX Design', 'Figma', 'Canva'] },
  { group: 'Video Editing & Digital Art', items: ['CapCut', 'Krita'] },
]

const projects = [
  {
    title: 'Personal Website',
    description:
      'A fully responsive, interactive digital portfolio to get to know me professionally and personally, with a consistent grid layout.',
    tags: ['React.js', 'CSS Grid'],
    link: '', 
  },
  {
    title: 'SIKLAB Website',
    description:
      'SIKLAB is a Philippine history adventure game designed to make learning more engaging for young learners. As Project Manager, I coordinated the team and development process, contributed selected gameplay features, and developed the project\'s main website and admin dashboard using React, with Supabase connecting the website\'s backend directly to the administrative system. I designed the website UI with inspiration from old-school arcade games, contributing to selected artwork with the help of AI tools. One of my proudest ideas is the Review Art Wall, a feature inspired by my childhood memories of drawing on MS Paint. Since our target audience is younger learners, I wanted to give them a more creative and familiar way to express their thoughts about the game through drawings rather than relying solely on written feedback. For me, SIKLAB is not just about developing a game, but about creating an experience that makes learning history feel more interactive, personal, and fun.',
    tags: ['React.js', 'Supabase'],
    link: 'https://larongsiklab.com/',
  },
    {
    title: 'SIKLAB Admin',
    description:
      'The admin dashboard was built using JSX and CSS, with Supabase connecting it directly to the main website through a unified backend. I developed its functionality to support our research and data collection, including mathematical logic for tracking group expenses and monitoring in-game and website activity. The dashboard serves as an internal tool for organizing project-related data and supporting the analysis required for our capstone paper.',
    tags: ['React.js', 'Supabase'],
    link: 'https://siklab-admin.vercel.app/',
  },
    {
    title: 'SIKLAB Youtube Channel',
    description:
      'The videos featured on the channel were edited using the free version of CapCut, with a focus on creating kid-friendly, accessible, and easy-to-understand content. I aimed to make the videos engaging and approachable for our primary audience of younger learners, using a straightforward editing style that supports their understanding while keeping the experience fun and enjoyable.',
    tags: ['CapCut', 'Youtube Creator Studio'],
    link: 'https://www.youtube.com/@PoweredByCoffee-CMNW',
  },
  {
    title: 'SIKLAB',
    description:
      'I independently authored the research paper, with guidance from advisers and professors, and contributed extensively to the development of the game using Unity and C#. My responsibilities included designing every character with the assistance of AI tools, primarily Tripo and Krita, using a drawing tablet to refine the artwork. During the early development stages, I also created a storyboard to establish the game\'s narrative direction. For implementation, I developed the game\’s introduction and several mini-games, including a maze, a Tumbang Preso-inspired game in Chapter 2, and a puzzle and Jackstone-inspired game in Chapter 3.',
    tags: ['Unity', 'Docx', 'Word'],
    link: '',
  },
  {
    title: 'Augmented Realties',
    description:
      'Augmented Realties is an academic project that started as my idea, inspired by growing up around a realtor and being familiar with the experience of house trippings. Built with React, the website explores the intersection of real estate, augmented reality, and digital technology, bringing together different ideas into one concept. I served as the Strategy Lead and Operations Lead, coordinating the team and helping shape the project\'s direction, while creating the main website with React.js that was then later on translated by one of my project members into React Native for the mobile prototype. Design-wise, I deliberately took a more professional approach, stepping outside my usual girly personal aesthetic and SIKLAB\'s quirky style to better suit the project\'s identity. While this was a school project, it\'s an idea I genuinely love and would love to explore further because of its unique potential and the possibilities that come from combining different fields.',
    tags: ['Augmented Reality', 'AI', 'Team project'],
    link: 'https://augmentedrealties.vercel.app/',
  },
  {
    title: 'Belligoal',
    description:
      'Belligoal is a personal football tracking website built around my interest in Real Madrid and Jude Bellingham. Developed using JSX and CSS, the site brings together the player and team information I personally want to follow in one place. I integrated the ESPN API to access football updates and news, and deployed the project on Render. To help keep the site available and its information refreshed, I configured UptimeRobot for uptime monitoring and periodic requests, alongside the project\'s Gradle-based setup. As one of my most challenging solo projects, Belligoal gave me the opportunity to take full ownership of an idea, work with external APIs, and navigate deployment and maintenance independently. What started as a personal passion project became an opportunity to push my skills beyond what I was already comfortable with.',
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
  { title: 'Tech4All: UI/UX Design Workshop', detail: 'Attending a seminar put up by the Junior Philippine Computer Society (JPCS)', date: 'January 31, 2026' },
  { title: 'Tech4All Day 3: Full Stack Web Development and Database Integration.', detail: 'Attending a seminar put up by the Junior Philippine Computer Society (JPCS)', date: 'February 12, 2025' },
  { title: 'Junior Philippine Computer Society (JPCS)', detail: 'Member of the organization\'s Dasmarians Chapter', date: '2025 - 2026' },
]

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'interests', label: 'Interests' },
  { id: 'skills', label: 'Skills' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
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
          <p className="hero-role">UI/UX Designer · Web Developer · Project Management</p>
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
  const [activeProject, setActiveProject] = useState(0)
  const touchStartX = useRef(null)
  const currentProject = projects[activeProject]

  const showProject = (index) => {
    setActiveProject((index + projects.length) % projects.length)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(distance) > 45) showProject(activeProject + (distance < 0 ? 1 : -1))
    touchStartX.current = null
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showProject(activeProject - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      showProject(activeProject + 1)
    }
  }

  return (
    <Section id="projects" title="Projects" intro="Things I’ve built along the way.">
      <div
        className="project-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Projects carousel. Use the left and right arrow keys to change projects."
      >
        <div className="project-list">
          <article className="project-row" key={currentProject.title} aria-live="polite">
            <div>
              <p className="project-type">{currentProject.tags.join(' · ')}</p>
              <h3 className="card-title">{currentProject.title}</h3>
              {currentProject.link && currentProject.link !== 'Coming soon' && (
                <a href={currentProject.link} className="card-link" target="_blank" rel="noreferrer">
                  View project ↗
                </a>
              )}
            </div>
            <p className="project-description">{currentProject.description}</p>
          </article>
        </div>

        <div className="project-carousel-controls" aria-label="Project navigation">
          <button type="button" className="project-arrow" onClick={() => showProject(activeProject - 1)} aria-label="Previous project">
            <span aria-hidden="true">←</span>
          </button>
          <div className="project-dots" role="group" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={`project-dot${index === activeProject ? ' is-active' : ''}`}
                onClick={() => showProject(index)}
                aria-label={`Show project ${index + 1}: ${project.title}`}
                aria-current={index === activeProject ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" className="project-arrow" onClick={() => showProject(activeProject + 1)} aria-label="Next project">
            <span aria-hidden="true">→</span>
          </button>
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

function Interests() {
  return (
    <Section id="interests" title="Interests" intro="A few things I enjoy outside work.">
      <div className="interest-list">
        <article className="interest-row">
          <h3>Film & Television</h3>
          <p>Frequent film enjoyer, often taking inspiration from these types of storytelling for my own personal art and if you're curious my favourite movie is Mean Girls and favourite show is Game of thrones.</p>
        </article>
        <article className="interest-row">
          <h3>Culinary Arts</h3>
          <p>I take cooking seriously, I take pleasure and pride on feeding people good food, similar to that is my baking, but thats more of a peacful endevour. </p>
        </article>
        <article className="interest-row">
          <h3>Sports</h3>
          <p>An on and off sports fan, I will always be a loyal supporter of Gilas, but other than that, for a while I had been intrested in american football but that fleeted almost instantly, now i've found love with the other type of football a.k.a soccer, i'am now a loyal Real Madrid fan.</p>
        </article>
        <article className="interest-row">
          <h3>Comic Books</h3>
          <p>My dream in the future is to have my own comic book collection, similar to how others collect novels, I hope to someday have a vast collections of my favourite stories, and shoes.</p>
        </article>
        <article className="interest-row">
          <h3>Music</h3>
          <p>Music is a big part of my life, it's so integral to the point that I don't really think I can function without it, I truly believe it helps me with my work.</p>
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
    certifications: <Certifications />,
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
