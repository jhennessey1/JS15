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
					appointments: [],
					clickAppointment: false,
				}
				$scope.dates.push($scope.newDate)
				$scope.newDate = {}
			}
		}

		$scope.makeAppointment = function(date) {
			date.clickAppointment = true
		}

		$scope.subApp = function(date) {
			date.clickAppointment = false
			date.appointments.push(date.appointment)
			console.log($scope.dates)
			date.appointment = ''
		}

		$scope.maxNum = function() {
			x += 15
			y += 15
			$scope.addDateObj()
		}
		$scope.addDateObj()

	}])

