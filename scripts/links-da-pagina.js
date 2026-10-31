// Lista links que EXISTEM na página e casam com um padrão, para clicar neles depois pela ferramenta.
// Edite PADRAO (ex.: '/details/', '/jobs/view/', 'locale='). Não navega.
(() => {
  const PADRAO = '/details/';
  const vistos = new Set();
  const lista = [];
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.href;
    if (!href.includes(PADRAO) || vistos.has(href)) return;
    vistos.add(href);
    lista.push({ texto: (a.innerText || a.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 60), href: href.split('?')[0] });
  });
  return JSON.stringify({ padrao: PADRAO, total: lista.length, links: lista.slice(0, 12) });
})();
