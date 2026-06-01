# Brasil e Mundo Agora — Remotion 35s

Projeto Remotion em React + TypeScript para gerar um vídeo vertical jornalístico, urgente e dinâmico no estilo TikTok News.

## Especificações

- **Composição:** `BrazilWorldNews35s`
- **Formato:** 1080x1920 vertical
- **Duração:** 35 segundos
- **FPS:** 30
- **Áudio:** não utiliza áudio
- **Assets binários:** não utiliza imagens, vídeos ou sons externos
- **Estilo:** jornalístico moderno + viral TikTok, com texto, formas, gradientes, emojis unicode e animações

## Estrutura principal

```text
remotion/
├── assets/
│   ├── audio/.gitkeep
│   ├── images/.gitkeep
│   └── videos/.gitkeep
├── components/
├── compositions/
├── data/
├── hooks/
├── renders/.gitkeep
├── scenes/
└── utils/
```

A pasta `remotion/renders/` é mantida apenas com `.gitkeep`. Vídeos renderizados não devem ser commitados.

## Instalação

```bash
npm install
```

## Desenvolvimento

Abrir o Remotion Studio:

```bash
npm run start
```

## Typecheck

```bash
npm run typecheck
```

## Render local

```bash
npm run render
```

O arquivo renderizado será gerado em:

```text
remotion/renders/brasil-mundo-agora-35s.mp4
```

> Importante: a saída renderizada está protegida pelo `.gitignore` e não deve ser enviada ao GitHub.

## Dados editoriais

O briefing em YAML fica em:

```text
remotion/data/news-briefing-2026.yaml
```

O arquivo TypeScript `remotion/data/newsData.ts` espelha os dados usados pela composição e adiciona metadados visuais, como cor, emoji, início e duração de cada bloco.

## Workflow de download

O workflow N8N para baixar um render já publicado fica em:

```text
workflows/download/download-render.json
```

Documentação do workflow:

```text
workflows/download/README.md
```
