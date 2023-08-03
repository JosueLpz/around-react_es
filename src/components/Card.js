import buttonDelete from "../image/element/ButtonDelete.svg";
import buttonLike from "../image/element/ButonLike.svg";

export default function Card({ data }) {
  return (
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
  );
}
