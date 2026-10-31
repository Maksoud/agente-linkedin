// Lê o texto principal da página.
// MODO = 'resumo' → devolve tamanho + início (não altera a página).
// MODO = 'pre'    → substitui o corpo por <main><article><pre> com o texto, para get_page_text ler tudo.
//                   Depois, voltar pela ferramenta do navegador (a página é recarregada; conta no ritmo).
(() => {
  const MODO = 'resumo';
  const raiz = document.querySelector('main') || document.body;
  const txt = raiz.innerText;
  try { localStorage.setItem('__perfil_ultimo', JSON.stringify({ url: location.href, quando: new Date().toISOString(), txt: txt.slice(0, 150000) })); } catch (e) {}
  if (MODO === 'pre') {
    const pre = document.createElement('pre'); pre.textContent = txt;
    const art = document.createElement('article'); art.appendChild(pre);
    const m = document.createElement('main'); m.appendChild(art);
    document.body.replaceChildren(m);
  }
  return JSON.stringify({ modo: MODO, caracteres: txt.length, inicio: txt.slice(0, 600) });
})();
