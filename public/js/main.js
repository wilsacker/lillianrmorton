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

      container.appendChild(iframe);
    };

    formInstance.render();
  }
});