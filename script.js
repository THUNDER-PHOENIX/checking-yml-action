/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   SHARINGAN
===================================================== */

const sharinganButton =
    document.getElementById("sharinganButton");

const sharinganOverlay =
    document.getElementById("sharinganOverlay");


sharinganButton.addEventListener("click", () => {

    const isActive =
        sharinganOverlay.classList.toggle("active");

    if (isActive) {

        sharinganButton.textContent =
            "DEACTIVATE SHARINGAN";

        document.body.style.overflow = "hidden";

    } else {

        sharinganButton.textContent =
            "ACTIVATE SHARINGAN";

        document.body.style.overflow = "";

    }

});


/* Clicking the Sharingan closes it */

sharinganOverlay.addEventListener("click", () => {

    sharinganOverlay.classList.remove("active");

    sharinganButton.textContent =
        "ACTIVATE SHARINGAN";

    document.body.style.overflow = "";

});


/* =====================================================
   ROAST MACHINE
===================================================== */

const roasts = [

    {
        target: "THE FIVE KAGE",
        text:
            "Would you like these clones to use Susanoo or not?"
    },

    {
        target: "ONOKI",
        text:
            "What will you do about the second one, Ohnoki?"
    },

    {
        target: "THE SHINOBI ALLIANCE",
        text:
            "You brought an entire army because apparently one person was not enough."
    },

    {
        target: "NARUTO UZUMAKI",
        text:
            "You still have much to learn about the reality of this world."
    },

    {
        target: "THE BATTLEFIELD",
        text:
            "Thousands of shinobi stood against him, and Madara treated the battlefield like a warm-up."
    }

];


const roastButton =
    document.getElementById("roastButton");

const roastTarget =
    document.getElementById("roastTarget");

const roastText =
    document.getElementById("roastText");


let roastIndex = 0;


roastButton.addEventListener("click", () => {

    roastText.style.opacity = "0";
    roastTarget.style.opacity = "0";

    setTimeout(() => {

        roastIndex =
            (roastIndex + 1) % roasts.length;

        const roast =
            roasts[roastIndex];

        roastTarget.textContent =
            roast.target;

        roastText.textContent =
            `"${roast.text}"`;

        roastText.style.opacity = "1";
        roastTarget.style.opacity = "1";

    }, 200);

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".story-card, .timeline-item, .fighter, .ability-card, .roast-box"
    );


const observer =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================================
   REVEAL CSS
===================================================== */

const revealStyle =
    document.createElement("style");

revealStyle.textContent = `

    .reveal {

        opacity: 0;
        transform: translateY(35px);

        transition:
            opacity 0.8s ease,
            transform 0.8s ease;

    }

    .reveal.revealed {

        opacity: 1;
        transform: translateY(0);

    }

`;

document.head.appendChild(revealStyle);


/* =====================================================
   HERO MOUSE PARALLAX
===================================================== */

const heroImage =
    document.querySelector(".hero-background img");


window.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) {
        return;
    }

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 6;


    heroImage.style.transform =
        `scale(1.08) translate(${x}px, ${y}px)`;

});


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        sharinganOverlay.classList.remove("active");

        sharinganButton.textContent =
            "ACTIVATE SHARINGAN";

        document.body.style.overflow = "";

        navLinks.classList.remove("active");

    }

});
