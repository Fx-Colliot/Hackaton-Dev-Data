const express = require("express");
const Connection = require("mysql2");
const app = express();
const { db } = require("./config");

app.use(express.json());

app.listen(5050, () => {
  console.log("Server is runing !");
});

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Welcome to Match♡Dev!");
});

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
      codePostal,
      anneesDeCode,
      salaireVise,
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
("select a.idCand, a.idJob, c.idCompany, c.companyName, c.img, b.descriptionPreview, b.title, b.salary, a.distance, a.scoreNonSup from affinite a join jobs b on b.idJob=a.idJob join company c on c.idCompany=b.companyId where a.idCand=2 and a.likes is null order by a.scoreNonSup desc limit 10");

app.get("/cards", (req, res) => {
  db.query(
    "SELECT a.idCand, a.idJob, c.idCompany, c.companyName, c.img, b.descriptionPreview, b.title, b.salary, a.distance, a.scoreNonSup FROM affinite a JOIN jobs b ON b.idJob = a.idJob JOIN company c ON c.idCompany = b.companyId WHERE a.idCand = 2 AND a.likes IS NULL ORDER BY a.scoreNonSup DESC LIMIT 10",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving data");

        return;
      }
      return res.json(results);
    }
  );
});
