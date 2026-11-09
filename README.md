# Site pessoal

Código do meu site, [erickaraujodados.com.br](https://erickaraujodados.com.br): quem sou, minha trajetória com dados, projetos, blog e contato.

## O projeto

- **Site estático** em [Astro](https://astro.build): as páginas são geradas uma vez e servidas prontas, sem banco de dados nem servidor rodando.
- **Blog em Markdown:** cada artigo é um arquivo em `src/posts/`.
- **Trajetória em linha do tempo:** cada barra é proporcional ao tempo no cargo, e clicar no cargo abre a descrição. Funciona sem JavaScript e pelo teclado.
- **Fontes no próprio site** (Fraunces e Inter), sem chamadas a serviços externos.
- **Domínio e e-mail próprios:** o DNS fica na Cloudflare com DNSSEC, e o e-mail usa SPF, DKIM e DMARC.

## Estrutura

```
src/
  pages/        rotas do site (Início, Sobre, Projetos, Blog, Contato)
  layouts/      estrutura comum das páginas
  components/   cabeçalho, rodapé e linha do tempo
  data/         dados do site, trajetória e leitura dos artigos
  posts/        artigos do blog em Markdown
  styles/       cores e tipografia
  assets/       imagens otimizadas no build
public/         arquivos servidos como estão (favicon, robots.txt)
tests/          verificação do site gerado
```

## Como rodar

Requer Node.js 22.12 ou superior.

```bash
npm install
npm run dev     # servidor local em http://localhost:4321
npm test        # gera o site em dist/ e verifica títulos, idioma e links internos
```

## Escrever um artigo

Crie `src/posts/<endereco-do-artigo>.md`:

```markdown
---
title: Título do artigo
description: Resumo de uma frase.
date: 2026-11-09
draft: true      # opcional: esconde o artigo até a publicação
---

Texto em Markdown.
```

## Contato

[contato@erickaraujodados.com.br](mailto:contato@erickaraujodados.com.br) · [LinkedIn](https://www.linkedin.com/in/er1ckaraujo)
