angular.module('MyStore').controller('priceCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams',
  priceCtrl]);

function priceCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams) {	
  console.log('price')
  $scope.project = 'vizitka';
  $scope.seo = 'seoaudit';
  $scope.smm = 'facebook';
}
