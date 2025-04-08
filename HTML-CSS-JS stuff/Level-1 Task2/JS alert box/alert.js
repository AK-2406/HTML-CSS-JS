var app = angular.module('myApp', []); 
        app.controller('myCtrl', function ($scope, $interval, $filter) { 
            $scope.TimeNow = new Date().toLocaleTimeString(); 
            $interval(function () { 
                $scope.TimeNow = new Date().toLocaleTimeString(); 
            }, 1000); 
  
            $scope.Hours = $filter('date')(new Date(), 'HH'); 
            if ($scope.Hours < 12) 
                $scope.msg = "Good Morning"
            else if ($scope.Hourss < 15) 
                $scope.msg = "Good Afternoon"
            else 
                $scope.msg = "Good Evening..."
        }); 