// Confere o build em dist/: toda página tem <title> e lang, e todo link interno aponta para um arquivo existente.
// Uso: npm test (roda o build antes).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const exists = (urlPath) => {
  const clean = decodeURI(urlPath.split(/[?#]/)[0]).replace(/^\//, '');
  const target = join(dist, clean);
  return [target, join(target, 'index.html'), `${target}.html`].some((p) => existsSync(p) && statSync(p).isFile());
};

const pages = walk(dist).filter((f) => f.endsWith('.html'));
const errors = [];

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const name = relative(dist, file);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${name}: sem <title>`);
  if (!/<html lang="pt-BR"/.test(html)) errors.push(`${name}: sem lang="pt-BR"`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (!exists(url)) errors.push(`${name}: link quebrado ${url}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`OK: ${pages.length} páginas, nenhum link interno quebrado.`);
