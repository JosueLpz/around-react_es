import Card from "./Card.js";

function Main(props) {
  return (
    <>
      <main className="element">
        {props.cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
        ))}
      </main>
    </>
  );
}

export default Main;
