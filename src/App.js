import "./App.css";

function App() {
  return (
    <>
      <div classNameName="zoom">
        <a className="zoom__button-closed root__buttom-closed-active">
          <img src="<%=require('./image/nav/CloseIcon.svg')%>" alt="ButtonClosed" />
        </a>
        <div className="zoom__content"></div>
        <img className="zoom__img" alt="" />
        <p className="zoom__text"></p>
      </div>
      <fieldset className="popup confirm">
        <form className="popup__form popup-confirm">
          <h2 className="popup__form-title confirm-title">¿Estás seguro?</h2>
          <img className="popup__closed root__buttom-closed-active" src="<%=require('./image/nav/CloseIcon.svg')%>" alt="ButtonClosed" />
          <button type="submit" className="popup__button confirm-delete">
            Si
          </button>
        </form>
      </fieldset>
      <fieldset className="popup avatar">
        <form className="popup__form popup-avatar" name="img" novalidate>
          <h2 className="popup__form-title avatar-title">Cambiar foto de perfil</h2>
          <img className="popup__closed root__buttom-closed-active" src="<%=require('./image/nav/CloseIcon.svg')%>" alt="ButtonClosed" />
          <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" required />
          <span className="avatar__url-error avatar__container-error"></span>
          <button className="popup__button">Guardar</button>
        </form>
      </fieldset>
      <fieldset className="form popup">
        <form className="form__container popup__form" name="profile" novalidate>
          <a className="form__container-closed root__buttom-closed-active popup__closed">
            <img src="<%=require('./image/nav/CloseIcon.svg')%>" alt="ButtonClosed" />
          </a>
          <h2 className="form__container-title">Editar perfil</h2>
          <input id="form__title" name="title" type="text" className="form__container-name popup__input" maxlength="40" minlength="2" required />
          <span className="form__title-error form__container-error"></span>
          <input id="form__hobby" name="hobby" type="text" className="form__container-hobby popup__input" maxlength="200" minlength="2" required />
          <span className="form__hobby-error form__container-error"></span>
          <button type="submit" className="form__container-button root__button-hover-active popup__button">
            Guardar
          </button>
        </form>
      </fieldset>
      <fieldset className="card popup">
        <form className="card__element popup__form" name="card" novalidate>
          <a className="card__element-button-closed root__buttom-closed-active popup__closed">
            <img src="<%=require('./image/nav/CloseIcon.svg')%>" alt="ButtonClosed" />
          </a>
          <h2 className="card__element-title">Nuevo lugar</h2>
          <input id="card__title" name="name" placeholder="Titulo" type="text" className="card__element-name-card popup__input" maxlength="30" minlength="2" required />
          <span className="card__title-error card__element-error"></span>
          <input id="card__url" name="link" placeholder="Enlace a la imagen" type="url" className="card__element-link-img popup__input" required />
          <span className="card__url-error card__element-error"></span>
          <button type="submit" className="card__element-button-add root__button-hover-active popup__button">
            Crear
          </button>
        </form>
      </fieldset>
      <div className="page">
        <header className="header">
          <img className="header__logo" src="<%=require('./image/header/header__logo.svg')%>" alt="logo header" />
          <div className="header__line"></div>
        </header>
        <nav className="profile">
          <div className="profile__content-img">
            <img className="profile__img profile__img-hover" name="avatar" alt="avatarusuario" />
          </div>
          <div className="profile__row">
            <h1 className="profile__row-name"></h1>
            <a className="profile__row-edit root__button-hover-active">
              <img src="<%=require('./image/header/EditButton.svg')%>" alt="botonedit" />
            </a>
          </div>
          <h2 className="profile__hobbie"></h2>
          <a className="profile__button root__button-hover-active">
            <img className="profile__button" src="<%=require('./image/nav/Addbutton.svg')%>" alt="BotonAdd" />
          </a>
        </nav>
        <main className="element">
          <template id="template__article">
            <article className="element__article">
              <a className="element__article_delete root__button-hover-active">
                <img src="<%=require('./image/element/ButtonDelete.svg')%>" alt="buttondelete" />
              </a>
              <a className="element__article_img_button">
                <img className="element__article_img" alt="" />
              </a>
              <div className="element__article_row">
                <h2 className="element__article_row_title"></h2>
                <a className="element__article_row_like root__button-hover-active">
                  <img src="<%=require('./image/element/ButonLike.svg')%>" alt="buttonlike" />
                </a>
                <p className="element__article_row_like_counter"></p>
              </div>
            </article>
          </template>
        </main>
        <footer className="footer">
          <h2 className="footer__paragrah">&copy; 2023 la Filosofia es Vida</h2>
        </footer>
      </div>
    </>
  );
}

export default App;
