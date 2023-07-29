import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

import buttonDelete from "./image/element/ButtonDelete.svg";
import buttonLike from "./image/element/ButonLike.svg";
import closeIcon from "./image/nav/CloseIcon.svg";

function App() {
  return (
    <>
      <div className="zoom">
        <a className="zoom__button-closed root__buttom-closed-active">
          <img src={closeIcon} alt="ButtonClosed" />
        </a>
        <div className="zoom__content"></div>
        <img className="zoom__img" alt="" />
        <p className="zoom__text"></p>
      </div>
      <fieldset className="popup confirm">
        <form className="popup__form popup-confirm">
          <h2 className="popup__form-title confirm-title">¿Estás seguro?</h2>
          <img className="popup__closed root__buttom-closed-active" src={closeIcon} alt="ButtonClosed" />
          <button type="submit" className="popup__button confirm-delete">
            Si
          </button>
        </form>
      </fieldset>
      <fieldset className="popup avatar">
        <form className="popup__form popup-avatar" name="img" novalidate>
          <h2 className="popup__form-title avatar-title">Cambiar foto de perfil</h2>
          <img className="popup__closed root__buttom-closed-active" src={closeIcon} alt="ButtonClosed" />
          <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" required />
          <span className="avatar__url-error avatar__container-error"></span>
          <button className="popup__button">Guardar</button>
        </form>
      </fieldset>
      <fieldset className="form popup">
        <form className="form__container popup__form" name="profile" novalidate>
          <a className="form__container-closed root__buttom-closed-active popup__closed">
            <img src={closeIcon} alt="ButtonClosed" />
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
            <img src={closeIcon} alt="ButtonClosed" />
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
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
