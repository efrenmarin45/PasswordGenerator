// Variables
let passField = document.querySelector("#text-field");
let generatePass = document.querySelector("#generate");
let redoPass = document.querySelector("#redo");
let PasswordCopy = document.getElementById('copy');
let modal = document.getElementById("copyModal");
let span = document.getElementsByClassName("close")[0];



//Array to hold user input
let passComponents = [];


//Password components
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let specialchar = '?@*$%^&#()!';


//Custom mixed password components
let allYes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?@*$%^&#()!';
let specialNumUp = '?@*$%^&#()!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialNumLo = '?@*$%^&#()!0123456789abcdefghijklmnopqrstuvwxyz';
let specialNum = '?@*$%^&#()!0123456789';
let specialUp = '?@*$%^&#()!ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialLo = '?@*$%^&#()!abcdefghijklmnopqrstuvwxyz';
let numUpLo = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let numUp = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numLo = '0123456789abcdefghijklmnopqrstuvwxyz';
let upLo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';



//Hides initial screen when user clicks on Generate Password
generatePass.addEventListener('click', function(){
    let hideButtons = document.getElementById('buttons');
    hideButtons.setAttribute('class', 'hide');

    passLength();
})


//Resets the array
function freshPass(){
    return passComponents = [];
}



function passLength(){
    document.getElementById('text-field').innerText = 'Please choose a password length between 1-45 characters';
    let passLengthInput = document.createElement('textarea');
    let nextBtn = document.createElement('button');

    passLengthInput.name = 'length';
    passLengthInput.maxLength = '2';
    passLengthInput.cols = '5';
    passLengthInput.rows = '5';

    passLengthInput.setAttribute('id', 'passLengthInput');
    nextBtn.setAttribute('id','nextBtn');
    nextBtn.innerHTML = 'Next';

    passField.appendChild(passLengthInput);
    passField.appendChild(nextBtn);

    document.getElementById('nextBtn').addEventListener('click', function(){
        let userLength = passLengthInput.value;
        passComponents.push(userLength);
        console.log(passComponents);

        specialPass();
    })
}



function specialPass(){

    //Asking user if they would like Special Characters in their password
    document.getElementById('text-field').innerText = 'Would you like to use special characters?';
    let nextBtn = document.createElement('button');

    //Yes Radio Option
    let passSpecialInput = document.createElement('input');
    passSpecialInput.setAttribute('type', 'radio');
    passSpecialInput.setAttribute('id', 'passSpecialYes');
    passSpecialInput.setAttribute('value', 'Yes');
    passSpecialInput.setAttribute('name', 'choice');
    let passSpecialLabel = document.createElement('label');
    passSpecialLabel.innerHTML = 'Yes';
    passField.appendChild(passSpecialLabel);
    passField.appendChild(passSpecialInput);

    //No Radio Option
    let passSpecialInputNo = document.createElement('input');
    passSpecialInputNo.setAttribute('type', 'radio');
    passSpecialInputNo.setAttribute('id', 'passSpecialNo');
    passSpecialInputNo.setAttribute('value', 'No');
    passSpecialInputNo.setAttribute('name', 'choice');
    let passSpecialLabelNo = document.createElement('label');
    passSpecialLabelNo.innerHTML = 'No';
    passField.appendChild(passSpecialLabelNo);
    passField.appendChild(passSpecialInputNo);


    nextBtn.setAttribute('id','nextBtn');
    nextBtn.innerHTML = 'Next';

    passField.appendChild(nextBtn);

    document.getElementById('nextBtn').addEventListener('click', function(){
        let userSpecial = document.querySelector('input[name="choice"]:checked').value;
        passComponents.push(userSpecial);
        console.log(passComponents);

        numberPass();
    })
}



