import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./components/PopupWithForm.js";
import ImagePopup from "./components/ImagePopup.js";

function App() {
  const [openPopup, setOpenPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handlePopupOpen(popupName) {
    setOpenPopup(popupName);
  }
  function handlePopupClose() {
    setOpenPopup(null);
  }

  return (
    <>
      {openPopup === "zoom" && <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />}
      {openPopup === "avatar" && (
        <PopupWithForm title="Cambiar foto de perfil" name="avatar" button="Guardar" handleClose={() => handlePopupClose()}>
          <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" required />
          <span className="avatar__url-error avatar__container-error"></span>
        </PopupWithForm>
      )}
      {openPopup === "card" && (
        <PopupWithForm title="Nuevo lugar" name="card" button="Crear" handleClose={() => handlePopupClose()}>
          <input id="card__title" name="name" placeholder="Titulo" type="text" className="card__element-name-card popup__input" maxLength="30" minLength="2" required />
          <span className="card__title-error card__element-error"></span>
          <input id="card__url" name="link" placeholder="Enlace a la imagen" type="url" className="card__element-link-img popup__input" required />
          <span className="card__url-error card__element-error"></span>
        </PopupWithForm>
      )}
      {openPopup === "form" && (
        <PopupWithForm title="Editar perfil" name="form" button="Guardar" handleClose={() => handlePopupClose()}>
          <input id="form__title" name="title" type="text" className="form__container-name popup__input" maxLength="40" minLength="2" required />
          <span className="form__title-error form__container-error"></span>
          <input id="form__hobby" name="hobby" type="text" className="form__container-hobby popup__input" maxLength="200" minLength="2" required />
          <span className="form__hobby-error form__container-error"></span>
        </PopupWithForm>
      )}
      {openPopup === "confirm" && <PopupWithForm title="¿Estás seguro?" name="confirm" button="Si" handleClose={() => handlePopupClose()}></PopupWithForm>}
      <div className="page">
        <Header onEditProfileClick={() => handlePopupOpen("form")} onAddPlaceClick={() => handlePopupOpen("card")} onEditAvatarClick={() => handlePopupOpen("avatar")} />
        <Main onCardClick={handleCardClick} />
        <Footer />
      </div>
    </>
  );
}

export default App;
