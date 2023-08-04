import closeIcon from "../image/nav/CloseIcon.svg";

export default function ImagePopup(props) {
  return (
    <div className="zoom">
      <a className="zoom__button-closed root__buttom-closed-active" onClick={props.onClose}>
        <img src={closeIcon} alt="ButtonClosed" />
      </a>
      <div className="zoom__content"></div>
      <img className="zoom__img" src={props.card.link} />
      <p className="zoom__text">{props.card.name}</p>
    </div>
  );
}
