/**
 * Created by Administrator on 2017/7/11.
 */
;(function (angular) {
    var app = angular.module('app',['ui.router']);

    //创建控制器
    app.controller('appController',['$scope','$window',function ($scope,$window) {
        $scope.appTitle = 'webApp';
        $scope.title = '首页';


    }])



})(angular);