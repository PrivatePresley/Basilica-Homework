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
var modalContent = document.querySelector(".modal p");

const betaOrig = modal.querySelector("p").innerText;
const pickIt = "You clicked the Pick It button!";
const cookIt = "You clicked the Cook It button!";
const storeIt = "You clicked the Store It button!";

function showPopover(event) {
  if (
    !event.target.matches(
      ".beta, .closer, .nav-pickit a, .nav-cookit a, .nav-storeit a"
    )
  ) {
    console.log(event.target);
    return;
  }
  if (event.target.matches(".nav-pickit a")) {
    modalContent.innerText = pickIt;
  } else if (event.target.matches(".nav-cookit a")) {
    modalContent.innerText = cookIt;
  } else if (event.target.matches(".nav-storeit a")) {
    modalContent.innerText = storeIt;
  } else {
    modalContent.innerText = betaOrig;
  }

  modalOuter.classList.toggle("open");
  event.preventDefault();
}

document.addEventListener("click", showPopover);
