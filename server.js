const express = require('express');
const app = express();

app.use((req, res) => {
  const host = req.headers.host || 'default';
  const subdomain = host.split('.')[0];

  res.send(`
    <html>
      <head><title>${subdomain.toUpperCase()}</title></head>
      <body>
        <h1>Bem-vindo ao site do produto: <strong>${subdomain}</strong></h1>
        <p>Este conteúdo foi carregado dinamicamente com base no subdomínio.</p>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Servidor rodando na porta \${port}\`);
});
