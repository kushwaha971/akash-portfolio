import './style.css';

const iconPaths = {
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  moon: '<path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  spark: '<path d="m12 2 1.5 7.5L21 12l-7.5 1.5L12 21l-1.5-7.5L3 12l7.5-2.5L12 2Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.8c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4a5 5 0 0 0-.1-4S18 0 15 1.6a14 14 0 0 0-6 0C6 0 4.8 0 4.8 0a5 5 0 0 0-.1 4 5.4 5.4 0 0 0-1.5 4.2c0 5.4 3.5 6.6 6.8 7A3.5 3.5 0 0 0 9 18v4" transform="translate(1 2) scale(.9)"/>',
  check: '<path d="m5 12 4 4L19 6"/>'
};

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function icon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.6');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = iconPaths[name] || iconPaths.arrow;
  return svg;
}
function addIcon(node, name) { node.append(icon(name)); }

const projects = [
  {
    id: 'brandhub', number: '01', category: 'ai', categoryLabel: 'AI PRODUCT · THE BRANDING CLUB',
    title: 'Brandhub', role: 'Software Engineer II · Current experience',
    status: 'Production B2B SaaS · AI workflows',
    summary: 'Customer, ordering, billing and finance workflows for a platform serving 8,000+ brands across four European markets.',
    metrics: [['8,000+', 'brands on the platform'], ['70%', 'less manual content effort · team outcome'], ['50%', 'faster page-load time']],
    overview: 'Brandhub is a production B2B SaaS platform used by brands across four European markets. I work on its customer-facing workflows and the services behind ordering, billing and finance operations.',
    challenge: 'The product combines high-volume business workflows with brand-specific content and data. Users need answers grounded in company records, and content tasks need to move faster without sacrificing review or consistency.',
    built: [
      'Built and maintained customer portal, ordering, billing and finance workflows from requirements through development, testing and release.',
      'Developed React, Next.js, TypeScript and Redux interfaces; contributed Node.js and Django APIs, PostgreSQL changes, authentication and role-based access.',
      'Built an LLM assistant that answers natural-language questions using company data. RAG retrieval and vector search supply relevant records as context for grounded responses.',
      'Integrated OpenAI and Gemini APIs, and contributed to prompt and multi-agent workflows for internal use cases.',
      'Contributed to RAG-assisted content workflows that reduced manual content effort by 70% as a team outcome.',
      'Improved page-load time by 50% and achieved Lighthouse scores above 90. Used Claude Code, Codex and MCP for code exploration and debugging, reviewing generated changes before release.'
    ],
    tradeoff: 'Kept AI responses grounded in retrieved company context and inside application access boundaries, while preserving human review in the content workflow.',
    stack: ['React', 'Next.js', 'TypeScript', 'Redux', 'Node.js', 'Django / DRF', 'PostgreSQL', 'RAG', 'Vector search', 'OpenAI API', 'Gemini API']
  },
  {
    id: 'aira', number: '02', category: 'ai', categoryLabel: 'AI SYSTEM · PERSONAL BUILD',
    title: 'Aira', role: 'AI memory and context system',
    status: 'Working prototype · deployment preparation',
    summary: 'A user-controlled memory layer that helps AI tools work from consistent preferences, projects and decisions.',
    metrics: [['Typed memory', 'scoped, versioned records'], ['Hybrid retrieval', 'SQLite FTS5 + vector search'], ['Auditable context', 'provenance and review logs']],
    overview: 'Aira is a memory and context layer for AI tools. It organizes information into user-controlled records so an assistant can retrieve relevant context without treating raw conversation history as canonical memory.',
    challenge: 'AI tools often repeat questions or lose important decisions between sessions. A useful memory system needs to preserve provenance, handle changed or superseded facts, respect privacy boundaries, and fit relevant context into a limited token budget.',
    built: [
      'Designed a provider-independent core with REST, MCP and hooks as integration surfaces.',
      'Implemented typed, scoped and versioned memory records with provenance, confidence, supersession and an auditable lifecycle.',
      'Kept raw conversations separate from canonical memory and filtered disallowed scopes before retrieval.',
      'Built a retrieval pipeline combining SQLite FTS5 and vector search, with candidate fusion, ranking, diversification and token-budgeted context assembly.',
      'Added explicit grants, private sessions and reviewable context-injection logs.'
    ],
    tradeoff: 'Prioritizes portable memory and inspectable context first; broader integrations and sync are staged behind the core privacy and retrieval model.',
    stack: ['Python', 'SQLite', 'FTS5', 'Vector retrieval', 'MCP', 'REST', 'Memory systems', 'System design']
  },
  {
    id: 'genai-assistant', number: '03', category: 'ai', categoryLabel: 'GENERATIVE AI · PERSONAL BUILD',
    title: 'Generative AI Job-Application Assistant', role: 'Product engineering',
    status: 'Built · human-reviewed workflow',
    summary: 'Turns a candidate profile and job description into structured fit notes and tailored application drafts.',
    metrics: [['Profile + JD', 'role-specific context'], ['Structured output', 'fit and skill gaps'], ['Human review', 'before any application']],
    overview: 'A generative AI assistant for organizing candidate information, role requirements and application materials. It helps produce useful drafts while leaving review and submission decisions with the candidate.',
    challenge: 'Job applications involve repeated comparisons between the same work history and many role descriptions. The system should reduce repetitive writing while keeping facts traceable to the candidate profile and avoiding unsupported claims.',
    built: [
      'Created workflows to organize candidate profiles, resume variants, job descriptions and application tracking.',
      'Added LLM-powered profile-to-role comparison with structured fit and skill-gap summaries.',
      'Generated tailored responses and role-specific documents for candidate review.',
      'Used configurable model-provider integration, validation and editable, candidate-controlled profile data.',
      'Kept application review and submission under the candidate’s control.'
    ],
    tradeoff: 'Optimizes for transparent drafts that a candidate can edit, rather than automatic applications that can misstate experience or preferences.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'LLM integration', 'Prompt engineering']
  },
  {
    id: 'yourkhata', number: '04', category: 'product', categoryLabel: 'INDEPENDENTLY BUILT PRODUCT',
    title: 'YourKhata', role: 'Product discovery · Full-stack implementation · Deployment',
    status: 'Live · Independently built',
    summary: 'A multi-tenant business platform connecting ledgers, invoicing, inventory, expenses, payments and records.',
    metrics: [['Multi-tenant', 'separate business books'], ['99+ / 90+', 'desktop / mobile PageSpeed'], ['End-to-end', 'product to deployment']],
    overview: 'YourKhata connects business records that are often managed across separate tools. I independently built the product across requirements, workflow design, interface, backend APIs, data and deployment.',
    challenge: 'The product needs to make related records work together while keeping each business’s information separated, corrections traceable, and financial data consistent across screens and APIs.',
    built: [
      'Built ledger, GST invoicing, purchase, expense, inventory and payment workflows with reports and reminders.',
      'Supported multiple businesses under one account with separated records and owner, admin, staff and accountant roles.',
      'Added traceable corrections, PDF statements, CSV import/export, downloadable business data and direct-to-business UPI QR workflows.',
      'Built responsive React and Next.js interfaces with TypeScript, Redux Toolkit and Tailwind CSS, backed by Django REST APIs and PostgreSQL.',
      'Managed containerized deployment with Docker, Railway and Nginx, plus scheduled jobs.',
      'Implemented technical SEO/GEO foundations including solution pages, metadata, canonicals, robots and sitemaps, FAQs and structured data.',
      'Reached PageSpeed 99+ on desktop and 90+ on mobile.'
    ],
    tradeoff: 'Kept common records and permissions shared across workflows, while giving each business type clear screens and purpose-specific operations.',
    stack: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Python', 'Django / DRF', 'PostgreSQL', 'Docker', 'Railway', 'Nginx', 'Technical SEO/GEO'],
    url: 'https://yourkhata.com/',
    linkLabel: 'Visit YourKhata'
  },
  {
    id: 'ml-uikit', number: '05', category: 'open-source', categoryLabel: 'OPEN SOURCE · PUBLISHED ON NPM',
    title: 'ml-uikit', role: 'Library author · Component architecture · npm publishing',
    status: 'Published · React and TypeScript',
    summary: 'Reusable components and product-ready inputs packaged for use across React applications.',
    metrics: [['Published', 'npm package'], ['Typed APIs', 'React 18 / 19'], ['Reusable', 'Storybook documented components']],
    overview: 'I built and published ml-uikit to reduce repeated UI work across applications. The package brings typed React components, interaction patterns and Storybook examples into a reusable library.',
    challenge: 'Product teams often rebuild the same controls and interaction patterns. A useful library needs a discoverable API, accessible states, sensible theming and packaging that behaves predictably in consuming applications.',
    built: [
      'Built reusable components on shadcn/ui and Radix foundations with typed APIs and customizable Tailwind styling.',
      'Added phone, date-range and search inputs, typography, pagination, forms, sidebars, charts and table controls.',
      'Added dark-mode support and Storybook examples for component development and documentation.',
      'Configured ESM/CommonJS distribution, TypeScript declarations, externalized dependencies and tree-shaking.',
      'Set up Storybook accessibility tooling and Vitest/Playwright story testing.',
      'Published the package to npm for use by other applications.'
    ],
    tradeoff: 'Builds on accessible primitives rather than recreating them, while keeping product-facing APIs composable and customizable.',
    stack: ['React 18 / 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Storybook', 'Vite', 'Vitest', 'Playwright'],
    url: 'https://www.npmjs.com/package/ml-uikit',
    linkLabel: 'View package on npm'
  },
  {
    id: 'bug-buster', number: '06', category: 'ai', categoryLabel: 'AI AUTOMATION · DEVELOPER TOOL',
    title: 'Bug Buster', role: 'AI workflow design and integration',
    status: 'Used in production team workflows',
    summary: 'A Jira-connected assistant that analyzes bug context and sends a report with suggested fixes.',
    metrics: [['Jira context', 'issue details and history'], ['AI analysis', 'structured report'], ['Human review', 'before code changes']],
    overview: 'Bug Buster connects Jira issue context with an OpenAI-powered analysis workflow to make bug investigation more repeatable for developers.',
    challenge: 'Bug reports can be incomplete or spread across issue details and discussion. Developers spend time collecting context before they can identify likely causes and next steps.',
    built: [
      'Connected Jira issue data and relevant context to an OpenAI analysis workflow.',
      'Generated a structured report with likely causes and suggested fixes when a bug was reported.',
      'Automated the repetitive handoff from issue creation to an investigation summary.',
      'Kept engineers responsible for reviewing suggestions and validating any code changes.'
    ],
    tradeoff: 'Automates context gathering and first-pass analysis, not the final decision to change or ship code.',
    stack: ['Jira API', 'OpenAI API', 'Prompt engineering', 'Workflow automation', 'Issue triage']
  },
  {
    id: 'sci-webhub', number: '07', category: 'systems', categoryLabel: 'DEVELOPER TOOLING · DEPLOYMENT',
    title: 'Sci-WebHub', role: 'Backend and deployment workflow engineering',
    status: 'Public repository',
    summary: 'A deployment platform coordinating GitHub-based builds, environment configuration and release history.',
    metrics: [['GitHub builds', 'repository-triggered workflow'], ['Environment setup', 'tracked configuration'], ['Release history', 'logs and versions']],
    overview: 'Sci-WebHub provides backend services for build and deployment workflows connected to GitHub repositories.',
    challenge: 'A project deployment flow needs to coordinate builds, environment settings, logs and version history without losing track of what was shipped.',
    built: [
      'Built API services for project builds and environment configuration.',
      'Created database workflows to track deployments, logs and version history.',
      'Connected repository-based build steps to deployment records.'
    ],
    tradeoff: 'Focused on the backend workflow and traceable release records rather than claiming a large hosting platform or customer scale.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'GitHub API', 'Deployment workflows'],
    url: 'https://github.com/kushwaha971/Sci-webhub',
    linkLabel: 'View repository'
  }
];

