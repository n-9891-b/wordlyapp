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

      // console.log($scope.definition.words);
      $scope.parseDefintions(resp.data.entry_list.entry[0].def[0].dt);
      // console.log($scope.wordDefinition);
    });
  }

  // $scope.parseDefintions = function(words) {
  //   console.log(words);
  //   var name = $scope.definition.words.data.entry_list.entry[0].ew[0];
  //   // words.forEach(function(word) {
  //   //   console.log(words);
  //   //   var words = words
  //   words.forEach(function(def){
  //     words.forEach(function(word){
  //       if (typeof word === 'object' && !($scope.wordDefinitions[name]) {
  //         $scope.wordDefinitions.name = (word['_']);
  //       } else {
  //         $scope.wordDefinitions.name = (word);
  //       }
  //     });
  //       // $scope.wordDefinitions.push(_.flatten(def));  
  //     // });
  //     console.log($scope.wordDefinitions);
  //   });
  // }
});

