document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !isExpanded);
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
