/**
 * Created by Davide on 18/08/2016.
 */
(function() {
  controller.$inject =['$http','$log'];
  function controller ($http,$log){
    $log.debug('myProfile');
    var self =this;

    this.today = function() {
      this.dt = new Date();
    };
    this.today();

    this.clear = function() {
      this.dt = null;
    };

    this.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    this.popup = {
      opened: false
    };
    this.open = function() {
      this.popup.opened = true;
    };

    this.setDate = function(year, month, day) {
      this.dt = new Date(year, month, day);
    };


  }
  angular.module('cinguettio').controller('myProfileController',controller);
})();
