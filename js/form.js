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
    const firstName = document.getElementById('Firstname').value.trim();
    const lastName = document.getElementById('Lastname').value.trim(); 
    const checkedName = /\d/.test(firstName) || /\d/.test(lastName);    
    
    if (firstName.length === 0 && lastName.length === 0){
        alert('Name Required')
    }
    else if (emailPattern.test(emailAddress) && firstName.length >= 6 && lastName.length >= 6 && !checkedName) {
        alert('Name is Valid');
    }
    else{
        alert('Please input correct details')
    }
}

function validateMail() {
    const emailAddress = document.getElementById('Emailaddress').value.trim();
    const emailPattern = /@./; 

    if (emailPattern.test(emailAddress)) {
        alert('Email is valid!');
    } else {
        alert('Please enter a valid email address');
    }
}


function validatePassword() {
    const password = document.getElementById('Password').value.trim();
    const confirmPassword = document.getElementById('password2').value.trim();
    if (password.length === 0 && confirmPassword.length === 0){
        alert('Input password')
    }
    else if (password.length >= 6 && confirmPassword === password) {
        alert('correct');
        }
        else{
        alert('Password not match')
        }
        
    }
    