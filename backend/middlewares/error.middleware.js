function errorMiddleware(err, req, res, next) {
	const statusCode = err.statusCode || 500;

	return res.status(statusCode).json({
		erro: err.message || "Erro interno do servidor"
	});
}

module.exports = errorMiddleware;
