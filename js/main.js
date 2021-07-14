var elsHeader = document.querySelector('.header');
var elsHeaderNavBtn = elsHeader.querySelector('.js-open-close-btn');

if (elsHeaderNavBtn){
  elsHeaderNavBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('header--open');
  });
}