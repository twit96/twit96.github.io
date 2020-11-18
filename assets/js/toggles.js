// Allow User to Toggle Page-Wide Dark Mode
$('.slider').on('click', function() {

  if ($(':root').hasClass('dark')) {
    $(':root').removeClass('dark');
  } else {
    $(':root').addClass('dark');
  }
});
