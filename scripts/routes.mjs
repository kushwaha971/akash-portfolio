import { mkdir, readFile, writeFile } from 'node:fs/promises';
const html = await readFile('dist/index.html', 'utf8');
const routes = ['work','about','blog','contact', ...['brandhub','aira','genai-assistant','yourkhata','ml-uikit','bug-buster','sci-webhub'].map(id => 'work/' + id)];
for (const route of routes) {
  await mkdir('dist/' + route, { recursive: true });
  await writeFile('dist/' + route + '/index.html', html);
}
await writeFile('dist/404.html', html);
