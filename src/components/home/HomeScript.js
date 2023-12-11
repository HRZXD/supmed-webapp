let slideNum = 1;
function nextSlide(n){
    clickSlide(slideNum += n);
}
function clickSlide(n){
    let i;
    let slides = document.querySelectorAll(".slidepic");
    if (n > slides.length){
        slideNum = 1;
    }
    if (n < 1){
        slideNum = slides.length;
    }
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideNum-1].style.display = "block";
}
export {nextSlide}