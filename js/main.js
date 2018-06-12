// Opening the intro copy areas
function showIntroOne() {
    var offClasses = document.querySelectorAll('.intro__copy-second, .intro__copy-third');
    for (var i = 0; i < offClasses.length; i++) {
        offClasses[i].style.display = "none";
    }
    document.getElementsByClassName('intro__copy-first')[0].style.display = "block";
}

function showIntroTwo() {
    var offClasses = document.querySelectorAll('.intro__copy-first, .intro__copy-third');
    for (var i = 0; i < offClasses.length; i++) {
        offClasses[i].style.display = "none";
    }
    document.getElementsByClassName('intro__copy-second')[0].style.display = "block";
}

function showIntroThree() {
    var offClasses = document.querySelectorAll('.intro__copy-first, .intro__copy-second');
    for (var i = 0; i < offClasses.length; i++) {
        offClasses[i].style.display = "none";
    }
    document.getElementsByClassName('intro__copy-third')[0].style.display = "block";
}


// Opening and closing the nav
function openNav() {
    document.getElementsByClassName("nav")[0].style.transform = "translate(0)";
}

function closeNav() {
    document.getElementsByClassName("nav")[0].style.transform = "translate(-100%)";
}
