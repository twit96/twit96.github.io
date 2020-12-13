/**
* All links Simulate an HTTP redirect - no back button
*/
$('#not-found a').on('click', function() {
  window.location.replace("/");
});


/**
* Timer Config - Delayed Forced Redirect
*/
var timer = document.getElementById('timer');
var time = 10;

function updateTimer() {
  timer.innerHTML = time;
  if (time == 0) {
    window.location.replace("/");
  } else {
    time --;
    setTimeout(() => { updateTimer() }, 1000);
  }
}

updateTimer();
