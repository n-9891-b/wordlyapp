angular.module('wordly.requests', [])

.factory('Define', function ($http) {

  var getword = function(word) {
    console.log(word);
    return $http({
      method: 'POST',
      url: '/api/definition',
      data: {
        word: word
      }
    }).then(function(resp) {
      // console.log(resp);
      return resp;
    });
  }

  return {
    getword: getword
  }
})