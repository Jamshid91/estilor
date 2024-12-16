$(document).ready(function() {
    $('.tab-item').hide();
    $('.tab-item:first-child').show();
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.tab-item').hide();
      $('.' + pageInfo).show();
    })
});




// TAB №1
const where_tab_1 = document.getElementById('where-tab_1'),
      whereTo_tab_1 = document.getElementById('whereTo-tab_1'),
      weight_tab_1 = document.getElementById('weight-tab_1'),
      size_tab_1 = document.getElementById('size-tab_1'),
      name_tab_1 = document.getElementById('name-tab_1'),
      email_tab_1 = document.getElementById('email-tab_1'),
      phone_tab_1 = document.getElementById('phone-tab_1'),
      text_tab_1 = document.getElementById('text-tab_1'),
      formBtn_tab1 = document.querySelector('.tab_1 .form-submit');


formBtn_tab1.addEventListener('click', () => {
checkInputsTabOne();
const where_1Suc =  where_tab_1.nextElementSibling.classList,
    whereTo1Suc =  whereTo_tab_1.nextElementSibling.classList,
    weight_1Suc =  weight_tab_1.nextElementSibling.classList,
    size_1Suc =  size_tab_1.nextElementSibling.classList,
    name_1Suc =  name_tab_1.nextElementSibling.classList,
    email_1Suc =  email_tab_1.nextElementSibling.classList,
    phone_1Suc =  phone_tab_1.nextElementSibling.classList,
    text_1Suc =  text_tab_1.nextElementSibling.classList;

    if(where_1Suc == 'success' && whereTo1Suc == 'success' && weight_1Suc == 'success' && size_1Suc == 'success' && name_1Suc == 'success' && email_1Suc == 'success' && phone_1Suc == 'success' && text_1Suc == 'success') {
    popUpThanks.classList.remove('d-none');
    }
})

function checkInputsTabOne() {
const where_1Val = where_tab_1.value.trim(),
      whereTo_1Val = whereTo_tab_1.value.trim(),
      weight_1Val = weight_tab_1.value.trim(),
      size_1Val = size_tab_1.value.trim(),
      name_1Val = name_tab_1.value.trim(),
      email_1Val = email_tab_1.value.trim(),
      phone_1Val = phone_tab_1.value.trim(),
      text_1Val = text_tab_1.value.trim();

if(where_1Val == '') {
  setError(where_tab_1)
} else {
  setSuccess(where_tab_1)
}

if(whereTo_1Val == '') {
  setError(whereTo_tab_1)
} else {
  setSuccess(whereTo_tab_1)
}

if(weight_1Val == '') {
  setError(weight_tab_1)
} else {
  setSuccess(weight_tab_1)
}

if(size_1Val == '') {
  setError(size_tab_1)
} else {
  setSuccess(size_tab_1)
}

if(name_1Val == '') {
  setError(name_tab_1)
} else {
  setSuccess(name_tab_1)
}

if(text_1Val == '') {
  setError(text_tab_1)
} else {
  setSuccess(text_tab_1)
}

if(phone_1Val == '' || phone_tab_1.value.substr(-1) === '_') {
  setError(phone_tab_1)
} else {
  setSuccess(phone_tab_1)
}

if(email_1Val === '') {
  setError(email_tab_1)
}
else if(!isEmail(email_1Val)) {
  setError(email_tab_1)
}
 else {
  setSuccess(email_tab_1)
}
}
// input mask
$("#phone-tab_1").inputmask({"mask": "+7(999) 999-99-99"});



// TAB №2
const where_tab_2 = document.getElementById('where-tab_2'),
      whereTo_tab_2 = document.getElementById('whereTo-tab_2'),
      weight_tab_2 = document.getElementById('weight-tab_2'),
      size_tab_2 = document.getElementById('size-tab_2'),
      name_tab_2 = document.getElementById('name-tab_2'),
      email_tab_2 = document.getElementById('email-tab_2'),
      phone_tab_2 = document.getElementById('phone-tab_2'),
      text_tab_2 = document.getElementById('text-tab_2'),
      formBtn_tab2 = document.querySelector('.tab_2 .form-submit');


