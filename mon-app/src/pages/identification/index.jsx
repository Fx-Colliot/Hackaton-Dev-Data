import React, { useState } from "react";
import {
	Mandatory,
	Title,
	Container,
	Button,
	FormContainer,
	Label,
} from "./style.jsx";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

const Identification = () => {
	const { register, handleSubmit, errors } = useForm();
	const [loggedIn, setDataSend] = useState(false);

	const signup = (formData) => {
		axios
			.post("http://localhost:5050/profil", formData)
			.then(({ data }) => {
				console.log("Profile created");
				setDataSend(true);
			})
			.catch((err) => {
				console.warn("Error");
			});
	};

	return (
		<div>
			{loggedIn ? (
				<Redirect to="/cards" />
			) : (
				<Container onSubmit={handleSubmit(signup)}>
					<Title>IDENTIFICATION</Title>
					<FormContainer>
						<Label>Email</Label>
						<input name="email" ref={register({ required: true })} />
						{errors.email && <Mandatory>Ce champs est obligatoire</Mandatory>}

						<Label>Mot de passe</Label>
						<input
							type="password"
							minlength="8"
							name="password"
							ref={register({ required: true })}
						/>
						{errors.password && <Mandatory>Minimun 8 caractères</Mandatory>}
						<Link to="/cards">
							<Button>GO!</Button>
						</Link>
					</FormContainer>
				</Container>
			)}
		</div>
	);
};
export default Identification;
