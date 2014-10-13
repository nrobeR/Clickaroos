angular.module('clickaroos.dashboard')

.factory('Dashboard', ['$http', '$q', 'appServerUrl', function($http, $q, appServerUrl) {
  var factory = {};

  factory.getRecentCampaigns = function() {
    var deferred = $q.defer();

    $http.get(appServerUrl + '/api/campaigns/recent')
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        deferred.reject(new Error(data));
    });

    return deferred.promise;
  };

  return factory;
}]);