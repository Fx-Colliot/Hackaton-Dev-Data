const express = require("express");
const passport = require("passport");
const router = express.Router();
const { db, jwt_secret } = require("../config");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

//Login

router.post("/connection", passport.authenticate("local"), async (req, res) => {
	try {
		const token = jwt.sign(req.user, jwt_secret);
		res.status(200).json(token);
	} catch (e) {
		console.log(e);
		res.status(500).send("Erreur serveur");
	}
});

//Job Cards

router.get("/cards", passport.authenticate("jwt"), async (req, res) => {
	try {
		const [sqlRes] = await db.query(
			"SELECT a.idCand, a.idJob, c.idCompany, c.companyName, c.img, b.descriptionPreview, b.title, b.salary, a.distance, a.scoreNonSup FROM affinite a JOIN jobs b ON b.idJob = a.idJob JOIN company c ON c.idCompany = b.companyId WHERE a.idCand = 2 AND a.likes IS NULL ORDER BY a.scoreNonSup DESC LIMIT 10"
		);
		res.status(200).json(sqlRes);
		res.status(200).send("Cartes correctement envoyées");
	} catch (e) {
		console.log(e);
		res.status(500).send("Erreur côté serveur lors de l'affichage des cartes");
	}
});

//Check Profil

router.get("/profile/:id", passport.authenticate("jwt"), async (req, res) => {
	try {
		const profileId = req.params.id;
		const [
			sqlRes,
		] = await db.query(
			"SELECT prenom, email, technos, typeContrat, codePostal, anneesDeCode, id from candidats WHERE prenom =?",
			[profileId]
		);
		res.status(200).json(sqlRes);
		res.status(200).send("Profil correctement envoyé");
	} catch (e) {
		console.log(e);
		res.status(500).send("Erreur côté serveur lors de l'affichage du profil");
	}
});

//Update Profil

router.put("/profile/:id", passport.authenticate("jwt"), async (req, res) => {
	try {
		const profileId = req.params.id;
		console.log(profileId);
		const updateProfile = req.body;
		const [sqlRes] = await db.query(`UPDATE candidats SET ? WHERE id = ?`, [
			updateProfile,
			profileId,
		]);
		res.status(200).json(sqlRes);
		res.status(200).send("Profil correctement mis à jour");
	} catch (e) {
		console.log(e);
		res
			.status(500)
			.send("Erreur côté serveur lors de la mise a jour du profil");
	}
});

module.exports = router;
