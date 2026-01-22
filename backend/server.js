const express = require("express");
const contatoRoutes = require("./routes/contato.routes");
const middleware = require("./middlewares/error.middleware");

const app = express();
const PORT = 3000;

// Middleware de parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb"}));

// Rota de contato
app.use("/contato", contatoRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
