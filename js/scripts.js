$(document).ready(function () {

  // navbar color change
  $(document).scroll(function(){
    if($(this).scrollTop() > 0)
    {
       $('.navbar-default').css({
         "background": "rgba(0,0,0,0.8)",
         "transition": "background .5s"
       });
    } else {
       $('.navbar-default').css({"background": "transparent"});
    }
  });

  $("button.navbar-toggle").click(function(event) {
    $('.navbar-default').css({
      "background": "rgba(0,0,0,0.8)",
      "transition": "background .5s"
    });
  });

  // page scrolling feature
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 97
        }, 1300 , 'easeInOutExpo');
        event.preventDefault();
    });
  });

  // scroll to top
  $(document).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });

  $('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
    return false;
  });

  // tooltip
  $('.progress-bar').qtip({
    content: { attr: 'title'},
    position: {
      my: 'bottom center',
      at: 'top right'
    },
    style: {
      classes: 'qtip-dark'
    },
    show: { ready: true },
    hide: { event: false }
  });

  wow = new WOW({
    mobile: false
  });
  wow.init();
});
