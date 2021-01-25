const express = require("express");
const passport = require("passport");
const router = express.Router();
const { db, jwt_rounds, jwt_secret } = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

//Test DB

router.get("/testDB", (req, res) => {
		const [sqlRes] = await db.execute(`SELECT * FROM candidats`);
		res.status(200).json(sqlRes);
		res.status(500).json(e);
});

//HomePage

router.get("/", (req, res) => {
	const msg = "Welcome to Match♡Dev!";
	res.status(200).send(msg);
});

//Registration

// router.post("/register", (req, res) => {
// 		const formData = req.body;
// 		formData.password = bcrypt.hashSync(formData.password, jwt_rounds);
// 		const [sqlRes] = await db.query(`INSERT INTO candidats SET ?`, formData);
// 		delete formData.password;
// 		formData.id = sqlRes.insertId;
// 		const token = jwt.sign(formData, jwt_secret);
// 		res.status(201).json(token);
// 		const msg = "You are Registred!";
// 		res.status(500).json(msg);
// });

//Registration Form

router.post("/user", (req, res) => {
	const {
		prenom,
		email,
		password,
		technos,
		typeContrat,
		codePostal,
		anneesDeCode,
		salaireVise,
	} = req.body;
	console.log("-------------------------");
	console.log(salaireVise);
	console.log("-------------------------");
	db.query(
		"INSERT INTO candidats(prenom, nom, email, password, technos, technoVisee,typeContrat, anneesDeCode, salaireVise, codePostal) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		[
			prenom,
			"",
			email,
			password,
			technos,
			"",
			typeContrat,
			anneesDeCode,
			salaireVise,
			codePostal,
		],
		(err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send("Error saving a new user");
			} else {
				res.status(200).send("New user saved!");
			}
		}
	);
});

module.exports = router;
