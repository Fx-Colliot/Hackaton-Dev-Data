import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/";
import Connection from "./pages/connection/index";
import Sinscrire from "./pages/sinscrire/index";
import SeConnecter from "./pages/seconnecter/index";
import CardCompany from "./pages/cards/index";
import Match from "./pages/match/index";
import ProfilPage from "./pages/profil/index";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Reset />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Connection} />
          <Route exact path="/sinscrire" component={Sinscrire} />
          <Route exact path="/seconnecter" component={SeConnecter} />
          <Route exact path="/cards" component={CardCompany} />
          <Route exact path="/match" component={Match} />
          <Route exact path="/profil" component={ProfilPage} />

          <Route exact path="/profil/:prenom" component={ProfilPage} />
        </Switch>
      </Router>
    </div>
  );
}
