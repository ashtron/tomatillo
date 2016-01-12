function timer() {
  this.init = function() {
    var that = this;

    this.time = 0;
    this.running = false;

    this.display = document.getElementById('display');
    this.startBtn = document.getElementById('start');
    this.stopBtn = document.getElementById('stop');
    this.resetBtn = document.getElementById('reset');

    this.startBtn.onclick = function() { that.start() };
    this.stopBtn.onclick = function() { that.stop() };
    this.resetBtn.onclick = function() { that.reset() };
  };

  this.start = function() {
    var that = this;

    this.running = true;
    this.time = this.time || document.getElementById('timeInput').value;
    this.setDisplay();

    this.interval = setInterval(function() {
      that.time--;
      that.setDisplay();

    if (that.time <= 0) {
        that.stop(that.interval);
      }
    }, 1000);
  };

  this.stop = function(interval) {
    clearInterval(this.interval);
    this.running = false;
  };

  this.reset = function() {
    this.stop();
    this.time = 0;
    this.setDisplay();
  };

  this.formatTime = function(time) {
    var hours = Math.floor(time / 60);
    if (hours < 10) { hours = "0" + hours }

    var seconds = time % 60
    if (seconds < 10) { seconds = "0" + seconds }

    return hours + ":" + seconds;
  };

  this.setDisplay = function() {
    this.display.innerHTML = this.formatTime(this.time);
  };
}

var timer = new timer();

window.onload = function() {
  timer.init();
}
