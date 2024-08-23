// regex for email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// regex for number: /^\d/ between 0-9;

// let btn_submit = document.querySelector('.btn-submit').addEventListener('submit', () => {
//   alert('btn clicked')
// });

const isQuerySelected = false;
const isContentChecked = false;

function validateform(event){
  event.preventDefault();

  const errors = document.querySelectorAll('.error');
  const inputs = document.querySelectorAll('input'); //the querySelectorAll is used to loop through each items it calls
  let textArea = document.querySelector('.text');
  errors.forEach((error)=> error.textContent = '');
  inputs.forEach((input)=> input.classList.remove('invalid'));
  textArea.classList.remove('invalid')
  let isvalid = false;

  // firstName Validation
  const firstName = document.querySelector('.first-Name');
  const firstNameErr = document.querySelector('.firstNameErr');

  //  .value is used to access teh user input value.
  // alert(firstName.value);

  if(firstName.value.trim() == ''){
    firstNameErr.textContent = 'This field is required';
    firstName.classList.add('invalid');
    isvalid = true;
  }else if(/^\d/.test(firstName.value.trim())){
    firstNameErr.textContent = 'Firstname should not start with a number';
    firstName.classList.add('invalid');
    isvalid = true;
  }


  // Lastname validation 
  const lastName = document.querySelector('.last-name');
  const lastNameErr = document.querySelector('.lastNameErr');

  if(lastName.value.trim() == ''){
    lastNameErr.textContent = 'This field is required';
    lastName.classList.add('invalid');
    isvalid = true;
  }else if(/^\d/.test(lastName.value.trim())){
    lastNameErr.textContent = 'Lastname should not start with a number';
    lastName.classList.add('invalid');
    isvalid = true;
  }

  // Email validation

  const email = document.querySelector('.email');
  const emailErr = document.querySelector('.emailErr');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if(email.value.trim() == ''){
    emailErr.textContent = 'This field is required';
    email.classList.add('invalid');
    isvalid = true;
  }else if(!emailRegex.test(email.value.trim())){
    emailErr.textContent = 'Please add a valid email address';
    email.classList.add('invalid');
    isvalid = true;
  }

  // Query validation
  if(!isQuerySelected){
    queryErr.textContent = 'Please select a query type';
  }

  // Textarea validation
  const textarea = document.querySelector('#textarea');
  const textAreaErr = document.querySelector('.textAreaErr');

  if(textarea.value == ''){
    textAreaErr.textContent = 'This field is required';
    textarea.classList.add('invalid');
    isvalid = true;
  }


  // Validate checkbox
  if(!isContentChecked){
    checkErr.textContent = 'TTo submit this form, please consent to being contacted';
    isvalid = true;
  }
}

const query1 = document.querySelector('.query1');
const query2 = document.querySelector('.query2');
const queryErr = document.querySelector('.queryErr');
const genimg = document.querySelector('.img-gen');
const supimg = document.querySelector('.img-sup');

query1.addEventListener('click', () => {
  query1.classList.add('selected');
  genimg.style.display = 'block';
  query2.classList.remove('selected');
  supimg.style.display = 'none';
  isQuerySelected = true
});

query2.addEventListener('click', () => {
  query2.classList.add('selected');
  supimg.style.display = 'block';
  query1.classList.remove('selected');
  genimg.style.display = 'none';
  isQuerySelected = true
});


const checkContent = document.querySelector('.check-container');
const checkImg = document.querySelector('.check-container > span > img');
const checkErr = document.querySelector('.checkErr')
checkContent.addEventListener('click', () =>{
  if(checkImg.style.display == 'block' ){
    checkImg.style.display = 'none';
    checkErr.style.display = 'block'
  }else{
    checkImg.style.display = 'block';
    checkErr.style.display = 'none'
  }
  
})




// if(lastName.value.trim() == '' || firstName.value.trim() == ''){
//     lastNameErr.textContent = 'This field is required';
//     lastName.classList.add('invalid');
//     isvalid = true;
//     firstNameErr.textContent = 'This field is required';
//     firstName.classList.add('invalid');
//     isvalid = true;
// }