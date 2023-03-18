

// Assignment Code
var specialCharactersArr = ['!','"','#','$','%','&','\'','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// This function choses the criteria for our random code
function passWordCriteria (){
var passwordlength = prompt("What length would you like your password to be? Choose a number between 8-128")
while (isNaN(passwordlength)|| passwordlength<8 || passwordlength>128) {
  passwordlength = prompt(`You chose "${passwordlength}"! Please try again! Choose a number with a length of at least 8 characters and no more than 128 characters`)
  
}
var specialCharactersType = confirm("Would you like the password to contain Special Characters? Example(? ,! , #, etc...)")
var numberType = confirm("Would you like the password to contain numbers? Example(0-9)")
var lowerCaseType =confirm("Would you like the password to contain lower case letters? Example(a,b,c,d, etc...)")
var upperCaseType = confirm("Would you like the password to contain upper case letters? Example( A,B,C,D, etc ...")

if (!(specialCharactersType || numberType || lowerCaseType || upperCaseType)) {
  alert("You must select at least one character type!");
  return passWordCriteria();
}

var typeSelection = {
  length: passwordlength,
  itsSpecial : specialCharactersType,
  itsNumber : numberType,
  itsLower : lowerCaseType,
  itsUpper : upperCaseType
}

return typeSelection;
}
// this function generates our password based on the criteria that we chose!
function generatePassword(){
  var typeSelection = passWordCriteria();
  var possibleTypes = [];
  var password = "";
  if(typeSelection.itsSpecial){
    possibleTypes.push(...specialCharactersArr)
  }
  if (typeSelection.itsNumber){
    possibleTypes.push(...numberArr)
  }
  if(typeSelection.itsLower){
    possibleTypes.push(...lowerCaseArr)
  }
  if (typeSelection.itsUpper){
    possibleTypes.push(...upperCaseArr)
  }
  for(var i =0; i <typeSelection.length; i++){
    password += possibleTypes[Math.floor(Math.random()* possibleTypes.length)]
  }
  console.log(password);
  console.log(possibleTypes);
console.log(typeSelection);
return password

}
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
