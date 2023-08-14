import { useContext } from "react";
import buttonDelete from "../image/element/ButtonDelete.svg";
import buttonLike from "../image/element/ButonLike.svg";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.data);
  }

  const dataUser = useContext(CurrentUserContext);

  const isOwn = props.data.owner._id === dataUser._id;

  const cardDeleteButtonStyle = {
    display: isOwn ? "block" : "none",
  };

  return (
    <article className="element__article" key={props.data._id}>
      <button type="button" className="element__article_delete root__button-hover-active" style={cardDeleteButtonStyle}>
        <img src={buttonDelete} alt="buttondelete" /*Boton de eliminar Card */ />
      </button>
      <button type="button" className="element__article_img_button" onClick={handleClick}>
        <img className="element__article_img" alt={props.data.name} src={props.data.link} />
      </button>
      <div className="element__article_row">
        <h2 className="element__article_row_title">{props.data.name}</h2>
        <button type="button" className="element__article_row_like root__button-hover-active" /*Boton de Likes Card */>
          <img src={buttonLike} alt="buttonlike" />
        </button>
        <p className="element__article_row_like_counter">{props.data.likes.length}</p>
      </div>
    </article>
  );
}
