
angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
	$scope.todos = [];

	$scope.blankTodo = {
		task: '',
		priority: ''
	};

	$scope.addTodo = function() {
		var copyOfBlankTodo = angular.copy($scope.blankTodo); 
		$scope.todos.push(copyOfBlankTodo);
		$scope.orderMyTodos = angular.orderMyTodos;
		$scope.blankTodo={};
	};
	 function Test($scope){

        if($scope.task + $scope.priority ==''){
            $scope.output="true";
        }
        else{
            $scope.output="false";
        }
    }

});