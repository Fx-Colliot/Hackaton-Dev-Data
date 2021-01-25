const express = require("express");
const passport = require("passport");
const router = express.Router();
const { db } = require("../config");

router.get("/protected", passport.authenticate("jwt"), (req, res) => {
	const msg = "If you can see this, you should be logged in, " + req.user.nom;
	res.status(200).send(msg);
});

//Login

router.post("/connection", passport.authenticate("local"), (req, res) => {
	const token = jwt.sign(req.user, jwt_secret);
	res.status(200).json(token);
});

//Job Cards

router.get("/cards", (req, res) => {
	db.query(
		"SELECT a.idCand, a.idJob, c.idCompany, c.companyName, c.img, b.descriptionPreview, b.title, b.salary, a.distance, a.scoreNonSup FROM affinite a JOIN jobs b ON b.idJob = a.idJob JOIN company c ON c.idCompany = b.companyId WHERE a.idCand = 2 AND a.likes IS NULL ORDER BY a.scoreNonSup DESC LIMIT 10",
		(err, results) => {
			if (err) {
				res.status(500).send("Error retrieving data");

				return;
			}
			return res.status(200).json(results);
		}
	);
});

//Check Profil

router.get("/profil/:prenom", (req, res) => {
	db.query(
		"SELECT prenom, email, technos, typeContrat, codePostal, anneesDeCode, id from candidats WHERE prenom =?",
		[req.params.prenom],

		(err, results) => {
			if (err) {
				res.status(500).send("Error download information");
			} else {
				return res.status(200).json(results);
			}
		}
	);
});

module.exports = router;
