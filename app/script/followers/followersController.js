/**
 * Created by Davide on 19/08/2016.
 */

(function() {
  controller.$inject =['$http','$log'];
  function controller ($http,$log){
    var self =this;
    $log.debug('followers');

    self.followersList=[];

    $http.get('mock/followersList.json').then( function (response) {
      self.followersList.push(response.data);
      return self.followersList;
      }
    );
    $log.debug(self.followersList);
  }
  angular.module('cinguettio').controller('followersController',controller);
})();
