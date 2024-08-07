"use strict";
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
