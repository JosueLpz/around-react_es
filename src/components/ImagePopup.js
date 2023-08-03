function ImagePopup() {
  renderer(
    <div class="zoom">
      <a class="zoom__button-closed root__buttom-closed-active">
        <img src="<%=require('./image/nav/CloseIcon.svg')%>" alt="ButtonClosed" />
      </a>
      <div class="zoom__content"></div>
      <img class="zoom__img" alt="" />
      <p class="zoom__text"></p>
    </div>
  );
}
