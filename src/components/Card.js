import buttonDelete from "../image/element/ButtonDelete.svg";
import buttonLike from "../image/element/ButonLike.svg";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.data);
  }

  return (
    <article className="element__article" key={props.data._id} onClick={handleClick}>
      <a className="element__article_delete root__button-hover-active">
        <img src={buttonDelete} alt="buttondelete" />
      </a>
      <a className="element__article_img_button">
        <img className="element__article_img" alt={props.data.name} src={props.data.link} />
      </a>
      <div className="element__article_row">
        <h2 className="element__article_row_title">{props.data.name}</h2>
        <a className="element__article_row_like root__button-hover-active">
          <img src={buttonLike} alt="buttonlike" />
        </a>
        <p className="element__article_row_like_counter">{props.data.likes.length}</p>
      </div>
    </article>
  );
}
