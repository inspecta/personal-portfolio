const hamburger = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.getElementById('menu-overlay');

const displayMenuList = () => {
  hamburger.style.display = 'none';
  menuOverlay.style.display = 'block';
};

const closeMenuList = () => {
  menuOverlay.style.display = 'none';
  hamburger.style.display = 'block';
};

hamburger.addEventListener('click', displayMenuList);
menuClose.addEventListener('click', closeMenuList);

document.querySelectorAll('.menu-item-list').forEach((n) => {
  n.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
    hamburger.style.display = 'block';
  });
});
