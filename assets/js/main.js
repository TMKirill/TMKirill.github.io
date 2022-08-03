var slides = document.getElementsByClassName('slider__elem');
var currentSlide = 0;
var programm_more = document.getElementsByClassName('programm_other_index');
var plus_elem = document.getElementsByClassName('plus');
var language_arrow = document.getElementById('language_button')
var answers = document.getElementsByClassName('faq__answer');
var answer_down = document.getElementsByClassName('faq__down');
 
function slider_next_step() {
    var slides_visible = document.getElementsByClassName('slider__elem_visible');
    var slides_active = document.getElementsByClassName('slider__elem_active');
    slides[currentSlide].className = 'slider__elem';
    currentSlide = (currentSlide+1)%slides.length;
    unvisibleSlide = (currentSlide+slides_visible.length)%slides.length;
    slides[currentSlide].className = 'slider__elem slider__elem_visible slider__elem_active';
    slides[unvisibleSlide].className = 'slider__elem slider__elem_visible';
    for(let i = 0; i<slides_visible.length; i++){
        let index = (i+currentSlide)%slides.length+1;
        slides[index-1].style.gridColumnStart = (i+1).toString();
        slides[index-1].style.gridRowStart = '1';
    }
    console.log('\n');
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