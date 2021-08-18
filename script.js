//    MENU:
function togNav() {
    var nav = document.getElementById("menu");
    if (nav.style.width == "230px") {
        nav.style.width = "0";
        nav.style.opacity = 1;
    } else {
        nav.style.width = "230px";
      nav.style.opacity = 1; 
    }
}

//     SLIDER:
var slideIndex = 1;
var slides = null;
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n, el) {
    if (el) {
        slides = el.getElementsByClassName("project");
    }
    if (n > slides.length) {
        n = 1;
    }
    else if (n < 1) {
        n = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = n;
    slides[n-1].style.display = "block";
}

//     ABOUTME-CONTENT: 
function openSection() {
    document.getElementById("meabout").style.width = "100%";
}
function closeSection() {
    document.getElementById("meabout").style.width = "0%";
}

//     PROJECTS-CONTENT:
function openSection1() {
    document.getElementById("projects1").style.width = "100%";
}
function closeSection1() {
    document.getElementById("projects1").style.width = "0%";
}
