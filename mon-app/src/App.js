import React from "react";
import { Reset } from "styled-reset";
import { useSelector, useDispatch } from "react-redux";
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
	const isLoading = useSelector((state) => state.loader);
	const dispatch = useDispatch();
	return (
		<AppStyle>
			<Reset />

			<Router>
				<HeaderStyle>
					<Header />
				</HeaderStyle>
				<MainStyle>
					<Switch>
						<div>
							<p>
								{isLoading ? (
									<img
										src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
										alt="Please wait..."
									/>
								) : (
									!dispatch
								)}
							</p>
						</div>
						{/* <Route exact path="/" component={Connection} />
						<Route exact path="/identification" component={Identification} />
						<Route exact path="/registration" component={Registration} />
						<Route exact path="/cards" component={Cards} />
						<Route exact path="/matchs" component={Matchs} />
						<Route exact path="/profil/:prenom" component={Profil} /> */}
					</Switch>
				</MainStyle>
			</Router>
		</AppStyle>
	);
}
