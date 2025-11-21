from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel
import uvicorn

app = FastAPI()

SECRET = "abc123"  # Altere para um segredo forte

class Payload(BaseModel):
    secret: str
    method: str
    params: dict

@app.post("/mcp")
async def handle_request(payload: Payload):
    if payload.secret != SECRET:
        raise HTTPException(status_code=403, detail="Unauthorized")

    if payload.method == "runReport":
        days = payload.params.get("days", 30)
        return {
            "status": "ok",
            "report": f"Relatório gerado com sucesso para os últimos {days} dias."
        }
    else:
        return {"status": "error", "message": "Método desconhecido"}

# Apenas para testes locais
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=10000)
