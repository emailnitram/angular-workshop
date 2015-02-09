app.controller('CatController', ['$scope', 'animalService', function($scope, animalService) {

	animalService.getAnimal('catpictures').then(function(data) {
		$scope.cats = data;
	});
	
	$scope.sayHi = function(){
		alert('Go Giants!');
	}
}]);
