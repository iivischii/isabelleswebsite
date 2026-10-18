import { useCallback, useEffect, useRef, useState } from 'react'
import stamp from './assets/Stamp.png'
import compu from './assets/compu.png'
import bloom1 from './assets/flower 1.png'
import bloom2 from './assets/flower 2.png'
import bloom3 from './assets/flower 3.png'
import bloom4 from './assets/flower 4.png'
import bloom5 from './assets/flower 5.png'
import bloom6 from './assets/flower 6.png'
import bloom7 from './assets/flower 7.png'
import bloom8 from './assets/flower 8.png'
import Landing from './Landing.jsx'
import { brandIcons, customIcons } from './skillIcons.js'

const currentYear = new Date().getFullYear()

/* =========================================================
   YOUR CONTENT - edit everything here and the page updates.
   ========================================================= */
const profile = {
  name: 'Cyrene Isabelle Wenceslao',
  note: '9 · 14 · 2004',   // small text at the top right of the page. Change it or make it '' to hide it.
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
  { label: 'Languages', value: 'English & Filipino' },
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
      'I independently authored the research paper, with guidance from advisers and professors, and contributed extensively to the development of the game using Unity and C#. My responsibilities included designing every character with the assistance of AI tools, primarily Tripo and Krita, using a drawing tablet to refine the artwork. During the early development stages, I also created a storyboard to establish the game\'s narrative direction. For implementation, I developed the game’s introduction and several mini-games, including a maze, a Tumbang Preso-inspired game in Chapter 2, and a puzzle and Jackstone-inspired game in Chapter 3.',
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
  { title: 'Junior Philippine Computer Society (JPCS)', detail: 'Member of the organization\'s Dasmariñas Chapter', date: '2025 - 2026' },
]


const interests = [
  ['Film & Television', "Frequent film enjoyer, often taking inspiration from these types of storytelling for my own personal art. If you're curious, my favourite movie is Mean Girls and my favourite show is Game of Thrones."],
  ['Culinary Arts', 'I take cooking seriously, and I take pleasure and pride in feeding people good food. Similar to that is my baking, but that is more of a peaceful endeavour.'],
  ['Sports', "An on-and-off sports fan. I will always be a loyal supporter of Gilas. For a while I was interested in American football, but that faded almost instantly. Now I've found love with the other type of football, a.k.a. soccer, and I'm a loyal Real Madrid fan."],
  ['Comic Books', 'My dream is to have my own comic book collection, similar to how others collect novels. I hope to someday have a vast collection of my favourite stories, and shoes.'],
  ['Music', "Music is a big part of my life, so integral that I don't think I can function without it. I truly believe it helps me with my work."],
]

/* Skills. Anything software-related with a logo shows the logo (painted pink by the CSS);
   everything else shows as a pink pill. Add a logo name below to give an item a logo. */
const skillGroups = [
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { group: 'Languages', items: ['JavaScript', 'Dart', 'C#', 'Python (basic)'] },
  { group: 'Mobile & Games', items: ['React Native', 'Flutter', 'Unity', 'Blender'] },
  { group: 'Backend & Data', items: ['Supabase', 'Firebase', 'SQL', 'Database management'] },
  { group: 'Tools & Hosting', items: ['Visual Studio', 'GitHub', 'Vercel', 'Render'] },
  { group: 'UI/UX & Design', items: ['UI/UX Design', 'Figma', 'Canva', 'Krita'] },
  { group: 'Strengths', items: ['Quality Assurance', 'Project Management', 'Technical Documentation', 'Academic Writing', 'Team Communication'] },
  { group: 'Video & AI', items: ['CapCut', 'Claude', 'Copilot', 'ChatGPT'] },
]

