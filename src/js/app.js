//Initiate an angular module 
//Give it a name to be referred to within the HTML page.
angular.module("todoListApp", [])
//Declare a controller for the module
//Give it a name to be referred to within the HTML page.
//Initiate the function of $scope within the controller
.controller('mainCtrl', function($scope) {
//Create an empty array to hold the variables and objects
	$scope.todos = [];

	$scope.blankTodo = {
		task: '',
		priority: ''
	};

	$scope.addTodo = function() {
//In order to give value to the 'blankTodo' there needs to be an angular copy
		var copyOfBlankTodo = angular.copy($scope.blankTodo); 
		$scope.todos.push(copyOfBlankTodo);
		$scope.orderMyTodos = angular.orderMyTodos;
		$scope.blankTodo={};
	};

});