// Depois de CLICAR num card, lê o ID da vaga selecionada na URL da aba e monta o link para o relatório.
// Só registra; o agente NÃO abre este link.
(() => {
  const u = new URL(location.href);
  const id = u.searchParams.get('currentJobId') || (location.pathname.match(/\/jobs\/view\/(\d+)/) || [])[1] || null;
  const titulo = document.title.replace(/\s*\|\s*LinkedIn.*$/, '');
  return JSON.stringify({ id, link: id ? `https://www.linkedin.com/jobs/view/${id}/` : null, titulo_aba: titulo });
})();
