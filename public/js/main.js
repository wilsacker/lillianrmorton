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
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");
  
  if (loader) loader.style.display = "none";
  if (mainContent) mainContent.style.display = "";

  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnBurger = burgerMenu.contains(event.target);
    const isClickOnDropdownBtn = dropdownBtn && dropdownBtn.contains(event.target);
    const isClickOnDropdownContent = dropdownContent && dropdownContent.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnBurger && !isClickOnDropdownBtn && !isClickOnDropdownContent) {
      navMenu.classList.remove("active");
      document.querySelector(".dropdown")?.classList.remove("open");
    }
  });

  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation(); // Prevents triggering the outer click listener
      const dropdown = dropdownBtn.parentElement;
      dropdown.classList.toggle("open");
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

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("hipaatizer-form-container");
  if (container) {
    const formInstance = new Hipaatizer(
      "fbc63f6e-8054-45af-ad1d-7fedea6eb4eb",
      false,
      "",
      false
    );

    formInstance.render = function () {
      const iframe = document.createElement("iframe");
      iframe.src = `https://app.hipaatizer.com/workflow/${this.workflowId}`;
      iframe.style.width = "100%";
      iframe.style.border = "0";
      iframe.style.minHeight = "700px";
      iframe.setAttribute("allow", "microphone; camera");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
    
      container.appendChild(iframe);
    };

    formInstance.render();
  }
});