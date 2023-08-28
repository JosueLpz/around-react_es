import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <>
      {props.isOpen === "avatar" && (
        <PopupWithForm title="Cambiar foto de perfil" name="avatar" button="Guardar" handleClose={props.onClose}>
          <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" required />
          <span className="avatar__url-error avatar__container-error"></span>
        </PopupWithForm>
      )}
    </>
  );
}

export default EditAvatarPopup;
