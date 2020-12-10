// Timer Config
var timer = document.getElementById('timer');
var time = 10;

function updateTimer() {
  timer.innerHTML = time;
  if (time == 0) {
    // Simulate an HTTP redirect:
    window.location.replace("/");
  } else {
    time --;
    // asynchronous pause, then recursive call
    setTimeout(() => { updateTimer() }, 1000);
  }
}

// Initial Call
updateTimer();
