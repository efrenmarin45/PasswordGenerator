// Variables
var passField = document.querySelector("#text-field");
var generatePass = document.querySelector("#generate");


//Array to hold user input
var passComponents = [];


generatePass.addEventListener('click', function(){
    var hideButtons = document.getElementById('buttons');
    hideButtons.setAttribute('class', 'hide');

    passLength();
})

function passLength(){
    document.getElementById('text-field').innerText = 'Please choose a password length between 1-128 characters';
    var passLengthInput = document.createElement('textarea');
    var nextBtn = document.createElement('button');

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
        var userLength = passLengthInput.value;
        passComponents.push(userLength);
        console.log(passComponents);
    })
}

