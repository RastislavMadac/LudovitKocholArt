const btnGal = document.querySelector(".gallery-btn");
const hiddenClass = document.querySelectorAll(".hidden");
const imgIntagram = document.getElementById("instagram-ico");
const imgPinterest = document.getElementById("pinterest-ico");
const imgFacebook = document.getElementById("facebook-ico");
const imgTwitter = document.getElementById("twiter-ico");

for (let hidden of hiddenClass) {
  btnGal.addEventListener("click", function () {
    hidden.classList.toggle("hidden");
  });
}

function mousein(ele) {
  if (ele == 1) {
    imgIntagram.setAttribute("src", "images/170113.webp");
  } else if (ele == 2) {
    imgPinterest.setAttribute("src", "images/170111.webp");
  } else if (ele == 3) {
    imgFacebook.setAttribute("src", "images/170117.webp");
  } else {
    imgTwitter.setAttribute("src", "images/170115.webp");
  }
}
function mouseout(ele) {
  if (ele == 1) {
    imgIntagram.setAttribute("src", "images/170114.webp");
  } else if (ele == 2) {
    imgPinterest.setAttribute("src", "images/170112.webp");
  } else if (ele == 3) {
    imgFacebook.setAttribute("src", "images/170118.webp");
  } else {
    imgTwitter.setAttribute("src", "images/170116.webp");
  }
}
const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toogleBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toogleBtnIcon.classList = isOpen ? "fa-solid fa-x" : "fa-solid fa-bars";
});

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
