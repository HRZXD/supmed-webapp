let slideNum = 1;
function nextSlide(n){
    clickSlide(slideNum += n);
}
function clickSlide(n){
    let i;
    let slides = document.querySelectorAll(".slidepic");
    let bars = document.querySelectorAll(".bar");
    if (n > slides.length){
        slideNum = 1;
    }
    if (n < 1){
        slideNum = slides.length;
    }
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for (i=0;i<bars.length;i++){
        bars[i].className = bars[i].className.replace(" active","");
    }
    slides[slideNum-1].style.display = "block";
    bars[slideNum-1].className += " active";
    console.log(slideNum);
}
export {nextSlide}