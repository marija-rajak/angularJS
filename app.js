var app = angular.module('myApp', [])
    .controller('myCtrl', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

        $scope.name = 'aaa';

        $scope.toUpp = function () {
            $scope.name = $filter('uppercase')($scope.name);

        }

        $scope.msg = "Love you, cat"

        $scope.counter = 0;

        $scope.increment = function () {
            //2 moguca nacina, ali n preporcljiva
            // setTimeout(function () {
            //     /*1. nacin-ne hvata exceptions
            //     scope.counter++;
            //     $scope.$digest(); 1. nacin-ne hvata exceptions*/

            //     /*2. nacin-hvata exceptions, ali nije native za angular
            //     $scope.$apply(function () {
            //         $scope.counter++;
            //     })*/

            // }, 3000)

            $timeout(function () {
                $scope.counter++;
            }, 2000)

        }


    }])
    .filter('custom', function () {
        return function (input, append) {
            return input.concat(append);
        }
    });;

