angular.module('wordly', [
    'wordly.requests',
    'wordly.define',
    'ngRoute'
    ])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: './app/wordsearch/word.html',
      controller: 'WordController'
    })    
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true);
});