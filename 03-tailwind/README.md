# Mini Loja – Tailwind CSS

Implementação da **Atividade 6 – Estilização em React "Mini Loja"** usando **Tailwind CSS**.

## Como rodar
1. `npm install`
2. `npm run dev`

## O que foi implementado
- Navbar fixa com logo, **toggle de tema** (claro/escuro com persistência) e **badge** do carrinho.
- Grid de produtos responsivo com **breakpoints exatos**: ≤480px (1 col), 481–768px (2 cols), 769–1024px (3 cols), ≥1025px (4 cols).
- Card 1:1 (sem layout shift), **lazy loading** de imagens, título com duas linhas + ellipsis, preço, rating (★), tag (“Novo”/“Promo”).
- Botão “Adicionar” com variantes: **solid / outline / ghost**, estados **hover / focus / disabled**.
- **Skeleton** (carregamento simulado) sem layout shift, com `aspect-ratio` e alturas fixas.
- **Acessibilidade**: navegação por teclado, `aria-*` e foco visível.
- **Transições**: 150–200ms usando `transform`/`opacity`.
- **Tokens** (cores, espaçamentos, raio, sombras) definidos no `tailwind.config.js` (**screens** com 481/769/1025px) e variáveis CSS para integração com utilitários..

## Estrutura
- `src/components/` – `Navbar`, `ProductCard`, `Button`, `Skeleton`
- `src/data/products.js`
- `src/contexts/` – `context.js` (carrinho + tema)
- `src/App.jsx`, `src/main.jsx`
