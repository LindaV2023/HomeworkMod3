// Assignment code here

//var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
////var upperCaseArr = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
//var specailCharArr = ["!", "@", "#", "%", "^", "&", "*", "(", ")"];
//var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//var passwordLength = "i>=8, i <= 129";
//var password = "";

// variables

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacter = "!@#$%^&*";
var passwordLength = "i >= 8, i <= 129";
// var finalPassword = "";
var myChoice = [];
////var possibleChoice = "";
var password = "";
//var MinimumLength = 8;
//var MaximumLength = 128;
//}

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = prompt("How many characters do you want in your password? Please choose between 8 and 129");

  if (passwordLength < 8 || passwordLength > 129) {
  //  passwordLength = prompt("Please enter a password length of between 8 and 128 characters.");
  alert ("Please enter a number between 8 and 128")
  generatePassword ()
   return 
   }
  //  else {
  //alert("Password length is " + passwordLength + "characters."); 

  var lowerCaseArr = confirm("Do you want lowercases in your password?");
  var upperCaseArr = confirm("Do you want uppercases in your password?");
  var numberArr = confirm("Do you want numbers in your password?");
  var specialCharactersArr = confirm("Do you want special characters in your password?");

//}


////Leave the above code alone

if (lowerCaseArr) {myChoice += lowerCase};
if (upperCaseArr) {myChoice += upperCase};
if (numberArr) {myChoice += number};
if (specialCharactersArr) {myChoice += specialCharacter};

let finalPassword = ""
for (let i = 0; i < passwordLength; i++) {
  let rng =[Math.floor(Math.random() * myChoice.length)];
  finalPassword = finalPassword + myChoice[rng];
}
return finalPassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }

generateBtn.addEventListener("click", writePassword)
// }

// //code to concat the information above
// var possibleChoice = "";

// if (lowerCase) {
//   console.log(lowerCase)
//   possibleChoice = possibleChoice.concat(lowerCase);
// }

// if (upperCase) {
//   console.log(upperCase)
//   possibleChoice = possibleChoice.concat(upperCase);
// }

// if (number) {
//   console.log(number)
//   possibleChoice = possibleChoice.concat(number);
// }

// if (specialCharacter) {
//   console.log(specialCharacter)
//   possibleChoice = possibleChoice.concat(specialCharacter);
// }

// //for loop - will run till random number length is met
// var password = "";
// for (var i = 0; i < passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * possibleChoice.length);
//   //password += possibleChoice.substring(randomNumber, randomNumber + 1);
//   password += possibleChoice[randomNumber]
// }
// return password 




//for (var i = 0; i <= passwordLength; i++) {
//var randomNumber = Math.floor(Math.random() * lowerCase.length);
//  password += chars.substring(randomNumber, randomNumber +1);

// }

//return finalPassword;

////Leave the below code alone
// document.getElementById("password").value = password;




// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)