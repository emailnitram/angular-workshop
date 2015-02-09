app.controller('HomeController', ['$scope', function($scope) {

	$scope.name = 'team';

	$scope.$watch('name', function(newValue, oldValue) {
		console.log('oldValue:',oldValue,' newValue:',newValue);
	});

}]);
