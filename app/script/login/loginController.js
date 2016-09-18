/**
 * Created by Davide on 11/07/2016.
 */
(function() {
  controller.$inject =['$http','$log'];
  function controller ($http,$log){
    var self =this;
    this.loggingIn = false;
    this.errorMsg = false;
      $log.debug('login');

    this.loginFunction = function(){
      self.loggingIn =true;
      $log.debug('user',this.login.usr);
      $log.debug('pwd',this.login.pwd);
    }


  }
  angular.module('cinguettio').controller('loginController',controller);
})();
