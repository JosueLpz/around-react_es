import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card.js";

function Main(props) {
  const userData = useContext(CurrentUserContext);
  return (
    <>
      <main className="element">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            userData={userData}
          />
        ))}
      </main>
    </>
  );
}

export default Main;
