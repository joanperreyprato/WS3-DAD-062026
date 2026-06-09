const { hashPassword, comparePassword } = require("../utils/bcrypt.util");
const { generateToken } = require("../utils/jwt.util");
const User = require("../models/user.model");


async function register(email, password) {
    // TO-DO : Vérifier si l'utilisateur existe déjà dans la base
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) throw new Error("User already exists");


    // TO-DO : Hasher le mot de passe avec bcrypt util
    const passwordHash = await hashPassword(password);


    // TO-DO : Créer un nouvel utilisateur avec Sequelize
    const newUser = await User.create({
        email,
        passwordHash
    });


    // Retourner uniquement les informations essentielles
    return { email: newUser.email, role: newUser.role };

}


async function login(email, password) {

    // TO-DO : Rechercher l'utilisateur dans la base avec Sequelize
    const user = await User.findOne({ where: { email } });

    if (!user) throw new Error("Invalid credentials");

    // TO-DO : Vérifier que le mot de passe correspond au hash stocké
    const isValid = await comparePassword(password, user.passwordHash);

    if (!isValid) throw new Error("Invalid credentials");

    // TO-DO : Signer le token avec les informations essentielles (id, email, role)
    const token = generateToken({ id: user.id, email: user.email, role: user.role });


    // Retourner uniquement le token
    return { token };

}

module.exports = { register, login };