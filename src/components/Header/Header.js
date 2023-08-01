import header__logo from "../../image/header/header__logo.svg";
import editButton from "../../image/header/EditButton.svg";
import addButton from "../../image/nav/Addbutton.svg";

const handleAddPlaceClick = () => {
  document.querySelector(".card").style.display = "block";
};

const handleEditProfileClick = () => {
  document.querySelector(".form").style.display = "block";
};

const handleEditAvatarClick = () => {
  document.querySelector(".avatar").style.display = "block";
};

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={header__logo} alt="logo header" />
        <div className="header__line"></div>
      </header>
      <nav className="profile">
        <div onClick={handleEditAvatarClick} className="profile__content-img">
          <img className="profile__img profile__img-hover" name="avatar" alt="avatarusuario" />
        </div>
        <div className="profile__row">
          <h1 className="profile__row-name"></h1>
          <a onClick={handleEditProfileClick} className="profile__row-edit root__button-hover-active">
            <img src={editButton} alt="botonedit" />
          </a>
        </div>
        <h2 className="profile__hobbie"></h2>
        <a onClick={handleAddPlaceClick} className="profile__button root__button-hover-active">
          <img className="profile__button" src={addButton} alt="BotonAdd" />
        </a>
      </nav>
    </>
  );
}

export default Header;
