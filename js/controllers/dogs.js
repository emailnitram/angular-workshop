app.controller('DogController', ['$scope', 'animalService', function($scope, animalService) {

	animalService.getAnimal('dogpictures').then(function(data) {
		$scope.dogs = data;
	});
	
	$scope.children = 'The Dog';
    
    $scope.shout = function() {
        alert('I am inside dog controller');
    };

}]);
