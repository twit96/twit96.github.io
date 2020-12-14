// All Nav Links Click Behavior - Scroll to position on page ------------------
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 75 + 'px'
        }, 500);
    });
}

$('header a').click(function() {
  var loc = '#' + $(this).attr('class');
  $(loc).scrollView();

  // set active link
  $(this).toggleClass('active');
  $('header a').not(this).removeClass('active');

  // delay then remove active link
  $(this).addClass('active').delay(500).queue(function(next){
    $(this).removeClass('active');
    next();
  });

});


$('header .title').click(function() {
  if ($(window).scrollTop() == 0) {
    // go to homepage if at top
    window.location.href = "/";
  } else {
    // scroll to top if not at top
    $("html, body").scrollView();
  }
});


// Toggle Small Nav on Hamburger Icon Click -----------------------------------
$('.hamburger-icon').click(function() {
  // update button
  $(this).toggleClass('wasClicked');
  // display small nav
  $('#small-nav').toggle();
  // display small nav background
  $('#small-nav-bg').fadeToggle();
});


// Hide Small Nav... ----------------------------------------------------------
function hide_small_nav() {
  // reset hamburger icon
  $('.hamburger-icon').toggleClass('wasClicked');
  // slide up small nav
  $('#small-nav').toggle();
  // fade out small nav background
  $('#small-nav-bg').fadeOut();
}

// ...when a link is clicked
$('#small-nav a').click(function() {
  hide_small_nav();
});

// ...if user clicks somewhere else
$('#small-nav-bg').click(function() {
  hide_small_nav();
});

// ...if title link is clicked
$('header .title').click(function() {
  if ($('.hamburger-icon').hasClass("wasClicked")) {
    hide_small_nav();
  }
});

// ...if window grows large enough to display full nav
$(window).resize(function() {
  if($(window).width() >= 700) {
    // detect if small nav is currently displaying
    if ($('.hamburger-icon').hasClass("wasClicked")) {
      hide_small_nav();
    }
  }
});
