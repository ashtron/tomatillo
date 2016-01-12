function timer() {
  this.init = function() {
    var that = this;

    this.time = 0;
    this.running = false;

    this.display = document.getElementById('display');
    this.startBtn = document.getElementById('start');
    this.stopBtn = document.getElementById('stop');

    this.startBtn.onclick = function() { that.start() };
    this.stopBtn.onclick = function() { that.stop() };
  };

  this.start = function() {
    var that = this;

    this.running = true;
    this.time = this.time || document.getElementById('timeInput').value;

    this.interval = setInterval(function() {
      that.time--;
      that.display.innerHTML = that.formatTime(that.time);

      if (that.time <= 0 || that.display.stopped) {
        that.stop(that.interval);
      }
    }, 1000);
  };

  this.stop = function(interval) {
    clearInterval(this.interval);
    this.running = false;
  };

  this.formatTime = function(time) {
    var hours = Math.floor(time / 60);
    if (hours < 10) { hours = "0" + hours }

    var seconds = time % 60
    if (seconds < 10) { seconds = "0" + seconds }

    return hours + ":" + seconds;
  }
}

var timer = new timer();

window.onload = function() {
  timer.init();
}
