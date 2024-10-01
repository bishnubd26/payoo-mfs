// console.log('button clicking file added')

// search: form submit reloading the page

// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
  // step-2: prevent default behavior (prevent reloading browser)
  event.preventDefault();

  // step-3 get the number
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber)
})