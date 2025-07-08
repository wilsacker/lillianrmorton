/*
 * © 2025 William Acker (Catalyst Web Development)
 * Licensed under the Custom Attribution and Forking Use Only License.
 * See LICENSE file in the project root for details.
 */

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navMenuLinks = document.querySelectorAll(".nav-menu li a");

  if (loader) loader.style.display = "none";
  if (mainContent) mainContent.style.display = "";

  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  if (navMenuLinks.length) {
    navMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }
});
