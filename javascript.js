var passField = document.querySelector("#text-field");
var generatePass = document.querySelector("#generate");

generatePass.addEventListener('click', function(){
    var startPass = document.getElementById('text-field');
    startPass.setAttribute('class', 'hide');

    var hideButtons = document.getElementById('buttons');
    hideButtons.setAttribute('class', 'hide');
})