const logos = {
  HTML: 'html5', CSS: 'css', JavaScript: 'javascript', 'React.js': 'react', Dart: 'dart', 'C#': 'csharp',
  'Python (basic)': 'python', 'React Native': 'react', Flutter: 'flutter', Unity: 'unity', Blender: 'blender',
  Supabase: 'supabase', Firebase: 'firebase', SQL: 'sql', 'Visual Studio': 'vs', GitHub: 'github',
  Vercel: 'vercel', Render: 'render', Figma: 'figma', Canva: 'canva', Krita: 'krita', CapCut: 'capcut',
  Claude: 'claude', Copilot: 'copilot', ChatGPT: 'chatgpt',
}

/* Order here = order of the pages AND of the flowers at the top. */
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About', bloom: bloom1 },
  { id: 'skills', label: 'Skills', bloom: bloom2 },
  { id: 'hardware', label: 'Hardware', bloom: bloom3 },
  { id: 'projects', label: 'Projects', bloom: bloom4 },
  { id: 'certifications', label: 'Certifications', bloom: bloom5 },
  { id: 'interests', label: 'Interests', bloom: bloom6 },
  { id: 'contact', label: 'Contact', bloom: bloom7 },
]
const at = (id) => sections.findIndex((s) => s.id === id)

/* =========================================================
   SMALL PIECES
   ========================================================= */
function Logo({ id }) {
  const path = brandIcons[id]
  return path ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} fill="currentColor" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: customIcons[id] }} />
  )
}

/* one full-screen page */
function Card({ id, title, intro, children }) {
  const no = at(id)
  const s = sections[no]
  return (
    <section id={id} className={`card ${no % 2 ? 'side-r' : 'side-l'}`}>
      <img className="bloom" src={s.bloom} alt="" aria-hidden="true" />
      <div className="card-inner">
        <header className="card-head rise">
          <span className="no">{String(no).padStart(2, '0')}</span>
          <h2>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </header>
        <div className="card-body rise d2">{children}</div>
      </div>
    </section>
  )
}

function Projects() {
  const [i, setI] = useState(0)
  const touchX = useRef(null)
  const p = projects[i]
  const show = (n) => setI((n + projects.length) % projects.length)

  return (
    <div
      className="carousel"
      tabIndex={0}
      aria-label="Projects. Use the left and right arrow keys to change project."
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); show(i - 1) }
        if (e.key === 'ArrowRight') { e.preventDefault(); show(i + 1) }
      }}
      onTouchStart={(e) => { touchX.current = e.changedTouches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const d = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(d) > 50) show(i + (d < 0 ? 1 : -1))
        touchX.current = null
      }}
    >
      <article className="proj" key={p.title} aria-live="polite">
        <div className="proj-meta">
          <p className="tags">{p.tags.join(' · ')}</p>
          <h3>{p.title}</h3>
          {p.link && (
            <a className="btn solid" href={p.link} target="_blank" rel="noreferrer">View project ↗</a>
          )}
        </div>
        <p className="proj-text">{p.description}</p>
      </article>
      <div className="carousel-bar">
        <button type="button" className="arrow" onClick={() => show(i - 1)} aria-label="Previous project">←</button>
        <div className="dots" role="group" aria-label="Choose a project">
          {projects.map((x, n) => (
            <button key={x.title} type="button" className={`dot${n === i ? ' on' : ''}`} onClick={() => show(n)} aria-label={`Project ${n + 1}: ${x.title}`} />
          ))}
        </div>
        <button type="button" className="arrow" onClick={() => show(i + 1)} aria-label="Next project">→</button>
        <span className="count">{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
      </div>
    </div>
  )
}

/* =========================================================
   APP
   ========================================================= */