formBtn_tab2.addEventListener('click', () => {
checkInputsTabTwo();
const where_2Suc =  where_tab_2.nextElementSibling.classList,
    whereTo_2Suc =  whereTo_tab_2.nextElementSibling.classList,
    weight_2Suc =  weight_tab_2.nextElementSibling.classList,
    size_2Suc =  size_tab_2.nextElementSibling.classList,
    name_2Suc =  name_tab_2.nextElementSibling.classList,
    email_2Suc =  email_tab_2.nextElementSibling.classList,
    phone_2Suc =  phone_tab_2.nextElementSibling.classList,
    text_2Suc =  text_tab_2.nextElementSibling.classList;

    if(where_2Suc == 'success' && whereTo_2Suc == 'success' && weight_2Suc == 'success' && size_2Suc == 'success' && name_2Suc == 'success' && email_2Suc == 'success' && phone_2Suc == 'success' && text_2Suc == 'success') {
    popUpThanks.classList.remove('d-none');
    }
})

function checkInputsTabTwo() {
const where_2Val = where_tab_2.value.trim(),
      whereTo_2Val = whereTo_tab_2.value.trim(),
      weight_2Val = weight_tab_2.value.trim(),
      size_2Val = size_tab_2.value.trim(),
      name_2Val = name_tab_2.value.trim(),
      email_2Val = email_tab_2.value.trim(),
      phone_2Val = phone_tab_2.value.trim(),
      text_2Val = text_tab_2.value.trim();

if(where_2Val == '') {
  setError(where_tab_2)
} else {
  setSuccess(where_tab_2)
}

if(whereTo_2Val == '') {
  setError(whereTo_tab_2)
} else {
  setSuccess(whereTo_tab_2)
}

if(weight_2Val == '') {
  setError(weight_tab_2)
} else {
  setSuccess(weight_tab_2)
}

if(size_2Val == '') {
  setError(size_tab_2)
} else {
  setSuccess(size_tab_2)
}

if(name_2Val == '') {
  setError(name_tab_2)
} else {
  setSuccess(name_tab_2)
}

if(text_2Val == '') {
  setError(text_tab_2)
} else {
  setSuccess(text_tab_2)
}

if(phone_2Val == '' || phone_tab_2.value.substr(-1) === '_') {
  setError(phone_tab_2)
} else {
  setSuccess(phone_tab_2)
}

if(email_2Val === '') {
  setError(email_tab_2)
}
else if(!isEmail(email_2Val)) {
  setError(email_tab_2)
}
 else {
  setSuccess(email_tab_2)
}
}
// input mask
$("#phone-tab_2").inputmask({"mask": "+7(999) 999-99-99"});



// TAB №3
const where_tab_3 = document.getElementById('where-tab_3'),
      whereTo_tab_3 = document.getElementById('whereTo-tab_3'),
      weight_tab_3 = document.getElementById('weight-tab_3'),
      size_tab_3 = document.getElementById('size-tab_3'),
      name_tab_3 = document.getElementById('name-tab_3'),
      email_tab_3 = document.getElementById('email-tab_3'),
      phone_tab_3 = document.getElementById('phone-tab_3'),
      text_tab_3 = document.getElementById('text-tab_3'),
      formBtn_tab3 = document.querySelector('.tab_3 .form-submit');


formBtn_tab3.addEventListener('click', () => {
checkInputsTabThree();
const where_3Suc =  where_tab_3.nextElementSibling.classList,
    whereTo_3Suc =  whereTo_tab_3.nextElementSibling.classList,
    weight_3Suc =  weight_tab_3.nextElementSibling.classList,
    size_3Suc =  size_tab_3.nextElementSibling.classList,
    name_3Suc =  name_tab_3.nextElementSibling.classList,
    email_3Suc =  email_tab_3.nextElementSibling.classList,
    phone_3Suc =  phone_tab_3.nextElementSibling.classList,
    text_3Suc =  text_tab_3.nextElementSibling.classList;

    if(where_3Suc == 'success' && whereTo_3Suc == 'success' && weight_3Suc == 'success' && size_3Suc == 'success' && name_3Suc == 'success' && email_3Suc == 'success' && phone_3Suc == 'success' && text_3Suc == 'success') {
    popUpThanks.classList.remove('d-none');
    }
})

