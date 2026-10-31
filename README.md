# Agente LinkedIn: guia rápido

O agente analisa o seu perfil, entende o seu objetivo, procura vagas compatíveis e entrega um **plano com os textos prontos** para você colar no LinkedIn. Ele **não altera** o seu perfil.

## Como começar

1. Exporte seu perfil: **Perfil → Recursos (ou "Mais") → Salvar como PDF**. Coloque o arquivo em `entrada/Profile.pdf`.
2. (Opcional) Coloque prints da foto, banner e Destaques em `entrada/`.
3. Deixe o Chrome aberto e logado no LinkedIn (para ler o que o PDF não exporta e para buscar vagas).
4. Peça ao Claude: **"Siga o agente-linkedin a partir do Fluxo 1"**, ou chame a skill do fluxo pelo nome (ex.: **"rode o linkedin-coletar-perfil"**).

## O que acontece em cada fluxo

| Fluxo | O que o agente faz | O que você faz |
|---|---|---|
| 1. Coleta | Lê o PDF e o perfil online, salva cada seção em `perfil/` | Nada (só deixa o Chrome logado) |
| 2. Questionário | Gera `perfil/09-questionario.md` personalizado | Responde nos campos `> R:` e marca `[x]` |
| 3. Vagas | Compara o perfil com as competências e os termos que as vagas do mercado pedem para aquela área e salva em `analise/vagas/` | Revisa a lista |
| 4. Plano | Cria `proposta/…-plano-ajuste.md` com o texto exato de cada seção (e versão no 2º idioma, se houver) | Aplica uma etapa por vez e avisa o agente |

## Cuidados que o agente já toma

- Só leitura no LinkedIn, sem montar links, com pausas entre páginas e parada imediata se houver sinal de bloqueio.
- Nunca se candidata, salva vagas, segue empresas ou envia mensagens.
- Não inventa números: o que faltar vira `[MÉTRICA]` para você completar.

**Antes de aplicar o plano:** desligue *Configurações → Visibilidade → Compartilhar atualizações do perfil* (Etapa 0).

## Privacidade

As pastas `entrada/`, `perfil/`, `backup/`, `analise/` e `proposta/` e o arquivo `estado.md` guardam **os seus dados**. O `.gitignore` impede que sejam publicados: no repositório vão só a estrutura e os modelos. Antes de cada `git push`, confira com `git status`.

## Licença

MIT. Veja `LICENSE.md`. Material de terceiros em `references/LICENSE-linkedin-skills.md`.

## Origem e créditos

A metodologia de auditoria deste agente vem da skill **linkedin-profile-optimizer**, do projeto [linkedin-skills](https://github.com/sergebulaev/linkedin-skills) de [Sergey Bulaev](https://github.com/sergebulaev), sob **licença MIT**:
<https://github.com/sergebulaev/linkedin-skills/blob/main/skills/linkedin-profile-optimizer/SKILL.md>

A cópia usada aqui está em `references/linkedin-profile-optimizer.md`, junto com os arquivos de referência originais da skill (`profile-headline-formulas.md`, `about-section-templates.md`, `featured-section-playbook.md`, `banner-photo-specs.md`, `experience-skills-rules.md`).

A partir dela, com o apoio de IA, foram criadas as demais skills (`linkedin-coletar-perfil`, `linkedin-questionario-perfil`, `linkedin-buscar-vagas`, `linkedin-plano-ajuste`) e montado este agente. O objetivo foi atender a uma necessidade própria: ajustar o perfil do LinkedIn com adaptação ao português, regras de confidencialidade, busca de vagas sem risco de bloqueio e um plano aplicado à mão.

O aviso de copyright e o texto da licença MIT estão em `references/LICENSE-linkedin-skills.md`, como a licença exige para cópias do material.