const grid = document.querySelector('#project-grid');
const projectDialog = document.querySelector('#project-dialog');
const projectDetail = document.querySelector('#project-detail');
document.querySelector('#project-close').addEventListener('click', function () { projectDialog.close(); });
function tagList(tags) {
  const list = make('div', 'tag-list');
  tags.forEach(function (tag) { list.append(make('span', 'tag', tag)); });
  return list;
}
function metricList(metrics) {
  const list = make('div', 'case-metrics');
  metrics.forEach(function (metric) {
    const item = make('div', 'case-metric');
    item.append(make('strong', '', metric[0]), make('span', '', metric[1]));
    list.append(item);
  });
  return list;
}
function renderProjects(filter) {
  grid.replaceChildren();
  const shown = projects.filter(function (project) { return filter === 'all' || project.category === filter; });
  shown.forEach(function (project) {
    const card = make('article', 'case-card');
    card.dataset.category = project.category;
    const top = make('div', 'case-card-top');
    top.append(make('span', 'case-number', project.number), make('span', 'case-category', project.categoryLabel));
    card.append(top, make('h3', '', project.title), make('p', 'case-role', project.role), make('p', 'case-summary', project.summary), metricList(project.metrics), tagList(project.stack));
    const view = make('button', 'case-action', 'Explore case study');
    view.type = 'button';
    view.setAttribute('aria-haspopup', 'dialog');
    view.addEventListener('click', function () { openProject(project.id); });
    view.append(icon('arrow'));
    card.append(view);
    if (project.url) {
      const external = make('a', 'case-external', project.linkLabel + ' ↗');
      external.href = project.url;
      external.target = '_blank';
      external.rel = 'noopener noreferrer';
      card.append(external);
    }
    grid.append(card);
  });
}
function caseSection(title, body, bullets) {
  const section = make('section', 'case-detail-section');
  section.append(make('p', 'case-detail-label', title), make('p', 'case-detail-copy', body));
  if (bullets && bullets.length) {
    const list = make('ul', 'case-detail-list');
    bullets.forEach(function (bullet) { list.append(make('li', '', bullet)); });
    section.append(list);
  }
  return section;
}
function openProject(projectId) {
  const project = projects.find(function (item) { return item.id === projectId; });
  if (!project) return;
  projectDetail.replaceChildren();
  const header = make('div', 'case-detail-header');
  const close = make('button', 'icon-button case-close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', 'Close case study');
  close.addEventListener('click', function () { projectDialog.close(); });
  header.append(make('p', 'eyebrow', 'CASE STUDY ' + project.number + ' · ' + project.categoryLabel), close);
  projectDetail.append(header, make('h2', 'case-detail-title', project.title), make('p', 'case-detail-role', project.role), make('p', 'case-detail-status', project.status), metricList(project.metrics));
  projectDetail.append(caseSection('OVERVIEW', project.overview), caseSection('THE CHALLENGE', project.challenge), caseSection('WHAT I BUILT', '', project.built), caseSection('TRADE-OFFS & OUTCOME', project.tradeoff));
  const tech = make('section', 'case-detail-section');
  tech.append(make('p', 'case-detail-label', 'TECH STACK'), tagList(project.stack));
  projectDetail.append(tech);
  if (project.note) projectDetail.append(make('p', 'project-note', project.note));
  if (project.url) {
    const link = make('a', 'button primary case-detail-link', project.linkLabel);
    link.href = project.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(icon('arrow'));
    projectDetail.append(link);
  }
  if (!projectDialog.open) projectDialog.showModal();
}
renderProjects('all');
document.querySelectorAll('[data-filter]').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('[data-filter]').forEach(function (item) {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    renderProjects(button.dataset.filter);
  });
});
document.querySelector('#project-close').addEventListener('click', function () { projectDialog.close(); });
projectDialog.addEventListener('click', function (event) { if (event.target === projectDialog) projectDialog.close(); });

