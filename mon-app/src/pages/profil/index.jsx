import React, { useState, useEffect } from "react";
import { Container, Preferences, Informations } from "./style.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profil() {
	const [profil, setProfil] = useState({});
	const { prenom } = useParams("");
	useEffect(() => {
		axios
			.get("http://localhost:5050/profil/" + prenom)
			.then(function (response) {
				console.log(response.data[0]);
				setProfil(response.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<h2>Voici votre profil</h2>
			<h2 className="name">{profil.prenom}</h2>
			<p>Vos informations</p>
			<Informations>
				<h3>Email :</h3>
				<p>{profil.email}</p>
				<h3>Ville :</h3>
				<p>{profil.codePostal}</p>
				<h3>Expérience :</h3>
				<p>{profil.anneesDeCode}</p>
			</Informations>
			<p>Vos préférences</p>
			<Preferences>
				<h3>Contrat :</h3>
				<p>{profil.typeContrat}</p>
				<h3>Technos :</h3>
				<p> {profil.technos}</p>
			</Preferences>
		</Container>
	);
}
