const bcrypt = require("bcrypt");

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;

async function hashPassword(password) {
    // trouver la fonction permettant de retourner le code hasher les mdp
    return await bcrypt.hash(password, SALT_ROUNDS);
}


async function comparePassword(password, hash) {
    // trouver la fonction permettant de retourner le résultat de la méthode de comparaison entre mdp et hash
    return await bcrypt.compare(password, hash);
}

module.exports = {
 hashPassword,
 comparePassword
};