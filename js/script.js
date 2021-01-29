let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('super');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += 'active';
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(x) {
    showSlides1(slideIndex1 += x);
}

function currentSlide1(x) {
    showSlides1(slideIndex1 = x);
}

function showSlides1(x) {
    let a;
    let slides1 = document.getElementsByClassName('post');
    let dots1 = document.getElementsByClassName('dot1');
    if (x > slides1.length) {slideIndex1 = 1}
    if (x < 1) {slideIndex1 = slides1.length}
    for (a = 0; a < slides1.length; a++) {
        slides1[a].style.display = 'none';
    }
    for (a = 0; a < dots1.length; a++) {
        dots1[a].className = dots1[a].className.replace('active', '');
    }
    
    slides1[slideIndex1-1].style.display = 'block';
    dots1[slideIndex1-1].className += 'active';
}