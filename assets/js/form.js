var forms = document.getElementsByClassName('all-forms');
const new_person = '<span class="first-form__discr">Ім\'я</span><input type="text" placeholder="Введіть ім’я" class="more-people__name"><span class="first-form__discr">Прізвище</span><input type="text" placeholder="Введіть прізвище" class="more-people__surname"><span class="first-form__discr">Паспорт </span><input type="text" placeholder="Введіть паспорт" class="more-people__passport"><span class="first-form__discr">Дата народження</span><input type="text" placeholder="Введіть дату народження" class="more-people__birthday">';
var main_form = document.forms[0];
var repeat = 0;

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
    if(current_form == (forms.length - 1) && validation() == true){
        current_form = 0;
        forms[current_form].classList.remove('active-form')
        forms[0].classList.add('active-form');
        document.querySelector('button.main-form__next').innerHTML = 'Далі';
        document.querySelector('button.main-form__prev').style.display = 'none';
        repeat = 0;
        document.querySelector('form.main-form__form').submit();
    }
    else if (validation() == true){
        forms[current_form].classList.remove('active-form')
        current_form += 1;
        forms[current_form].classList.add('active-form');
        document.querySelector('button.main-form__prev').style.display = 'block';
        if(current_form == (forms.length - 1)){
            document.querySelector('button.main-form__next').innerHTML = 'Оплатить';
        }
    }
}
function validation(){
    let mf = main_form;
    switch(current_form){
        case 0:
            if(mf.countrySelect.value == ''){
                mf.countrySelect.closest('.choices').style.borderColor = 'red';
                return false;
            }
            if(age_validation(mf.age.value) == false){
                mf.age.style.borderColor = 'red';
                return false;
            }
            if(mf.timeRange.value == ''){
                mf.timeRange.style.borderColor = 'red';
                return false;
            }
            if(mf.costSelect.value == ''){
                mf.costSelect.closest('.choices').style.borderColor = 'red';
                return false;
            }
            if(mf.sportSelect.value == ''){                mf.sportSelect.closest('.choices').style.borderColor = 'red';
                return false;
            }
            if(mf.agree.checked == false){
                return false;
            }
            else{
                return true;
            }
            break;
        case 1:
            if(name_validation(mf.name.value) == false){
                mf.name.style.borderColor = 'red';
                return false;
            }
            if(name_validation(mf.surname.value) == false){
                mf.surname.style.borderColor = 'red';
                return false;
            }
            if(number_validation(mf.number.value) == false){
                mf.number.style.borderColor = 'red';
                return false;
            }
            if(email_validation(mf.email.value) == false){
                mf.email.style.borderColor = 'red';
                return false;
            }
            if(mf.passport.value == ''){
                mf.passport.style.borderColor = 'red';
                return false;
            }
            if(date_validation(mf.birthday.value) == false){
                mf.birthday.style.borderColor = 'red';
                return false;
            }
            else{
                mf.nameCheck.value = mf.name.value;
                mf.surnameCheck.value = mf.surname.value;
                mf.numberCheck.value = mf.number.value;
                mf.emailCheck.value = mf.email.value;
                mf.passportCheck.value = mf.passport.value;
                mf.birthdayCheck.value = mf.birthday.value;
                if(document.querySelectorAll('.second-form__more-people-wrapper').length > 1){
                    let next_people_name = mf.getElementsByClassName('more-people__name');
                    let next_people_surname = mf.getElementsByClassName('more-people__surname');
                    let next_people_passport = mf.getElementsByClassName('more-people__passport');
                    let next_people_birthday = mf.getElementsByClassName('more-people__birthday');
                    console.log(next_people_name.length); 
                    for(let i = 0; i < next_people_name.length; i++){if(name_validation(next_people_name[i].value) == false){
                next_people_name[i].style.borderColor = 'red';
                            return false;
                        }
                        if(name_validation(next_people_surname[i].value) == false){
                next_people_surname[i].style.borderColor = 'red';
                            return false;
                        }
                        if(next_people_passport[i].value == ''){
                next_people_passport[i].style.borderColor = 'red';
                            return false;
                        }
                        if(date_validation(next_people_birthday[i].value) == false){
                next_people_birthday[i].style.borderColor = 'red';
                            return false;
                        }
                    }
                    for(let i = mf.getElementsByClassName('third-form__more-people').length; i < next_people_name.length; i++){
                        let next_person = '<div class="third-form__more-people"><p class="third-form__more-people-header"> Турист №'+ String(i + 1) +'</p><div class="third-form__more-people-container"><p class="third-form__more-people-attribute">Ім\'я</p><p class="third-form__more-people-value">'+ String(next_people_name[i].value) +'</p><p class="third-form__more-people-attribute">Прізвище</p><p class="third-form__more-people-value">'+ String(next_people_surname[i].value) +'</p><p class="third-form__more-people-attribute">Паспорт</p><p class="third-form__more-people-value">'+ String(next_people_passport[i].value) +'</p><p class="third-form__more-people-attribute">Дата народження</p><p class="third-form__more-people-value">'+ String(next_people_birthday[i].value) +'</p></div></div>';
                        let tf = mf.querySelector('.third-form');
                        tf.insertAdjacentHTML('beforeend', next_person);
                    }
                }
                return true;
            }
            break;
        case 2:
            if(name_validation(mf.nameCheck.value) == false){
                mf.nameCheck.style.borderColor = 'red';
                return false;
            }
            if(name_validation(mf.surnameCheck.value) == false){
                mf.surnameCheck.style.borderColor = 'red';
                return false;
            }
            if(number_validation(mf.numberCheck.value) == false){
                mf.numberCheck.style.borderColor = 'red';
                return false;
            }
            if(email_validation(mf.emailCheck.value) == false){
                mf.emailCheck.style.borderColor = 'red';
                return false;
            }
            if(mf.passportCheck.value == ''){
                mf.passportCheck.style.borderColor = 'red';
                return false;
            }
            if(date_validation(mf.birthdayCheck.value) == false){
                mf.birthdayCheck.style.borderColor = 'red';
                return false;
            }
            else{
                return true;
            }
            break;
        case 3:
            if(card_number_validation(mf.cardNumber.value) == false){
                mf.cardNumber.style.borderColor = 'red';
                return false;
            }
            if(card_term_validation(mf.cardTerm.value) == false){
                mf.cardTerm.style.borderColor = 'red';
                return false;
            }
            if(cvv_validation(mf.cardCVV.value) == false){
                mf.cardCVV.style.borderColor = 'red';
                return false;
            }
            else{
                return true;
            }
            break;
    }
}
function email_validation(email){
    let re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    return re.test(String(email));
}
function number_validation(number){
    let re = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    return re.test(String(number));
}
function date_validation(date){
    let re = /(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(([0-9])\d\d)/;
    return re.test(String(date));
}
function card_number_validation(card_number){
    let re = /[0-9]{13,16}/;
    return re.test(String(card_number));
}
function age_validation(age){
    let re = /[1-9][0-9]/;
    return re.test(String(age));
}
function name_validation(name){
    let re = /[A-Z]{1,15}/;
    return re.test(String(name));
}
function card_term_validation(card_term){
    let re = /(0[1-9]|1[012])\/([0-9][0-9])/;
    return re.test(String(card_term));
}
function cvv_validation(cvv){
    let re = /[0-9]{3}/;
    return re.test(String(cvv));
}

new AirDatepicker('#datepicker', {
    range: true,
    multipleDatesSeparator: ' - ',
    autoClose: true,
});

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
    const choices = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
    });
})

