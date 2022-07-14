"use strict";

angular
  .module("myApp.view7-language", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view7/view7-language", {
        templateUrl: "/view7/view7-language/view7-language.html",
        controller: "View7Language",
      });
    },
  ])

  .controller("View7Language", function ($scope, $http) {
    // $scope.getlanguageList = [];
    // $scope.getcountryList = [];
    // $scope.getregionList = [];
    // $scope.selected='0';
    // $http({
    //   method: "GET",
    //   url: "http://127.0.0.1:5500/API/language.json",
    // }).then((res) => {
    //   $scope.getlanguageList = res.data;
    //   console.log(res.data);
    // });
    // $http({
    //   method: "GET",
    //   url: "http://127.0.0.1:5500/API/country.json",
    // }).then((res) => {
    //   $scope.getcountryList = res.data;
    //   console.log(res.data);
    // });
    // $http({
    //   method: "GET",
    //   url: "http://127.0.0.1:5500/API/region.json",
    // }).then((res) => {
    //   $scope.getregionList = res.data;
    //   console.log(res.data);
    // });
    $scope.style = "中文(简体，中国)";
    $scope.rili = "公历";
    $scope.firstday = "星期一";
    $scope.shortday = "2022/7/11";
    $scope.longday = "2022年7月11日";
    $scope.longtime = "9:57";
    $scope.shorttime = "9:57:29";
    $scope.toggle = function () {
      $scope.myVar2 = !$scope.myVar2;
      console.log($scope.myVar2)
    };
  })