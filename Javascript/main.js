const hambuger = document.querySelector('.hambuger-container');
const navbar = document.querySelector('.nav-list-items');

hambuger.addEventListener(('click'), () => {
  hambuger.classList.toggle('active');
  navbar.classList.toggle('action');
});
