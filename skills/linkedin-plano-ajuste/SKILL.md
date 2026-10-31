---
name: linkedin-plano-ajuste
description: Criar o plano de ajuste do perfil LinkedIn com o texto exato a colar em cada categoria (headline, Sobre, Destaques, experiências, formação, certificados, cursos, projetos, competências etc.), incluindo versão no segundo idioma configurado, para o solicitante aplicar sozinho. Fluxo 4 do agente-linkedin.
---

# Plano de ajuste do perfil (Fluxo 4)

Objetivo: um documento que o solicitante segue **sozinho**, etapa por etapa, com o texto pronto para colar. **A IA não executa nada no LinkedIn** (evita bloqueios e mantém o controle com o solicitante).

## Antes de começar

1. Localizar a pasta do agente; ler `CLAUDE.md`, `estado.md`, todo `perfil/`, `analise/*-decisoes.md` (mais recente), a lista de vagas e o arquivo de termos mais recentes.
   - Sem decisões ⇒ só versão conservadora (sem empresa atual, números novos, projetos internos, fornecedores) e avisar.
2. Ler a metodologia: `references/linkedin-profile-optimizer.md` + o reference da seção em análise + `references/adaptacao-pt-br.md` + `references/mapa-campos-linkedin.md` + `references/segundo-idioma.md`.
3. Verificar em `perfil/07-idiomas.md` se existe **perfil em outro idioma**.

## Passo 1 — Scorecard

`analise/AAAA-MM-DD-scorecard.md`: os 9 componentes da SKILL (foto, banner, headline, Sobre, Destaques, experiência, competências, URL, recomendações) + complementares (formação, certificados, cursos, projetos, idiomas, Open to Work, Serviços, segundo idioma). Para cada um: ✅ passa · ⚠️ precisa ajuste · ❌ falha · "sem nota — dados não fornecidos"; motivo em 1 linha com a regra aplicada. Ordenar correções por impacto no objetivo do questionário.

## Passo 2 — Plano (`proposta/AAAA-MM-DD-plano-ajuste.md`)

Usar `templates/plano-ajuste.md`. Estrutura:

- **Etapa 0 — Proteção:** desligar "Compartilhar atualizações do perfil"; Open to Work conforme decisão; outros ajustes de privacidade decididos.
- **Uma etapa por categoria**, na ordem de `mapa-campos-linkedin.md` (só as que precisam de mudança; as que passam ficam listadas como "sem alteração"):
  Introdução (headline, cargo atual, localização, setor) · URL · Contato/sites · Competências (adicionar, remover, Top 3, vínculos) · Experiências (uma subetapa por cargo) · Sobre · Destaques · Banner · Foto · Projetos · Formação acadêmica · Licenças e certificados · Cursos · Outras seções (voluntariado, publicações, prêmios, organizações) · Idiomas · Serviços · Recomendações (mensagens de pedido) · Segundo idioma.

Cada item do plano tem **sempre**:
| Campo | Conteúdo |
|---|---|
| Onde | Caminho exato (de `mapa-campos-linkedin.md`) |
| Ação | Substituir · Adicionar · Remover · Reordenar · Vincular · Manter |
| Antes | Texto atual literal (de `perfil/`) |
| Depois | Texto final em bloco de código, **sem Markdown dentro** (o LinkedIn não renderiza), bullets com "•" |
| Contagem | caracteres/limite (e trecho antes do "ver mais" no Sobre) |
| Por quê | regra da SKILL, resposta do questionário ou termo de vagas (citar a origem) |
| Riscos | notificação, endossos perdidos, encontrabilidade, confidencialidade |
| Status | `[ ]` para o solicitante marcar |

Fechar com: **Dados a confirmar** (todos os `[MÉTRICA]`, `[DATA]`…), **Itens fora do texto** (produzir banner, foto, miniaturas 1200×627, pedir recomendações) e **Checklist de consistência** (headline × Top 3 × Sobre × cargo atual × banner usando os mesmos termos).

## Passo 3 — Segundo idioma

Seguir `references/segundo-idioma.md`:
- Perfil secundário **existe** ⇒ `proposta/AAAA-MM-DD-plano-ajuste-<código>.md` com `templates/plano-ajuste-idioma.md`, espelhando as etapas (mesmos números de etapa), só campos traduzíveis; aplicar após a etapa em português.
- Não existe ⇒ etapa opcional "Criar perfil em <idioma>" só se o questionário aprovou; senão, registrar a decisão.

## Regras de conteúdo

- Nada sem origem; métrica ausente = `[MÉTRICA]`. Nunca inventar números, cargos, datas, certificados.
- Respeitar as listas "nunca publicar" e "só genérico" das decisões.
- Busca discreta ⇒ nada que soe como "procurando emprego".
- Headline: fórmula `[O que faz] | [Para quem] [Resultado]`, ≤ 220, termos das vagas.
- Sobre: 7 passos, 200–300 palavras, gancho nos primeiros 265–275 caracteres, 1ª pessoa.
- Experiência: verbo de ação + resultado; até 5 competências principais por cargo.
- Competências: Top 3 = termos do headline; avisar que **remover apaga endossos**.
- Termos proibidos: `adaptacao-pt-br.md`.

## Entrega (passo a passo)

1. Salvar scorecard e plano completos (e o do segundo idioma).
2. No chat, mostrar **só a Etapa 0 e a Etapa 1** (texto + onde colar + riscos) e **parar** para as considerações do solicitante.
3. A cada rodada, apresentar a próxima etapa; ajustar o plano com os comentários (registrar a data da revisão no topo).
4. Quando ele disser que aplicou: backup do arquivo de `perfil/` afetado, atualizar `perfil/` com o texto colado, marcar `[x]` no plano e em `estado.md`.
