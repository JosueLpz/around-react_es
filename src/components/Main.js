import { useState, useEffect } from "react";
import buttonDelete from "../image/element/ButtonDelete.svg";
import buttonLike from "../image/element/ButonLike.svg";
import api from "../utils/api";

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
          <article className="element__article" key={data._id}>
            <a className="element__article_delete root__button-hover-active">
              <img src={buttonDelete} alt="buttondelete" />
            </a>
            <a className="element__article_img_button">
              <img className="element__article_img" alt={data.name} src={data.link} />
            </a>
            <div className="element__article_row">
              <h2 className="element__article_row_title">{data.name}</h2>
              <a className="element__article_row_like root__button-hover-active">
                <img src={buttonLike} alt="buttonlike" />
              </a>
              <p className="element__article_row_like_counter">{data.likes.length}</p>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default Main;
