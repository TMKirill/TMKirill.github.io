var currentSlide = 0;
var programm_more = document.getElementsByClassName('programm_other_index');
var plus_elem = document.getElementsByClassName('plus');
var language_arrow = document.getElementById('language_button')
var answers = document.getElementsByClassName('faq__answer');
var answer_down = document.getElementsByClassName('faq__down');
var burger_button = document.getElementById('mobile-header');
var header = document.getElementById('header');
const sliders = document.getElementsByClassName('slider');
var sport = document.getElementsByClassName('sport__elem');
var currentSlides = Array(sliders.length);
const window_width = window.matchMedia('screen and (max-width:900px)');

Array.from(sliders).forEach(function(sl){
    sl.addEventListener('touchstart', touch_point, false);
    sl.addEventListener('touchmove', touch_move, false)
})
let x1 = null;

console.log();

function touch_point(event){
    x1 = event.touches[0].clientX;
}

function touch_move(event){
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let x_diff = x2 - x1;
    if(x_diff > -120){
        return false;
    }
    else{
        slider_next_step(Array.from(sliders).indexOf(event.target.closest('.slider')));
    }
    x1 = null;
}

for (let i = 0; i < currentSlides.length; i++){
    currentSlides[i] = 0;
}

function sports_more(index){
    if(window.innerWidth > 900){
        if (sport[index].firstChild.style.overflow == 'hidden'){
            console.log(1);
            sport[index].firstChild.style.overflow = 'visible';
            sport[index].style.display = 'inline-block'
            sport[index].firstChild.style.maxWidth = '95%';
            sport[index].firstChild.style.lineHeight = '24px';
            sport[index].firstChild.style.whiteSpace = 'normal';
            sport[index].lastChild.style.transform = 'scale(-1, 1)';
            sport[index].style.borderRadius = '20px';
        }
        else {
            sport[index].style.display = 'inline'
            sport[index].firstChild.style.overflow = 'hidden';
            sport[index].firstChild.style.whiteSpace = 'nowrap';
            sport[index].firstChild.style.lineHeight = '14px';
            sport[index].firstChild.style.maxWidth = '350px';
            sport[index].lastChild.style.transform = 'scale(1, -1)';
            sport[index].style.borderRadius = '63px';
        }
    }
    else{
        if (sport[index].firstChild.style.overflow == 'hidden'){
            sport[index].firstChild.style.overflow = 'visible';
            sport[index].style.display = 'block';
            sport[index].firstChild.style.whiteSpace = 'normal';
            sport[index].firstChild.style.maxWidth = '90%';
            sport[index].firstChild.style.lineHeight = '24px';
            sport[index].style.borderRadius = '20px';
            sport[index].lastChild.style.transform = 'scale(-1, 1)';
        }
        else {
            sport[index].firstChild.style.overflow = 'hidden';
            sport[index].style.display = 'inline';
            sport[index].firstChild.style.whiteSpace = 'nowrap';
            sport[index].firstChild.style.lineHeight = '14px';
            sport[index].style.borderRadius = '63px';
            sport[index].firstChild.style.maxWidth = '180px';
            sport[index].lastChild.style.transform = 'scale(1, -1)';
        }
    }
}

function header_open() {
    if (header.classList.contains('header_mobile') == false){
        header.classList.add('header_mobile');
        burger_button.style.width = '5px';
    }
    else {
        header.classList.remove('header_mobile');
        burger_button.style.width = '20px';
    }
}

function slider_next_step(number) {
    let slides_visible = sliders[number].getElementsByClassName('slider__elem_visible');
    let slides_active = sliders[number].getElementsByClassName('slider__elem_active');
    let slides = sliders[number].getElementsByClassName('slider__elem');
    slides[currentSlides[number]].className = 'slider__elem';
    currentSlides[number] = (currentSlides[number]+1)%slides.length;
    unvisibleSlide = (currentSlides[number]+slides_visible.length)%slides.length;
    slides[currentSlides[number]].className = 'slider__elem slider__elem_visible slider__elem_active';
    slides[unvisibleSlide].className = 'slider__elem slider__elem_visible';
    for(let i = 0; i<slides_visible.length; i++){
        let index = (i+currentSlides[number])%slides.length+1;
        slides[index-1].style.gridColumnStart = (i+1).toString();
        slides[index-1].style.gridRowStart = '1';
    }
}

function language_more() {
var languages = document.getElementById('language');
    if (languages.classList.contains('language__other') == true){
        languages.className = 'language__other_show';
        language_arrow.style.transform = 'scale(1, -1)';
    }
    else{
        languages.className = 'language__other';
        language_arrow.style.transform = 'scale(1, 1)';
    }
}

function plus_click(index) {
    if (programm_more[index].classList.contains('programm__other') == true){
        programm_more[index].className = 'programm__other_show programm_other_index';
        plus_elem[index].style.position = 'static';
    }
    else{
        programm_more[index].className = 'programm__other programm_other_index';
        plus_elem[index].style.position = 'relative';
    }
}

function faq_answer(index) {
    if (answers[index].classList.contains('faq__answer_active') == false){
        answers[index].classList.add('faq__answer_active');
        answer_down[index].style.transform = 'scale(1, -1)';
    }
    else{
        answers[index].classList.remove('faq__answer_active');
        answer_down[index].style.transform = 'scale(1, 1)';
    }
}
for(let i = 32; i < sport.length; i++){
    sport[i].style.display = 'none';
}
function sports_else(){
    console.log(sport[34]);
    if(sport[34].style.display == 'none'){
        for(let i = 32; i < sport.length; i++){
            sport[i].style.display = 'inline';
        }
        arrow_adder(window_width)
    }
    else{
        for(let i = 32; i < sport.length; i++){
            sport[i].style.display = 'none';
        }
    }
}
function arrow_adder(window_width){
    for(let i = 0; i< sport.length; i++){
        if(sport[i].firstChild.offsetWidth > 349 && window.innerWidth > 900){
            sport[i].lastChild.style.display = 'inline-block';
        }
        else if(sport[i].firstChild.offsetWidth > 179 && window.innerWidth <= 900){
            sport[i].lastChild.style.display = 'inline-block';
        }
        else if(sport[i].firstChild.offsetWidth < 349 && window.innerWidth > 900){
            sport[i].lastChild.style.display = 'none';
        }
        else if(sport[i].firstChild.offsetWidth < 179 && window.innerWidth <= 900){
            sport[i].lastChild.style.display = 'none';
        }
    }
}
arrow_adder(window_width)
window_width.addListener(arrow_adder)