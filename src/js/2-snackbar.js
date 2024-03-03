'use strict';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

{
  document
    .querySelector('.form')
    // .getElementsByClassName('form')[0]
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const state = document.querySelector('input[name="state"]:checked').value;
      const delay = parseInt(document.getElementById('inputDelay').value);

      const promise = new Promise((resolve, reject) => {
        switch (state) {
          case 'fulfilled':
            setTimeout(() => {
              resolve(delay);
            }, delay);
            break;
          case 'rejected':
            setTimeout(() => {
              reject(delay);
            }, delay);
            break;
        }
      });

      promise
        .then(delay => {
          let message = `${capitalizeWords(state)} promises in ${delay}ms`;
          console.log(message);
          iziToast.success({
            message: message,
            position: 'topRight',
            timeout: 2000,
          });
        })
        .catch(delay => {
          let message = `${capitalizeWords(state)} promises in ${delay}ms`;
          console.log(message);
          iziToast.warning({
            message: message,
            position: 'topRight',
            timeout: 2000,
          });
        });
    });

  function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      return `${word.charAt(0).toUpperCase()} ${word.slice(1)}`;
    });
    return capitalizedWords.join(' ');
  }
}
console.log('2-snackbar.js - loaded');
