// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria stored in an obj
let pass = {
  passLength: 0,
  upper: false,
  lower: false,
  numeric: false,
  special: false,
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  uniqueChar: ` !"#$%'()*+,-./:;<=>?@[]^_{|}~`
}

// Makes sure user entered value for password length is a number and between 8 to 128
function validatePasswordLength() {
  let toContinue = true;
  while (toContinue) {
    try {
      pass.passLength = parseInt(window.prompt("Please enter a value for your password length. It must be a number and the value should be between 8 and 128."));
    } catch (error) {
      // Ignore
    }

    if (pass.passLength && (pass.passLength >= 8 && pass.passLength <= 128)){
      toContinue = false;
    }
  } 
}

// function validatePrompts() {
//   while (pass.upper && )
// }

// Updates pass criteria based off of User's choices
function gatherInfo() {
  validatePasswordLength();
  pass.upper = window.confirm("Should it contain uppercase letters?");
  pass.lower = window.confirm("Should it contain lower case letters?");
  pass.numeric = window.confirm("Should it contain numeric values?");
  pass.special = window.confirm("Should it contain special characters?")
}

// Creates the password based off of the information from 'gatherInfo()'
function generatePassword(){
  let password = '';
  let iterator = 1;
  while (iterator <= pass.passLength){
    if (pass.upper & iterator <= pass.passLength){
      password += pass.alphabet[Math.floor(Math.random() * pass.alphabet.length)].toUpperCase();
      iterator++;
    }
    if (pass.lower & iterator <= pass.passLength){
      password += pass.alphabet[Math.floor(Math.random() * pass.alphabet.length)];
      iterator++;
    }
    if (pass.numeric & iterator <= pass.passLength){
      password += pass.numbers[Math.floor(Math.random() * pass.numbers.length)];
      iterator++;
    }
    if (pass.special & iterator <= pass.passLength){
      password += pass.uniqueChar[Math.floor(Math.random() * pass.uniqueChar.length)];
      iterator++
    }
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  gatherInfo();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
