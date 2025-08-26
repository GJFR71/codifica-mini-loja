
Mini Loja — Estilização em React (4 versões)

Implementação da mesma tela usando quatro abordagens de estilo. A ideia é comparar o que muda (e o que não muda) quando variamos a técnica:

CSS Global (01-css-global/)

CSS Modules (02-css-modules/)

Tailwind CSS (03-tailwind/)

styled-components (04-styled-components/)

Por que quatro versões?

Para evidenciar prós e contras de cada estratégia: escopo de estilos, organização, reuso, velocidade de prototipagem e controle fino de tema/animações. O layout, os componentes e os dados são os mesmos — muda só a forma de estilizar.

O que a tela entrega

Navbar fixa com logo, alternância de tema (claro/escuro com persistência) e badge do carrinho.

Grid de produtos com breakpoints exatos:
≤480px (1 col) · 481–768px (2) · 769–1024px (3) · ≥1025px (4).

Card com imagem 1:1, título em 2 linhas com ellipsis, preço, rating (★), tag (“Novo”/“Promo”) e botão Adicionar (solid / outline / ghost).

Estados e interações: hover (elevação/sombra), focus visível, disabled, e skeleton inicial (~900 ms) sem layout shift.

Acessibilidade: navegação por teclado, aria-* quando apropriado, contraste ≥ 4.5:1, aria-live/aria-busy no carregamento.

Animações: transições entre 150–250 ms (transform/opacity).

Dados: 6 produtos com imagens locais em src/assets/ (funciona offline).

Estrutura do repositório
.
├─ 01-css-global/
├─ 02-css-modules/
├─ 03-tailwind/
└─ 04-styled-components/


Em cada pasta você encontra:

public/ e index.html

src/components/ → Navbar, ProductCard, Button, Skeleton

src/contexts/context.jsx → ThemeProvider (tema com localStorage) e CartProvider

src/data/products.js → 6 itens importando imagens de src/assets/

Específicos de cada abordagem:

CSS Global → src/styles/global.css (tokens de cores, espaçamentos, raios, sombras).

CSS Modules → estilos encapsulados por componente (*.module.css).

Tailwind → tailwind.config.js (breakpoints mapeados aos exigidos), postcss.config.js, src/index.css com @tailwind.

styled-components → src/components/StyledPage.jsx, src/theme.js com tokens e ThemeProvider.

Como executar (2 minutos)

Requer Node 18+ e npm.

Exemplo com CSS Global:

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

O que observar ao testar

Responsividade: ajuste a largura e valide 1/2/3/4 colunas nas quebras especificadas.

Tema: alterne claro/escuro, recarregue a página e confirme a persistência.

Acessibilidade: use Tab — os focos devem ser visíveis e consistentes.

Skeleton: aparece no primeiro instante sem “pular” o layout quando os cards entram.

Botões: confira as três variantes (solid/outline/ghost) em ambos os temas.

Solução de problemas

Porta ocupada → rode com npm run dev -- --port=XXXX.

Tela em branco → verifique o Console do navegador (F12) e se o npm install foi feito na pasta correta.

Imagens não carregam → confirme que existem em src/assets/ e que src/data/products.js importa os arquivos.

Licença

Projeto educacional desenvolvido para a Atividade 6 — Codifica Edu.
