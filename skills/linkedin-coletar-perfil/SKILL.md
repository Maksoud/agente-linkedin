---
name: linkedin-coletar-perfil
description: Coletar os dados de um perfil do LinkedIn (leitura online só de leitura, ou dados copiados pelo solicitante) e salvar cada seção em perfil/ do agente-linkedin, com backup. Fluxo 1 do agente.
---

# Coletar dados do perfil (Fluxo 1)

Objetivo: registrar o **estado atual** do perfil, seção por seção, para análise posterior. Nada de nota ou reescrita aqui.

## Antes de começar

1. Localizar a pasta do agente (`agente-linkedin/`, a que contém `CLAUDE.md`, `estado.md`, `references/`). Ler `CLAUDE.md` e `estado.md`.
2. Ler `references/seguranca-navegacao.md` (obrigatório antes de abrir o LinkedIn) e `references/segundo-idioma.md`.
3. **Backup:** se `perfil/` já tiver arquivos, copiar tudo para `backup/AAAA-MM-DD-<origem>/` (origem = `online`, `manual` ou `pdf`) antes de sobrescrever. Nunca editar `backup/`.

## Fontes (nesta ordem)

Perguntar ao solicitante qual opção prefere antes de começar:

1. **Perfil online (recomendado; Chrome logado, visão do dono)**: fonte principal. Ler todas as seções direto da página: headline, Sobre, experiências, formação, foto, banner, Destaques, atividade, Serviços, Open to Work, sites, competências completas com vínculos e endossos, certificados, projetos, recomendações, cursos, voluntariado, publicações, prêmios, perfil em outro idioma.
2. **Preenchimento manual pelo solicitante**: ele copia os dados do LinkedIn e preenche `perfil/` com os modelos de `templates/perfil/` (ou cola o texto em `entrada/perfil-copiado.md`, e o agente distribui nos arquivos). O agente confere se falta alguma seção e marca ⏳.
3. **Apoio (opcional)**: `entrada/Profile.pdf` e prints em `entrada/`. **Não usar o PDF como fonte única**: ele não exporta competências, Destaques, projetos, recomendações, certificados completos e outras seções.

## Navegação online (resumo das regras)

- Partir de `https://www.linkedin.com/feed/` → clicar em "Eu" → "Ver perfil". Daí em diante **só cliques** em links existentes ("Exibir todas as N experiências", "Mostrar todas as competências" etc.). Nunca montar `/details/...`.
- Antes de clicar num link de subpágina, confirmar que existe com `scripts/links-da-pagina.js` (padrão `/details/`). Não existe = seção ausente; registrar.
- Ler com `get_page_text`; texto longo → `scripts/ler-texto-pagina.js` (modo pre). Voltar com o botão Voltar do navegador (ferramenta `navigate` com "back") ou clicando no nome.
- 5–8 s entre páginas, máximo 25 páginas. `scripts/detectar-bloqueio.js` a cada página. Sinal de bloqueio ⇒ parar tudo, salvar, registrar em `estado.md`, avisar.
- **Nunca** abrir modais de edição. Se abrir por engano: Cancelar/Descartar.

## Arquivos de saída (`perfil/`)

Usar os modelos de `templates/perfil/`. Cabeçalho de cada arquivo: fonte (PDF/online/print), data da leitura, componente do scorecard.

| Arquivo | Conteúdo |
|---|---|
| `00-indice.md` | Mapa scorecard → arquivo, status de cada seção (✅ lida / ⏳ não lida / ∅ ausente), divergências entre seções |
| `01-contato-url.md` | URL (personalizada ou com hash), contato, sites, Open to Work (público/recrutadores/desligado + cargos), Serviços, modo criador, localização, setor |
| `02-headline.md` | Texto literal + contagem de caracteres (/220) |
| `03-sobre.md` | Texto literal com quebras de linha, nº de palavras e caracteres (/2.600), trecho até o caractere 275 (antes do "ver mais"), principais competências do Sobre |
| `04-experiencia.md` | Cada cargo: empresa, título, tipo, datas, local/modalidade, descrição literal, competências vinculadas, mídia. Ao fim: sobreposições de datas, lacunas, cargos sem descrição ou sem métrica |
| `05-formacao.md` | Instituição, curso, datas, descrição, competências |
| `06-certificacoes.md` | Nome, emissor, data, ID/URL (se exibido); total exibido × total carregado |
| `07-idiomas.md` | Seção Idiomas (níveis) **e** perfil em outro idioma (existe? qual? campos traduzidos lidos) |
| `08-visuais-destaques.md` | Foto (descrição: enquadramento, fundo, atualidade), banner (texto, legibilidade), Destaques (título, tipo, link), atividade recente (frequência, últimos temas) |
| `10-projetos.md` | Nome, datas, descrição, vínculo com experiência, colaboradores |
| `11-recomendacoes.md` | Recebidas (autor, cargo, relação, data, resumo) e dadas; total |
| `12-outras-secoes.md` | Cursos, voluntariado, publicações, patentes, prêmios, notas de testes, organizações, causas |
| `13-competencias.md` | Lista na ordem do perfil, Top 3 fixadas, vínculos exibidos, endossos ("-" se não exibido), total /100 |

(O `09-questionario.md` é criado pela skill `linkedin-questionario-perfil`.)

## Regras

- Transcrição **literal**; não corrigir erro de digitação (anotar em "Observações").
- Não ler = ⏳; não inventar.
- Marcar no `00-indice.md` o que veio de cada fonte (online/manual/PDF/print).
- Divergências típicas a registrar: título do cargo × headline; competências do Sobre × lista; datas de projeto × experiência; seção Idiomas × perfil secundário; termos do banner × headline.

## Ao terminar

1. Atualizar `estado.md` (Fluxo 1 ✅ ou 🟡 com o que ficou ⏳).
2. No chat: 3–5 linhas com seções lidas, o que ficou pendente, se há perfil em segundo idioma, maior divergência encontrada. Próximo passo: questionário (`linkedin-questionario-perfil`).
