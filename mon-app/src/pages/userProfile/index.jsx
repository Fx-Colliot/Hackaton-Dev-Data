import React, { useState, useEffect } from "react";
import { Container, Preferences, Informations } from "./style.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserProfile() {
	const [profile, setProfile] = useState({});
	const { prenom } = useParams("");
	useEffect(() => {
		axios
			.get("http://localhost:${backPort}/profile/" + prenom)
			.then(function (response) {
				console.log(response.data[0]);
				setProfile(response.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<h2>Voici votre profil</h2>
			<h2 className="name">{profile.prenom}</h2>
			<p>Vos informations</p>
			<Informations>
				<h3>Email :</h3>
				<p>{profile.email}</p>
				<h3>Ville :</h3>
				<p>{profile.codePostal}</p>
				<h3>Expérience :</h3>
				<p>{profile.anneesDeCode}</p>
			</Informations>
			<p>Vos préférences</p>
			<Preferences>
				<h3>Contrat :</h3>
				<p>{profile.typeContrat}</p>
				<h3>Technos :</h3>
				<p> {profile.technos}</p>
			</Preferences>
		</Container>
	);
}
