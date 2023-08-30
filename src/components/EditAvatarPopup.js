import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <>
      {props.isOpen === "avatar" && (
        <PopupWithForm title="Cambiar foto de perfil" name="avatar" button="Guardar" handleClose={props.onClose} onSubmit={handleSubmit}>
          <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" ref={avatarInputRef} required />
          <span className="avatar__url-error avatar__container-error"></span>
        </PopupWithForm>
      )}
    </>
  );
}

export default EditAvatarPopup;
