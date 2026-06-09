const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

function generateToken(payload) {
    // Trouver la fonction permettant de générer un JWT avec le payload, le secret et l'expiration
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token) {
    try {
        // Trouver  fonction permettant de vérifier un token avec le secret
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        console.error(error);
        return null; // token invalide ou expiré
    }
}

function decodeToken(token) {
    // Trouver la fonction permettant de décoder un token sans vérifier sa validité
    return jwt.decode(token);
}

module.exports = {
 generateToken,
 verifyToken,
 decodeToken
};