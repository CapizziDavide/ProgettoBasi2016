/**
 * Created by Davide on 19/08/2016.
 */
(function() {
  controller.$inject =['$http','$log'];
  function controller ($http,$log){
    var self =this;
    $log.debug('following');
    self.followersList=[];
      this.init=function () {
        $http.get('mock/followersList.json').then( function (response) {
            self.followersList.push(response.data);
            return self.followersList;
            $log.debug(response.data);
          }
        );
        $log.debug('list:',self.followersList);
      }
      this.init();


  }
  angular.module('cinguettio').controller('followingController',controller);
})();
