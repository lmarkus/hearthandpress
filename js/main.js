/* =================================================================
   Hearth & Press Co. — site JS
   Progressive enhancement only; site works without it.
   ================================================================= */
(function () {
  "use strict";

  /* ----- Mobile nav toggle ------------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close menu when a link is tapped (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Footer year ------------------------------------------- */
  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ----- Quote form (front-end only, not wired to a backend) ---- */
  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var success = document.getElementById("form-success");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // No backend in this static build: validate, then show an inline
      // confirmation and hide the form fields.
      if (success) {
        success.classList.add("show");
        success.setAttribute("role", "status");
        success.focus();
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
      form.hidden = true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initYear();
    initQuoteForm();
  });
})();