function checkInputsTabThree() {
const where_3Val = where_tab_3.value.trim(),
      whereTo_3Val = whereTo_tab_3.value.trim(),
      weight_3Val = weight_tab_3.value.trim(),
      size_3Val = size_tab_3.value.trim(),
      name_3Val = name_tab_3.value.trim(),
      email_3Val = email_tab_3.value.trim(),
      phone_3Val = phone_tab_3.value.trim(),
      text_3Val = text_tab_3.value.trim();

if(where_3Val == '') {
  setError(where_tab_3)
} else {
  setSuccess(where_tab_3)
}

if(whereTo_3Val == '') {
  setError(whereTo_tab_3)
} else {
  setSuccess(whereTo_tab_3)
}

if(weight_3Val == '') {
  setError(weight_tab_3)
} else {
  setSuccess(weight_tab_3)
}

if(size_3Val == '') {
  setError(size_tab_3)
} else {
  setSuccess(size_tab_3)
}

if(name_3Val == '') {
  setError(name_tab_3)
} else {
  setSuccess(name_tab_3)
}

if(text_3Val == '') {
  setError(text_tab_3)
} else {
  setSuccess(text_tab_3)
}

if(phone_3Val == '' || phone_tab_3.value.substr(-1) === '_') {
  setError(phone_tab_3)
} else {
  setSuccess(phone_tab_3)
}

if(email_3Val === '') {
  setError(email_tab_3)
}
else if(!isEmail(email_3Val)) {
  setError(email_tab_3)
}
 else {
  setSuccess(email_tab_3)
}
}
// input mask
$("#phone-tab_3").inputmask({"mask": "+7(999) 999-99-99"});



// TAB №4
const where_tab_4 = document.getElementById('where-tab_4'),
      whereTo_tab_4 = document.getElementById('whereTo-tab_4'),
      weight_tab_4 = document.getElementById('weight-tab_4'),
      size_tab_4 = document.getElementById('size-tab_4'),
      name_tab_4 = document.getElementById('name-tab_4'),
      email_tab_4 = document.getElementById('email-tab_4'),
      phone_tab_4 = document.getElementById('phone-tab_4'),
      text_tab_4 = document.getElementById('text-tab_4'),
      formBtn_tab4 = document.querySelector('.tab_4 .form-submit');


formBtn_tab4.addEventListener('click', () => {
checkInputsTabFour();
const where_4Suc =  where_tab_4.nextElementSibling.classList,
    whereTo_4Suc =  whereTo_tab_4.nextElementSibling.classList,
    weight_4Suc =  weight_tab_4.nextElementSibling.classList,
    size_4Suc =  size_tab_4.nextElementSibling.classList,
    name_4Suc =  name_tab_4.nextElementSibling.classList,
    email_4Suc =  email_tab_4.nextElementSibling.classList,
    phone_4Suc =  phone_tab_4.nextElementSibling.classList,
    text_4Suc =  text_tab_4.nextElementSibling.classList;

    if(where_4Suc == 'success' && whereTo_4Suc == 'success' && weight_4Suc == 'success' && size_4Suc == 'success' && name_4Suc == 'success' && email_4Suc == 'success' && phone_4Suc == 'success' && text_4Suc == 'success') {
    popUpThanks.classList.remove('d-none');
    }
})

