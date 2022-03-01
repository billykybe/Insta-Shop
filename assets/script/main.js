const btnCloseTop = document.querySelector(".close");
const topInfo = document.querySelector(".topInfo");
btnCloseTop.addEventListener("click", function () {
  topInfo.classList.toggle("hide");
});
