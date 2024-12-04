// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

accordeon.addEventListener("click", (event) => {
    if (event.target.tagName === "SUMMARY") {
        accordeon.querySelectorAll("details").forEach((det) => {
            if (det !== event.target.parentElement) {
                det.open = false;
            }
        });
    }
});





