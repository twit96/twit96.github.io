/**
* To give deferred scripts time to update site-wide color scheme to user
* preference, check preference here on page load and cover screen with
* temporary div whose background color is set accordingly.
* Prevents white flash on dark mode devices.
* Note: getCookie() is repeat code from toggles.js, and script below it
* mimics logic of configColorScheme() from toggles.js. Needs refactor.
*/

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

var site_color_scheme = getCookie();
var fadein_bg = document.getElementById('fadein-bg');
if (site_color_scheme == 'dark') {
  fadein_bg.style.background = '#171717';
} else if (site_color_scheme == 'light') {
  fadein_bg.style.background = '#f0f0f0';
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  fadein_bg.style.background = '#171717';
} else {
  fadein_bg.style.background = '#f0f0f0';
}

var fadein_bg = document.getElementById('fadein-bg');
setTimeout(function(){
  fadein_bg.style.display = 'none';
}, 1000);
