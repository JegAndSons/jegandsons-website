window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll Event Listener for Milestone Animations
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const milestoneItems = document.querySelectorAll(".about-jeg-milestones li");

  milestoneItems.forEach((item) => {
    if (item.offsetTop < scrollPosition) {
      item.classList.add("visible");
    }
  });
});

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Select the navbar
const navbar = document.querySelector("nav");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Check if the page has been scrolled down
  if (window.scrollY > 50) {
    // You can change 50 to any other value based on when you want the logo change
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // Animation duration (ms)
    once: true, // Animation only happens once
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successModal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate Captcha
    const captcha = document.getElementById("captcha");
    if (!captcha.checked) {
      alert("Please confirm you are not a robot.");
      return;
    }

    // Success Modal
    successModal.classList.add("visible");
  });

  closeModal.addEventListener("click", () => {
    successModal.classList.remove("visible");
  });
});
