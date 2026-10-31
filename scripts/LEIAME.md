# Scripts do navegador — SOMENTE LEITURA

Trechos para colar no `javascript_tool` (Claude in Chrome). Cada um é uma função autoexecutável que **só lê** o DOM e devolve JSON curto.

## Permitido
- Ler `document`, `innerText`, atributos, `location.href` (só leitura).
- Rolar a página (`scrollIntoView`, `scrollBy`) para carregar listas.
- `localStorage` com chaves `__vagas` / `__perfil` para guardar o coletado.
- Modo "pre" do `ler-texto-pagina.js` (substitui o corpo da página por texto, só na aba do agente, para `get_page_text`).

## Proibido
`location.href =`, `location.assign/replace`, `window.open`, `history.pushState`, `fetch`, `XMLHttpRequest`, `navigator.sendBeacon`, `form.submit()`, `.click()` em qualquer elemento, `eval`/`new Function` (a CSP do LinkedIn bloqueia), alterar valores de campos.
Navegação e cliques são feitos **pela ferramenta do navegador**, como um usuário.

## Observações
- Redefinir as funções a cada página (o contexto se perde ao navegar).
- Retorno truncado em ~1000 caracteres: use os parâmetros de limite.
- Chamada expira em ~45 s.
- Os seletores do LinkedIn mudam: se um script não achar nada, ler com `get_page_text`/`find` e registrar o novo padrão aqui.
