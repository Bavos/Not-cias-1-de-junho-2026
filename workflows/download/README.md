# Workflow N8N — Download Render

Workflow para receber uma URL pública de vídeo renderizado e salvar o arquivo final em `downloads/generated/`.

## Endpoint

- **Método:** `POST`
- **Path:** `/download-render`

Em modo de teste do n8n, use a URL exibida pelo próprio Webhook node, normalmente parecida com:

```text
https://SEU-N8N/webhook-test/download-render
```

Com o workflow ativo em produção, use:

```text
https://SEU-N8N/webhook/download-render
```

## Payload esperado

```json
{
  "fileUrl": "https://exemplo.com/video.mp4",
  "fileName": "brasil-mundo-agora-35s.mp4",
  "videoTitle": "Brasil e Mundo Agora"
}
```

## Fluxo

1. **Webhook Trigger** recebe o payload via `POST`.
2. **Set Node / Normalize Fields** normaliza `fileUrl`, `fileName`, `videoTitle` e `createdAt`.
3. **IF Node / Validate fileUrl** valida se `fileUrl` existe.
4. **Code Node / Prepare Download** sanitiza o `fileName` para evitar path traversal e monta `downloads/generated/{{fileName}}`.
5. **Execute Command / Ensure Download Folders** cria `downloads/generated/` e `downloads/temp/` antes da escrita.
6. **HTTP Request Node / Download File** baixa o arquivo como binário na propriedade `data`.
7. **Write Binary File / Read/Write Files from Disk** grava o binário em `downloads/generated/{{fileName}}`.
8. **Respond to Webhook** retorna o status do download em JSON.

## Resposta de sucesso

```json
{
  "success": true,
  "message": "Download concluído",
  "filePath": "downloads/generated/brasil-mundo-agora-35s.mp4",
  "fileName": "brasil-mundo-agora-35s.mp4",
  "videoTitle": "Brasil e Mundo Agora",
  "createdAt": "2026-06-01T00:00:00.000Z"
}
```

## Resposta de erro por payload inválido

```json
{
  "success": false,
  "message": "fileUrl é obrigatório"
}
```

## Como testar com cURL

```bash
curl -X POST "https://SEU-N8N/webhook-test/download-render" \
  -H "Content-Type: application/json" \
  -d '{
    "fileUrl": "https://exemplo.com/video.mp4",
    "fileName": "brasil-mundo-agora-35s.mp4",
    "videoTitle": "Brasil e Mundo Agora"
  }'
```

## Observações importantes

- O node de escrita usa o node atual do n8n **Read/Write Files from Disk**, nomeado no workflow como **Write Binary File**.
- Em n8n Cloud, escrita em disco é limitada e efêmera. Para produção escalável, prefira S3, Google Drive, Supabase Storage ou outro storage persistente.
- Em Docker/self-hosted, `downloads/generated/` é criado dentro do filesystem do container. Monte um volume se quiser acessar o arquivo no host.
- Use apenas URLs públicas ou assinadas com tempo curto de expiração.
- Não commit vídeos baixados, tokens, cookies ou URLs privadas.
- Use `downloads/temp/` somente para arquivos temporários.
