// Variables
let passField = document.querySelector("#text-field");
let generatePass = document.querySelector("#generate");


//Array to hold user input
let passComponents = [];


generatePass.addEventListener('click', function(){
    let hideButtons = document.getElementById('buttons');
    hideButtons.setAttribute('class', 'hide');

    passLength();
})

function passLength(){
    document.getElementById('text-field').innerText = 'Please choose a password length between 1-128 characters';
    let passLengthInput = document.createElement('textarea');
    let nextBtn = document.createElement('button');

    passLengthInput.name = 'length';
    passLengthInput.maxLength = '3';
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
    passNumInput.setAttribute('id', 'passSpecialYes');
    passNumInput.setAttribute('value', 'Yes');
    passNumInput.setAttribute('name', 'choice');
    let passNumLabel = document.createElement('label');
    passNumLabel.innerHTML = 'Yes';
    passField.appendChild(passNumLabel);
    passField.appendChild(passNumInput);

    //No Radio Option
    let passNumInputNo = document.createElement('input');
    passNumInputNo.setAttribute('type', 'radio');
    passNumInputNo.setAttribute('id', 'passSpecialNo');
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
    })
}