import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import EditProfilePopup from "./components/EditProfilePopup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import ImagePopup from "./components/ImagePopup.js";
import api from "./utils/api.js";
import { CurrentUserContext } from "./components/contexts/CurrentUserContext";

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

  const [currentUser, SetCurrentUser] = useState([]);
  useEffect(() => {
    api.getInfoServer("users/me").then((data) => {
      SetCurrentUser(data);
    });
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <EditProfilePopup isOpen={openPopup} onClose={handlePopupClose} />

        {selectedCard !== null && <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />}
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
        {openPopup === "confirm" && <PopupWithForm title="¿Estás seguro?" name="confirm" button="Si" handleClose={() => handlePopupClose()}></PopupWithForm>}
        <div className="page">
          <Header onEditProfileClick={() => handlePopupOpen("form")} onAddPlaceClick={() => handlePopupOpen("card")} onEditAvatarClick={() => handlePopupOpen("avatar")} />
          <Main onCardClick={handleCardClick} />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
