require("dotenv").config();
const mysql = require("mysql2/promise");

const {
	DB_HOST,
	DB_USER,
	DB_PASSWORD,
	DB_DATABASE,
	BACK_PORT,
	JWT_SALTROUNDS,
	JWT_SECRET,
} = process.env;

const db = mysql.createPool({
	connectionLimit: 10,
	host: DB_HOST,
	user: DB_USER,
	database: DB_DATABASE,
	password: DB_PASSWORD,
});

module.exports = {
	db,
	port: BACK_PORT,
	jwt_rounds: parseInt(JWT_SALTROUNDS),
	jwt_secret: JWT_SECRET,
};
