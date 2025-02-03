console.log('Jai Shree Radhey');

const passwordBox = document.getElementById('password');
const button = document.querySelector('.container button');
console.log(button);
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+~/*?><|';
const allChars = upperCase + lowerCase + symbol + number;

function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;

}

function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
  alert("Password is copied")
}

// button.addEventListener('click', createPassword);
