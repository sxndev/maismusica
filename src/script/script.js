const buttonContainer = document.getElementsByClassName('burguer-btn-content')[0];
const nav = document.getElementsByTagName('nav')[0];

buttonContainer.addEventListener('click', () => { nav.classList.toggle('menu-active') }); 