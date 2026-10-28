# Akash Kushwaha — Portfolio

Senior Software Engineer · AI-Native Full-Stack Engineer

A personal portfolio for production SaaS work, applied AI systems, open-source tools, and independent products. The site is built as a lightweight Vite application with semantic HTML, CSS, and JavaScript.

## Portfolio sections

- **Selected work:** case studies with an overview, problem, contribution, trade-offs, technologies, and outcomes.
- **Experience:** current Brandhub work at The Branding Club and earlier client delivery at Onelab Ventures.
- **About:** product engineering approach, practical AI use, and release discipline.
- **Technology:** AI/LLM, frontend, backend/data, and delivery skills.
- **Writing:** selected Medium articles.
- **Open source:** ml-uikit, published on npm, with an interactive component preview.
- **Contact:** email and WhatsApp links.

## Projects represented

- **Brandhub:** production B2B SaaS workflows and an LLM assistant using RAG and vector retrieval. Metrics are described as team outcomes where appropriate.
- **YourKhata:** independently built multi-tenant product for connected business records and workflows.
- **Aira:** working prototype for user-controlled AI memory and context. Deployment preparation is in progress.
- **Generative AI Job-Application Assistant:** profile-to-role matching and human-reviewed application drafts.
- **ml-uikit:** published React and TypeScript component library.
- **Bug Buster:** Jira-connected AI bug-analysis workflow.
- **Sci-WebHub:** GitHub-based build and deployment tracking platform.

## Development

This site uses Vite. From this directory, install dependencies with npm install, start the development server with npm run dev, and create a production build with npm run build.

## Public files

- public/Akash_A_Resume.pdf — AI Full-Stack résumé
- public/Akash_F_Resume.pdf — Frontend résumé
- public/akash-profile.png — profile image
- public/stack — local technology icons

Résumé content and project descriptions reflect the profile information and confirmed work details supplied for this portfolio. No customer-sensitive code, screenshots, credentials, or private project data are published.


## Pages and preview

Run `npm run dev` and open `http://127.0.0.1:5173/` to preview the portfolio. Opening the source HTML through `file://` does not run the Vite application.

The site includes `/work/`, `/about/`, `/blog/`, `/contact/`, and `/work/<project>/` case-study pages. The production build creates HTML entries for these routes so direct navigation and refresh work on static hosting. Deploy the generated `dist/` directory.
