var app = angular.module("users")
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/home',
    {
      templateUrl:'src/dictio/home.html'
    });
    $routeProvider.otherwise(
    {
      redirectTo:'/home'
    }
  );
});