function checkInputsTabFour() {
const where_4Val = where_tab_4.value.trim(),
      whereTo_4Val = whereTo_tab_4.value.trim(),
      weight_4Val = weight_tab_4.value.trim(),
      size_4Val = size_tab_4.value.trim(),
      name_4Val = name_tab_4.value.trim(),
      email_4Val = email_tab_4.value.trim(),
      phone_4Val = phone_tab_4.value.trim(),
      text_4Val = text_tab_4.value.trim();

if(where_4Val == '') {
  setError(where_tab_4)
} else {
  setSuccess(where_tab_4)
}

if(whereTo_4Val == '') {
  setError(whereTo_tab_4)
} else {
  setSuccess(whereTo_tab_4)
}

if(weight_4Val == '') {
  setError(weight_tab_4)
} else {
  setSuccess(weight_tab_4)
}

if(size_4Val == '') {
  setError(size_tab_4)
} else {
  setSuccess(size_tab_4)
}

if(name_4Val == '') {
  setError(name_tab_4)
} else {
  setSuccess(name_tab_4)
}

if(text_4Val == '') {
  setError(text_tab_4)
} else {
  setSuccess(text_tab_4)
}

if(phone_4Val == '' || phone_tab_4.value.substr(-1) === '_') {
  setError(phone_tab_4)
} else {
  setSuccess(phone_tab_4)
}

if(email_4Val === '') {
  setError(email_tab_4)
}
else if(!isEmail(email_4Val)) {
  setError(email_tab_4)
}
 else {
  setSuccess(email_tab_4)
}
}
// input mask
$("#phone-tab_4").inputmask({"mask": "+7(999) 999-99-99"});




// TAB №4
const where_tab_5 = document.getElementById('where-tab_5'),
      whereTo_tab_5 = document.getElementById('whereTo-tab_5'),
      weight_tab_5 = document.getElementById('weight-tab_5'),
      size_tab_5 = document.getElementById('size-tab_5'),
      name_tab_5 = document.getElementById('name-tab_5'),
      email_tab_5 = document.getElementById('email-tab_5'),
      phone_tab_5 = document.getElementById('phone-tab_5'),
      text_tab_5 = document.getElementById('text-tab_5'),
      formBtn_tab5 = document.querySelector('.tab_5 .form-submit');


formBtn_tab5.addEventListener('click', () => {
checkInputsTabFive();
const where_5Suc =  where_tab_5.nextElementSibling.classList,
    whereTo_5Suc =  whereTo_tab_5.nextElementSibling.classList,
    weight_5Suc =  weight_tab_5.nextElementSibling.classList,
    size_5Suc =  size_tab_5.nextElementSibling.classList,
    name_5Suc =  name_tab_5.nextElementSibling.classList,
    email_5Suc =  email_tab_5.nextElementSibling.classList,
    phone_5Suc =  phone_tab_5.nextElementSibling.classList,
    text_5Suc =  text_tab_5.nextElementSibling.classList;

    if(where_5Suc == 'success' && whereTo_5Suc == 'success' && weight_5Suc == 'success' && size_5Suc == 'success' && name_5Suc == 'success' && email_5Suc == 'success' && phone_5Suc == 'success' && text_5Suc == 'success') {
    popUpThanks.classList.remove('d-none');
    }
})

function checkInputsTabFive() {
const where_5Val = where_tab_5.value.trim(),
      whereTo_5Val = whereTo_tab_5.value.trim(),
      weight_5Val = weight_tab_5.value.trim(),
      size_5Val = size_tab_5.value.trim(),
      name_5Val = name_tab_5.value.trim(),
      email_5Val = email_tab_5.value.trim(),
      phone_5Val = phone_tab_5.value.trim(),
      text_5Val = text_tab_5.value.trim();

if(where_5Val == '') {
  setError(where_tab_5)
} else {
  setSuccess(where_tab_5)
}

if(whereTo_5Val == '') {
  setError(whereTo_tab_5)
} else {
  setSuccess(whereTo_tab_5)
}

if(weight_5Val == '') {
  setError(weight_tab_5)
} else {
  setSuccess(weight_tab_5)
}

if(size_5Val == '') {
  setError(size_tab_5)
} else {
  setSuccess(size_tab_5)
}

if(name_5Val == '') {
  setError(name_tab_5)
} else {
  setSuccess(name_tab_5)
}

if(text_5Val == '') {
  setError(text_tab_5)
} else {
  setSuccess(text_tab_5)
}

if(phone_5Val == '' || phone_tab_5.value.substr(-1) === '_') {
  setError(phone_tab_5)
} else {
  setSuccess(phone_tab_5)
}

if(email_5Val === '') {
  setError(email_tab_5)
}
else if(!isEmail(email_5Val)) {
  setError(email_tab_5)
}
 else {
  setSuccess(email_tab_5)
}
}
// input mask
$("#phone-tab_5").inputmask({"mask": "+7(999) 999-99-99"});