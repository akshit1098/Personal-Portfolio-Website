// Menu Toggle
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  smallMenu.classList.toggle("header__sm-menu--active");
  headerHamMenuBtn.classList.toggle("d-none");
  headerHamMenuCloseBtn.classList.toggle("d-none");
});

headerSmallMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
});

// Logo Click Navigation
const headerLogoContainer = document.querySelector(".header__logo-container");

headerLogoContainer.addEventListener("click", () => {
  location.href = "index.html";
});

// Link Activation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".header__link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      links.forEach((link) => link.classList.remove("active"));
      event.currentTarget.classList.add("active");
    });
  });
});

// // Initialize EmailJS
// (function () {
//   emailjs.init("NmJ243IEfSzZKfDNR"); // Replace with your EmailJS user ID
// })();

// // Form Submission
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Gather the form data
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Send the email
//     emailjs
//       .send("service_7mkig3j", "template_hcahvqu", {
//         from_name: name,
//         from_email: email,
//         message: message,
//       })
//       .then(
//         function (response) {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Email sent successfully!");
//         },
//         function (error) {
//           console.log("FAILED...", error);
//           alert("Failed to send email. Please try again later.");
//         }
//       );
//   });

// Auto-scrolling Image Gallery
const container = document.querySelector(".scrolll-container");
const images = document.querySelectorAll(".scrolll-container img");

const imageWidth = images[0].offsetWidth;
const scrollAmountLarge = imageWidth * 2;
const scrollAmountSmall = imageWidth;
const autoScrollIntervalTime = 5000;

let autoScrollInterval;
let autoScrollTimeout;

function getScrollAmount() {
  return window.innerWidth <= 768 ? scrollAmountSmall : scrollAmountLarge;
}

function handleScrollWrapping() {
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    container.scrollLeft = 0;
  } else if (container.scrollLeft < 0) {
    container.scrollLeft = container.scrollWidth - container.clientWidth;
  }
}

function startAutoScroll() {
  stopAutoScroll();
  autoScrollInterval = setInterval(() => {
    container.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    handleScrollWrapping();
  }, autoScrollIntervalTime);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

function resetAutoScrollTimer() {
  clearTimeout(autoScrollTimeout);
  autoScrollTimeout = setTimeout(startAutoScroll, autoScrollIntervalTime);
}

document.querySelector(".scroll-button.left").addEventListener("click", () => {
  stopAutoScroll();
  container.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  handleScrollWrapping();
  resetAutoScrollTimer();
});

document.querySelector(".scroll-button.right").addEventListener("click", () => {
  stopAutoScroll();
  container.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  handleScrollWrapping();
  resetAutoScrollTimer();
});

window.addEventListener("resize", startAutoScroll);

document.addEventListener("DOMContentLoaded", startAutoScroll);

