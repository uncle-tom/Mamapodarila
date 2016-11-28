angular.module('MyStore').controller('createCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  createCtrl]);

function createCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('createCtrl')
}
