const userName_cons = document.getElementById('name-cons'),
    userPhone_cons = document.getElementById('phone-cons'),
    userEmail_cons = document.getElementById('email-cons'),
    formBtn_cons = document.querySelector('.block9-form .form-submit');

formBtn_cons.addEventListener('click', () => {
checkInputsCons();
const userName_consSuc =  userName_cons.nextElementSibling.classList,
      userPhone_consSuc =  userPhone_cons.nextElementSibling.classList,
      userEmail_consSuc =  userEmail_cons.nextElementSibling.classList;

if(userName_consSuc == 'success' && userPhone_consSuc == 'success' && userEmail_consSuc == 'success') {
  // formBtn.type = 'submit'
  popUpOrder.classList.add('d-none');
  popUpThanks.classList.remove('d-none');
}
})

function checkInputsCons() {
const userName_consVal = userName_cons.value.trim(),
      userPhone_consVal = userPhone_cons.value.trim(),
      userEmail_consVal = userEmail_cons.value.trim();

if(userName_consVal == '' || userName_cons.value.length <= 2) {
  setError(userName_cons)
} else {
  setSuccess(userName_cons)
}

if(userPhone_consVal == '' || userPhone_cons.value.substr(-1) === '_') {
  setError(userPhone_cons)
} else {
  setSuccess(userPhone_cons)
}
if(userEmail_consVal === '') {
  setError(userEmail_cons)
}
else if(!isEmail(userEmail_consVal)) {
  setError(userEmail_cons)
}
 else {
  setSuccess(userEmail_cons)
}

}

// input mask
$("#phone-cons").inputmask({"mask": "+7(999) 999-99-99"});