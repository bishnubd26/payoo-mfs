// console.log('btn clicking file added')

document.getElementById('btn-login').addEventListener('click', function (event) {
  event.preventDefault();
  console.log("login btn clicked")
  
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  if (phoneNumber === '5' && pinNumber === '1234') {
    console.log('You are logged in');
    window.location.href = 'home.html';
  }
  else {
    alert('Wrong phone number or pin');
  }
})