window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, 
    once: true, 
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successModal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const captcha = document.getElementById("captcha");
    if (!captcha.checked) {
      alert("Please confirm you are not a robot.");
      return;
    }

    successModal.classList.add("visible");
  });

  closeModal.addEventListener("click", () => {
    successModal.classList.remove("visible");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const valuesColumns = document.querySelectorAll('.jeg-values-column');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.5 
  });

  valuesColumns.forEach(column => {
    observer.observe(column); 
  });
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});
