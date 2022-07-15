const mainnavSlide = () => {
    const togglebutton = document.querySelector(".toggle-button");
    const mainnav = document.querySelector(".main-menu");

    togglebutton.addEventListener("click", () => {
        mainnav.classList.toggle("nav-active");

        togglebutton.classList.toggle('toggle');
    })
}

mainnavSlide();

/*toggle-button*/

const scrollButton = document.querySelector(".scroll-button");

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 150) {
        scrollButton.style.display = "none";
    }
    else {
        scrollButton.style.display = "block";
    }
}

refreshButtonVisibility();

scrollButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});

/*scroll-button*/

let slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*showslide-website projects.hmtl*/

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("slide2");
    let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex - 1].style.display = "block";
    dots2[slideIndex - 1].className += " active";
}

/*showslide-games projects.hmtl*/

function plusSlides3(n) {
    showSlides3(slideIndex += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex = n);
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("slide3");
    let dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides3.length }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex - 1].style.display = "block";
    dots3[slideIndex - 1].className += " active";
}

/*showslide-graphics projects.hmtl*/