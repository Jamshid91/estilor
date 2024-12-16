const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn'),
      header = document.querySelector('header'),
      body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clickedMenu');
    header.classList.toggle('header_white');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
})



// заказать звонок
const orderBtns = document.querySelectorAll('.btn-order'),
      popUpOrder = document.querySelector('.popUp-order'),
      popUpThanks = document.querySelector('.popUp-thanks');

orderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpOrder.classList.remove('d-none');
    body.classList.toggle('bodyStopScroll');
  })
})

const userName = document.getElementById('name-order'),
    userPhone = document.getElementById('phone-order'),
    userEmail = document.getElementById('email-order'),
    formBtn = document.querySelector('.popUp-order .form-submit');

formBtn.addEventListener('click', () => {
checkInputs();
const userNameSuc =  userName.nextElementSibling.classList,
      userPhoneSuc =  userPhone.nextElementSibling.classList,
      userEmailSuc =  userEmail.nextElementSibling.classList;

if(userNameSuc == 'success' && userPhoneSuc == 'success' && userEmailSuc == 'success') {
  // formBtn.type = 'submit'
  popUpOrder.classList.add('d-none');
  popUpThanks.classList.remove('d-none');
}
})

function checkInputs() {
const userNameVal = userName.value.trim(),
      userPhoneVal = userPhone.value.trim(),
      userEmailVal = userEmail.value.trim();

if(userNameVal == '' || userName.value.length <= 2) {
  setError(userName)
} else {
  setSuccess(userName)
}

if(userPhoneVal == '' || userPhone.value.substr(-1) === '_') {
  setError(userPhone)
} else {
  setSuccess(userPhone)
}
if(userEmailVal === '') {
  setError(userEmail)
}
else if(!isEmail(userEmailVal)) {
  setError(userEmail)
}
 else {
  setSuccess(userEmail)
}

}

function setSuccess(input) {
input.style.borderColor = '#2F65D4'
input.parentElement.children[3].classList.add('success');
input.parentElement.children[3].classList.remove('error');
input.nextElementSibling.classList.add('success')
}

function setError(input) {
input.style.borderColor = '#2F65D4'
input.parentElement.children[3].classList.add('error');
input.parentElement.children[3].classList.remove('success');
}
 
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  
// input mask
  $("#phone-order").inputmask({"mask": "+7(999) 999-99-99"});