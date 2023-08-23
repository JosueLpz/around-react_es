// import PopupWithForm from "./components/PopupWithForm.js";
// import ImagePopup from "./components/ImagePopup.js";

// function EditProfilePopup(props) {
//   return (
//     <>
//       {props.isOpenCard !== null && <ImagePopup card={props.isOpenCard} onClose={props.isClosed} />}
//       {props.isOpen === "avatar" && (
//         <PopupWithForm title="Cambiar foto de perfil" name="avatar" button="Guardar" handleClose={props.isClosed}>
//           <input id="avatar__url" className="popup__input" name="avatar" placeholder="Nuevo avatar" type="url" required />
//           <span className="avatar__url-error avatar__container-error"></span>
//         </PopupWithForm>
//       )}
//       {props.isOpen === "card" && (
//         <PopupWithForm title="Nuevo lugar" name="card" button="Crear" handleClose={props.isClosed}>
//           <input id="card__title" name="name" placeholder="Titulo" type="text" className="card__element-name-card popup__input" maxLength="30" minLength="2" required />
//           <span className="card__title-error card__element-error"></span>
//           <input id="card__url" name="link" placeholder="Enlace a la imagen" type="url" className="card__element-link-img popup__input" required />
//           <span className="card__url-error card__element-error"></span>
//         </PopupWithForm>
//       )}
//       {props.isOpen === "form" && (
//         <PopupWithForm title="Editar perfil" name="form" button="Guardar" handleClose={props.isClosed}>
//           <input id="form__title" name="title" type="text" className="form__container-name popup__input" maxLength="40" minLength="2" required />
//           <span className="form__title-error form__container-error"></span>
//           <input id="form__hobby" name="hobby" type="text" className="form__container-hobby popup__input" maxLength="200" minLength="2" required />
//           <span className="form__hobby-error form__container-error"></span>
//         </PopupWithForm>
//       )}
//       {props.isOpen === "confirm" && <PopupWithForm title="¿Estás seguro?" name="confirm" button="Si" handleClose={props.isClosed}></PopupWithForm>}
//     </>
//   );
// }

// export default EditProfilePopup;
