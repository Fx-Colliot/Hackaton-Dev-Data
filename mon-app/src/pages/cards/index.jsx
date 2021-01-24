import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { Container } from "./style.jsx";
import axios from "axios";

export default function Cards() {
	const [companys, setCompanys] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5050/cards/")
			.then(function (response) {
				setCompanys(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const swiped = (nameToDelete) => {
		console.log("Offre refusée: " + nameToDelete);
	};

	const outOfFrame = (companyName) => {
		console.log(companyName + " et vous avez Matché!");
	};

	return (
		<Container>
			<div className="cardContainer">
				{companys.map((companys) => (
					<>
						<TinderCard
							className="swipe"
							key={companys.idCompany}
							onSwipe={(dir) => swiped(dir, companys.companyName)}
							onCardLeftScreen={() => outOfFrame(companys.companyName)}
						>
							<div
								style={{ backgroundImage: "url(" + companys.img + ")" }}
								className="card"
							></div>
							<div className="descriptionContainer">
								<div className="description">
									<h3>{companys.companyName}</h3>
									<h1>{companys.title}</h1>
									<h2>Description de l'entreprise</h2>
									<p>{companys.descriptionPreview}</p>
									<h2>Salaire: {companys.salary}</h2>
								</div>
							</div>
						</TinderCard>
					</>
				))}
			</div>
		</Container>
	);
}
