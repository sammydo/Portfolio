$(window).scroll(function(){

var wScroll = $(this).scrollTop();

$('.mugshot').css({

  'transform' : 'translate(0px, '+ wScroll /4 +'%)'

});




});
