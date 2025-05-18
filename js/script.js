//햄버거 메뉴 스크립트
document.addEventListener("DOMContentLoaded", function () {
  const menuOpenBtn = document.querySelector(".mo-nav-open");
  const menuCloseBtn = document.querySelector(".mo-nav-close");
  const mobileMenu = document.querySelector(".wrap-mo-navi");

  //메뉴 열기
  menuOpenBtn.addEventListener("click", function () {
    mobileMenu.style.right = "0";
  });
  // 메뉴 닫기
  menuCloseBtn.addEventListener("click", function () {
    mobileMenu.style.right = "-289px";
  });
});

// 모달 스크립트

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".subscribe-form");
  const emailInput = document.querySelector("#input-email");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".btn-lovehodu");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailInput.value && emailInput.validity.valid) {
      modal.showModal();
      form.reset();
    } else {
      emailInput.focus();
    }
  });

  modalCloseBtn.addEventListener("click", function () {
    modal.close();
  });
});
