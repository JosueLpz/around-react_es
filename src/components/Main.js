import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card.js";

function Main(props) {
  const [cards, SetCards] = useState([]);

  useEffect(() => {
    api.getInfoServer("cards").then((data) => {
      SetCards(data);
    });
  }, []);

  return (
    <>
      <main className="element">
        {cards.map((data) => (
          <Card key={data._id} data={data} onCardClick={props.onCardClick} />
        ))}
      </main>
    </>
  );
}

export default Main;
