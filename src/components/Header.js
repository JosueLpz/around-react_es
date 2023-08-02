import header__logo from "../image/header/header__logo.svg";
import editButton from "../image/header/EditButton.svg";
import addButton from "../image/nav/Addbutton.svg";

function Header(props) {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={header__logo} alt="logo header" />
        <div className="header__line"></div>
      </header>
      <nav className="profile">
        <div onClick={props.onEditAvatarClick} className="profile__content-img">
          <img className="profile__img profile__img-hover" name="avatar" alt="avatarusuario" />
        </div>
        <div className="profile__row">
          <h1 className="profile__row-name"></h1>
          <a onClick={props.onEditProfileClick} className="profile__row-edit root__button-hover-active">
            <img src={editButton} alt="botonedit" />
          </a>
        </div>
        <h2 className="profile__hobbie"></h2>
        <a onClick={props.onAddPlaceClick} className="profile__button root__button-hover-active">
          <img className="profile__button" src={addButton} alt="BotonAdd" />
        </a>
      </nav>
    </>
  );
}

export default Header;
