app.factory('animalService', ['$http', '$q', function($http, $q) {
	var service = {
		getAnimal: function(subreddit){
			var deferred = $q.defer();
			$http.get('http://www.reddit.com/r/' + subreddit + '.json')
			.success(function(data){
				// console.log(data)
				var animals = data.data.children;
				animals.shift();
				deferred.resolve(animals);
			})
			.error(function(error){
				// handle error
				// console.log(error);
				deferred.reject(error);
			});
			return deferred.promise;
		}
	};

	return service;
}]);