function more_people(index){
    const new_person_wrapper = '<div class="second-form__more-people-wrapper"><button type="button" class="second-form__more-people" onclick="more_people('+ String(index + 1) +')"><span>+Додати учасника</span><img src="assets/imgs/close.svg" alt="#" class="second-form__more-people-img"></div>';
    const more_people_outer = document.querySelector('.second-form__more-people-outer');
    const more_people_wrapper = document.querySelectorAll('.second-form__more-people-wrapper');
    const more_people_svg = document.getElementsByClassName('second-form__more-people-img');
    if(more_people_svg[index].classList.contains('second-form__more-people-img-visible') == false){ 
        more_people_svg[index].classList.add('second-form__more-people-img-visible');
        more_people_wrapper[index].querySelector('.second-form__more-people span').style.margin = '0';more_people_wrapper[index].querySelector('.second-form__more-people span').innerHTML = 'Турист №' + String(more_people_wrapper.length);
        more_people_wrapper[index].insertAdjacentHTML('beforeend', new_person)
        more_people_wrapper[index].insertAdjacentHTML('afterend', new_person_wrapper)
    }
    else{ 
        more_people_svg[index].classList.remove('second-form__more-people-img-visible')
        more_people_wrapper[index].querySelector('.second-form__more-people span').style.margin = '0 auto';
        more_people_wrapper[index].querySelector('.second-form__more-people span').innerHTML = '+Додати учасника';
        more_people_wrapper[index].innerHTML = more_people_wrapper[index].innerHTML.replace(new_person, '');
        more_people_outer.removeChild(more_people_wrapper[more_people_wrapper.length - 1])
    }
    console.log(more_people_outer);
}

main_form.costSelect.addEventListener('change', function(){ 
    main_form.querySelector('.price-outer').style.display = 'block';
});