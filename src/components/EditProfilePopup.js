import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    // * Esta es la funcion handleUpdateUser y estas enviando como ARGUMENTO los datos de los inputs de el form como objeto para enviar la api
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <>
      {props.isOpen === "form" && (
        <PopupWithForm title="Editar perfil" name="form" button="Guardar" handleClose={props.onClose} onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={handleChangeName}
            id="form__title"
            name="title"
            type="text"
            className="form__container-name popup__input"
            maxLength="40"
            minLength="2"
            required
          />
          <span className="form__title-error form__container-error"></span>
          <input
            value={description}
            onChange={handleChangeDescription}
            id="form__hobby"
            name="hobby"
            type="text"
            className="form__container-hobby popup__input"
            maxLength="200"
            minLength="2"
            required
          />
          <span className="form__hobby-error form__container-error"></span>
        </PopupWithForm>
      )}
    </>
  );
}
