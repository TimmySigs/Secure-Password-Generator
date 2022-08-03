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

  var passwordLength = (prompt("How many characters would you like to use (8-128)"));

  while (passwordLength <=9 || >= 129) {
    alert("Password must be between 8 to 128 characters")
    var passwordLength = (prompt("How many characters would you like to use (8-128)"));
  }

var passwordString = "";

if (lowerA) {
  passwordString += lower;
}
if (upperA) {
  passwordString += upper;
}
if (numberA) {
  passwordString += number;
}
if (specialA) {
  passwordString += special;
}

var newPassword = "";

for (var i =1; <= passwordLength; i++) {
  newPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
}

passwordText.value = newPassword;

// var password = generatePassword();
// var passwordText = document.querySelector("#password");

//   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


