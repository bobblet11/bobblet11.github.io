// Next/previous controls
function plusSlides(n, slideID) {
    switch (slideID) {
        case "#SLIDE1":
            showSlides(slideIndex1 += n, slideID1);
            break;
        case "#SLIDE2":
            showSlides(slideIndex2 += n, slideID2);
            break;
        case "#SLIDE3":
            showSlides(slideIndex3 += n, slideID3);
            break;
        case "#SLIDE4":
            showSlides(slideIndex4 += n, slideID4);
            break;
    }
}

// Thumbnail image controls
function currentSlide(n, slideID) {
    switch (slideID) {
        case "#SLIDE1":
            showSlides(slideIndex1 = n, slideID1);
            break;
        case "#SLIDE2":
            showSlides(slideIndex2 = n, slideID2);
            break;
        case "#SLIDE3":
            showSlides(slideIndex3 = n, slideID3);
            break;
        case "#SLIDE4":
            showSlides(slideIndex4 = n, slideID4);
            break;
    }
}

function showSlides(n, slideID) {
    console.log(slideID);
    let i;
    let parent = document.querySelector(slideID);
    console.log(parent);
    let slides = parent.querySelectorAll(".slide");
    console.log(slides);


    let dots = document.querySelector(slideID + "DOTS").querySelectorAll(".slideDot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        if (slides[i].querySelector(".slideVideoContainer") != null)
        {
            slides[i].querySelector(".slideVideoContainer").querySelector(".slideVideo").pause();
        }

    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    switch (slideID) {
        case "#SLIDE1":
            if (n > slides.length) { slideIndex1 = 1 }

            if (n < 1) { slideIndex1 = slides.length }

            slides[slideIndex1 - 1].style.display = "block";
            dots[slideIndex1 - 1].className += " active";

        
            break;
        case "#SLIDE2":
            if (n > slides.length) { slideIndex2 = 1 }

            if (n < 1) { slideIndex2 = slides.length }

            slides[slideIndex2 - 1].style.display = "block";
            dots[slideIndex2 - 1].className += " active";


            break;
        case "#SLIDE3":
            if (n > slides.length) { slideIndex3 = 1 }

            if (n < 1) { slideIndex3 = slides.length }

            slides[slideIndex3 - 1].style.display = "block";
            dots[slideIndex3 - 1].className += " active";
          

            break;
        case "#SLIDE4":
            if (n > slides.length) { slideIndex4 = 1 }

            if (n < 1) { slideIndex4 = slides.length }

            slides[slideIndex4 - 1].style.display = "block";
            dots[slideIndex4 - 1].className += " active";
          
            break;
    }

}

//inits slides
let slideIndex1 = 1;
let slideID1 = "#SLIDE1";
let slideIndex2 = 1;
let slideID2 = "#SLIDE2";
let slideIndex3 = 1;
let slideID3 = "#SLIDE3";
let slideIndex4 = 1;
let slideID4 = "#SLIDE4";

showSlides(slideIndex1, slideID1);
showSlides(slideIndex2, slideID2);
showSlides(slideIndex3, slideID3);
showSlides(slideIndex4, slideID4);