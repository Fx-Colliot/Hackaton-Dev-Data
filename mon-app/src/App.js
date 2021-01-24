import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/";
import Connection from "./pages/connection/index";
import Identification from "./pages/identification/index";
import Registration from "./pages/registration/index";
import Cards from "./pages/cards/index";
import Matchs from "./pages/matchs/index";
import Profil from "./pages/profil/index";
import { AppStyle, HeaderStyle, MainStyle } from "./style.jsx";

export default function App() {
	return (
		<AppStyle>
			<Reset />
			<Router>
				<HeaderStyle>
					<Header />
				</HeaderStyle>
				<MainStyle>
					<Switch>
						<Route exact path="/" component={Connection} />
						<Route exact path="/identification" component={Identification} />
						<Route exact path="/registration" component={Registration} />
						<Route exact path="/cards" component={Cards} />
						<Route exact path="/matchs" component={Matchs} />
						<Route exact path="/profil/:prenom" component={Profil} />
					</Switch>
				</MainStyle>
			</Router>
		</AppStyle>
	);
}
