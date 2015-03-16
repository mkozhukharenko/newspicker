'use strict';

var newspickerControllers = angular.module('newspickerControllers', ['ui.bootstrap', 'ngSanitize'])

// newspickerControllers.controller('MainCtrl', 
// 	function ($scope) {
// 	});


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
		


		// $scope.items = [
		//     'The first choice!',
		//     'And another choice for you.',
		//     'but wait! A third!'
		//  ];


			// $scope.open = function($event) {
			// 	$event.preventDefault();
			// 	$event.stopPropagation();
			// 	$scope.opened = true;
			// };
		}]);


              
//-----------------CONFIGURATION OF THE DATEPICKER----------------------------
newspickerControllers.config(['datepickerConfig', 
	function(datepickerConfig) {
		datepickerConfig.showWeeks = false;
		datepickerConfig.maxDate = new Date();
		datepickerConfig.startingDay = "1";
	}]);


// newspickerControllers.controller('getNewsCtrl', ['$scope',
// 	function($scope, getNewsService) {
// 	}]);


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


		// ------------- HTTP reques inside controller ---------------
		// $http.get('http://content.guardianapis.com/'+ 
					// $routeParams.newsId + 
					// '?api-key=qfz35s8d5vk4xwm237brcfzw&show-related-content=true'+
					// '&show-fields=headline,trailText,main,firstPublicationDate,body,publication,shortUrlall')	
		// .success(function(data) {
			// $scope.detailedNews = data.response.content;
			// console.log('$scope.detailedNews',$scope.detailedNews);
		// });


		// ------- edit angular routes ---------------
		// replace(/%2F/gi, '/').
		
	}]);



// 'http://content.guardianapis.com/
// money/2015/mar/14/dear-jeremy-work-issues-solved
// ?api-key=qfz35s8d5vk4xwm237brcfzw
// &show-fields=headline,trailText,main,firstPublicationDate,body,publication,shortUrlall'
//  http://explorer.content.guardianapis.com/us-news/2015/mar/13/koch-industries-refuses-senators-climate-investigation?api-key=qfz35s8d5vk4xwm237brcfzw&show-fields=all



// newspickerControllers.controller('getNewsCtrl', ['$scope', 'getNewsService',
// 	function($scope, getNewsService) {
// 		$scope.news = getNewsService.news;
// 		console.log('$scope.news',$scope.news);

// 		getNewsService.sendRequest($scope.formatedDate).then(function(d) {
// 			$scope.news = d.results;
// 			console.log();
// 		});

// 		$scope.getNews = function () {
// 			$http.get('http://content.guardianapis.com/search?api-key=qfz35s8d5vk4xwm237brcfzw&show-fields=headline,standfirst,main,shortUrl,firstPublicationDate,thumbnail,trailText&page-size=10&from-date=2015-03-12&to-date=2015-03-12')
// 			.success(
// 				function(data) {
// 	   			$scope.news = data.response.results;
//    			});
// 		}

// 	}]);