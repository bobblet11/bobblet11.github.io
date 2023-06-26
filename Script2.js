// Next/previous controls
function plusSlides(n, slideID) {
    if (slideID == slideID1) {
        showSlides(slideIndex1 += n, slideID1);
    }
    else if (slideID == slideID2) {
        showSlides(slideIndex2 += n, slideID2);
    }
}

// Thumbnail image controls
function currentSlide(n, slideID) {
    if (slideID == slideID1) {
        showSlides(slideIndex1 = n, slideID1);
    }
    else if (slideID == slideID2) {
        showSlides(slideIndex2 = n, slideID2);
    }
}

function showSlides(n, slideID) {
    console.log(slideID);
    let i;
    let parent = document.querySelector(slideID);
    let slides = parent.querySelectorAll(".slide");


    let dots = document.querySelector(slideID + "DOTS").querySelectorAll(".slideDot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideID == slideID1) {
        if (n > slides.length) { slideIndex1 = 1 }

        if (n < 1) { slideIndex1 = slides.length }

        slides[slideIndex1 - 1].style.display = "block";
        slides[slideIndex1 - 1].querySelector(".slideCounter").display = "block";
        slides[slideIndex1 - 1].querySelector(".slideCaption").display = "block";
        
        dots[slideIndex1 - 1].className += " active";
    }
    else if (slideID == slideID2) {

        if (n > slides.length) { slideIndex2 = 1 }

        if (n < 1) { slideIndex2 = slides.length }

        slides[slideIndex2 - 1].style.display = "block";
        slides[slideIndex2 - 1].querySelector(".slideCounter").display = "block";
        slides[slideIndex2 - 1].querySelector(".slideCaption").display = "block";
        dots[slideIndex2 - 1].className += " active";
    }

}

//inits slides
let slideIndex1 = 1;
let slideID1 = "#SKILLSLIDE";
let slideIndex2 = 1;
let slideID2 = "#EXPERIENCESLIDE";

showSlides(slideIndex1, slideID1);
showSlides(slideIndex2, slideID2);