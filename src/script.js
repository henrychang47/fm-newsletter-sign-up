const container = document.querySelector('.container');
const successMsg = document.querySelector('.successMsg');
const dismissBtn = successMsg.querySelector('.dismissBtn');
const emailInput = document.querySelector('#emailInput');
const submitBtn = document.querySelector('.submitBtn');
const errorMsg = document.querySelector('.erromMsg');

let validInput = true;

emailInput.addEventListener('keydown', e => {
  if (e.code === 'Enter') submit();
});
submitBtn.addEventListener('click', submit);
dismissBtn.addEventListener('click', dismissMsg)

function submit() {
  checkInput(emailInput.value);
  setInvalidStyle();
  if (validInput) submitSuccess();
}

function checkInput(input) {
  const re = new RegExp(/^\S+@\S+\.\S+$/);
  validInput = re.test(input);
}

function setInvalidStyle() {
  errorMsg.classList.toggle('invalid', !validInput);
  emailInput.classList.toggle('invalid', !validInput);
}

function submitSuccess() {
  container.classList.add('hide');
  successMsg.classList.remove('hide');
}

function dismissMsg() {
  container.classList.remove('hide');
  successMsg.classList.add('hide');
}