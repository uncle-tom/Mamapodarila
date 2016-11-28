angular.module('MyStore').controller('seoCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  seoCtrl]);

function seoCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('seoCtrl')
}
