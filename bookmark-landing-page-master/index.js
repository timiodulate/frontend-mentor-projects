const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navList = document.querySelector('.navListContainer');
const logo = document.getElementById('logo')


bar.addEventListener('click', () => {
  navList.classList.add('goat')
  // console.
});

close.addEventListener('click', () => {
  navList.classList.remove('goat')
})