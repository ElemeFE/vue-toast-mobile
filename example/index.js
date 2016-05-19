import Toast from '../src/index.js';
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  Toast({
    message: 'upload complete',
    position: 'bottom',
    iconClass: 'd-icon-success',
    duration: 5000
  });
});