function numberPass(){

    //Asking user if they would like numbers in their password
    document.getElementById('text-field').innerText = 'Would you like to use numbers in your password?';
    let nextBtn = document.createElement('button');

    //Yes Radio Option
    let passNumInput = document.createElement('input');
    passNumInput.setAttribute('type', 'radio');
    passNumInput.setAttribute('id', 'passNumYes');
    passNumInput.setAttribute('value', 'Yes');
    passNumInput.setAttribute('name', 'choice');
    let passNumLabel = document.createElement('label');
    passNumLabel.innerHTML = 'Yes';
    passField.appendChild(passNumLabel);
    passField.appendChild(passNumInput);

    //No Radio Option
    let passNumInputNo = document.createElement('input');
    passNumInputNo.setAttribute('type', 'radio');
    passNumInputNo.setAttribute('id', 'passNumNo');
    passNumInputNo.setAttribute('value', 'No');
    passNumInputNo.setAttribute('name', 'choice');
    let passNumLabelNo = document.createElement('label');
    passNumLabelNo.innerHTML = 'No';
    passField.appendChild(passNumLabelNo);
    passField.appendChild(passNumInputNo);

    nextBtn.setAttribute('id','nextBtn');
    nextBtn.innerHTML = 'Next';

    passField.appendChild(nextBtn);

    document.getElementById('nextBtn').addEventListener('click', function(){
        let userNum = document.querySelector('input[name="choice"]:checked').value;
        passComponents.push(userNum);
        console.log(passComponents);

        lowerPass();
    })
}



function lowerPass() {
    document.getElementById('text-field').innerText = 'Would you like to use lowercase letters?';
    let nextBtn = document.createElement('button');

    //Yes Radio Option
    let passLowInput = document.createElement('input');
    passLowInput.setAttribute('type', 'radio');
    passLowInput.setAttribute('id', 'passLowYes');
    passLowInput.setAttribute('value', 'Yes');
    passLowInput.setAttribute('name', 'choice');
    let passLowLabel = document.createElement('label');
    passLowLabel.innerHTML = 'Yes';
    passField.appendChild(passLowLabel);
    passField.appendChild(passLowInput);

    //No Radio Option
    let passLowInputNo = document.createElement('input');
    passLowInputNo.setAttribute('type', 'radio');
    passLowInputNo.setAttribute('id', 'passLowNo');
    passLowInputNo.setAttribute('value', 'No');
    passLowInputNo.setAttribute('name', 'choice');
    let passLowLabelNo = document.createElement('label');
    passLowLabelNo.innerHTML = 'No';
    passField.appendChild(passLowLabelNo);
    passField.appendChild(passLowInputNo);

    nextBtn.setAttribute('id','nextBtn');
    nextBtn.innerHTML = 'Next';

    passField.appendChild(nextBtn);

    document.getElementById('nextBtn').addEventListener('click', function(){
        let userLow = document.querySelector('input[name="choice"]:checked').value;
        passComponents.push(userLow);
        console.log(passComponents);

        upperPass();
    })
}



function upperPass() {
    document.getElementById('text-field').innerText = 'Would you like to use uppercase letters?';
    let nextBtn = document.createElement('button');

    //Yes Radio Option
    let passHiInput = document.createElement('input');
    passHiInput.setAttribute('type', 'radio');
    passHiInput.setAttribute('id', 'passHiYes');
    passHiInput.setAttribute('value', 'Yes');
    passHiInput.setAttribute('name', 'choice');
    let passHiLabel = document.createElement('label');
    passHiLabel.innerHTML = 'Yes';
    passField.appendChild(passHiLabel);
    passField.appendChild(passHiInput);

    //No Radio Option
    let passHiInputNo = document.createElement('input');
    passHiInputNo.setAttribute('type', 'radio');
    passHiInputNo.setAttribute('id', 'passHiNo');
    passHiInputNo.setAttribute('value', 'No');
    passHiInputNo.setAttribute('name', 'choice');
    let passHiLabelNo = document.createElement('label');
    passHiLabelNo.innerHTML = 'No';
    passField.appendChild(passHiLabelNo);
    passField.appendChild(passHiInputNo);

    nextBtn.setAttribute('id','nextBtn');
    nextBtn.innerHTML = 'Next';

    passField.appendChild(nextBtn);

    document.getElementById('nextBtn').addEventListener('click', function(){
        let userHi = document.querySelector('input[name="choice"]:checked').value;
        passComponents.push(userHi);
        console.log(passComponents);

        createPass();
    })
}



