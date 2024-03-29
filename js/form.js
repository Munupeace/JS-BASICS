const form = document.getElementById('form');
const firstName = document.getElementById('Firstname');
const lastName = document.getElementById('Lastname');
const emailAddress = document.getElementById('Emailaddress');
const password = document.getElementById('Password');
const confirmPassword = document.getElementById('password2');



const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailAddressValue = emailAddress.value.trim();
    const password = emailAddress.value.trim();
    const confirmPassword = password2.value.trim(); 
}



function checkEmail() {
        // const emailAddress= prompt('Please input your email');
        const emailAddress = document.getElementById('Emailaddress');
        let emailPattern = /@./;
        if (emailPattern.test(emailAddress)) {
            alert('Successful');
        }else{
            alert('Incorrect email address')
        }
    }
    checkEmail();