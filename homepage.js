/*====================================================
        FINPAY HOMEPAGE
        PREMIUM JAVASCRIPT
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*====================================================
                    GLOBAL ELEMENTS
    ====================================================*/

    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const phone = document.querySelector(".phone");

    const revealItems = document.querySelectorAll(
        ".hero-left, .phone, .feature-card, .stat-card, .testimonial-card, .security-card"
    );

    const counters = document.querySelectorAll(".counter");

    const floatingCards = document.querySelectorAll(
        ".balance-card, .transaction-card"
    );
    


    let countersStarted = false;

    /*====================================================
                    NAVBAR
    ====================================================*/

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    /*====================================================
                    MOBILE MENU
    ====================================================*/

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            menuBtn.classList.toggle("active");
            navLinks.classList.toggle("active");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuBtn?.classList.remove("active");
            navLinks?.classList.remove("active");

        });

    });

    /*====================================================
                    SMOOTH SCROLL
    ====================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });
    
        /*====================================================
                    SCROLL REVEAL
    ====================================================*/

    function revealElements() {

    const trigger = window.innerHeight * 0.85;

    revealItems.forEach(item => {

        if (!item) return;

        const rect = item.getBoundingClientRect();

        const isVisible = rect.top < trigger && rect.bottom > 0;

        if (isVisible) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }

    });
}


    /*====================================================
                    COUNTERS
    ====================================================*/

    

    function startCounters() {

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 100;

            function update() {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(update);

                } else {

                    if (target === 49) {

                        counter.textContent = "4.9★";

                    }

                    else if (target === 9999) {

                        counter.textContent = "99.99%";

                    }

                    else {

                        counter.textContent = formatCounter(target);

                    }

                }

            }

            update();

        });

    }


    function checkCounters() {

        if (countersStarted) return;

        const stats = document.querySelector(".trust-stats");

        if (!stats) return;

        if (stats.getBoundingClientRect().top < window.innerHeight - 100) {

            countersStarted = true;

            startCounters();

        }

    }


    /*====================================================
                    SCROLL EVENTS
    ====================================================*/

    window.addEventListener("scroll", () => {

        updateNavbar();

        revealElements();

        checkCounters();

    });
    



    /*====================================================
                    FLOATING CARDS
    ====================================================*/

    function floatCards() {

        const time = Date.now() * 0.0015;

        floatingCards.forEach((card, index) => {

            if (!card) return;

            const offset = Math.sin(time + index) * 8;

            card.style.transform = `translateY(${offset}px)`;

        });

        requestAnimationFrame(floatCards);

    }

    floatCards();


    /*====================================================
                    PHONE PARALLAX
    ====================================================*/

    function updatePhone() {

        if (!phone) return;

        const move = Math.min(window.scrollY * 0.02, 20);

        phone.style.transform =
            `translate(-50%, -50%) translateY(${move}px)`;

    }

    window.addEventListener("scroll", updatePhone);
    
        /*====================================================
                BUTTON EFFECTS
    ====================================================*/

    document.querySelectorAll(".primary-btn, .secondary-btn").forEach(button => {

        button.addEventListener("mousedown", () => {

            button.style.transform = "scale(0.97)";

        });

        button.addEventListener("mouseup", () => {

            button.style.transform = "";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });


    /*====================================================
                PAGE INITIALIZATION
    ====================================================*/

    function initializePage() {

        updateNavbar();

        revealElements();

        checkCounters();

        updatePhone();

revealItems.forEach(item => item.classList.add("active"));

        document.body.classList.add("loaded");

    }

    window.addEventListener("load", initializePage);

    initializePage();


    console.log("✅ FinPay Homepage Loaded Successfully");

});

const fadeItems = document.querySelectorAll(
    ".hero-left, .hero-right, .stat-card, .feature-card, .download-box, .footer-column"
);

function handleFade() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;

        // fade IN when entering screen
        if (itemTop < triggerBottom && itemBottom > 0) {
            item.classList.add("show");
        } 
        // fade OUT when leaving screen upward
        else {
            item.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", handleFade);
window.addEventListener("load", handleFade);