const button = document.querySelector('button');
const form = document.querySelector('#poisk');

button.addEventListener('click', () => {
  form.classList.add('open');
});