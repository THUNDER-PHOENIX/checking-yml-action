const nameInput = document.getElementById("nameInput");
const writeButton = document.getElementById("writeButton");

const result = document.getElementById("result");

const deathOverlay = document.getElementById("deathOverlay");
const deathName = document.getElementById("deathName");

const closeButton = document.getElementById("closeButton");

const year = document.getElementById("year");


/* Current year */

year.textContent = new Date().getFullYear();


/* Write name */

function writeName() {

    const name = nameInput.value.trim();

    if (!name) {

        result.textContent = "The notebook requires a name.";

        result.classList.add("active");

        setTimeout(() => {
            result.classList.remove("active");
        }, 500);

        nameInput.focus();

        return;
    }


    /*
        This is only a fictional website effect.
        Nothing real happens to the person.
    */

    deathName.textContent = name.toUpperCase();

    result.textContent =
        `The name "${name}" has been written.`;

    result.classList.add("active");

    deathOverlay.classList.add("show");
}


/* Button */

writeButton.addEventListener(
    "click",
    writeName
);


/* Enter key */

nameInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            writeName();

        }

    }
);


/* Close */

closeButton.addEventListener(
    "click",
    function() {

        deathOverlay.classList.remove("show");

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            deathOverlay.classList.remove("show");

        }

    }
);
