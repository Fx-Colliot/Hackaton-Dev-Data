const express = require("express");
const { backPort } = require("./config");
const passport = require("passport");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

/* --- Routes --- */

app.listen(5050, () => {
	console.log("Server is runing !");
});

//HomePage

app.get("/", (req, res) => {
	console.log("Home Page");
	res.send("Welcome to Match♡Dev!");
});

//Form

app.post("/user", (req, res) => {
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

//Select Jobs

app.get("/cards", (req, res) => {
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

app.get("/profil/:prenom", (req, res) => {
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

/* --- 404 and server launch --- */

app.use((req, res) => {
	const msg = `Page not found: ${req.url}`;
	console.warn(msg);
	res.status(404).send(msg);
});

app.listen(backPort, () => {
	console.log(`API root available at: http://localhost:${backPort}/`);
});