const stackGroups = [
  ['AI & LLM engineering', ['Python', 'LangChain', 'RAG', 'LLM integration', 'OpenAI API', 'Gemini API', 'Vector retrieval', 'Agentic AI', 'Prompt engineering', 'MCP', 'Claude Code', 'Codex']],
  ['Frontend', ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI', 'Storybook']],
  ['Backend & data', ['Node.js', 'Express', 'Django / DRF', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL']],
  ['Delivery', ['Git / GitHub', 'Docker', 'Railway', 'Nginx', 'Playwright', 'Vitest', 'Code review', 'Performance', 'SEO / GEO']]
];
const stackGrid = document.querySelector('#stack-grid');
stackGroups.forEach(function (group) {
  const section = make('article', 'stack-group');
  section.append(make('h3', '', group[0]), tagList(group[1]));
  stackGrid.append(section);
});

const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
const searchItems = [
  {name:'Work', url:'#work', label:'Section'}, {name:'Experience', url:'#experience', label:'Section'},
  {name:'About', url:'#about', label:'Section'}, {name:'Writing', url:'#writing', label:'Section'},
  {name:'ml-uikit playground', url:'#ml-uikit', label:'Section'}, {name:'Contact', url:'#contact', label:'Section'},
  {name:'Resume', url:'/Akash_A_Resume.pdf', label:'PDF'},
  {name:'LinkedIn', url:'https://www.linkedin.com/in/akash-kushwaha-250949224/', label:'Profile'}
].concat(projects.map(function (project) { return {name:project.title, project:project.id, label:'Case study'}; }));
function renderSearch() {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.replaceChildren();
  const matches = searchItems.filter(function (item) { return !query || (item.name + ' ' + item.label).toLowerCase().includes(query); });
  if (!matches.length) { searchResults.append(make('p', 'search-empty', 'No matches. Try “Aira”, “Brandhub”, “RAG”, or “résumé”.')); return; }
  matches.forEach(function (item) {
    const result = make(item.project ? 'button' : 'a', 'search-result');
    result.append(make('span', '', item.name), make('small', '', item.label + ' ↗'));
    if (item.project) {
      result.type = 'button';
      result.addEventListener('click', function () { searchDialog.close(); openProject(item.project); });
    } else result.href = item.url;
    searchResults.append(result);
  });
}
function openSearch() { searchInput.value = ''; renderSearch(); searchDialog.showModal(); searchInput.focus(); }
document.querySelector('#search-open').addEventListener('click', openSearch);
document.querySelector('#search-close').addEventListener('click', function () { searchDialog.close(); });
searchInput.addEventListener('input', renderSearch);
searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { event.preventDefault(); const first = searchResults.querySelector('.search-result'); if (first) first.click(); }
});
document.addEventListener('keydown', function (event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); if (projectDialog.open) projectDialog.close(); searchDialog.open ? searchDialog.close() : openSearch(); }
});

