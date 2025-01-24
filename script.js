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

document.addEventListener("DOMContentLoaded", function () {
  const valuesColumns = document.querySelectorAll(".jeg-values-column");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  valuesColumns.forEach((column) => {
    observer.observe(column);
  });
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Ensure EmailJS config is available
  if (
    !EMAILJS_CONFIG ||
    !EMAILJS_CONFIG.serviceID ||
    !EMAILJS_CONFIG.templateID ||
    !EMAILJS_CONFIG.userID
  ) {
    alert("EmailJS configuration is missing. Please check your config file.");
    return;
  }

  // Send the email using EmailJS
  emailjs
    .send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      formData,
      EMAILJS_CONFIG.userID
    )
    .then(
      function (response) {
        alert("Message sent successfully!");
        console.log("SUCCESS", response.status, response.text);
        document.getElementById("contactForm").reset(); // Clear the form
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("FAILED", error);
      }
    );
});

// Function to detect if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to handle animations when elements come into view
function handleScrollAnimations() {
  const elements = document.querySelectorAll(
    ".about-jeg-container, .about-jeg-text, .about-jeg-image, .about-jeg-title, .about-jeg-milestones"
  );

  elements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("visible");
    }
  });
}

// Call the function when the page is scrolled
window.addEventListener("scroll", handleScrollAnimations);

// Initial check in case the elements are already in view on page load
document.addEventListener("DOMContentLoaded", handleScrollAnimations);

let currentIndex = 0;
const slides = document.querySelectorAll(".about-jeg-image .slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Start the slideshow automatically
setInterval(nextSlide, 5000); // Change slide every 5 seconds

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked tab and corresponding content
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  });
});
