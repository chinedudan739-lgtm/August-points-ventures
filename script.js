// ========================================
// AUGUST POINTS VENTURES
// JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // Product cards reveal animation
    const cards = document.querySelectorAll(
        ".product-card, .category-card, .features > div"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });


    // Current year in footer
    const year = new Date().getFullYear();
    const footerText = document.querySelector("footer > p");

    if (footerText) {
        footerText.textContent =
            "© " + year +
            " August Points Ventures. All Rights Reserved.";
    }

});