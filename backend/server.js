const express = require("express");
const cors = require("cors");
const contatoRoutes = require("./routes/contato.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota de contato
app.use("/contato", contatoRoutes);

app.use(errorMiddleware);

app.listen (PORT, () => {
 	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
