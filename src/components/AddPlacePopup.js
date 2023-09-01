import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateCard({
      name: title,
      link: url,
    });
  }

  return (
    <>
      {props.isOpen === "card" && (
        <PopupWithForm title="Nuevo lugar" name="card" button="Crear" handleClose={props.onClose} onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={handleChangeTitle}
            id="card__title"
            name="name"
            placeholder="Titulo"
            type="text"
            className="card__element-name-card popup__input"
            maxLength="30"
            minLength="2"
            required
          />
          <span className="card__title-error card__element-error"></span>
          <input
            value={url}
            onChange={handleChangeUrl}
            id="card__url"
            name="link"
            placeholder="Enlace a la imagen"
            type="url"
            className="card__element-link-img popup__input"
            required
          />
          <span className="card__url-error card__element-error"></span>
        </PopupWithForm>
      )}
    </>
  );
}

export default AddPlacePopup;
