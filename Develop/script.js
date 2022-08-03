// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*~+-()"


// Write password to the #password input
function writePassword() {

  var lowerA = confirm("Include lower case letters?");
  var upperA = confirm("Include upper case letters?");
  var numberA = confirm("Include numbers?");
  var specialA = confirm("Include special characters?");

  while (lowerA === false && upperA === false && numberA === false && specialA === false) {
    alert ("Must include at least one character field")
    var lowerA = confirm("Include lower case letters?");
    var upperA = confirm("Include upper case letters?");
    var numberA = confirm("Include numbers?");
    var specialA = confirm("Include special characters?");

  }


var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(lower, upper, number, special) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


