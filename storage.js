const formStorage = document.getElementById('form');
const nameStorage = document.getElementById('name');
const emailStorage = document.getElementById('email');
const messageStorage = document.getElementById('message');

const intoLocalStorage = () => {
  let formObject = {
    name: nameStorage.value,
    email: emailStorage.value,
    message: messageStorage.value,
  };

  const intoString = JSON.stringify(formObject);

  localStorage.setItem('a', intoString);
}

