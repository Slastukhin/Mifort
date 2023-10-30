const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.column-menu');
const body = document.querySelector('body')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('column-menu__active');
    menuBtn.classList.toggle('header__btn_active');
    body.classList.toggle('lock');
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const weBtn   = document.querySelectorAll(".content-industries__list");
const weItems = document.querySelectorAll(".we-use__wrapper");


weBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            weBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            weItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.content-industries__list').click();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


new Swiper('.content-stories__slider', {
   loop: true,
   slidesPerGroup: 1,
   slidesPerView: 2,
   navigation: {
      nextEl: '.one-stories__arrows-next',
      prevEl: '.one-stories__arrows-prev',
    },
});

new Swiper('.news__slider', {
   loop: true,
   slidesPerGroup: 1,
   slidesPerView: 3,
   navigation: {
      nextEl: '.news__arrows-next',
      prevEl: '.news__arrows-prev',
    },
});



$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
});
   