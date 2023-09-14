let select_empty = document.querySelector('.select-empty');
let stars = document.querySelectorAll('input[type="radio"] + label');
let srars_outer = document.querySelector('.review__rating');
let rating = document.querySelectorAll('input[type="radio"]');
const input = document.querySelector("#phone");
window.intlTelInput(input, {
utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
const input_second = document.querySelector("#phone2");
window.intlTelInput(input_second, {
utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
let reviews = document.querySelector('.reviews');
let forms = document.forms;
let review_form = forms[0];
let form = forms[1];
let form_submit_button = document.querySelector('.form__submit');
let numbers = Array.from(document.getElementsByClassName('numbers__number'));

let animations = function(){
    numbers.forEach(function(number){
        let integer_timer = 0;
        let number_text = number.innerText;
        let num = Number(number_text.replace(' ', ''))/10;
        number.innerText = 0;
        console.log(num);
        let timer = setInterval(function(){
            number.innerText =  integer_timer;
            integer_timer+=Math.round(num/100);
            if(integer_timer >= num){
                number.innerHTML = number_text.replace('00', '0') + '<span>0</span>';
                clearInterval(timer);
            }
        }, 5)
    });
}
let form_validation = function(){
    let is_valid = true;
    if(!form.form_name.value){
        form.form_name.classList.add('invalid');
        form.form_name.parentNode.classList.add('invalid');
        is_valid = false;
    }
    if(!form.form_label.value){
        form.form_label.classList.add('invalid');
        form.form_label.parentNode.classList.add('invalid');
        is_valid = false;
    }
    if(!form.form_phone.value){
        form.form_phone.classList.add('invalid');
        form.form_phone.parentNode.classList.add('invalid');
        is_valid = false;
    }
    return is_valid;
}
let form_submit = function(){
    console.log(form.form_name.value);
    if(form_validation()){
        form.submit();
    }
}
form_submit_button.addEventListener('click', function(event){
    event.preventDefault();
    form_submit();
});
let hover_func = function(){
    for(let i = 0; i < stars.length; i++){
        stars[i].classList.remove('star');
    };
    for(let i = 0; i < stars.length; i++){
        stars[i].classList.add('star')
        if(stars[i]===event.target){
            stars[i].classList.add('star');
            break;
        }
    };
}
let mouseleave = function(){
    for(let i = 0; i < stars.length; i++){
            stars[i].classList.remove('star');
    };
}
stars.forEach(function(star){
    star.addEventListener("mouseover", hover_func);
    srars_outer.addEventListener("mouseleave", mouseleave);
});
rating.forEach(function(r){r.addEventListener('change', (event) => {
    for(let i = 0; i < 5; i++){
        if(i<event.target.value){
            stars[i].classList.add('star_selected');
        }
        else{
            stars[i].classList.remove('star_selected');
        }
    };
});
});
select_empty.addEventListener('change', (event) =>{
    select_empty.style.color = '#453E60';
});

$(document).ready(function() {
    if (window.matchMedia("(max-width: 1100px)").matches) {
        var e = $('#review').remove();
        $(document).ready(function(){
          $('.reviews__list').slick({
              dots: true,
              infinite: true,
              arrows: false,
              slidesToShow: 1,
          });
        });
    } 
    if (window.matchMedia("(max-width: 900px)").matches) {
        $(document).ready(function(){
          $('.promise__list').slick({
              dots: true,
              infinite: true,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
          });
        });
    }
    $('.burger').click(function() {
        $('.mobile').toggleClass('disabled');
    });
    $('.mobile__close').click(function() {
        $('.mobile').toggleClass('disabled');
    });
    $('a.open-form').on('click', (function(event) {
        event.preventDefault();
        $('#form2').toggleClass('pop-up');
    }));
    $('.form__close').click(function() {
        $('#form2').toggleClass('pop-up');
    });
    $('a.reviews__button').on('click', (function(event) {
        event.preventDefault();
        $('.reviews__pop-up').addClass('pop-up');
        $('.reviews__pop-up').append(e);
        $('.review__close').on('click', function() {
            $('.reviews__pop-up').removeClass('pop-up');
            $('#review').remove();
            $('.reviews__elem_last').append(e);
        });
    }));
    var p = $( ".numbers__list" );
    var block_show = false;
    $(window).scroll(function(){
        if (block_show) {
            return false;
        }
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = p.offset().top;
        var eh = p.outerHeight();
        var dh = $(document).height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            animations();
        }
    });
});