"use strict";

var element = document.getElementById("wave");

element.addEventListener(
  "mouseover",
  function (e) {
    e.preventDefault;

    element.classList.remove("greeting-animation");

    void element.offsetWidth;

    element.classList.add("greeting-animation");
  },
  false
);
