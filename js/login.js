// console.log('button clicking file added')

// search: form submit reloading the page

// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
  // step-2: prevent default behavior (prevent reloading browser)
  event.preventDefault();

  // step-3 get the number
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  if (phoneNumber === '5' && pinNumber === '1234') {
    console.log('You are logged in')
    window.location.href = 'home.html';
  }
  else {
    alert('Wrong phone number or pin');
  }
})