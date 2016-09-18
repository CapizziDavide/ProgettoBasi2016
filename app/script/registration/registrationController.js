/**
 * Created by Davide on 18/08/2016.
 */
(function () {
  controller.$inject=['$http','$log'];
  function controller($http,$log) {
    var self = this;

    this.addUser = function () {
      $log.console('nome',this.user.name);
    }
  }
  angular
    .module('cinguettio')
    .controller('registrationController',controller);
})();
