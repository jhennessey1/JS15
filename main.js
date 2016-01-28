angular.module('calendar', [])

angular.module('calendar')
	.controller('calendRoller', ['$scope', function($scope){
		$scope.dates = []
		// $scope.dateAdder = function(date) {
		// 	for(var i = 0; i < 40; i++) {
		// 		$scope.dates.push((date.getMonth()+1) + "/" + (date.getDate()+i) + "/" + date.getFullYear())
		// 	}
		// }
		// $scope.date = {
		// 	day: '',
		// 	month: '',
		// 	year: '',
		// 	appointments: []
		// }
		// $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		$scope.clickAppointment = false
		$scope.today = new Date()
		
		$scope.addDate = function(i) {
			$scope.dates.push(new Date().setDate($scope.today.getDate() + i))
		}
		$scope.x = 15
		$scope.y = 0
		$scope.maxNum = function() {
			$scope.x += 15
			$scope.y += 15
			$scope.addMore()
		}

		$scope.addMore = function() {
			for(var i = $scope.y; i < $scope.x; i++) {
				$scope.addDate(i)
			}
		}
		$scope.makeAppointment = function() {
			$scope.clickAppointment = true
		}
		
		
		

		$scope.addMore()
	}])

