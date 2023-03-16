const data={
    name: "",
    surname: "",
    email: "",
    password: ""
}
//Select id to listen
const name_Input = document.querySelector('#name');
const surname_Input = document.querySelector('#surname');
const email_Input = document.querySelector('#email');
const password_Input = document.querySelector('#password');

//Select id to edit
const name_field = document.querySelector('#name_field');
const surname_field = document.querySelector('#surname_field');
const email_field = document.querySelector('#email_field');
const password_field = document.querySelector('#password_field');


//Read the input
name_Input.addEventListener('input', readText);
surname_Input.addEventListener('input', readText);
email_Input.addEventListener('input', readText);
password_field.addEventListener('input', readText);

function readText(event){
    // console.log(event);
    data[event.target.id] = event.target.value; // data={name: Jacob}
}

//Select form
const form = document.querySelector('.form');

//wait for submit button
form.addEventListener('submit', function(event){
    event.preventDefault();

    //Validate the form
    const {name, surname, email, password} = data;
    const at =  email.lastIndexOf('@');
    const dot = email.lastIndexOf('.');
    
    if(name === ''){
        showAlert('First Name cannot be empty', name_field, name_Input);
    }
    if(surname === ''){
        showAlert('Last Name cannot be empty', surname_field, surname_Input);
    }

    if(email === ''){
        showAlert('Email cannot be empty', email_field, email_Input);
    }else if( at <= 0 || dot < (at + 1) || dot >= (email.length - 1) ){
        showError('Looks like this is not an email');
    }
    if(password === ''){
        showAlert('Password cannot be empty', password_field,  password_Input);
    }
});
function showAlert(error, field, input){
    //create the alert
    const alert = document.createElement('P');
    alert.textContent=error;
    alert.classList.add('error_text');
    input.classList.add('error_icon');
    field.appendChild(alert);
    //removing alert
    setTimeout(() => {
        alert.remove();
        input.classList.remove('error_icon');
    }, 3000);
}

function showError(error){
    
     //create the alert
     const alert = document.createElement('P');
     alert.textContent=error;
     alert.classList.add('error_text');
     email_Input.classList.add('error_icon');
     email_Input.classList.add('error_email');
     email_field.appendChild(alert);
     
     //removing alert
     setTimeout(() => {
         alert.remove();
         email_Input.classList.remove('error_icon');
         email_Input.classList.remove('error_email');
     }, 3000);
}
