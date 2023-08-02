import buttonDelete from "../image/element/ButtonDelete.svg";
import buttonLike from "../image/element/ButonLike.svg";

function Main() {
  return (
    <>
      <main className="element">
        <template id="template__article">
          <article className="element__article">
            <a className="element__article_delete root__button-hover-active">
              <img src={buttonDelete} alt="buttondelete" />
            </a>
            <a className="element__article_img_button">
              <img className="element__article_img" alt="" />
            </a>
            <div className="element__article_row">
              <h2 className="element__article_row_title"></h2>
              <a className="element__article_row_like root__button-hover-active">
                <img src={buttonLike} alt="buttonlike" />
              </a>
              <p className="element__article_row_like_counter"></p>
            </div>
          </article>
        </template>
      </main>
    </>
  );
}

export default Main;
