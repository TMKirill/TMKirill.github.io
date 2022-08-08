var forms = document.getElementsByClassName('all-forms');
var current_form = 0;
function promo_add(){
    if(document.getElementById('first-form__promo').style.display == 'none'){
        document.getElementById('first-form__promo').style.display = 'block';
        document.getElementById('first-form__code').style.marginBottom = '2px';
    }
    else{
        document.getElementById('first-form__promo').style.display = 'none';
        document.getElementById('first-form__code').style.marginBottom = '30px';
    }
};

function form_next(){
    if(current_form == (forms.length - 1)){
        current_form = 0;
        forms[current_form].classList.remove('active-form')
        forms[0].classList.add('active-form');
        document.querySelector('button.main-form__next').innerHTML = 'Далі';
        document.querySelector('form.main-form__form').submit();
        document.querySelector('button.main-form__prev').style.display = 'none';
    }
    else{
        forms[current_form].classList.remove('active-form')
        current_form += 1;
        forms[current_form].classList.add('active-form');
        document.querySelector('button.main-form__prev').style.display = 'block';
        if(current_form == (forms.length - 1)){
            document.querySelector('button.main-form__next').innerHTML = 'Оплатить';
        }
    }
}

function form_prev(){
    forms[current_form].classList.remove('active-form')
    current_form -= 1;
    forms[current_form].classList.add('active-form');
    document.querySelector('button.main-form__next').innerHTML = 'Далі';
    if(current_form == 0){
        document.querySelector('button.main-form__prev').style.display = 'none';
    }
}
const elements = document.querySelectorAll('.main-form__select');
elements.forEach(function(el){
    console.log(el);
    const choices = new Choices(el, {
        itemSelectText: '',
    });
})
//const choices = new Choices(document.querySelector('.main-form__cost'), {
//    itemSelectText: '',
//});