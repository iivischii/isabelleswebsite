# Cyrene Isabelle Wenceslao — Portfolio

**"A Letter of Work & Curiosity."** The portfolio of a BSIT student focused on UI/UX design and frontend development. You open a sealed envelope, then scroll through a letter where every page fills the screen.

**Live site:** https://isabelleswebsite.vercel.app

![Envelope intro](docs/envelope.png)
![Home](docs/home.png)
![About](docs/about.png)
![Skills](docs/skills.png)

## The idea

The whole site is a piece of stationery. Press the wax seal to open the envelope and the letter slides in. Each part of the index is its own full-screen page that snaps into place as you scroll. A row of flowers at the top is the index, so you can jump straight to any page.

## Pages

Home · About · Skills · Hardware · Projects · Certifications · Interests · Contact

## Design decisions

- **Snap-scrolling pages.** Every page fills the screen on desktop and mobile, sized so nothing needs a scrollbar inside the page.
- **Flowers as navigation.** Eight watercolour flowers sit at the top, one per page. The current one grows and shows its name.
- **Colour that moves.** The pink and cream background slides as you scroll, the pink warms up page by page, and on desktop a soft glow follows the mouse. The pink edge lines up with the text on the About and Projects pages so it never cuts through a sentence. On phones each page is a single colour.
- **Pink skill logos.** Every software logo on the Skills page is drawn in one pink that shifts with the scroll. Skills without a logo are shown as pink tags.
- **Framed About cards.** Ornate picture frames hold the degree, school, years and languages.
- **Scales to any screen.** Sizes are in `rem` and the root font size follows the window's width and height, so laptops, big monitors and phones all show the same layout.
- **Accessible basics.** Keyboard navigation (arrow keys, Page Up/Down) and `prefers-reduced-motion` are respected.

## Tech

- React + Vite
- Plain CSS, no UI framework
- Logos from [Simple Icons](https://simpleicons.org) (CC0), plus a few custom badges
- Deployed on Vercel

<!-- Add font credits here if you like, e.g. DM Sans and Cormorant Garamond (Google Fonts) plus your custom display fonts. -->

## Run it locally

```bash
git clone https://github.com/iivischii/isabelleswebsite.git
cd isabelleswebsite
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Edit the content

Everything on the page (profile, facts, projects, certifications, interests and skills) lives at the top of `src/App.jsx`, so you can update the text without touching the layout.

## Contact

Open to OJT internships and collaborations. Email, GitHub and LinkedIn links are on the Contact page of the live site.
