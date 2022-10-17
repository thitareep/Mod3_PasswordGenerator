// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function for password length (between 8-128 characters)//
function generatePassword () {
  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("That is not a valid number")
    return
  }
  
  if (passwordLength < 8|| passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

//Variables for Password Criteria"
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["~","!","@","#","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",":","'",",","<",">",".","/","?"]

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
