let specialChar = document.getElementById("#pw-requirement1");
let numChar = document.getElementById("#pw-requirement2");
let lowChar = document.getElementById("#pw-requirement3");
let upChar = document.getElementById("#pw-requirement4");
let optionBox = document.getElementById("#check-box")
let parameterOptions = optionBox.getElementsByTagName('input');
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let digits = '1234567890';
let generatePass = document.getElementById("#generate");
let copyPass = document.getElementById("#copy");
let stringLength = 8;

// Testing to see that variables are successful
console.log(specialChar);
console.log(numChar);
console.log(lowChar);
console.log(upChar);
console.log(chars);
console.log(digits);
console.log(generatePass);
console.log(copyPass);
console.log(stringLength);

for (var i=0, len=parameterOptions.length; i < len; i++) {
    if (parameterOptions === 'checkbox')
}








generatePass.addEventListener("click", function() {
    if (specialChar.checked)
         

} );
