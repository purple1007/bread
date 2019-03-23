/*nav*/

$(".l_hamburger").click(function(){
	$(".l_lg_nav").toggleClass("l_lg_nav_active");
    $(".overlay").toggleClass("active");
});

$(".l_nav_close, .overlay").click(function(){
    $(".overlay").removeClass("active");
	$(".l_lg_nav").removeClass("l_lg_nav_active");

});




//scrollreveal
    window.sr = ScrollReveal({
        reset: false,
        distance: '20px',
        scale:1,
        easing:'ease-in-out',
        duration: 600,
        viewFactor: 0.5
    });
    sr.reveal('.reveal_bottom', {
        origin:'bottom',
        delay: 0.2
    });
    sr.reveal('.reveal_Lleft', {
        origin:'left'
    });
    sr.reveal('.reveal_right', {
        origin:'right'
    });
    sr.reveal('.reveal_opacity', {
        distance: '0px',
    });
    sr.reveal('.reveal_scale', {
        distance: '0px',
        scale:0.9
    });

    ScrollReveal().reveal('.e_news_card, .product_category_card', {
        interval: 200
    });

// scroll Top

var scrolltop = document.querySelector('.e_scroll_top').classList;
var lastScrollY = 0;
window.addEventListener('scroll', function(){
  var st = this.scrollY;
  if( st < lastScrollY) {
    scrolltop.remove('_close');
  }else{
    scrolltop.add('_close');
  }
  lastScrollY = st;
});


// $(window).scroll(function(){
// 			    var scrollVal = $(this).scrollTop();
// 			    if ( scrollVal >= 75 ) {
// 			    $(".e_scroll_top").css('display','block');
// 			    }
// 			    else {
// 			    $(".e_scroll_top").css('display','none');
// 			    }
// 			  });
// 		    $(window).trigger("scroll");


// 導覽列連結到頁面錨點
// smooth scrollTo
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
    $('html, body').stop(0,1).animate({
    scrollTop: target.offset().top-100
    }, 800);
    return;
    }
    }
    });

