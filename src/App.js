import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./components/PopupWithForm.js";
import EditProfilePopup from "./components/EditProfilePopup.js";
import EditAvatarPopup from "./components/EditAvatarPopup.js";
import AddPlacePopup from "./components/AddPlacePopup.js";
import ImagePopup from "./components/ImagePopup.js";
import api from "./utils/api.js";
import { CurrentUserContext } from "./components/contexts/CurrentUserContext";

function App() {
  // * pupop de los formularios
  const [openPopup, setOpenPopup] = useState(null);
  function handlePopupOpen(popupName) {
    setOpenPopup(popupName);
  }
  function handlePopupClose() {
    setOpenPopup(null);
  }
  // * Solicitudes de apis de profile y sus manejos de cambios de estado
  const [currentUser, SetCurrentUser] = useState([]);
  useEffect(() => {
    api.getInfoServer("users/me").then((data) => {
      SetCurrentUser(data);
    });
  }, []);

  function handleUpdateUser(updatedUserData) {
    api.updateUserProfile("users/me", JSON.stringify(updatedUserData)).then((data) => {
      SetCurrentUser(data);
      handlePopupClose();
    });
  }

  function handleUpdateAvatar(updatedUserData) {
    api.updateUserProfile("users/me/avatar", JSON.stringify(updatedUserData)).then((data) => {
      SetCurrentUser(data);
      handlePopupClose();
    });
  }

  //*Manejo de la lista de cartas

  const [cards, SetCards] = useState([]);

  useEffect(() => {
    api.getInfoServer("cards").then((cards) => {
      SetCards(cards);
    });
  }, []);

  //*metodos de cartas borrar y like
  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => {
      return like._id === currentUser._id;
    });

    if (!isLiked) {
      api.putLikesCard(`cards/likes/${card._id}`).then((newCard) => {
        SetCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    } else {
      api.deleteInfoServer(`cards/likes/${card._id}`).then((newCard) => {
        SetCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteInfoServer(`cards/${card._id}`).then(() => {
      SetCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  // * popup de las cartas
  const [selectedCard, setSelectedCard] = useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <EditProfilePopup isOpen={openPopup} onClose={handlePopupClose} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={openPopup} onClose={handlePopupClose} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={openPopup} onClose={handlePopupClose} onUpdateAvatar={handleUpdateAvatar} />
        {selectedCard !== null && <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />}
        {openPopup === "confirm" && (
          <PopupWithForm title="¿Estás seguro?" name="confirm" button="Si" handleClose={() => handlePopupClose()}></PopupWithForm>
        )}
        <div className="page">
          <Header
            onEditProfileClick={() => handlePopupOpen("form")}
            onAddPlaceClick={() => handlePopupOpen("card")}
            onEditAvatarClick={() => handlePopupOpen("avatar")}
          />
          <Main onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
