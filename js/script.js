// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active');
};


// menghilangkan side bar diklik luar
const menu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
   if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
   }
})