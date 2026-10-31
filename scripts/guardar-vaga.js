// Guarda em localStorage (__vagas) os dados da vaga aberta no painel, para sobreviver a navegações.
// Preencher o objeto VAGA com o que foi lido (nota e triagem são feitas pelo agente, não pelo script).
(() => {
  const VAGA = { chave: '[titulo]|[empresa]', id: null, titulo: '', empresa: '', porte: '', publicada: '', local: '', status: 'aprovada|descartada', motivo: '', nota: null, obs: '' };
  let lista = [];
  try { lista = JSON.parse(localStorage.getItem('__vagas') || '[]'); } catch (e) {}
  if (!lista.some(v => v.chave === VAGA.chave)) lista.push(VAGA);
  try { localStorage.setItem('__vagas', JSON.stringify(lista)); } catch (e) { return JSON.stringify({ erro: String(e) }); }
  return JSON.stringify({ total: lista.length, aprovadas: lista.filter(v => v.status === 'aprovada').length });
})();
