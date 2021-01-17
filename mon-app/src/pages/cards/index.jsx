import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { Container } from "./style";
import db from "./db.json";
const alreadyRemoved = [];
let companysState = db; // Cela résout les problèmes de mise à jour de l'état de l'entreprise qui l'oblige à utiliser l'état actuel et non l'état qui était actif lors de la création de la carte.
export default function CardCompany() {
  const [companys, setCompanys] = useState(db);
  const [lastDirection, setLastDirection] = useState();
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
    console.log("Refusé: " + nameToDelete);
    alreadyRemoved.push(nameToDelete);
  };
  const outOfFrame = (companyName) => {
    console.log(companyName + "Vous avez postulé !");
    companysState = companysState.filter(
      (company) => company.companyName !== companyName
    );
    setCompanys(companysState);
  };
  const swipe = (dir) => {
    const cardsLeft = companys.filter(
      (person) => !alreadyRemoved.includes(person.companyName)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].companyName; // Trouvez l'objet carte à supprimer
      const index = db.map((person) => person.companyName).indexOf(toBeRemoved); // Trouvez l'index dont vous voulez faire référence
      alreadyRemoved.push(toBeRemoved); // Assurez-vous que la carte suivante est retirée la prochaine fois si cette carte n'a pas le temps de quitter l'écran
      childRefs[index].current.swipe(dir); // Swipe la card!
    }
  };
  return (
    <Container>
      <div className="cardContainer">
        {companys.map((company, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={company.idCompany}
            onSwipe={(dir) => swiped(dir, company.companyName)}
            onCardLeftScreen={() => outOfFrame(company.companyName)}
          >
            <div
              style={{ backgroundImage: "url(" + company.img + ")" }}
              className="card"
            >
              <h1>{company.companyName}</h1>
            </div>
            <div className="descriptionContainer">
              <div className="description">
                <h3>Description de l'offre:</h3>
                <h2>{company.title}</h2>
                <p>{company.descriptionPreview}</p>
                <h3>Salaire:{company.salary}</h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="bottom">
        <div className="buttons">
          <button onClick={() => swipe("left")}>Refuser</button>
          <button onClick={() => swipe("right")}>Postuler</button>
        </div>
        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="infoText">
            Swipe a card or press a button to get started!
          </h2>
        )}
      </div>
    </Container>
  );
}
