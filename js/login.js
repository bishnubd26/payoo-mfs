// console.log('btn clicking file added')

document.getElementById('btn-login').addEventListener('click', function (event) {
  event.preventDefault();
  console.log("login btn clicked")
  
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
})