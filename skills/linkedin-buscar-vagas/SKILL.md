---
name: linkedin-buscar-vagas
description: Comparar o perfil com as competências e os termos que o mercado pede para a área-alvo, a partir de até 50 vagas aderentes ao perfil e ao questionário do agente-linkedin, navegando só pela página (sem links montados ou abertos pelo console), com ritmo anti-bloqueio, e salvar a lista em analise/vagas/. Fluxo 3.
---

# Buscar oportunidades (Fluxo 3)

Objetivo: **ajustar o perfil ao padrão do mercado**, não procurar emprego. As **até 50 vagas** são a amostra: delas saem as competências e os termos que a área pede, comparados com o perfil (nota de aderência, lacunas e link real de cada vaga) para alimentar o plano de ajuste.

## Antes de começar

1. Localizar a pasta do agente; ler `CLAUDE.md`, `estado.md`, `analise/*-decisoes.md` (mais recente) e `perfil/` (headline, experiência, competências).
   - Sem decisões do questionário ⇒ avisar que a busca será genérica (cargos do headline atual) e pedir confirmação.
2. Ler `references/seguranca-navegacao.md` e `references/criterios-vagas.md`.
3. Ler execuções anteriores em `analise/vagas/` para **não repetir** vagas (empresa + título).
4. Montar o **plano de busca** (registrar no cabeçalho do relatório): 3–5 buscas a partir dos cargos-alvo e termos do questionário; filtros (modalidade, local, nível, data ≤ 30 dias); mapeamento dos critérios de pontuação para termos concretos.

## Navegador e discrição

- Chrome do solicitante (Claude in Chrome), logado; aba nova; carregar as ferramentas numa só ToolSearch.
- **Só leitura.** Nunca: candidatar-se, salvar vaga, "Tenho interesse", alertas, seguir empresa, mensagem a recrutador, mudar Open to Work.

## Como navegar (sem links inexistentes)

1. Partir de `https://www.linkedin.com/jobs/`.
2. Digitar a busca **na caixa de pesquisa da página** e aplicar filtros **pelos botões da interface** (Remoto, Nível de experiência, Data do anúncio, Local). Não montar URL com parâmetros.
3. Abrir vagas **clicando no card**; ler a descrição no painel lateral. Não abrir `/jobs/view/<id>/` nem páginas de empresa por URL.
4. O link registrado no relatório é `https://www.linkedin.com/jobs/view/<id>/` com `<id>` = `currentJobId` lido da URL da aba **após o clique** (`scripts/id-vaga-atual.js`). Sem ID lido ⇒ "sem link (ID não capturado)". Nunca deduzir ID.
5. Página de empresa (fundação/porte) só clicando no nome da empresa no painel, máximo 3 por execução.

## Ritmo (obrigatório)

- ≤ 60 vagas abertas por execução; ≤ 5 buscas; 1 página de resultados por busca (2ª só se sobrar cota).
- ≥ 4 s entre cards, ≥ 10 s entre buscas, 5–8 s por página nova.
- **Pré-triagem pelo card** (título, local, data) antes de clicar: o que o título já descarta não gasta cota.
- `scripts/detectar-bloqueio.js` a cada lote de ~8 cards. Sinal ⇒ parar todo acesso, salvar, registrar, avisar.

## Técnica de leitura

- Cards: `scripts/listar-cards-vagas.js` (lista título/empresa/local/data dos cards visíveis; a lista é virtualizada; rolar para carregar mais e localizar cards por título+empresa, não por índice).
- Descrição: entre "Sobre a vaga" e "Sobre a empresa"/"Acesse estatísticas"; porte em "Sobre a empresa" ("N–M funcionários").
- Guardar o coletado em `localStorage` (chave `__vagas`) para sobreviver a navegações; redefinir funções JS a cada página.
- Chamadas JS expiram em ~45 s (≤ 8 cards por chamada); retornos truncam em ~1000 caracteres (texto longo: `scripts/ler-texto-pagina.js` modo pre + `get_page_text`, depois Voltar: conta no ritmo).
- O LinkedIn pode reescrever a busca (ex.: remover filtros, acrescentar faixa salarial): **conferir modalidade e nível na descrição** e registrar o que a plataforma alterou.

## Triagem e nota

Aplicar a cada vaga os filtros e a pontuação de `references/criterios-vagas.md`, com os parâmetros do questionário. Registrar o motivo de todo descarte. Nunca inventar dado da vaga.

## Saída

1. `analise/vagas/AAAA-MM-DD-vagas.md` (sufixo `-2`, `-3` se já existir no dia), com `templates/vagas.md`:
   - cabeçalho (buscas, filtros, alterações automáticas da plataforma, totais vistas/aprovadas/descartadas por motivo, bloqueio e pendências);
   - **Aprovadas (até 50)** por nota: vaga, empresa, porte, publicada, nota, por que encaixa, lacunas, link;
   - Descartadas: vaga, empresa, motivo;
   - Lacunas recorrentes do perfil frente às vagas (requisitos que aparecem em ≥ 3 vagas e não constam do perfil).
2. `analise/AAAA-MM-DD-termos-vagas.md` (`templates/termos-vagas.md`): termos por frequência, com legenda ✅ consta · ⚠️ parcial · ❌ não consta · 🚫 não perseguir (restrição ou sem base).
3. Atualizar `estado.md`.

No chat: top 5 aprovadas (uma linha cada), totais de descarte por motivo, termos ❌ mais frequentes, caminho do arquivo e riscos (bloqueio, discrição). **Não propor mudanças no perfil aqui**: isso é a skill `linkedin-plano-ajuste`.