function createPass(){
    let password = '';
    let passwordLength = parseInt(passComponents[0]);

    for(let i=0; i < passwordLength; i++){
        if(passComponents[1] === 'Yes' && passComponents[2] === 'Yes' && passComponents[3] === 'Yes' && passComponents[4] === 'Yes'){
            password += allYes[Math.floor(Math.random() * allYes.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'Yes' && passComponents[2] === 'Yes' && passComponents[3] === 'Yes' && passComponents[4] === 'No'){
            password += specialNumLo[Math.floor(Math.random() * specialNumLo.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'Yes' && passComponents[2] === 'No' && passComponents[3] === 'Yes' && passComponents[4] === 'No'){
            password += specialLo[Math.floor(Math.random() * specialLo.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'Yes' && passComponents[2] === 'No' && passComponents[3] === 'No' && passComponents[4] === 'Yes'){
            password += specialUp[Math.floor(Math.random() * specialUp.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'Yes' && passComponents[2] === 'Yes' && passComponents[3] === 'No' && passComponents[4] === 'No'){
            password += specialNum[Math.floor(Math.random() * specialNum.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'Yes' && passComponents[2] === 'No' && passComponents[3] === 'No' && passComponents[4] === 'No'){
            password += specialchar[Math.floor(Math.random() * specialchar.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'Yes' && passComponents[3] === 'Yes' && passComponents[4] === 'Yes'){
            password += numUpLo[Math.floor(Math.random() * numUpLo.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'Yes' && passComponents[3] === 'Yes' && passComponents[4] === 'No'){
            password += numLo[Math.floor(Math.random() * numLo.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'Yes' && passComponents[3] === 'No' && passComponents[4] === 'Yes'){
            password += numUp[Math.floor(Math.random() * numUp.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'No' && passComponents[3] === 'Yes' && passComponents[4] === 'Yes'){
            password += upLo[Math.floor(Math.random() * upLo.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'Yes' && passComponents[2] === 'Yes' && passComponents[3] === 'No' && passComponents[4] === 'Yes'){
            password += specialNumUp[Math.floor(Math.random() * specialNumUp.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'Yes' && passComponents[3] === 'No' && passComponents[4] === 'No'){
            password += numbers[Math.floor(Math.random() * numbers.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'No' && passComponents[3] === 'No' && passComponents[4] === 'Yes'){
            password += lowercase[Math.floor(Math.random() * lowercase.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else if(passComponents[1] === 'No' && passComponents[2] === 'No' && passComponents[3] === 'Yes' && passComponents[4] === 'No'){
            password += uppercase[Math.floor(Math.random() * uppercase.length)]; 
            let result = document.getElementById('text-field');
            result.innerHTML = password;

        }else {
            let error = document.getElementById('text-field');
            error.innerHTML = "Matrix Error: You must pick at least one option to continue. Don't worry it's not like we're offering a red or blue pill.";
        }
    }

    let redoBtn = document.createElement('button');
    let copyBtn = document.createElement('button');

    redoBtn.setAttribute('id', 'redo');
    redoBtn.innerHTML = 'Redo Password';
    passField.appendChild(redoBtn);

    copyBtn.setAttribute('id', 'copy')
    copyBtn.innerHTML = 'Copy to Clipboard';
    passField.appendChild(copyBtn);

    copyBtn.onclick = function() {
    modal.style.display = "block";
    }
  
    span.onclick = function() {
    modal.style.display = "none";
    }
  
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      }
    }

    // copyPass();

    redoBtn.addEventListener('click', function(){
        freshPass();
        passLength();
    })
}

// function copyPass() {
//     let copyText = document.getElementById("text-field");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//   }