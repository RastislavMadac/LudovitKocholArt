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
let i = 0;
let j = 4;

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");
const dots1 = document.querySelectorAll(".dot-container1 button");
const images1 = document.querySelectorAll(".image-container1 img");

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}
function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}

function indicator(num) {
  dots.forEach(function (dot) {
    dot.style.backgroundColor = "transparent";
  });
  document.querySelector(
    ".dot-container button:nth-child(" + num + ")"
  ).style.backgroundColor = "#336773";
}
function dot(index) {
  images.forEach(function (image) {
    image.classList.remove("active");
  });
  document.getElementById("content" + index).classList.add("active");
  i = index - 1;
  indicator(index);
}

function next1() {
  document.getElementById("content1" + (i + 1)).classList.remove("active1");
  i = (j + i + 1) % j;
  document.getElementById("content1" + (i + 1)).classList.add("active1");
  indicator1(i + 1);
}
function prev1() {
  document.getElementById("content1" + (i + 1)).classList.remove("active1");
  i = (j + i - 1) % j;
  document.getElementById("content1" + (i + 1)).classList.add("active1");
  indicator1(i + 1);
}

function indicator1(num) {
  dots1.forEach(function (dot1) {
    dot1.style.backgroundColor = "transparent";
  });
  document.querySelector(
    ".dot-container1 button:nth-child(" + num + ")"
  ).style.backgroundColor = "#336773";
}
function dot1(index) {
  images1.forEach(function (image) {
    image.classList.remove("active1");
  });
  document.getElementById("content1" + index).classList.add("active1");
  i = index - 1;
  indicator1(index);
}
