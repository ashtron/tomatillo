function timer() {
  this.time = 0;

  this.display = new display();

  this.start = function() {
    var that = this;

    this.time = this.time || document.getElementById('timeInput').value;

    var interval = setInterval(function() {
      that.display.set(that.formatTime(that.time--));

      if (that.time < 0 || that.display.stopped) {
        that.stop(interval);
      }
    }, 1000);
  };

  this.stop = function(interval) {
    clearInterval(interval);
  };

  this.formatTime = function(time) {
    var hours = Math.floor(time / 60);
    if (hours < 10) { hours = "0" + hours }

    var seconds = time % 60
    if (seconds < 10) { seconds = "0" + seconds }

    return hours + ":" + seconds;
  }
}

function display() {
  this.stopped = false;

  this.set = function(time) {
    document.getElementById('display').innerHTML = time;
  }
}

var timer = new timer();

window.onload = function() {
  var startBtn = document.getElementById('start');
  startBtn.onclick = function() { timer.start() };

  var stopBtn = document.getElementById('stop');
  stopBtn.onclick = function() { timer.display.stopped = true };

  var resumeBtn = document.getElementById('resume');
  resumeBtn.onclick = function() {
    timer.display.stopped = false;
    timer.start() };
}
