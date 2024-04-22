(function () {
    'use strict';
    angular.module('myApp', [])
        .controller('myCtrl', ctrlFunct)
        .filter('custom', filterFactory)
        .filter('custom2', factory2);

    ctrlFunct.$inject = ['$scope', '$filter', 'customFilter', 'custom2Filter'];

    function ctrlFunct($scope, $filter, customFilter, custom2Filter) {
        $scope.name = 'aaa';
        $scope.msg = "I like my cat"

        $scope.toUpp = function () {
            $scope.name = $filter('uppercase')($scope.name)
        }

        $scope.msg = customFilter($scope.msg);

    }

    function filterFactory() {
        return function (input) {
            return input.replace('like', 'love');
        }
    }

    function factory2() {
        return function (input, append) {
            return input.concat(append);
        }
    }

})();




// !function () { "use strict"; function e(e, n) { e.name = "aaa", e.toUpp = function () { e.name = n("uppercase")(e.name) } } angular.module("myApp", []).controller("myCtrl", e), e.$inject = ["$scope", "$filter"] }();