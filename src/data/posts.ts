// Artigos do blog: arquivos Markdown em src/posts/<slug>.md com frontmatter
// title, description e date (AAAA-MM-DD). A pasta pode estar vazia.
type Frontmatter = { title: string; description?: string; date: string; draft?: boolean };
type PostModule = { frontmatter: Frontmatter; Content: any };

const modules = import.meta.glob<PostModule>('../posts/*.md', { eager: true });

export const posts = Object.entries(modules)
  .map(([file, mod]) => ({
    slug: file.split('/').pop()!.replace(/\.md$/, ''),
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .filter((post) => !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
