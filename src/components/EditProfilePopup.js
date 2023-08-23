import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  return (
    <>
      {props.isOpen === "form" && (
        <PopupWithForm title="Editar perfil" name="form" button="Guardar" handleClose={props.onClose}>
          <input id="form__title" name="title" type="text" className="form__container-name popup__input" maxLength="40" minLength="2" required />
          <span className="form__title-error form__container-error"></span>
          <input id="form__hobby" name="hobby" type="text" className="form__container-hobby popup__input" maxLength="200" minLength="2" required />
          <span className="form__hobby-error form__container-error"></span>
        </PopupWithForm>
      )}
    </>
  );
}
