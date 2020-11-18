// Allow User to Toggle Page-Wide Dark Mode
$('.slider').on('click', function() {

  // dark theme on root element
  if ($(':root').hasClass('invert-color-scheme')) {
    $(':root').removeClass('invert-color-scheme');
  } else {
    $(':root').addClass('invert-color-scheme');
  }

  // $('#intro').find('img').toggle();
});
