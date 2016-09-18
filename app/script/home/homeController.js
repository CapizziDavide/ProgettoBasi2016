/**
 * Created by Davide on 11/07/2016.
 */
(function() {
  controller.$inject =['$http','$log'];
  function controller ($http,$log){
    var self =this;
    $log.debug('home');

    this.init=function () {
      this.flagCinguettio=0;
    }
      this.init();
  }
  angular.module('cinguettio').controller('homeController',controller);
})();
