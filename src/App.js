import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm.js";

function App() {
  return (
    <>
      <PopupWithForm title="Cambiar foto de perfil" name="avatar" button="Guardar">
        <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" required />
        <span className="avatar__url-error avatar__container-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Nuevo lugar" name="card" button="Crear">
        <input id="card__title" name="name" placeholder="Titulo" type="text" className="card__element-name-card popup__input" maxlength="30" minlength="2" required />
        <span className="card__title-error card__element-error"></span>
        <input id="card__url" name="link" placeholder="Enlace a la imagen" type="url" className="card__element-link-img popup__input" required />
        <span className="card__url-error card__element-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Editar perfil" name="form" button="Guardar">
        <input id="form__title" name="title" type="text" className="form__container-name popup__input" maxlength="40" minlength="2" required />
        <span className="form__title-error form__container-error"></span>
        <input id="form__hobby" name="hobby" type="text" className="form__container-hobby popup__input" maxlength="200" minlength="2" required />
        <span className="form__hobby-error form__container-error"></span>
      </PopupWithForm>
      <PopupWithForm title="¿Estás seguro?" name="confirm" button="Si"></PopupWithForm>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
