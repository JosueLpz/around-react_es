import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card.js";

function Main() {
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
          <Card key={data._id} data={data} />
        ))}
      </main>
    </>
  );
}

export default Main;
