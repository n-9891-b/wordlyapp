angular.module('wordly.define', [])

.controller('WordController', function($scope, Define){
  $scope.definition = {
    words: []
  };
  $scope.wordDefinitions = {};

  $scope.word;

  $scope.getWord = function(word){
    $scope.word = word;
    Define.getword($scope.word).then(function(resp){
      $scope.definition.words.push(resp);
      // console.log($scope.definition);
    });
  }

  $scope.showCurrent = function(current){

  }
});

