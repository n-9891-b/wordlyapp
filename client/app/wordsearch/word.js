angular.module('wordly.define', [])

.controller('WordController', function($scope, Define){
  $scope.definition = {};
  $scope.error = false;
  $scope.word;
  $scope.flag = true;
  // $scope.isPristine = wordDef.$pristine;

  $scope.getWord = function(word){
    Define.getword(word).then(function(resp){
      console.log(resp);
      if (resp.data.results.length === 0) {
        $scope.error = true;
        $scope.flag = true;
      } else if (resp.data.results.length !== 0) {
        var def = resp.data.results[0].headword;
        $scope.definition[def] = resp;
        $scope.word = resp;
        $scope.flag = false;
        $scope.wordDef = '';
        // $scope.audio = 'http://api.pearson.com' + resp.data.results[0].senses[0].examples[0].audio[0].url;
        // console.log(resp.data.results[0].senses[0].examples[0].audio[0].url);
        console.log($scope.audio);
      } else {
        $scope.flag = true;
        $scope.word = undefined;
      }
    });
  }

  $scope.showCurrent = function(current){
    $scope.word = $scope.definition[current];
  }
});

