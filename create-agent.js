import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const MCP_URL = "https://<sua-url>.onrender.com/mcp"; // Substitua pela URL real

async function main() {
  const assistant = await openai.beta.assistants.create({
    name: "Quartile Orchestrator",
    instructions: "Você é um orquestrador que gera relatórios de clientes usando ferramentas externas.",
    model: "gpt-4-1106-preview",
    tools: [
      {
        type: "mcp",
        server: {
          url: MCP_URL
        }
      }
    ]
  });

  console.log("Assistant criado com ID:", assistant.id);
}

main().catch(console.error);
