const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const { authenticate } = require("../middlewares/auth.middleware");

// TO-DO : Choisir le bon verbe HTTP pour l'enregistrement
router.post("/register", AuthController.register);

// TO-DO : Choisir le bon verbe HTTP pour la connexion
router.post("/login", AuthController.login);

// nouvelle route validate avec middleware
router.get("/validate", authenticate, AuthController.validate);

module.exports = router;