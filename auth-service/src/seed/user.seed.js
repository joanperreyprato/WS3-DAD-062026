require("dotenv").config();
const sequelize = require("../config/database.config");
const User = require("../models/user.model");
const { hashPassword } = require("../utils/bcrypt.util");


// Prevent running seed in production
if (process.env.NODE_ENV === "prod") {
    console.log("NODE_ENV=prod detected — seed is disabled by default.");
    process.exit(0);
}


async function runSeed() {
    try {
        // TO-DO: Test database connection using Sequelize
        await sequelize.authenticate();
        console.log("Database connection successful");

        // TO-DO: Sync models (create/update tables if needed)           
        await sequelize.sync({ alter: true });
        console.log("Models synchronized");


        const users = [
            { email: "admin@example.com", password: "Password123!", role: "admin" },
            { email: "user@example.com", password: "Password123!", role: "user" },

        ];

        for (const u of users) {
            // TO-DO: Check if user already exists in the database
            const existing = await User.findOne({ where: { email: u.email } });

            if (existing) {
                console.log(`User ${u.email} already exists — skipping`);
                continue;

            }

            const passwordHash = await hashPassword(u.password);
            // TO-DO: Create the new user in the database
            await User.create({
                email: u.email,
                passwordHash,
                role: u.role,
            });

            console.log(`User created: ${u.email}`);

        }

        console.log("Seed completed");
        process.exit(0);


    } catch (err) {

        console.error("Seed error:", err);
        process.exit(1);

    }

}

// Execute the seed
runSeed();