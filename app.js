"use strict";
const number = document.querySelectorAll(".number");
const card = document.querySelectorAll(".question");
const button = document.querySelector(".button");
const text = document.querySelector(".report");
let clickNum = 0;

number.forEach((item, index) =>
  item.addEventListener("click", function (e) {
    const id = e.currentTarget.dataset.id;
    const container = e.currentTarget;

    number[clickNum].classList.remove("newColor");
    item.classList.add("newColor");
    clickNum = index;

    /* This is how the logic works:
    clickNum always starts at 0. When the button is clicked. The newColor is removed from the index at 0; then the container that is clicked adds the newColor even if it's 0. 

    When another number is clicked, the clickNum removes newColor from the last contianer that is clicked because the clickNum value has changed to the index of the last contianer that was clicked.

    */

    text.textContent = `You selected ${id} out of 5`;
  })
);

button.addEventListener("click", function (e) {
  e.preventDefault();
  card.forEach((btn) => btn.classList.toggle("hide"));
});
