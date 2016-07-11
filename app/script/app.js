(function () {

  var cinguettio= angular.module('cinguettio',[
    'ngRoute','ngAnimate'
  ]);

  // configure our routes
  cinguettio.config(function($routeProvider) {
    $routeProvider

    // route for the login
      .when('/', {
        templateUrl : 'script/login/login.html',
        controller  : 'loginController'
      })
      .when('/home', {
        templateUrl : 'script/home/home.html',
        controller  : 'homeController'
      })
      //route se non trova nulla
      .when('/404',{
        templateUrl: 'script/404.html',
        controller: '404Cotntroller'

      })

  });

})() ;
