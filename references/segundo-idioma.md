# Segundo idioma do perfil

> O LinkedIn permite um **perfil secundário em outro idioma**. Isso é diferente da seção "Idiomas" (que só lista proficiência).

## Como verificar (Skill de coleta)

1. No próprio perfil (visão do dono), procurar no **painel lateral direito** o bloco de idioma do perfil: "Adicionar perfil em outro idioma" (= **não existe** secundário) ou o nome de outro idioma / "Perfil em <idioma>" (= **existe**).
2. Também aparece em **"Editar perfil público e URL"** → lado direito, lista de perfis em outros idiomas.
3. Se existir, clicar no link exibido (nunca montar `?locale=`) e transcrever os campos traduzidos para `perfil/07-idiomas.md`, seção "Perfil secundário".
4. Se não der para ver o secundário, registrar "⏳ existe, conteúdo não verificado".

Registrar em `perfil/07-idiomas.md`:
```
## Perfil em outro idioma
- Idioma principal: Português
- Perfil secundário: English — existe (sim/não/não verificado)
- Campos lidos: nome · headline · Sobre · cargos/descrições (listar)
- Divergências com o principal: ...
```

## Regras para o plano (Skill de plano)

| Situação | O que fazer |
|---|---|
| Secundário **existe** | Gerar `proposta/AAAA-MM-DD-plano-ajuste-<código>.md` (ex.: `-en.md`) espelhando as etapas do plano principal, só com campos traduzíveis |
| Secundário **não existe**, mas seção Idiomas tem nível ≥ profissional **e** vagas-alvo pedem o idioma | Recomendar criar (etapa opcional no fim do plano) e perguntar no questionário (Seção 8). Gerar os textos só se a resposta for "sim" |
| Não existe e não há demanda | Não gerar; registrar a decisão |

Campos normalmente traduzíveis: nome, headline, Sobre, títulos e descrições de experiência (conferir na tela; o LinkedIn muda isso). Ficam **compartilhados** (não traduzir): empresas, datas, competências, Destaques, banner, foto, certificados, projetos.

Boas práticas:
- Mesma mensagem, não tradução literal: adaptar termos aos usados nas vagas no idioma (ver `analise/…-termos-vagas.md`).
- Mesmos números e placeholders do plano principal; nunca um número que não exista no principal.
- Cargos: usar o título equivalente de mercado (ex.: "Analista de TI Sênior" → "Senior IT Analyst").
- Aplicar **depois** da etapa equivalente em português.
- Recrutadores do exterior veem o secundário conforme o idioma da interface deles.
