const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// M-V-JV
"use strict";

function formatNumber(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function animateValue(element, start, end, duration) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const increment = Math.min(progress / duration, 1);
    const currentValue = Math.floor(start + (end - start) * increment);
    element.innerText = `${formatNumber(currentValue)}`;

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function animatePercentage(element, start, end, duration, isIncrement) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const increment = Math.min(progress / duration, 1);
    const currentValue = (start + (end - start) * increment).toFixed(2);
    element.innerHTML = isIncrement ? `+${currentValue}%` : `-${currentValue}%`;

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

document.querySelectorAll(".stats-value").forEach((el) => {
  const targetValue = parseInt(el.dataset.value.replace(/,/g, ""));
  animateValue(el, 0, targetValue, 3000);
});

document.querySelectorAll(".stats-status").forEach((el) => {
  const targetPercentage = parseFloat(el.dataset.percentage);
  const status = el.dataset.status;
  const isIncrement = status === "increment";
  animatePercentage(el, 0, targetPercentage, 3000, isIncrement);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});
