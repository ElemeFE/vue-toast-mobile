import Toast from '../src/index.js';
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  Toast('toast test');
});
