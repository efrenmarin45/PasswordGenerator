
//Define variables
let greeting = alert("Welcome to the Password Generator!");
let passLength = prompt ("How long would you like your password to be? For security, please choose from 8 - 128 characters long. (Use only numerical values)");
let userNumChar = prompt ("Would you like to have numbers in your password? Use Y or N");
let userLowChar = prompt ("Would you like to have lowercase characters in your password? Use Y or N");
let userUpChar = prompt ("Would you like to have uppercase characters in your password? Use Y or N");
let userSpecialChar = prompt ("Would you like to have special characters in your password? Use Y or N");
let generatePass = document.querySelector("#generate");
let password = "";

//Array of paramenters
var numChar = (1234567890);
var lowChar = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var upChar = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var specialChar = ('!','@','#','$','%','^','&','*');

// Testing to see that variables are successful
console.log(passLength);
console.log(userSpecialChar);
console.log(userNumChar);
console.log(userLowChar);
console.log(userUpChar);



generatePass.addEventListener("click", function(){
    var password = "";
    var numChar = (1234567890);
    var numCharLength = numChar.length;
    for (var i = 0; i < numChar.length; i++) {
        password += numChar.charAt(Math.floor(Math.random() * numCharLength));
    }
    return this.password;
    }
);    
generatePass.addEventListener("click", function(){
    var password = "";
    var lowChar = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var lowCharLength = lowChar.length;
    for (var i = 0; i < lowChar.length; i++) {
        password += lowChar.charAt(Math.floor(Math.random() * lowCharLength));
    }
    return password;
}
);
generatePass.addEventListener("click", function(){
    var password = "";
    var upChar = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    var upCharLength = upChar.length;
    for (var i = 0; i < upChar.length; i++) {
        password += upChar.charAt(Math.floor(Math.random() * upCharLength));
}
return password;
}
);
generatePass.addEventListener("click", function(){
    var password = "";
    var specialChar = ('!','@','#','$','%','^','&','*');
    var specialCharLength = specialChar.length;
    for (var i = 0; i < specialChar.length; i++) {
        password += specialChar.charAt(Math.floor(Math.random() * specialCharLength));
}
return this.password;
}
);
console.log(this.password);
