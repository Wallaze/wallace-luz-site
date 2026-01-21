const express = require("express");

const app = express();
const PORT = 3000;

// Middleware de parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Rota de contato
app.post("/contato", (req, res) => {
	const dados = req.body;

	console.log(dados);

	res.status(200).json({
		mensagem: "Dados recebidos com sucesso"
	});
});

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
