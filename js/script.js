new Swiper('.slider-swiper', {
   // Optional parameters
   loop: true,
   slidesPerGroup: 1,
   slidesPerView: 3,
 
   // Navigation arrows
   navigation: {
     nextEl: '.slider-arrows__next',
     prevEl: '.slider-arrows__per',
   },
 
    breakpoint: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
   },
});
 
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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tabsBtn   = document.querySelectorAll(".content-industries__list");
const tabsItems = document.querySelectorAll(".content-industries__body");


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.content-industries__list').click();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.column-menu');
const body = document.querySelector('body')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('column-menu__active');
    menuBtn.classList.toggle('header__btn_active');
    body.classList.toggle('lock');
})

const headerLi = document.querySelector('.column-menu__li')


document.addEventListener("DOMContentLoaded", function() {
    headerLi.classList.toggle('focuses');
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
   

