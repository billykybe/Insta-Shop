const btnCloseTop = document.querySelector(".close");
const topInfo = document.querySelector(".topInfo");
var pop = document.getElementById("pop");
var isPopped = false;

btnCloseTop.addEventListener("click", function () {
  topInfo.classList.toggle("hide");
});

show();

function show() {
  setTimeout(function () {
    pop.style.left = 0;
    setTimeout(function () {
      pop.style.left = "-100%";
    }, 5000);
    setTimeout(function () {
      show();
    }, 5000);
  }, 2000);
}
