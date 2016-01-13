angular.module('tomatillo', [])
  .controller('timerCtrl', function timerCtrl($scope) {
    $scope.time = 0;
    $scope.formattedTime = '00:00'
    $scope.running = false;

    $scope.start = function() {
      $scope.running = true;
      $scope.formattedTime = $scope.formatTime($scope.time);

      $scope.interval = setInterval(function() {
        $scope.time--;
        $scope.formattedTime = $scope.formatTime($scope.time);
        $scope.$apply();

        if ($scope.time <= 0) {
          $scope.pause($scope.interval);
        }
      }, 1000);
    };

    $scope.pause = function(interval) {
      clearInterval($scope.interval);
      $scope.running = false;
    };

    $scope.reset = function() {
      $scope.pause();
      $scope.time = 0;
    };

    $scope.work = function() {
      $scope.time = 25 * 60;
      $scope.start();
    };

    $scope.shortBreak = function() {
      $scope.time = 5 * 60;;
      $scope.start();
    };

    $scope.longBreak = function() {
      $scope.time = 15 * 60;
      $scope.start();
    };

    $scope.formatTime = function(time) {
      var hours = Math.floor(time / 60);
      if (hours < 10) { hours = "0" + hours }

      var seconds = time % 60
      if (seconds < 10) { seconds = "0" + seconds }

      return hours + ":" + seconds;
    };
  });
