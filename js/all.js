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


// scroll Top

var scrolltop = document.querySelector('.e_scroll_top').classList;
var lastScrollY = 0;
window.addEventListener('scroll', function(){
  var st = this.scrollY;
  if( st < lastScrollY) {
    scrolltop.add('_close');
  }else{
    scrolltop.remove('_close');
  }
  lastScrollY = st;
});


// account_layout (for mobile)
var account_nav = document.querySelector('.l_account_left').classList;
var lastScrollY2 = 0;
window.addEventListener('scroll', function(){
  // let lastScrollY = 0;
  let st = this.scrollY;
  var mediaWith = document.body.scrollWidth;
  if( st < lastScrollY2 && mediaWith < 768) {
    account_nav.add('l_account_nav_show');
  }else{
    account_nav.remove('l_account_nav_show');
  }
  lastScrollY2 = st;
});