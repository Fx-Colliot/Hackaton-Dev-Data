import { React, useState } from "react";
import { Container, TitleJobs } from "./style.jsx";
import db from "./db.json";

export default function Matchs() {
	let company = db;
	return (
		<Container>
			<TitleJobs> {company.companyName} </TitleJobs>
		</Container>
	);
}