const themeButton = document.querySelector('#theme-toggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.replaceChildren(icon(dark ? 'moon' : 'sun'));
  themeButton.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#0b0d09' : '#f4f2ed';
}
function hydrateIcons(root) { (root || document).querySelectorAll('[data-icon]').forEach(function (element) { element.replaceChildren(icon(element.dataset.icon)); }); }
hydrateIcons();
updateThemeButton();
themeButton.addEventListener('click', function () {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('akash-theme', document.documentElement.dataset.theme); } catch {}
  updateThemeButton();
});

function updateClock() {
  const clock = document.querySelector('#india-time');
  if (clock) clock.textContent = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit'}).format(new Date());
}
updateClock();
window.setInterval(updateClock, 60000);

const copyButton = document.querySelector('#copy-install');
copyButton.addEventListener('click', async function () {
  try { await navigator.clipboard.writeText('npm install ml-uikit'); showToast('Install command copied.'); }
  catch { showToast('Copy this command: npm install ml-uikit'); }
});
document.querySelector('#demo-action').addEventListener('click', function () { document.querySelector('#demo-status').textContent = 'Ready for the next interaction'; showToast('Demo interaction complete.'); });
document.querySelector('#demo-save').addEventListener('click', function (event) {
  const button = event.currentTarget;
  const saved = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(saved));
  button.replaceChildren(icon(saved ? 'check' : 'arrow'), document.createTextNode(saved ? 'Saved for later' : 'Save for later'));
});
document.querySelector('.switch').addEventListener('click', function (event) {
  const button = event.currentTarget;
  const enabled = button.getAttribute('aria-checked') !== 'true';
  button.setAttribute('aria-checked', String(enabled));
  showToast('Demo notifications ' + (enabled ? 'enabled' : 'disabled') + '.');
});
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(function () { toast.classList.remove('visible'); }, 2800);
}

