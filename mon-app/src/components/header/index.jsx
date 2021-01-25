import React from "react";
import { Container } from "./style.jsx";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Container>
			<Link to="/matchs">
				<img
					className="matchIcon"
					src="/images/match_icon.svg"
					alt="Match Icon"
				/>
			</Link>
			<Link to="/">
				<img
					className="logo"
					src="/images/md_logo_white.png"
					alt="Match Dev logo"
				/>
			</Link>
			<Link to="/profile/:prenom">
				<img
					className="profileIcon"
					src="/images/profile_user.svg"
					alt="User Profile Icon"
				/>
			</Link>
		</Container>
	);
}
