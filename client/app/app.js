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
    .otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true);
});