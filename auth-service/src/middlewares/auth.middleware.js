const { verifyToken } = require("../utils/jwt.util");

function authenticate(req, res, next) {

    // TO-DO: récupérer le header "Authorization"
        const authHeader = req.headers["authorization"];

    // TO-DO: que faire si aucun header n’est fourni ? (pensez au status et au message)
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // TO-DO: extraire uniquement le token du header (format attendu: "Bearer <token>")
    const token = authHeader.split(" ")[1];


    try {

        // TO-DO: vérifier le token grâce à la fonction verifyToken
        const decoded = verifyToken(token);

        // TO-DO: stocker les informations décodées dans req.user pour les rendre accessibles ensuite
        req.user = decoded;

        // TO-DO: appeler next() pour passer la main au prochain middleware / controller
        next();

    } catch (err) {

        // TO-DO: gérer le cas d’un token invalide (quel status renvoyer ? quel message ?)
        return res.status(401).json({ message: "Invalid token" });

    }

}

module.exports = { authenticate };