import React, { useState, useEffect } from "react";
import {
	Page,
	BlockProfil,
	Title,
	BlockP,
	Sentence,
	BlockDetails,
	ContainerDetails,
	DetailsH3,
	DetailsForm,
} from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProfilPage() {
	const [profile, setProfile] = useState({});
	const { prenom } = useParams();
	useEffect(() => {
		axios
			.get("http://localhost:5050/profil/" + prenom)
			.then(function (response) {
				console.log(response.data[0]);
				setProfile(response.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Page>
				<BlockProfil>
					<Title> Bonjour {profile.prenom}! Bon match!</Title>
				</BlockProfil>
				<BlockP>
					<Sentence>Vérifiez vos informations...</Sentence>
				</BlockP>
				<BlockDetails>
					<ContainerDetails>
						<DetailsH3>Techno :</DetailsH3>
						<DetailsForm> {profile.technos}</DetailsForm>
					</ContainerDetails>
					<ContainerDetails>
						<DetailsH3>Contrat :</DetailsH3>
						<DetailsForm>{profile.typeContrat}</DetailsForm>
					</ContainerDetails>
					<ContainerDetails>
						<DetailsH3>Ville :</DetailsH3>
						<DetailsForm>{profile.codePostal}</DetailsForm>
					</ContainerDetails>

					<ContainerDetails>
						<DetailsH3>Année de code :</DetailsH3>
						<DetailsForm>{profile.anneesDeCode}</DetailsForm>
					</ContainerDetails>

					<ContainerDetails>
						<DetailsH3>email :</DetailsH3>
						<DetailsForm>{profile.email}</DetailsForm>
					</ContainerDetails>
				</BlockDetails>
			</Page>
		</>
	);
}
