# Akash Kushwaha — Portfolio

Senior Software Engineer · AI-Native Full-Stack Engineer

A multi-page portfolio covering production applications, client delivery, practical AI systems, open-source engineering and independent product work.

## Pages

- Home: introduction, selected products, engineering approach, career journey and FAQs.
- Work: filterable project index and individual case studies with an overview, challenge, numbered contributions, decisions and technology.
- Onelab Ventures: an employer overview linking to NSE / Corpository, KisanGrow, Machli and Complimate.
- About: working style, career timeline, education and languages.
- Writing: searchable links to published Medium articles, with topic filters.
- Hire Me: engagement options, enquiry form and the AI Full-Stack resume download. The form prepares an email in the visitor’s email application for review and sending.

## Projects

Brandhub, NSE / Corpository, KisanGrow, Machli, Complimate, YourKhata, ml-uikit, Aira, Generative AI Job-Application Assistant, Bug Buster and Sci-WebHub.

Brandhub has an internal case study without external website or app links. Public product links are provided where appropriate for the other projects.

## Run locally

```sh
npm install
npm run dev
```

Open the HTTP address printed by Vite. Opening source HTML with `file://` does not run the application.

```sh
npm run build
npm run preview
```

Deploy `dist/`. Each page has its own built HTML entry, so nested URLs support direct navigation and refresh on static hosting.

## Structure

- `index.html`: home page
- `work/*/index.html`: individual case studies
- `about/`, `blog/`, `hire/`: supporting pages
- `src/main.js`: menu, filtering and enquiry behaviour
- `src/style.css`, `public/studio.css`: responsive visual styles
- `public/fonts/`: bundled fonts
- `public/Akash_A_Resume.pdf`: AI Full-Stack resume

Private client code, credentials and internal screenshots are not included.
