# MCP Simulator - FastAPI

Este projeto simula um MCP (Model-Calling Provider) simples com proteção por segredo para ser usado com Actions do ChatGPT.

## Endpoints

### `POST /mcp`

Payload:

```json
{
  "secret": "abc123",
  "method": "runReport",
  "params": {
    "days": 30
  }
}
