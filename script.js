/* =========================
   SHARINGAN
========================= */

const sharinganButton =
    document.getElementById("sharinganButton");

const sharingan =
    document.getElementById("sharingan");


sharinganButton.addEventListener(
    "click",
    () => {

        sharingan.classList.toggle("active");

        if (sharingan.classList.contains("active")) {

            sharinganButton.textContent =
                "DEACTIVATE SHARINGAN";

        } else {

            sharinganButton.textContent =
                "ACTIVATE SHARINGAN";

        }

    }
);



/* =========================
   MADARA ROASTS
========================= */

const target =
    document.getElementById("target");

const roastText =
    document.getElementById("roastText");

const roastButton =
    document.getElementById("roastButton");


const roasts = [

    {
        target: "THE SHINOBI ALLIANCE",

        text:
            "You brought an entire army because apparently one person was not enough to challenge me."
    },


    {
        target: "THE FIVE KAGE",

        text:
            "Five leaders entered the battlefield together, and Madara still looked like he was waiting for the real fight."
    },


    {
        target: "THE UCHIHA RIVALS",

        text:
            "You inherited the name Uchiha. Madara inherited the responsibility of making everyone terrified of it."
    },


    {
        target: "THE BATTLEFIELD",

        text:
            "The battlefield had thousands of shinobi. Madara treated it like a warm-up arena."
    },


    {
        target: "HASHIRAMA",

        text:
            "Hashirama was the one opponent Madara genuinely respected — which says everything about everyone else."
    },


    {
        target: "THE ALLIANCE",

        text:
            "Your greatest strategy was bringing more people. My strategy was being Madara."
    },


    {
        target: "THE SHINOBI SYSTEM",

        text:
            "You built a world around endless conflict and then acted surprised when someone decided to rewrite it."
    }

];


let roastIndex = 0;


roastButton.addEventListener(
    "click",
    () => {

        roastIndex++;

        if (roastIndex >= roasts.length) {

            roastIndex = 0;

        }


        const roast =
            roasts[roastIndex];


        target.textContent =
            roast.target;


        roastText.style.opacity = "0";


        setTimeout(() => {

            roastText.textContent =
                roast.text;

            roastText.style.opacity = "1";

        }, 200);

    }
);



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".lore-card, .quote-card, .ability, .fighter"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    (element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    }
);


/* Add revealed animation */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;


document.head.appendChild(revealStyle);



/* =========================
   MOUSE PARALLAX
========================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;


        document.documentElement.style.setProperty(
            "--mouse-x",
            `${x}px`
        );


        document.documentElement.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    }
);
