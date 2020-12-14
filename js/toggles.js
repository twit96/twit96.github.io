
/**
* Automatically toggle between profile and logo images on img.avatar elements.
* Functions call each other after delay, with initial call to fadeToLogo().
*/
function fadeToLogo() {
  $('img.avatar').fadeTo(1000,0.30, function() {
      $('img.avatar').attr("src",'/img/icon.jpg');
  }).fadeTo(500,1);
  setTimeout(() => { fadeToProfile() }, 5000);
}

function fadeToProfile() {
  $('img.avatar').fadeTo(1000,0.30, function() {
      $('img.avatar').attr("src",'/img/profile.jpg');
  }).fadeTo(500,1);
  setTimeout(() => { fadeToLogo() }, 5000);
}

setTimeout(() => { fadeToLogo() }, 5000);


/**
* Allow user to toggle page-wide dark mode by clicking slider in header.
* Function toggles :root color scheme, light/dark img styling, and makes sure
* that both sliders are in sync between small and full nav.
*/
$('.slider').on('click', function() {

  // toggle dark theme on root element
  if ($(':root').hasClass('invert-color-scheme')) {
    $(':root').removeClass('invert-color-scheme');
  } else {
    $(':root').addClass('invert-color-scheme');
  }

  $('img').toggleClass('invert-color-scheme');

  // toggle inverted color scheme on contact section link images
  // (tempfix until SVGs implemented here)
  $('.link-card img').toggleClass('inverted');

  // update slider from other nav (since separate sliders in small/full navs)
  var this_input = $(this).parent().children('input:checkbox');
  var this_checked = !this_input.prop('checked');
  $('input:checkbox').not(this_input).prop('checked', this_checked);
});


/**
* Function to toggle between portfolio contents and all-projects view contents.
* Illusion of two pages, but the all-projects article is set to display: none
* by default, so toggling swaps it with the rest of the page contents.
* Reasoning for this is so projects are then re-arranged for quicker reading.
*/
$('.pages-toggle').on('click', function() {
  // toggle header elements
  if ($('header a.pages-toggle').is(":visible")) {
    $('header a.pages-toggle').toggle();
    $('header a').not('.title').not('.pages-toggle').fadeToggle();
  } else {
    $('header a').not('.title').not('.pages-toggle').toggle();
    $('header a.pages-toggle').fadeToggle();
  }
  // toggle page elements
  $('#intro').toggle();
  $('article').toggle();
  $('section').toggle();
  // scroll to projects
  if ($('#all-projects').is(":visible")) {
    $('#all-projects').scrollView();
  } else {
    $('#projects').scrollView();
  }
});
