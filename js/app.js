angular.module('myApp', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/doradidae', {
        templateUrl: 'template/doradidae.html',
        controller: 'doradidaeController'
      }).
      otherwise({
        redirectTo: '/'
      });

}])

.controller('myController', ['$scope', '$location', function($scope, $location){
    //handle [.banner]
    $scope.$on('$locationChangeSuccess', function() {
      if ($location.path() === '/') {
        $scope.isBanner = false;
        console.log($location.path())
      } else {
        $scope.isBanner = true;
        console.log($location.path())        
      }      
    })

}])

.controller('doradidaeController', ['$scope', '$interval', function($scope, $interval){
  //handle [.function]
  $scope.contentArray = ['就是', '这么', '屌！'];
  $scope.contentEditable = '修改任何网页的文本内容';
  $scope.handleContent = function() {
    if ($scope.contentEditable !== '我就是这么屌！') {
      $scope.contentEditable = '我';
    }
    $interval(function() {
      if ($scope.contentArray.length !== 0){
        $scope.contentEditable += $scope.contentArray.shift();
      } else {
        return;
      }
    }, 150, 3)   
  }
  $scope.handleFlash = function() {
    document.getElementById('camera_click').play()
  }

  //handle [安裝]
  $scope.isChrome = true;
  $scope.toggleBrowser = function() {
    $scope.isChrome = !$scope.isChrome;
  }

}])

