// Получить индивидуальный расчет
const calcBtns = document.querySelectorAll('.calculation-btn'),
      popUpcalc = document.querySelector('.popUp-individual-calculation');

calcBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpcalc.classList.remove('d-none');
    body.classList.toggle('bodyStopScroll');
  })
})

const userName_calc = document.getElementById('name-calc'),
    userPhone_calc = document.getElementById('phone-calc'),
    userEmail_calc = document.getElementById('email-calc'),
    formBtn_calc = document.querySelector('.popUp-individual-calculation .form-submit');

formBtn_calc.addEventListener('click', () => {
checkInputsCalc();
const userName_calcSuc =  userName_calc.nextElementSibling.classList,
      userPhone_calcSuc =  userPhone_calc.nextElementSibling.classList,
      userEmail_calcSuc =  userEmail_calc.nextElementSibling.classList;

if(userName_calcSuc == 'success' && userPhone_calcSuc == 'success' && userEmail_calcSuc == 'success') {
  // formBtn.type = 'submit'
  popUpcalc.classList.add('d-none');
  popUpThanks.classList.remove('d-none');
}
})

function checkInputsCalc() {
const userName_calcVal = userName_calc.value.trim(),
      userPhone_calcVal = userPhone_calc.value.trim(),
      userEmail_calcVal = userEmail_calc.value.trim();

if(userName_calcVal == '' || userName_calc.value.length <= 2) {
  setError(userName_calc)
} else {
  setSuccess(userName_calc)
}

if(userPhone_calcVal == '' || userPhone_calc.value.substr(-1) === '_') {
  setError(userPhone_calc)
} else {
  setSuccess(userPhone_calc)
}
if(userEmail_calcVal === '') {
  setError(userEmail_calc)
}
else if(!isEmail(userEmail_calcVal)) {
  setError(userEmail_calc)
}
 else {
  setSuccess(userEmail_calc)
}

}

// input mask
$("#phone-calc").inputmask({"mask": "+7(999) 999-99-99"});