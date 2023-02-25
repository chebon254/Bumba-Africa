const header = document.querySelector("nav");
const toTop = document.querySelector(".to-top");
window.onscroll = ()=>{
    this.scrollY > 100 ? header.classList.add("sticky") : header.classList.remove("sticky");
    this.scrollY > 200 ? toTop.classList.add("show") : toTop.classList.remove("show");
}
/* == BACK TO TOP == */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
/* == BACK TO TOP == */
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
