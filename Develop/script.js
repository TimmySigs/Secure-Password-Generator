// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "~`!@#$%^&*()-_=+"


// Write password to the #password input
function writePassword() {

  var lowerA = confirm("Include lower case letters?");
  var upperA = confirm("Include upper case letters?");
  var numberA = confirm("Include numbers?");
  var specialA = confirm("Include special characters?");

  while (lowerA === false && upperA === false && numberA === false && specialA === false) {
    alert ("Must include at least one character field");
    var lowerA = confirm("Include lower case letters?");
    var upperA = confirm("Include upper case letters?");
    var numberA = confirm("Include numbers?");
    var specialA = confirm("Include special characters?");

  }

  var passwordLength = (prompt("How many characters would you like to use (8-128)"));

  while (passwordLength <=7 || passwordLength >= 129) {
    alert("Password must be between 8 to 128 characters")
    var passwordLength = (prompt("How many characters would you like to use 8-128"));
  }

var passwordString = "";
var gtdchar = "";

if (lowerA) {
  passwordString += lower;
  gtdchar += lower.charAt(Math.floor(Math.random() * lower.length)) 
}
if (upperA) {
  passwordString += upper;
  gtdchar += upper.charAt(Math.floor(Math.random() * upper.length ))
}
if (numberA) {
  passwordString += number;
  gtdchar += number.charAt(Math.floor(Math.random() * number.length ))
}
if (specialA) {
  passwordString += special;
  gtdchar += special.charAt(Math.floor(Math.random() * special.length ))
}
console.log(gtdchar);

var newPassword = "";

for (var i = 1; i <= passwordLength; i++) {
  newPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
}

var passArr = newPassword.split("")
var gtdArr = gtdchar.split("")


for (var i = 0; i < gtdArr.length; i++) {
  passArr[i] = gtdArr[i]
}

var finalPassword = passArr.join("")

// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = finalPassword;


console.log(newPassword)
console.log(passwordString);




  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


