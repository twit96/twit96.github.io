
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
  $('header .projects').fadeToggle();
  $('header .experience').fadeToggle();
  $('header .contact').fadeToggle();
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
