function timer() {
  this.time = 500;

  this.display = new display();

  this.start = function() {
    var that = this;

    var interval = setInterval(function() {
      that.display.set(that.formatTime(that.time--));

      if (this.time <= 0) {
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
  this.set = function(time) {
    display.innerHTML = time;
  }
}

var timer = new timer();
var display = new display();

window.onload = function() {
  var startBtn = document.getElementById('start');
  startBtn.onclick = function() { timer.start() };

  var display = document.getElementById('display');
}
