// Homepage Animation
function onload() {
    document.getElementById("ban-image").style.height = "720px";
    document.getElementById("ban-rect").style.width = "0px";
    document.getElementById("ban-recttwo").style.height = "0px";
    document.getElementById("ban-recttwo").style.width = "0px";
}
/* === Overlay === */
function openContact() {
    document.getElementById("MenuOverlay").style.width = "100%";
    document.getElementById("ban-image").style.height = "620px";
}

function closeContact() {
    document.getElementById("MenuOverlay").style.width = "0%";
    document.getElementById("ban-image").style.height = "720px";
}
/* === Overlay === */

/* == Blogs == */
var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("blogs");
        var dots = document.getElementsByClassName("number");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";

        }
/* == || Blogs == */
