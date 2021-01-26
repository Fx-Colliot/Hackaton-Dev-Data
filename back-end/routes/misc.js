const express = require("express");
const router = express.Router();
const { db, jwt_rounds, jwt_secret } = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

//HomePage

router.get("/", (req, res) => {
	const msg = "Welcome to Match♡Dev!";
	res.status(200).send(msg);
	res.status(500).json("Erreur côté serveur");
});

//Test DB

router.get("/testDB", (req, res) => {
		const [sqlRes] = await db.execute(`SELECT * FROM candidats`);
		res.status(200).json(sqlRes);
		res.status(500).json("Erreur côté serveur");
});

// Register

router.post("/register", async (req, res) => {
	try {
	const {
		prenom,
		email,
		password,
		technos,
		typeContrat,
		codePostal,
		anneesDeCode,
		salaireVise,
	} = formData;
		formData = req.body;
		formData.password = bcrypt.hashSync(formData.password, jwt_rounds);
		const [sqlRes] = await db.query(
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
			]);
		delete formData.password;
		formData.id = sqlRes.insertId;
		const token = jwt.sign(formData, jwt_secret);
		res.status(201).json(token);
		res.status(200).send("Nouveau profil enregistré!");
	} catch (e) {
		res.status(500).send("Erreur côté serveur lors de l'enregistrement d'un nouvel utilisateur");
	}
});

module.exports = router;
