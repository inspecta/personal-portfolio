/* eslint-disable linebreak-style */
const form = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorMsg = document.getElementById('errorMsg');

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

fname.addEventListener('input', () => {
  if (fname.value.length < 30) {
    errorName.textContent = '';
  } else {
    errorName.textContent = 'Name should be less than 30 characters.';
  }
});

email.addEventListener('input', () => {
  if (email.value === email.value.toLowerCase()) {
    errorEmail.textContent = '';
  } else {
    errorEmail.textContent = 'Email Address should not have uppercase letters.';
  }

  if (!emailRegex.test(email.value)) {
    errorEmail.textContent = 'Invalid Email Address';
  }
});

message.addEventListener('input', () => {
  if (message.value.length < 10) {
    errorMsg.textContent = 'Message should have more 10 characters.';
  } else {
    errorMsg.textContent = '';
  }

  if (message.value.length > 400) {
    errorMsg.textContent = 'Message should not exceed 400 characters.';
  }
});
