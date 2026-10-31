---
name: linkedin-questionario-perfil
description: Montar o questionário de objetivo do perfil LinkedIn a partir da SKILL de auditoria e dos dados coletados em perfil/, e depois consolidar as respostas em decisões. Fluxo 2 do agente-linkedin.
---

# Questionário de objetivo (Fluxo 2)

Objetivo: entender **para que** o perfil existe e **o que pode ou não ser dito**, antes de qualquer nota, vaga ou texto.
A SKILL de auditoria pede três entradas que o perfil não revela: objetivo (*clients / job seeking / authority*), público e limites. O questionário cobre isso e as dúvidas que surgiram na coleta.

## Antes de começar

1. Localizar a pasta do agente; ler `CLAUDE.md`, `estado.md` e todos os `perfil/*.md` (Fluxo 1 precisa estar ✅ ou 🟡).
2. Ler `references/linkedin-profile-optimizer.md` (seções *Input* e *Steps*) e `references/segundo-idioma.md`.
3. Se `perfil/09-questionario.md` já existir, **não sobrescrever**: copiar para `backup/AAAA-MM-DD-09-questionario.md` e só acrescentar perguntas novas.

## Parte A — Montar o questionário

Partir de `templates/questionario.md` e **personalizar**:

1. **Cabeçalho "O que vi no perfil"** em cada seção: 1–3 fatos de `perfil/` que motivam as perguntas (ex.: "Headline cita a ferramenta X 2 vezes"; "3 cargos sem métrica"; "Open to Work: só recrutadores").
2. **Perguntas gatilho** — acrescentar quando o dado aparecer na coleta:
   | Achado na coleta | Pergunta a acrescentar |
   |---|---|
   | Datas sobrepostas ou lacunas | Explicar sobreposição; manter/ajustar? |
   | Cargo sem descrição ou sem métrica | Há números publicáveis? Quais? |
   | Ferramenta/fornecedor no centro do perfil | Quer manter o foco nela? Ela pode ser citada? |
   | Atividade paralela (empresa própria, freela) | É conhecida pelo empregador? Pode ter destaque? |
   | Open to Work público | Busca é discreta? |
   | Recomendações antigas ou < 3 | Quem poderia recomendar e sobre o quê? |
   | Destaques vazios | Que trabalhos/links podem ser mostrados? |
   | Competências sem vínculo/endosso ou removidas | Manter, vincular ou retirar? |
   | Perfil secundário existe / Idiomas ≥ profissional | Manter, atualizar ou criar perfil em outro idioma? |
   | Banner/foto antigos ou genéricos | Pode produzir novos? |
3. Opções marcáveis `[ ]` sempre que possível; campo `> R:` em todas. Indicar quando a pergunta é **bloqueante**.
4. Nunca pré-responder pelo solicitante. Pode sugerir "Ex.:" de formato.

Seções obrigatórias (do template): 0 Tratamento · 1 Confidencialidade (bloqueante) · 2 Objetivo e público · 3 Posicionamento · 4 Experiências e métricas · 5 Competências · 6 Visuais e Destaques · 7 Recomendações · 8 Segundo idioma · 9 Preferências de vagas · 10 Tom e voz.

Salvar em `perfil/09-questionario.md`. No chat: dizer quantas perguntas, quais são bloqueantes, e pedir que responda direto no arquivo (pode ser por partes). **Parar** e aguardar.

## Parte B — Consolidar respostas

Quando o solicitante avisar que respondeu:
1. Reler o arquivo inteiro (respostas podem ter mudado).
2. Classificar cada pergunta: respondida · em branco (= "não informado") · contraditória.
3. Em branco ⇒ **opção mais conservadora** (menor exposição) + registrar a suposição.
4. Contradições (ex.: "busca discreta" + "Open to Work público") ⇒ perguntar no chat, uma por vez.
5. Gerar `analise/AAAA-MM-DD-decisoes.md` com `templates/decisoes.md`:
   - Objetivo principal/secundário e público;
   - **Lista "nunca publicar"** e **lista "só genérico"**;
   - Termos a priorizar e a evitar;
   - Parâmetros de vagas (cargos, modalidade, local, nível, porte, setores, idiomas, stacks a evitar, limites);
   - Decisão de segundo idioma;
   - Suposições adotadas e perguntas abertas.
6. Atualizar `estado.md`. No chat: objetivo em 1 linha + até 3 decisões que mais mudam o plano + a suposição de maior risco. Próximo passo: `linkedin-buscar-vagas`.

## Regras
- A Seção 1 é bloqueante: sem ela, as próximas skills só produzem versão conservadora.
- Respostas do questionário têm precedência sobre a SKILL genérica.
- Não salvar no arquivo dados sensíveis que o solicitante não precisa escrever (salário atual, documentos). Pretensão salarial só se ele quiser usá-la como filtro de vagas.
