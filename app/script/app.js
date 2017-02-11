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
                controller  : 'loginController',
                controllerAs  : 'loginController'
            })
            .when('/home', {
                templateUrl : 'script/home/home.html',
                controller  : 'homeController',
                controllerAs  : 'homeController'
            })
            //route se non trova nulla
            .when('/404',{
                templateUrl: 'script/404.html',
                controller: '404Cotntroller'
            })
            //nuova registrazione
            .when('/registration', {
                templateUrl   : 'script/registration/registration.html',
                controller    : 'registrationController',
                controllerAs  : 'registrationController'
            })
            //completamento Profilo Utente
            .when('/myProfile',{
                templateUrl : 'script/myProfile/myProfile.html',
                controller  : 'myProfileController'
            })
            //followers
            .when('/followers',{
                templateUrl : 'script/followers/followers.html',
                controller  : 'followersController'
            })
            //followers
            .when('/following',{
                templateUrl : 'script/following/following.html',
                controller  : 'followingController'
            })
    });

})() ;