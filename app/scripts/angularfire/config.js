angular.module('firebase.config', [])
  .constant('FBURL', 'https://blinding-torch-7192.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','github'])

  .constant('loginRedirectPath', '/login');
