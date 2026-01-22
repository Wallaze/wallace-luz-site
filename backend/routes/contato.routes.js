const express = require("express");
const router = express.Router();
const { enviarContato } = require("../controllers/contato.controller");

router.post("/", enviarContato);

module.exports = router;
