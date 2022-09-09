const hamburger = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.getElementById('menu-overlay');
const entireOver = document.querySelector('.mobile-menu');

const displayMenuList = () => {
  hamburger.style.display = 'none';
  menuOverlay.style.display = 'block';
  entireOver.style.display = 'block';
  menuClose.style.display = 'block';
};

const closeMenuList = () => {
  menuOverlay.style.display = 'none';
  hamburger.style.display = 'block';
  entireOver.style.display = 'none';
  menuClose.style.display = 'none';
};

hamburger.addEventListener('click', displayMenuList);
menuClose.addEventListener('click', closeMenuList);

document.querySelectorAll('.menu-item-list').forEach((n) => {
  n.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
    hamburger.style.display = 'block';
    menuClose.style.display = 'none';
    entireOver.style.display = 'none';
  });
});
