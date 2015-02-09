app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.state('cats', {
		url: '/cats',
		templateUrl: 'views/cats.html',
		controller: 'CatController'
	})
	.state('dogs', {
		url: '/dogs',
		templateUrl: 'views/dogs.html',
		controller: 'DogController'
	});

}]);

app.run(['$rootScope', function($rootScope) {

	$rootScope.day = function() {
		return new Date();
	};

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		// console.log('toState',toState)
		$rootScope.menuName = toState.name;
	});

	$rootScope.parent = 'ROOT';
    
    $rootScope.shout = function() {
        alert("I am bound to $rootScope");
    };

}]);
