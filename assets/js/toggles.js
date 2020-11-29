// Allow User to Toggle Page-Wide Dark Mode
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

  // swap intro image
  // $('#intro').find('img').toggle();
});
