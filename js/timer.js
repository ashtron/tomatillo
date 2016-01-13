angular.module('tomatillo', [])
  .controller('timerCtrl', function timerCtrl($scope) {
    $scope.time = 0;
    $scope.formattedTime = '00:00'
    $scope.running = false;

    $scope.start = function() {
      $scope.running = true;

      $scope.interval = setInterval(function() {
        console.log($scope.formattedTime);
        $scope.time--;
        $scope.formattedTime = $scope.formatTime($scope.time);
        $scope.$apply();

        if ($scope.time <= 0) {
          $scope.stop($scope.interval);
        }
      }, 1000);
    };

    $scope.stop = function(interval) {
      clearInterval($scope.interval);
      $scope.running = false;
    };

    $scope.reset = function() {
      $scope.stop();
      $scope.time = 0;
    };

    $scope.formatTime = function(time) {
      var hours = Math.floor(time / 60);
      if (hours < 10) { hours = "0" + hours }

      var seconds = time % 60
      if (seconds < 10) { seconds = "0" + seconds }

      return hours + ":" + seconds;
    };
  });
