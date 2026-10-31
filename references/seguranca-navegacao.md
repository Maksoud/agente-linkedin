# Segurança de navegação no LinkedIn

> Vale para todas as skills que usam o navegador (coleta e vagas). Ler antes do primeiro acesso.
> Histórico real: em 30/10/2026 o LinkedIn devolveu **Cloudflare Error 1015 (rate limit)** após ~130 vagas abertas em sequência rápida.

## 1. Navegador

- Usar o **Chrome do solicitante (Claude in Chrome)**, já logado. Carregar a skill `chrome-browser` e as ferramentas numa única ToolSearch (`tabs_context_mcp, tabs_create_mcp, navigate, computer, read_page, find, get_page_text, javascript_tool`).
- Trabalhar numa **aba nova**; não fechar abas do solicitante; não fechar a aba usada ao terminar.
- Nunca fazer login, trocar de conta, resolver CAPTCHA ou aceitar termos.

## 2. Somente leitura

Proibido, sem pedido explícito do solicitante no chat:
- editar/salvar qualquer campo do perfil, reordenar, adicionar ou remover itens;
- publicar, comentar, reagir, compartilhar;
- candidatar-se, "Candidatura simplificada", salvar vaga, "Tenho interesse", ativar alerta;
- seguir empresa/pessoa, conectar, enviar mensagem, pedir recomendação;
- alterar Open to Work, visibilidade ou configurações.

Se um clique de leitura abrir um modal de edição por engano: fechar com **Cancelar/Descartar** (nunca "Salvar") e registrar.

## 3. Navegar só pela página (sem links inexistentes)

1. **Ponto de partida permitido:** `https://www.linkedin.com/feed/` ou `https://www.linkedin.com/jobs/` (páginas que sempre existem). Daí em diante, só cliques.
2. **Não montar URLs** (ex.: `/details/skills/`, `/jobs/view/<id>/`, `?locale=en_US`). Para chegar a uma subpágina, clicar no link exibido ("Exibir todas as N competências", "Mostrar todas as experiências", cards de vaga).
3. **Não abrir nada pelo console:** proibido `location.href =`, `location.assign`, `window.open`, `history.pushState`, `fetch`, `XMLHttpRequest`, `form.submit()`, `element.click()` em links/botões de navegação. Clique é sempre pela ferramenta de navegador (`computer`/`find`), como uma pessoa faria.
4. **Validar antes de clicar:** se precisar de um link específico, rodar `scripts/links-da-pagina.js` com o padrão desejado. Só clicar se o link estiver na lista. Se não estiver, a seção provavelmente não existe: registrar "seção ausente" em vez de tentar a URL.
5. **Links registrados em documentos** (ex.: vaga `https://www.linkedin.com/jobs/view/<id>/`) só com ID **lido da página** (`currentJobId` na URL da aba após o clique). Registrar não é abrir: o agente não visita esses links depois.
6. Usar a **caixa de busca e os botões de filtro da interface** para pesquisar vagas, em vez de URLs com parâmetros.

## 4. Ritmo e limites por sessão

| Ação | Espera mínima | Limite por execução |
|---|---|---|
| Carregar página nova (perfil, subpágina, busca) | 5–8 s (variar) | Coleta: 25 páginas · Vagas: 15 páginas de resultado |
| Clique em card de vaga (painel lateral) | 4 s | 60 vagas abertas |
| Entre uma busca e outra | 10 s | 5 buscas |
| Página de empresa (aba Sobre) | 8 s | 3 |
| Rolagem para carregar lista | 1–2 s | - |

- Preferir **ler no painel** (clique no card) a abrir páginas inteiras.
- Pré-triar pelo título do card antes de clicar.
- Cada chamada de JavaScript expira em ~45 s: no máximo ~8 cards por chamada.
- Retornos de JavaScript são truncados (~1000 caracteres): para texto longo, usar `scripts/ler-texto-pagina.js` (modo "pre") e `get_page_text`.

## 5. Detecção de bloqueio (checar a cada página ou lote)

Rodar `scripts/detectar-bloqueio.js` ou olhar título/texto. Sinais:
`Error 1015`, `rate limited`, `banned you temporarily`, `Too many requests`, `429`, desafio Cloudflare, CAPTCHA, "verificação de segurança", "atividade incomum", "unusual activity", página de login inesperada.

Ao detectar:
1. **Parar imediatamente qualquer acesso ao LinkedIn**: nenhuma recarga, clique, nova aba, outro navegador, WebFetch ou mirror.
2. Salvar o que foi coletado, com hora do bloqueio e o que ficou pendente (`estado.md` → Ocorrências).
3. Avisar o solicitante e recomendar esperar (mínimo 24 h) antes de voltar ao LinkedIn.

## 6. Dados de terceiros

- Não registrar dados pessoais de recrutadores ou de outras pessoas além do nome da empresa e do texto público da vaga.
- Recomendações recebidas: registrar autor, cargo e relação como exibidos; não buscar mais dados sobre o autor.
