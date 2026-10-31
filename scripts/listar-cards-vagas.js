// Lista os cards de vaga visíveis na busca (título, empresa, local, data), sem clicar.
// A lista é virtualizada: rolar (ROLAR=true) e chamar de novo para carregar mais.
// Usar a chave título+empresa para localizar o card a clicar pela ferramenta do navegador.
(() => {
  const ROLAR = false;
  const LIMITE = 10;
  let cards = Array.from(document.querySelectorAll('main div[role="button"], main li[data-occludable-job-id], main .job-card-container'))
    .filter(el => /Anunciad|Promovid|há \d|Promoted|ago/i.test(el.innerText));
  const saida = cards.slice(0, LIMITE).map(el => {
    const linhas = el.innerText.split('\n').map(s => s.trim()).filter(Boolean)
      .filter(s => !/^Selecionada,?$/i.test(s));
    return linhas.slice(0, 5).join(' | ').slice(0, 140);
  });
  if (ROLAR && cards.length) cards[cards.length - 1].scrollIntoView({ block: 'end' });
  return JSON.stringify({ total_visiveis: cards.length, cards: saida });
})();
