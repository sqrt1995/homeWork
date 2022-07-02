const form = document.getElementById('form');
const businessFormCorporation = document.getElementById('businessFormCorporation');
const businessFormIndividual = document.getElementById('businessFormIndividual');
const companyName = document.getElementById('companyName');
const departmentName = document.getElementById('departmentName');
const nameElem = document.getElementById('name');
const nameKana = document.getElementById('nameKana');
const sexMan = document.getElementById('sexMan');
const sexWoman = document.getElementById('sexWoman');
const sexOther = document.getElementById('sexOther');
const birthday = document.getElementById('birthday');
const mail = document.getElementById('mail');
const postCode = document.getElementById('postCode');
const prefectures = document.getElementById('prefectures');
const address = document.getElementById('address');



form.addEventListener("submit", function (event) {
  // ユーザーがデータを送信しようとするたびに、バリデーションチェックを行う。
  event.preventDefault()
  if (!businessFormCorporation.validity.valid && !businessFormIndividual.validity.valid) {
    businessFormCorporation.classList.add('error');
    businessFormIndividual.classList.add('error');
  }
  if (businessFormCorporation.validity.valid && !companyName.validity.valid) {
    companyName.classList.add('error');
  }
  if (businessFormIndividual.validity.valid && departmentName.validity.valid) {
    departmentName.classList.add('error');
  }

  if(!nameElem.validity.valid){
    nameElem.classList.add('error');
  }

  if(!nameKana.validity.valid){
    nameKana.classList.add('error');
  }

  if(!sexMan.validity.valid && !sexWoman.validity.valid && !sexOther.validity.valid){
    sexMan.classList.add('error');
    sexWoman.classList.add('error');
    sexOther.classList.add('error');
  }

  if(birthday.validity.typeMismatch){
    birthday.classList.add('error');
  }

  if (!mail.validity.valid) {
    showError(mail);
  }

  if(!postCode.validity.valid){
    showError(postCode);
  }

  if(!prefectures.validity.valid){
    prefectures.classList.add('error');
  }

  if(!address.validity.valid){
    address.classList.add('error');
  }
});

function showError(element) {
  if (element.validity.valueMissing) {
    element.classList.add('error');
  } else if (element.validity.typeMismatch) {
    element.classList.add('error');
  } else if (element.validity.tooShort) {
    element.classList.add('error');
  }
}
