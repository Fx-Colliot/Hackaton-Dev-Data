import React, { useState } from "react";
import {
	Mandatory,
	Title,
	Container,
	Button,
	FormContainer,
	Label,
	Text,
} from "./style.jsx";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

const Connection = () => {
	const { register, handleSubmit, errors } = useForm();
	const [loggedIn, setDataSend] = useState(false);

	const signup = (formData) => {
		axios
			.post("http://localhost:5050/profile", formData)
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
					<Title>MATCH DEV</Title>
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

						<Button>CONNEXION</Button>
						<Text>OU</Text>
						<Link to="/registration">
							<Button className="inscription">S'INSCRIRE</Button>
						</Link>
					</FormContainer>
				</Container>
			)}
		</div>
	);
};
export default Connection;
