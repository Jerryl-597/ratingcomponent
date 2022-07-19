"use strict";
const number = document.querySelectorAll(".number");
const card = document.querySelectorAll(".question");
const button = document.querySelector(".button");
const text = document.querySelector(".report");

number.forEach((item) =>
  item.addEventListener("click", function (e) {
    const id = e.currentTarget.dataset.id;
    const container = e.currentTarget;
    const btn = e.target;
    //  console.log(id);
    if (container) {
      container.style.backgroundColor = `hsl(25, 97%, 53%)`;
    }

    text.textContent = `You selected ${id} out of 5`;
  })
);

button.addEventListener("click", function (e) {
  e.preventDefault();
  card.forEach((btn) => btn.classList.toggle("hide"));
});
