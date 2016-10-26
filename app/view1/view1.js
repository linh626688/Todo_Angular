'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });

    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.products = ['Bờ Hồ', 'Hồ Tây', 'Cầu Giấy '];
        $scope.actives = [];
        $scope.completed = [];

        $scope.addItem = function () {
            $scope.errortext = "";
            if (!$scope.addMe) {
                return;
            }
            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
            } else {
                $scope.errortext = "The item is already in your shopping list.";
            }
        }

        $scope.addProduct = function (item) {
            $scope.products.push(item);

            for (var i = 0; i < $scope.completed.length; i++) {
                if ($scope.completed[i] === item) {
                    $scope.completed.splice(i, 1);
                    break;
                }
            }
            for (var i = 0; i < $scope.actives.length; i++) {
                if ($scope.actives[i] === item) {
                    $scope.actives.splice(i, 1);
                    break;
                }
            }
        }
        $scope.actived = function (item) {
            $scope.actives.push(item);
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i] === item) {
                    $scope.products.splice(i, 1);
                    break;
                }
            }
            for (var i = 0; i < $scope.completed.length; i++) {
                if ($scope.completed[i] === item) {
                    $scope.completed.splice(i, 1);
                    break;
                }
            }
        }

        $scope.complete = function (item) {
            $scope.completed.push(item);
            for (var i = 0; i < $scope.actives.length; i++) {
                if ($scope.actives[i] === item) {
                    $scope.actives.splice(i, 1);
                    break;
                }
            }
        }
        $scope.removeItem = function (x) {
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        }
        $scope.completeAll = function () {
            for (var i = 0; i <= $scope.products.length; i++) {
                $scope.completed.push($scope.products[i]);
                $scope.products.splice(i, 1);

            }
        }
        $scope.activeAll = function () {
            for (var i = 0; i <= $scope.products.length; i++) {
                $scope.actives.push($scope.products[i]);
                $scope.products.splice(i, 1);

            }
        }
    }]);