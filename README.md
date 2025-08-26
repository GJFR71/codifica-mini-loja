
# Mini Loja — Estilização em React (4 versões)

Implementação da mesma tela usando quatro abordagens de estilo. A ideia é comparar o que muda (e o que não muda) quando variamos a técnica:

CSS Global (01-css-global/)

CSS Modules (02-css-modules/)

Tailwind CSS (03-tailwind/)

styled-components (04-styled-components/)

# Por que quatro versões?

Para evidenciar prós e contras de cada estratégia: escopo de estilos, organização, reuso, velocidade de prototipagem e controle fino de tema/animações. O layout, os componentes e os dados são os mesmos — muda só a forma de estilizar.

# O que a tela entrega

Navbar fixa com logo, alternância de tema (claro/escuro com persistência) e badge do carrinho.

Grid de produtos com breakpoints exatos:
≤480px (1 col) · 481–768px (2) · 769–1024px (3) · ≥1025px (4).

Card com imagem 1:1, título em 2 linhas com ellipsis, preço, rating (★), tag (“Novo”/“Promo”) e botão Adicionar (solid / outline / ghost).

Estados e interações: hover (elevação/sombra), focus visível, disabled, e skeleton inicial (~900 ms) sem layout shift.

Acessibilidade: navegação por teclado, aria-* quando apropriado, contraste ≥ 4.5:1, aria-live/aria-busy no carregamento.

Animações: transições entre 150–250 ms (transform/opacity).

Dados: 6 produtos com imagens locais em src/assets/ (funciona offline).





# Exemplo com CSS Global:

cd 01-css-global
npm install
npm run dev


Outras versões (em portas dedicadas):

# CSS Modules
cd 02-css-modules
npm install
npm run dev -- --port=5175

# Tailwind
cd 03-tailwind
npm install
npm run dev -- --port=5176

# styled-components
cd 04-styled-components
npm install
npm run dev -- --port=5177


Build/preview (qualquer versão):

npm run build
npm run preview


# Licença

Projeto educacional desenvolvido para a Atividade 6 — Codifica Edu.
