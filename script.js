/* =========================
   SHARINGAN ACTIVATION
========================= */

const sharinganBtn = document.getElementById("sharinganButton");
const sharinganContainer = document.getElementById("sharinganContainer");
const heroContent = document.querySelector(".hero-content");

sharinganBtn.addEventListener("click", () => {
    sharinganContainer.classList.toggle("active");

    if (sharinganContainer.classList.contains("active")) {
        sharinganBtn.textContent = "DEACTIVATE";
        heroContent.style.opacity = "0.1"; 
        document.body.style.boxShadow = "inset 0 0 100px rgba(179,0,0,0.2)";
    } else {
        sharinganBtn.textContent = "ACTIVATE SHARINGAN";
        heroContent.style.opacity = "1";
        document.body.style.boxShadow = "none";
    }
});

/* =========================
   MADARA ROASTS
========================= */

const target = document.getElementById("target");
const roastText = document.getElementById("roastText");
const roastButton = document.getElementById("roastButton");

const roasts = [
    {
        target: "THE SHINOBI ALLIANCE",
        text: "You brought an entire army because apparently one person was not enough to challenge me."
    },
    {
        target: "ONOKI",
        text: "What will you do about the second one, Ohnoki?"
    },
    {
        target: "TSUNADE",
        text: "You are a weak woman... Even Hashirama's medical ninjutsu is vastly superior to yours."
    },
    {
        target: "NARUTO UZUMAKI",
        text: "You have only temporary power. Wake up to reality."
    },
    {
        target: "THE FIVE KAGE",
        text: "Would you like these clones to use Susanoo or not?"
    },
    {
        target: "THE BATTLEFIELD",
        text: "The battlefield had thousands of shinobi. Madara treated it like a warm-up arena."
    }
];

let roastIndex = 0;

roastButton.addEventListener("click", () => {
    roastIndex = (roastIndex + 1) % roasts.length;
    const roast = roasts[roastIndex];

    roastText.style.opacity = "0";
    target.style.opacity = "0";

    setTimeout(() => {
        target.textContent = roast.target;
        roastText.textContent = `"${roast.text}"`;

        roastText.style.opacity = "1";
        target.style.opacity = "1";
    }, 200);
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".lore-card, .quote-card, .ability, .fighter"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease, border-color 0.4s ease";
    observer.observe(element);
});

const revealStyle = document.createElement("style");
revealStyle.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(revealStyle);

/* =========================
   MOUSE PARALLAX (HERO)
========================= */

document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 15;
    const y = (event.clientY / window.innerHeight - 0.5) * 15;

    const heroImg = document.querySelector(".hero-image img");
    if (heroImg) {
        heroImg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    }
});