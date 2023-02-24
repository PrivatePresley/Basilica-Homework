(function () {
  'use strict';

  function random(array) {
    const max = array.length;
    const randomIndex = Math.floor(Math.random() * max);
    return array[randomIndex];
  }

  var modalOuter = document.querySelector(".modal-outer");
  var modalInner = document.querySelector(".modal");

  var betaContent = `
<h3>Oooops!</h3>
<p>Wow! Nothing works!<p>
`;
  var buttonContent = `
<h2>Coming Soon</h2>
<p>This feature coming soon.<p>
<a class="closer" href="#0">✖︎</a>
`;

  function showPopover(event) {
    if (event.target.matches(".beta")) {
      modalInner.innerHTML = betaContent;
      modalOuter.classList.add("open");
    } else if (event.target.closest("nav ul")) {
      modalInner.innerHTML = buttonContent;
      modalOuter.classList.add("open");
    } else if (event.target.matches(".closer, .modal-outer")) {
      modalOuter.classList.remove("open");
    } else return;
    event.preventDefault();
  }

  const basilChefs = ["mama", "papa", "baby"];
  const basilTexture = ["greasy", "frozen", "spicy"];

  function getQuote(api, element) {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.querySelector(element).innerText = data[0];
      });
  }

  const API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const el = document.querySelector("h2");
  const recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

  getQuote(API, ".quote");
  el.innerHTML = recipeName;

  document.addEventListener("click", showPopover);

  console.log("ELEMENT:" + el);

})();
