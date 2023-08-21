import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Main(props) {
  const dataUser = useContext(CurrentUserContext);
  const [cards, SetCards] = useState([]);

  useEffect(() => {
    api.getInfoServer("cards").then((cards) => {
      SetCards(cards);
    });
  }, []);

  function handleCardLike(card) {
    console.log("🚀 ~ file: Main.js:17 ~ handleCardLike ~ card:", card);
    const isLiked = card.likes.some((like) => {
      return like._id === dataUser._id;
    });
    console.log("🚀 ~ file: Main.js:22 ~ isLiked ~ isLiked:", isLiked);
    // api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
    //   SetCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    // });
  }

  return (
    <>
      <main className="element">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
        ))}
      </main>
    </>
  );
}

export default Main;
