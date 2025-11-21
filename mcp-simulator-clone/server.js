import express from 'express';

const app = express();
app.use(express.json());

app.post('/mcp', async (req, res) => {
  const { method, params } = req.body;

  if (method === 'runCustomerReport') {
    const { cliente } = params;
    return res.json({
      result: {
        mensagem: `Relatório gerado para ${cliente}`
      }
    });
  }

  res.status(400).json({ error: 'Método não implementado' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MCP Server rodando na porta ${PORT}`));
