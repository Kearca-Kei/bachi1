console.log('Hello!');
// JS: Just toggles a class on click
const menuHeader = document.querySelector('.menu-header');
menuHeader.addEventListener('click', () => {
  menuHeader.classList.toggle('open');
});