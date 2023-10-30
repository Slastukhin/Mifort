const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.column-menu');
const body = document.querySelector('body')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('column-menu__active');
    menuBtn.classList.toggle('header__btn_active');
    body.classList.toggle('lock');
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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



function insert (word) {
   let inp = document.querySelector('input');
   let start = inp.selectionStart;
   inp.value = inp.value.substring(0, start) + word +
     inp.value.substring(inp.selectionEnd, inp.value.length) 
     inp.focus();
     inp.setSelectionRange(start, start + word.length)
}
 
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
 