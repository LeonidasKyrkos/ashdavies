/* Open when someone clicks on the span element */
function openNav() {
    document.getElementsByClassName("nav")[0].style.transform = "translate(0)";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementsByClassName("nav")[0].style.transform = "translate(-100%)";
}