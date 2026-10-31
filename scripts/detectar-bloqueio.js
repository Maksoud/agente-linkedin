// Detecta sinais de rate limit / bloqueio. Rodar a cada página ou lote.
// Se "bloqueio" for true: PARAR todo acesso ao LinkedIn (ver references/seguranca-navegacao.md §5).
(() => {
  const titulo = document.title || '';
  const corpo = (document.body ? document.body.innerText : '').slice(0, 6000);
  const t = (titulo + ' ' + corpo).toLowerCase();
  const fortes = ['error 1015', 'rate limited', 'banned you temporarily', 'too many requests',
    'captcha', 'verificação de segurança', 'security verification', 'unusual activity',
    'atividade incomum', 'checking your browser', 'verify you are human', 'confirme que você é humano'];
  const fracos = ['cloudflare', '429'];
  const achados = fortes.filter(s => t.includes(s));
  const suspeitos = fracos.filter(s => t.includes(s));
  const login = /\/(login|checkpoint|authwall|uas\/login)/.test(location.pathname);
  return JSON.stringify({
    bloqueio: achados.length > 0 || login,
    conferir_manual: suspeitos.length > 0 && achados.length === 0,
    sinais: achados.concat(login ? ['página de login/checkpoint'] : []),
    suspeitos, url: location.href, titulo
  });
})();
