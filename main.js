angular.module('calendar', [])

angular.module('calendar')
	.controller('calendRoller', ['$scope', function($scope){
		$scope.dates = []
		var x = 15
		var y = 0
		var today = new Date()
		$scope.addDateObj = function() {
			for(var i = y; i < x; i++) {
				$scope.newDate = {
					date: new Date().setDate(today.getDate() + i),
					appointments: []
				}
				$scope.dates.push($scope.newDate)
				$scope.newDate = {}
			}
		}

		$scope.makeAppointment = function() {
			$scope.clickAppointment = true
		}

		$scope.subApp = function() {
			$scope.clickAppointment = false
			$scope.submitApp = true
		}

		$scope.maxNum = function() {
			x += 15
			y += 15
			$scope.addDateObj()
		}
		$scope.addDateObj()
	}])

