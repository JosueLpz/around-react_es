import React, { useState, useEffect, useContext } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

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

  function handleUpdateAvatar(updatedAvatarData) {
    api.updateUserProfile("users/me/avatar", JSON.stringify(updatedAvatarData)).then((data) => {
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
  // * api post para crear carta!
  function handleAddPlaceSubmit(updatedCardData) {
    api.postCreateCards("cards", JSON.stringify(updatedCardData)).then((data) => {
      SetCards([data, ...cards]);
      handlePopupClose();
    });
  }

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
        <Header
          onEditProfileClick={() => handlePopupOpen("form")}
          onAddPlaceClick={() => handlePopupOpen("card")}
          onEditAvatarClick={() => handlePopupOpen("avatar")}
        />
        <Main
          isOpen={openPopup}
          onClose={handlePopupClose}
          onUpdateUser={handleUpdateUser}
          onUpdateAvatar={handleUpdateAvatar}
          onUpdateCard={handleAddPlaceSubmit}
          onCardClick={handleCardClick}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
