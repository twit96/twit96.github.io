
/**
* Automatically toggle between profile and logo images on img.avatar elements.
* Functions call each other after delay, with initial call to fadeToLogo().
*/
function fadeAvatarImg() {
  $('img.avatar').delay(5000).fadeTo(1000,0.30, function() {
      $('img.avatar').attr("src",'/img/icon.jpg');
  }).fadeTo(500,1);
  $('img.avatar').delay(5000).fadeTo(1000,0.30, function() {
      $('img.avatar').attr("src",'/img/profile.jpg');
  }).fadeTo(500,1);
  setTimeout(() => { fadeAvatarImg() }, 5000);
}

fadeAvatarImg();


/**
* Allow user to toggle page-wide dark mode by clicking slider in header.
*/
$('.slider').on('click', function() {

  // toggle dark theme on root element
  toggleColorScheme();

  // update slider from other nav (since separate sliders in small/full navs)
  var this_input = $(this).parent().children('input:checkbox');
  var this_checked = !this_input.prop('checked');
  $('input:checkbox').not(this_input).prop('checked', this_checked);

  // Update site_color_scheme Cookie
  updateCookie();
});

function toggleColorScheme() {
  $(':root, .slider, input').toggleClass('invert-color-scheme');
  // toggle images after delay - bug patch where images not getting toggled
  setTimeout(() => { $('img').toggleClass('invert-color-scheme'); }, 200);
  // toggle inverted color scheme on contact section link images
  // (tempfix until SVGs implemented here)
  $('.link-card img').toggleClass('inverted');
}


function setCookie(cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "site_color_scheme" + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
  var name = "site_color_scheme=";
  var c = decodeURIComponent(document.cookie).split(';')[0];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf("site_color_scheme=") == 0) {
    return c.substring(name.length, c.length);
  }
}

function updateCookie() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // prefers dark mode
    if ($(':root').hasClass('invert-color-scheme')) {
      // toggled to dark
      setCookie('dark');
    } else {
      // toggled to light
      setCookie('light');
    }
  } else {
    // prefers light mode
    if ($(':root').hasClass('invert-color-scheme')) {
      // toggled to dark
      setCookie('dark');
    } else {
      // toggled to light
      setCookie('light');
    }
  }
}


function configColorScheme() {
  var site_color_scheme = getCookie();

  if (site_color_scheme == "light") {
    // console.log('cookie: light');
    if ($(':root').hasClass('invert-color-scheme')) {
      toggleColorScheme();
    }
  } else if (site_color_scheme == "dark") {
    // console.log('cookie: dark');
    if (!$(':root').hasClass('invert-color-scheme')) {
      toggleColorScheme();
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // console.log('no cookie - prefers dark');
    setCookie('dark');
    toggleColorScheme();
  } else {
    // console.log('no cookie - prefers light');
    setCookie('light');
    toggleColorScheme();
  }
}

configColorScheme()

// ----------------------------------------------------------------------------


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