export default function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const [active, setActive] = useState(0)
  const shell = useRef(null)
  const scroller = useRef(null)

  /* fast-travel to a page */
  const go = useCallback((n) => {
    const el = scroller.current
    if (!el) return
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ top: n * el.clientHeight, behavior: calm ? 'auto' : 'smooth' })
  }, [])

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]')
    if (favicon) favicon.href = stamp
  }, [])

  /* focus the pages once the envelope opens, so the arrow keys / Page Up / Page Down flip pages */
  useEffect(() => {
    if (hasEntered) scroller.current?.focus({ preventScroll: true })
  }, [hasEntered])

  /* scroll drives the colours: the pink/white divider slides, the pink shifts warmer */
  useEffect(() => {
    const el = scroller.current
    const root = shell.current
    let raf = 0
    const update = () => {
      raf = 0
      const s = el.scrollTop / (el.clientHeight || 1)
      root.style.setProperty('--split', `${(52 + 12 * Math.cos(s * Math.PI)).toFixed(2)}%`)
      root.style.setProperty('--warm', (0.5 + 0.5 * Math.sin(s * Math.PI * 0.6)).toFixed(3))
      setActive(Math.round(s))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('is-in', e.isIntersecting)),
      { root: el, threshold: 0.45 },
    )
    el.querySelectorAll('.card').forEach((c) => io.observe(c))

    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  /* the mouse moves a soft pink glow around the page */
  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return
    shell.current.style.setProperty('--mx', `${(e.clientX / window.innerWidth) * 100}%`)
    shell.current.style.setProperty('--my', `${(e.clientY / window.innerHeight) * 100}%`)
  }

  return (
    <>
      <div ref={shell} className={`portfolio-shell ${hasEntered ? 'is-revealed' : 'is-covered'}`} onPointerMove={onPointerMove}>
        <div className="backdrop" aria-hidden="true" />
        <div className="frame" aria-hidden="true" />

        {/* top bar: the flowers are the index. Tap one to jump there. */}
        <header className="topbar">
          <button type="button" className="brand" onClick={() => go(0)} aria-label="Back to the start">
            DIGITAL PORTFOLIO <small>{currentYear}</small>
          </button>
          <nav className="flowers" aria-label="Portfolio pages">
            {sections.slice(1).map((s, k) => (
              <button
                key={s.id}
                type="button"
                className={`fl${active === k + 1 ? ' on' : ''}`}
                onClick={() => go(k + 1)}
                aria-label={`Go to ${s.label}`}
                aria-current={active === k + 1 ? 'true' : undefined}
              >
                <img src={s.bloom} alt="" />
                <span>{s.label}</span>
              </button>
            ))}
          </nav>
          <p className="note">{profile.note}</p>
        </header>

        <main className="snap" ref={scroller} tabIndex={-1}>
          {/* 00 HOME */}
          <section id="home" className="card home">
            <img className="bloom bloom-home" src={bloom8} alt="" aria-hidden="true" />
            <div className="home-grid">
              <div className="home-copy rise">
                <p className="eyebrow">DIGITAL PORTFOLIO · {currentYear}</p>
                <h1><span>Cyrene Isabelle</span><em>Wenceslao</em></h1>
                <p className="role">UI/UX Designer · Web Developer · Project Management</p>
                <p className="lede">
                  UI/UX design is my specialty. I create thoughtful mobile and web experiences, and contribute across design, development, and project collaboration.
                </p>
                <div className="cta">
                  <button type="button" className="btn solid" onClick={() => go(at('projects'))}>View projects</button>
                  <button type="button" className="btn" onClick={() => go(at('contact'))}>Say hello</button>
                  {profile.resume && <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>}
                </div>
              </div>
              <aside className="index rise d2">
                <div className="index-head">
                  <img src={stamp} alt="" />
                  <div><p className="kicker">A LITTLE INDEX</p><p className="kicker-note">Choose a page to fly to</p></div>
                </div>
                <nav>
                  {sections.slice(1).map((s, k) => (
                    <button key={s.id} type="button" className="idx" onClick={() => go(k + 1)}>
                      <span className="n">0{k + 1}</span>
                      <span className="t">{s.label}</span>
                      <img src={s.bloom} alt="" />
                    </button>
                  ))}
                </nav>
              </aside>
            </div>
            <div className="home-foot"><span>NU DASMARIÑAS · BS INFORMATION TECHNOLOGY</span><span>© {currentYear} Isabelle Wenceslao</span></div>
            <button type="button" className="cue" onClick={() => go(1)} aria-label="Scroll down">↓</button>
          </section>

          {/* 01 ABOUT */}
          <Card id="about" title="About me">
            <div className="about-grid">
              <p className="about-text">{profile.summary}</p>
              <div className="facts">
                {facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* 02 SKILLS */}
          <Card id="skills" title="Skills & expertise">
            <div className="sk-grid">
              {skillGroups.map((g) => (
                <article className="sk-group" key={g.group}>
                  <h3>{g.group}</h3>
                  <div className="sk-row">
                    {g.items.map((item) =>
                      logos[item] ? (
                        <figure className="sk" key={item}><Logo id={logos[item]} /><figcaption>{item}</figcaption></figure>
                      ) : (
                        <span className="chip" key={item}>{item}</span>
                      ),
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Card>

          {/* 03 HARDWARE */}
          <Card id="hardware" title="Hardware" intro="My home setup for focused development and remote collaboration.">
            <div className="hw">
              <img src={compu} alt="Pink line-art drawing of a desktop workstation" />
              <div>
                <article><h3>Hardware</h3><p>Desktop workstation, dedicated monitor, and peripherals.</p></article>
                <article><h3>Development Environment</h3><p>Windows 11, Visual Studio Code, Git, React, and other development tools.</p></article>
                <article><h3>Remote Work Readiness</h3><p>A workspace equipped for remote collaboration, development, and online meetings.</p></article>
              </div>
            </div>
          </Card>

          {/* 04 PROJECTS */}
          <Card id="projects" title="Projects" intro="Things I’ve built along the way.">
            <Projects />
          </Card>

          {/* 05 CERTIFICATIONS */}
          <Card id="certifications" title="Certifications" intro="Credentials, workshops, and professional involvement.">
            <h3 className="sub">Certifications</h3>
            <div className="certs">
              {certifications.map((c) => (
                <div className="cert" key={c.title}><strong>{c.title}</strong><span>{c.detail}</span><time>{c.date}</time></div>
              ))}
            </div>
            <h3 className="sub">Workshops &amp; Organizations</h3>
            <div className="certs">
              {workshopsNorgs.map((c) => (
                <div className="cert" key={c.title}><strong>{c.title}</strong><span>{c.detail}</span><time>{c.date}</time></div>
              ))}
            </div>
          </Card>

          {/* 06 INTERESTS */}
          <Card id="interests" title="Interests" intro="A few things I enjoy outside work.">
            <div className="likes">
              {interests.map(([name, text]) => (
                <article key={name}><h3>{name}</h3><p>{text}</p></article>
              ))}
            </div>
          </Card>

          {/* 07 CONTACT */}
          <Card id="contact" title="Let’s connect">
            <div className="contact">
              <p>I’m looking for an OJT internship and open to collaborations. The best way to reach me is by email. References are available upon request.</p>
              <div className="cta">
                <a href={`mailto:${profile.email}`} className="btn solid">{profile.email}</a>
                <a href={profile.github} className="btn" target="_blank" rel="noreferrer">Personal GitHub</a>
                <a href={profile.siklabGithub} className="btn" target="_blank" rel="noreferrer">SIKLAB GitHub</a>
                {profile.linkedin && <a href={profile.linkedin} className="btn" target="_blank" rel="noreferrer">LinkedIn</a>}
                {profile.resume && <a href={profile.resume} className="btn" target="_blank" rel="noreferrer">Résumé</a>}
              </div>
            </div>
            <p className="fine">NU DASMARIÑAS · BS INFORMATION TECHNOLOGY · © {currentYear} Isabelle Wenceslao</p>
          </Card>
        </main>
      </div>
      {!hasEntered && <Landing onOpen={() => setHasEntered(true)} />}
    </>
  )
}
