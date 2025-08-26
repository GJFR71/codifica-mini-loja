import React from 'react'
import styled, { ThemeProvider as SCThemeProvider, createGlobalStyle, keyframes } from 'styled-components'
import { useCart, Stars } from '../contexts/context'
import { themes } from '../theme'

const Global = createGlobalStyle`
  html, body, #root { height: 100%; }
  body { margin:0; background: ${({theme})=>theme.bg}; color: ${({theme})=>theme.fg};
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial;
  }
  :focus-visible { outline: 0; box-shadow: 0 0 0 3px ${({theme})=>theme.ring}; }
`
const Container = styled.div`max-width:1200px;margin:0 auto;padding:16px;`
const NavbarWrap = styled.div`
  position: sticky; top:0; z-index:10;
  background: ${({theme})=>theme.name==='light'
    ? 'color-mix(in oklab, #ffffff 92%, transparent)'
    : 'color-mix(in oklab, #0b1020 92%, transparent)'};
  border-bottom:1px solid ${({theme})=>theme.border};
  backdrop-filter: blur(6px);
`
const NavInner = styled.div`height:64px; display:flex; align-items:center; justify-content:space-between;`
const Brand = styled.div`display:flex; align-items:center; gap:12px; font-weight:700;`

const Badge = styled.span`
  min-width:24px; height:24px; padding:0 6px; border-radius:999px;
  background: ${({theme})=>theme.primary}; color:#fff; display:inline-flex; align-items:center; justify-content:center;
  font-size:12px; margin-left:6px;
`

const Btn = styled.button`
  border:1px solid transparent; border-radius:10px; padding:10px 14px; font-weight:600; cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease, color .18s ease, opacity .18s ease;
  &:disabled{ opacity:.55; cursor:not-allowed }
  ${({variant, theme}) => variant==='solid' && `
    background:${theme.primary}; color:#fff;
    &:hover{ transform: translateY(-2px); box-shadow:${theme.shadow} }
  `}
  ${({variant, theme}) => variant==='outline' && `
    background:transparent; color:${theme.fg}; border-color:${theme.border};
    &:hover{ transform: translateY(-2px); box-shadow:${theme.shadow} }
  `}
  ${({variant, theme}) => variant==='ghost' && `
    background:transparent; color:${theme.muted};
    &:hover{ background: color-mix(in oklab, ${theme.fg} 7%, transparent) }
  `}
`

const Grid = styled.div`
  display:grid; gap:16px;
  @media (max-width:480px){ grid-template-columns: repeat(1, minmax(0,1fr)); }
  @media (min-width:481px) and (max-width:768px){ grid-template-columns: repeat(2, minmax(0,1fr)); }
  @media (min-width:769px) and (max-width:1024px){ grid-template-columns: repeat(3, minmax(0,1fr)); }
  @media (min-width:1025px){ grid-template-columns: repeat(4, minmax(0,1fr)); }
`
const Card = styled.article`
  background:${({theme})=>theme.card}; border:1px solid ${({theme})=>theme.border};
  border-radius:12px; overflow:hidden;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
  &:hover{ transform: translateY(-2px); box-shadow:${({theme})=>theme.shadow};
    border-color: color-mix(in oklab, ${({theme})=>theme.border} 50%, ${({theme})=>theme.fg} 10%);
  }
`
const Media = styled.img`
  width:100%; aspect-ratio:1/1; object-fit:cover;
  background: color-mix(in oklab, ${({theme})=>theme.fg} 10%, transparent);
`
const Body = styled.div`padding:12px; display:flex; flex-direction:column; gap:8px;`
const Row = styled.div`display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;`
const Title = styled.h3`
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;
  overflow:hidden; text-overflow:ellipsis; min-height:2.6em; margin:0;
`
const Price = styled.span`font-weight:700;`
const Muted = styled.span`color:${({theme})=>theme.muted};`
const Tag = styled.span`font-size:12px; padding:2px 8px; border-radius:999px; border:1px solid ${({theme})=>theme.border};`

const shimmer = keyframes`to{ transform: translateX(100%) }`
const Sk = styled.div`
  border-radius:12px; background: color-mix(in oklab, ${({theme})=>theme.fg} 10%, transparent);
  position:relative; overflow:hidden;
  &:after{
    content:''; position:absolute; inset:0;
    background: linear-gradient(90deg, transparent, color-mix(in oklab, ${({theme})=>theme.bg} 30%, transparent), transparent);
    transform: translateX(-100%); animation: ${shimmer} 1.2s infinite;
  }
`

function ProductCard({ product }){
  const { add } = useCart()
  const [loading, setLoading] = React.useState(false)
  return (
    <Card>
      <Media src={product.image} alt={`Imagem do produto ${product.title}`} loading="lazy" width="400" height="400" />
      <Body>
        <Row>
          <Title>{product.title}</Title>
          <Tag aria-label={`Tag: ${product.tag}`}>{product.tag}</Tag>
        </Row>
        <Row>
          <Price aria-label={`PreÃ§o: R$ ${product.price.toFixed(2)}`}>R$ {product.price.toFixed(2)}</Price>
          <Muted><Stars value={product.rating} /></Muted>
        </Row>
        <Btn as="button"
          variant="solid"
          onClick={()=>{ setLoading(true); setTimeout(()=>{ add(); setLoading(false) },700) }}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Adicionandoâ€¦" : "Adicionar"}
        </Btn>
      </Body>
    </Card>
  )
}

function SkeletonCard(){
  return (
    <Card aria-hidden="true">
      <div style={{position:'relative'}}>
        <Sk style={{height:0, paddingBottom:'100%'}} />
      </div>
      <Body>
        <Sk style={{height:16, width:'85%'}} />
        <Sk style={{height:16, width:'70%'}} />
        <Sk style={{height:12, width:'40%'}} />
        <Sk style={{height:36, width:'100%'}} />
      </Body>
    </Card>
  )
}

export function Page({ themeName, toggleTheme, products }){
  const { count } = useCart()
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(()=>{ const t=setTimeout(()=> setIsLoading(false),900); return ()=> clearTimeout(t) },[])

  const theme = themes[themeName] || themes.light

  return (
    <SCThemeProvider theme={theme}>
      <Global />
      <NavbarWrap>
        <Container>
          <NavInner>
            <Brand><span aria-hidden="true">í»’</span> Mini Loja</Brand>
            <div style={{display:'flex', alignItems:'center', gap:12}}>
              <Btn variant="outline" aria-label="Alternar tema" onClick={toggleTheme}>
                {themeName === 'dark' ? 'Tema: Escuro' : 'Tema: Claro'}
              </Btn>
              <div aria-label={`Itens no carrinho: ${count}`}>Carrinho <Badge aria-hidden="true">{count}</Badge></div>
            </div>
          </NavInner>
        </Container>
      </NavbarWrap>

      <Container style={{paddingTop:16}}>
        <Grid aria-live={isLoading ? 'polite' : undefined} aria-busy={isLoading || undefined}>
          {isLoading ? Array.from({length:6}).map((_,i)=><SkeletonCard key={i} />)
                    : products.map(p => <ProductCard key={p.id} product={p} />)}
        </Grid>
      </Container>
    </SCThemeProvider>
  )
}
