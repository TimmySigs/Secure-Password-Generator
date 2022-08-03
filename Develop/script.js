// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()"


// Write password to the #password input
function writePassword() {

  var lower = confirm("Include lower case letters?");
  var upper = confirm("Include upper case letters?");
  var number = confirm("Include numbers?");
  var special = confirm("Include special characters?");


var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(lower, upper, number, special) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


