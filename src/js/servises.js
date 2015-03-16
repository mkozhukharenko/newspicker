
var newspickerServices = angular.module('newspickerServices', ['ngResource']);

newspickerServices.factory('NewsList', ['$resource',
  function($resource){
    return $resource('http://content.guardianapis.com/:searchOrId?'+
            'api-key=:apiKey&' + 
            'show-fields=:showFields&' +
            // 'page-size=:pageSize&' +
            'from-date=:fromDate&'+
            'to-date=:toDate&', 
            {}, {
        get: {method:'GET', params:{ 
            searchOrId: 'search',
            apiKey:'qfz35s8d5vk4xwm237brcfzw',
            showFields: 'headline,standfirst,main,shortUrl,firstPublicationDate,thumbnail,trailText,sectionName',
            // pageSize: '10',
            fromDate: '2015-03-12',
            toDate: '2015-03-12'
        }, isArray:false}
    });
  }]);


// newspickerServices.factory('singleNews', ['$http', function ($http) {
//     return  {
//         sendRequest: function (id, callback) {
//             $http.get('http://content.guardianapis.com/'+ id + 
// 					'?api-key=qfz35s8d5vk4xwm237brcfzw&show-related-content=true'+
// 					'&show-fields=headline,trailText,main,firstPublicationDate,body, '+
// 					'publication,shortUrlall', { cache: true}).success(function(data) {
//             	var news = data.response.content;
//               	callback(news);
//             });
//           }
//     };
// }]);


// !!!!!!!! --- servise for http request
// newspickerServices.factory('getNewsService', ['$http', function ($http) {
//     var newsGetter = {
//         date: 0,
//         news: undefined,
//         sendRequest: function (date) {
//             return $http.get('http://content.guardianapis.com/search?' +
//                 'api-key=qfz35s8d5vk4xwm237brcfzw&'+
//                 'show-fields=headline,standfirst,main,shortUrl,firstPublicationDate,thumbnail,trailText&' + 
//                 'page-size=10&' +
//                 'from-date=' + date + '&' +
//                 'to-date=' + date + '').then(function (response) {
//                      // console.log('response.data.response',response.data.response);
//                      this.news = response.data.response;
//                      return response.data.response;
//                 });
//         }
//     };
//     return newsGetter;
// }]);




// newspickerServices.service('getNewsService', function(){
// 	this.getNewsFlat = false;    

//     this.alive = false;
// 	this.weatherChange = function(weather) {
//     	this.alive = (weather.status == "thunderstorm")
//     };

// });

// newspickerServices.controller("MadScientistCtrl", ["$scope", "getNewsService", function($scope, getNewsService) {
//       $scope.alive = Monster.alive;
//     }]);

