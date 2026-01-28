const AppError = require("../errors/AppError");

function enviarContato(req, res, next) {
	try {
		const { nome, email, mensagem } = req.body;

		if (!nome || !email || !mensagem) {
			throw new AppError("Todos os campos são obrigatórios", 400);
		}

		if (
			typeof nome !== "string" ||
			typeof email !== "string" ||
			typeof mensagem !== "string"
		) {
			throw new AppError ("Formato de dados inválido", 400);
		}

		if (nome.trim().length < 2) {
			throw new AppError("Nome muito curto", 422);
		}

		if (mensagem.trim().length < 10) {
			throw new AppError ("Mensagem muito curta", 422);
		}

		if (mensagem.trim().length > 1000) {
			throw new AppError("Mensagem muito longa", 422);
		}

		const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailValido.test(email)) {
			throw new AppError("Email inválido", 422);
		}

		console.log({ nome, email, mensagem });

		return res.status(200).json({
			mensagem: "Dados recebidos com sucesso"
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { enviarContato };
