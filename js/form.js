// const form = document.getElementById('form');
// const firstName = document.getElementById('Firstname');
// const lastName = document.getElementById('Lastname');
// const emailAddress = document.getElementById('Emailaddress');
// const password = document.getElementById('Password');
// const confirmPassword = document.getElementById('password2');



const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailAddressValue = emailAddress.value.trim();
    const password = password.value.trim();
    const confirmPassword = password2.value.trim(); 
}

// ASSIGNMENT (GETTING RESPONSE BY CLICKING THE SUBMIT BTN)
// function checkEmail() {
//     const emailAddress = document.getElementById('Emailaddress').value.trim();
//     const confirmPassword = document.getElementById('password2').value.trim();
//     const password = document.getElementById('Password').value.trim();
//     const firstName = document.getElementById('Firstname').value.trim();
//     const lastName = document.getElementById('Lastname').value.trim(); 
//     const checkedName = /\d/.test(firstName) || /\d/.test(lastName);
    
//     // const checkedLastname = /\d/.test('Lastname');; 
//     let emailPattern = /@./;
//     if (emailPattern.test(emailAddress) && password.length >= 6 && confirmPassword === password && firstName.length >= 6 && lastName.length >= 6 && !checkedName) {
//     alert('Successful');
//     }else{
//     alert('not successful')
//     }

    // }







// ASSIGNMENT (GETTING RESPONSE BY INDIVIDUAL BUTTONS)
function checkNames() {
    const firstName = document.getElementById('Firstname');
    const errorBox = document.getElementsByClassName('error-box');
    if (firstName.value.trim() === '' || firstName.value.trim() == null){  
        firstName.style.border = '1px solid red';
        errorBox[0].innerHTML = 'First Name Is Required';
    }else {
        firstName.style.border = '2px solid green';
        errorBox[0].innerHTML = ''; 
    }
}
function checkLastName(){
    const lastName = document.getElementById('Lastname');
    const errorBox = document.getElementsByClassName('error-box');
    if (lastName.value.trim() === '' || lastName.value.trim() == null){  
        lastName.style.border = '1px solid red';
        errorBox[1].innerHTML = 'Last Name Is Required';
    }else {
        lastName.style.border = '2px solid green';
        errorBox[1].innerHTML = ''; 
    } 
}


function checkMail(){
    const emailAddress = document.getElementById('Emailaddress');
    const errorBox = document.getElementsByClassName('error-box');
    const emailPattern = /@./; 

    if (emailAddress.value.trim() === '' || emailAddress.value.trim() == null){  
        emailAddress.style.border = '1px solid red';
        errorBox[2].innerHTML = 'Email Is Required';
    }else if (!emailPattern.test(emailAddress.value.trim())) {
        emailAddress.style.border = '1px solid red';
        errorBox[2].innerHTML = 'Invalid Email Address';
    }
    else {
        emailAddress.style.border = '2px solid green';
        errorBox[2].innerHTML = ''; 
    } 
}



function checkPassword(){
    const password = document.getElementById('Password');
    const errorBox = document.getElementsByClassName('error-box');
    if (password.value.trim() === '' || password.value.trim() == null){  
        password.style.border = '1px solid red';
        errorBox[3].innerHTML = 'Password is required';
    }else {
        password.style.border = '2px solid green';
        errorBox[3].innerHTML = ''; 
    } 
}


function checkConfirmPassword(){
    const password = document.getElementById('Password');
    const confirmPassword = document.getElementById('password2');
    const errorBox = document.getElementsByClassName('error-box');
    if (confirmPassword.value.trim() === '' || confirmPassword.value.trim() == null) {  
        confirmPassword.style.border = '1px solid red';
        errorBox[4].innerHTML = 'Confirm Password is required';
    }else if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = '1px solid red';
        errorBox[4].innerHTML = 'Password do not match'; 
    } else {
        confirmPassword.style.border ='2px solid green';
        errorBox[4].innerHTML = '';
    }
}



























// function validatePassword() {
//     const password = document.getElementById('Password').value.trim();
//     const confirmPassword = document.getElementById('password2').value.trim();
//     if (password.length === 0 && confirmPassword.length === 0){
//         alert('Input password')
//     }
//     else if (password.length >= 6 && confirmPassword === password) {
        // alert('correct');
    //     }
    //     else{
    //     alert('Password not match')
    //     }
        
    // }
    