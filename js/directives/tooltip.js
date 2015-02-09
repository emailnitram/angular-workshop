app.directive('tooltip', function() {
	return {
		restrict: 'E',
		template: '<div><button ng-click="subtract();">-</button>{{counter}}<button ng-click="add();">+</button></div>',
		link: function(scope, elem, attr) {
			scope.counter = 0;
			scope.add = function() {
				scope.counter++;
			};
			scope.subtract = function() {
				scope.counter--;
			};

		}
	};
});