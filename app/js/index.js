var API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".quote").innerText = data[0];
  });

// ==

const el = document.querySelector("h2");

const basilChefs = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];

function random(array) {
  const max = array.length;
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
}

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

el.innerHTML = recipeName;

// ==

var modal = document.querySelector(".modal");
var modalOuter = document.querySelector(".modal-outer");

const betaTxt = document.querySelector("#betaText");
const pickTxt = document.querySelector("#pickText");
const cookTxt = document.querySelector("#cookText");
const storeTxt = document.querySelector("#storeText");
const modalTxt = document.querySelectorAll(".modal p");

function showPopover(event) {
  if (
    !event.target.matches(
      ".beta, .closer, .nav-pickit a, .nav-cookit a, .nav-storeit a"
    )
  ) {
    return;
  }

  for (let m of modalTxt) {
    m.classList.remove("show");
  }

  if (event.target.matches(".nav-pickit a")) {
    pickTxt.classList.add("show");
  } else if (event.target.matches(".nav-cookit a")) {
    cookTxt.classList.add("show");
  } else if (event.target.matches(".nav-storeit a")) {
    storeTxt.classList.add("show");
  } else {
    betaTxt.classList.add("show");
  }

  modalOuter.classList.toggle("open");
  event.preventDefault();
}

document.addEventListener("click", showPopover);
