# Akash Kushwaha — portfolio

A close visual recreation of https://jyotimoydas.in/ personalized for Akash. It follows the reference's 768px column, dotted cover, monogram, profile row, border grid, IBM Plex Sans / Geist Mono typography, section ordering, theme control, search, and expandable project presentation. It uses a small Vite application with semantic HTML, CSS, and JavaScript.

## Run

```sh
npm install
npm run dev
```

Local preview: http://127.0.0.1:5173

```sh
npm run build
npm run preview
npm test
```

Browser tests use installed Google Chrome. Deploy the generated `dist` folder to a static host. No backend, credentials, or API keys are needed.

## Edit content

- `index.html`: profile, résumé link, social links, experience, blog, page metadata.
- `src/main.js`: projects, learning answers, featured LinkedIn URL, stack and interaction logic.
- `src/style.css`: matching layout, fonts, mobile styling, light/dark themes.
- `src/contributions.json`: actual public GitHub activity snapshot, captured September 11, 2026. This is not a live API feed.
- `public/Akash_Resume.pdf`: downloadable résumé.

## Content sources and boundaries

- Experience, education, skills, Bug Buster, ml-uikit, and Sci-WebHub come from the supplied Akash_Resume.pdf.
- BrandHub is identified as current work by Akash. BrandHub now appears only within experience at The Branding Club. Role details combine the résumé, the owner’s supplied updates, and a read-only review of BrandHub architecture docs, version switches, document PDF service, customer route handling, and Akash-authored commit subjects. No internal source code or screens are published.
- Aira-Project-Overview_1.pdf identifies Aira as pre-MVP. The portfolio describes Akash’s architecture ownership and retains the pre-MVP status.
- aaaa12.pdf is an interview question bank. The learning section includes original concise study answers, not invented employment achievements or a claim to have completed the 24-week plan.
- GitHub profile and repository links were verified through public GitHub API responses. The supplied portrait is served locally as `public/akash-profile.png`.
- ml-uikit metadata was checked against https://registry.npmjs.org/ml-uikit/latest. The site does not assert sole ownership; it describes the résumé-supported contribution at Metis Labs.
- Medium article links and dates were read from https://medium.com/feed/@kushwahaakash971.
- Featured LinkedIn URL was supplied directly by Akash. LinkedIn blocks text retrieval, so no post title, summary, engagement counts, or quotes were invented. A visitor can open the direct link or load the optional LinkedIn embed. The embed depends on LinkedIn allowing it; the rest of the page works without LinkedIn.
- Component playground controls are local portfolio demonstrations, explicitly labeled. They do not claim to render the actual npm package.
- No interview PDFs or internal project documents are served publicly.

## Attribution

Visual layout originally referenced Jyotirmoy Das. The on-page credit was removed at the owner’s request. Personalized monogram and article illustrations were created in code. Typography: IBM Plex Sans and Geist Mono (SIL Open Font License). Stack icons: Devicon (MIT), upstream https://github.com/devicons/devicon. All page assets are served locally except the user-initiated LinkedIn embed and external destination links.

## Profile update — September 12, 2026

The company display name is The Branding Club, as requested by the owner; the original downloadable résumé is unchanged. The role remains Software Engineer II, emphasizing full-stack responsibility rather than inventing a senior job title. Added owner-supplied design-system outcome (40% faster page builds), RFIS project work (Machli / KisanGrow), EC2 delivery, phone, availability, coder wordmark, and WhatsApp contact links. App identities were checked against their Google Play listings.

The contact form prepares an encoded WhatsApp message locally. The visitor reviews and sends it in WhatsApp; there is no backend submission, inbox, or stored contact data. Editing a prepared form clears the old link. Public contribution counts and cell levels remain unchanged; only styling is greener.
