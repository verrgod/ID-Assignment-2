const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//Modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click event
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if (e.target === modal){
        modal.style.display = 'none';
    }
})

//form validation
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//store sign up values
function storeSignup(){
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    //console.log(localStorage.getItem('email'));
    //console.log(localStorage.getItem('password'));
}

//check sign up values
function checkSignup(){
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    var loginEmail = document.getElementById('login-email');
    var loginPassword = document.getElementById('login-password');

    if (loginEmail.value == storedEmail && loginPassword.value == storedPassword){
        alert('You are logged in');
    } else{
        alert('Wrong');
    }
}

//show error msg
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//valid msg
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//check fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else{
            showValid(input);
        }
    })
}

//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        showValid(input);
    }
}

//check passwords match
function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `Passwords do not match`);
    }
}

//get field name
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, passwordConfirm]);
    checkLength(username, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})