import contributionData from './contributions.json';
const chart = document.querySelector('#contribution-chart');
const firstDate = new Date(contributionData.days[0].date + 'T00:00:00Z');
const lastDate = new Date(contributionData.days.at(-1).date + 'T00:00:00Z');
const leading = firstDate.getUTCDay();
const columns = Math.ceil((leading + contributionData.days.length) / 7);
const calendar = make('div', 'calendar-layout');
calendar.style.setProperty('--weeks', columns);
const weekdays = make('div', 'calendar-weekdays');
weekdays.setAttribute('aria-hidden', 'true');
weekdays.innerHTML = '<span style="grid-row:2">Mon</span><span style="grid-row:4">Wed</span><span style="grid-row:6">Fri</span>';
const months = make('div', 'chart-months');
months.style.setProperty('--weeks', columns);
months.setAttribute('aria-hidden', 'true');
const cells = make('div', 'contribution-chart');
cells.style.setProperty('--weeks', columns);
cells.setAttribute('role', 'img');
cells.setAttribute('aria-label', contributionData.total + ' public GitHub contributions from ' + contributionData.days[0].date + ' to ' + contributionData.days.at(-1).date);
for (let index = 0; index < leading; index += 1) cells.append(make('i', 'calendar-empty'));
let previousMonth = -1;
contributionData.days.forEach(function (day, index) {
  const date = new Date(day.date + 'T00:00:00Z');
  if (date.getUTCMonth() !== previousMonth) { const label = make('span', '', date.toLocaleDateString('en', {month:'short', timeZone:'UTC'})); label.style.gridColumn = String(Math.floor((leading + index) / 7) + 1); months.append(label); previousMonth = date.getUTCMonth(); }
  const cell = make('i', '');
  cell.dataset.level = day.level;
  cell.title = day.count === undefined ? 'Contribution activity on ' + day.date : day.count + ' contribution' + (day.count === 1 ? '' : 's') + ' on ' + day.date;
  cells.append(cell);
});
calendar.append(months, weekdays, cells);
chart.append(calendar);
document.querySelector('#contribution-count').textContent = contributionData.total;
document.querySelector('#contribution-snapshot').textContent = 'Public GitHub activity · ' + firstDate.toLocaleDateString('en', {month:'short', day:'numeric', year:'numeric', timeZone:'UTC'}) + ' – ' + lastDate.toLocaleDateString('en', {month:'short', day:'numeric', year:'numeric', timeZone:'UTC'}) + '. Updated ' + contributionData.fetchedAt + '. Private work is not represented here.';

document.querySelectorAll('.stack-group').forEach(function (group) { /* stack tags are static */ });

