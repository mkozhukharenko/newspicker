'use strict';

var newspickerControllers = angular.module('newspickerControllers', ['ui.bootstrap', 'ngSanitize'])

//----------------------------------------------------------------------------------------------
//                          GETTING NEWS LIST
//----------------------------------------------------------------------------------------------
newspickerControllers.controller('datepickerCtrl', ['$scope', '$filter', 'NewsList',
	function ($scope, $filter, NewsList) {
		$scope.format = 'longDate';
		$scope.dt = new Date();	

		$scope.$watch('dt', function(newValue, oldValue) {
			sendRequest(newValue);
		}, true);

		function sendRequest (newValue) {
			$scope.formatedDate = $filter('date')(newValue, 'yyyy-MM-dd'); // 2010-07-20T10:00:00+05:00		
			
			NewsList.get({fromDate: $scope.formatedDate, toDate: $scope.formatedDate, pageSize: '10'}, function(res) {
				$scope.news = res.response.results;
				fillArrayWithTheCategories($scope.news);
			    // console.log('$scope.news',$scope.news);
			   });					
		}

//-----------------MANAGE CATEGORIES----------------------------
		$scope.categories = [];
		$scope.currentCategory = undefined;
		function fillArrayWithTheCategories (array) {
			var uniqueArr = [];
			angular.forEach(array, function(value, key){
				if (uniqueArr.indexOf(value.sectionName) === -1) {
					uniqueArr.push(value.sectionName);
				}
			});
			$scope.categories = uniqueArr;
			$scope.currentCategory = '';
			// console.log('$scope.categories',$scope.categories);
			// console.log('$scope.currentCategory',$scope.currentCategory);
		}
		}]);
              
//-----------------CONFIGURATION OF THE DATEPICKER----------------------------
newspickerControllers.config(['datepickerConfig', 
	function(datepickerConfig) {
		datepickerConfig.showWeeks = false;
		datepickerConfig.maxDate = new Date();
		datepickerConfig.startingDay = "1";
	}]);


//----------------------------------------------------------------------------------------------
//                          GETTING DETAILED NEWS FROM THE SERVER
//----------------------------------------------------------------------------------------------
newspickerControllers.controller('newsDetailsCtrl', ['$scope', '$routeParams', '$http', 'NewsList',
	function ($scope, $routeParams, $http, NewsList) {
		NewsList.get({
			searchOrId: $routeParams.newsId, 
			showFields: 'headline,trailText,main,firstPublicationDate,body,publication,shortUrlall'
		}, function(res) {
			$scope.detailedNews = res.response.content;
			console.log('$scope.foo',$scope.foo);
		});	
		
		// ********** ---  http request in servise ---- **********
		// var id = $routeParams.newsId;		
		// singleNews.sendRequest(id, function (data) {
			// $scope.detailedNews = data;
			// console.log('$scope.details',$scope.details); // undefined
		// })

	}]);

// ?api-key=qfz35s8d5vk4xwm237brcfzw
//  http://explorer.content.guardianapis.com/us-news/2015/mar/13/koch-industries-refuses-senators-climate-investigation?api-key=qfz35s8d5vk4xwm237brcfzw&show-fields=all

// newspickerControllers.directive("enter", function() {
//     return function(scope, element) {
//         element.bind("mouseenter", function() {
//             console.log("I'm inside of you!");
//         });
//         console.log('ddddddddd');
//     };
// });

newspickerControllers.directive('enter', function() {
   return {
          restrict: 'A',
          // scope: {
          //   enter: '&'
          // },
          link: function(scope, element, attrs){
            console.log("hello world")
                       
          	element.bind("mouseenter", function() {
            	console.log("I'm inside of you!");
        	});
          }  
   };
});