
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
//     var objectWithGetter =   {
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
//     return objectWithGetter;
// }]);

// var news = singleNews.sendRequest();