const passwordBox = document.getElementById("password");
const btn_generator = document.getElementById("btn-generator");
const btn_copy = document.getElementById("copyPass");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = '!@#$%^&*()_+{}:"?></';
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let pass = "";
  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pass += number[Math.floor(Math.random() * number.length)];
  pass += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > pass.length) {
    pass += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = pass;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

btn_copy.addEventListener("click", copyPassword);
btn_generator.addEventListener("click", createPassword);
