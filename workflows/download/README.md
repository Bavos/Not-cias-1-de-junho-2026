# Workflow N8N — Download Render

Workflow para receber uma URL pública de vídeo renderizado e salvar o arquivo final em `downloads/generated/`.

## Endpoint

- **Método:** `POST`
- **Path:** `/download-render`

## Payload esperado

```json
{
  "fileUrl": "https://exemplo.com/video.mp4",
  "fileName": "brasil-mundo-agora-35s.mp4",
  "videoTitle": "Brasil e Mundo Agora"
}
```

## Fluxo

1. **Webhook Trigger** recebe o payload.
2. **Set Node** normaliza `fileUrl`, `fileName`, `videoTitle` e `createdAt`.
3. **IF Node** valida se `fileUrl` existe.
4. **HTTP Request Node** baixa o arquivo como binário na propriedade `data`.
5. **Write Binary File Node** salva em `downloads/generated/{{fileName}}`.
6. **Respond to Webhook** retorna o status do download em JSON.

## Resposta de sucesso

```json
{
  "success": true,
  "message": "Download concluído",
  "filePath": "downloads/generated/brasil-mundo-agora-35s.mp4"
}
```

## Observações de segurança

- Use apenas URLs públicas ou assinadas com tempo curto de expiração.
- Não commit vídeos baixados, tokens, cookies ou URLs privadas.
- Valide nomes de arquivo antes de usar em produção para evitar path traversal.
- Use `downloads/temp/` somente para arquivos temporários.
