angular.module('MyStore').controller('productCtrl', 
  ['$scope', '$state', '$http', '$localStorage', 
  '$sessionStorage', 'Auth', '$stateParams', 'Product', 'Category','FileUploader',
  productCtrl]);

function productCtrl($scope, $state, $http, $localStorage, $sessionStorage, Auth, $stateParams, Product, Category, FileUploader) {	
  if($stateParams.id) {
  	$http.get('/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
      $scope.product = data;

      $scope.anotherGoodOne = $scope.product.url_video;
      console.log('url youtube', $scope.anotherGoodOne )
      
      $scope.setImage($scope.product.photos[0].image.url);
      $scope.product.categories_ids = [];
      $($scope.product.categories).map(function(el){
        $scope.product.categories_ids.push(this.id);
      });
    });
  }

  $scope.customCompare = function(v1, v2) {
    console.log('customCompare', v1, v2);
    if(v1.value.indexOf('T') > 0) {
      // Compare strings alphabetically, taking locale into account
      return v1.value.localeCompare(v2.value);
    } else {
      return parseFloat(v1.value) < parseFloat(v2.value) ? -1 : 1;
    }
  };

  Product.query({}, function(data){
    $scope.products = data;
  });

  Category.query({}, function(data){
    $scope.categories = data;
  });

	$scope.setImage = function setImage(imageUrl) {
    $scope.mainImageUrl = imageUrl;
    console.log($scope.mainImageUrl);
  };  

  $scope.product = new Product();

  $scope.productDel = function(product_id){
    Product.delete({id: product_id});
  }

  $scope.exists_cat = function(cat_id){
    if(!$scope.product.categories_ids) return false;

    return ($scope.product.categories_ids.indexOf(cat_id) != -1);
  }

  $scope.toggle_cat = function(cat_id){
    var indx = $scope.product.categories_ids.indexOf(cat_id);
    if(!$scope.exists_cat(cat_id)) {
      $scope.product.categories_ids.push(cat_id);
    } else {
      $scope.product.categories_ids.splice(indx,1);
    }
  }

  var uploader = $scope.uploader = new FileUploader({});

  $scope.productEdit = function(product_id){
    console.log('productEdit');
    Product.update({ product: $scope.product, id: $scope.product.id }, function(resp){
      uploader.url = '/products/'+$scope.product.id+'/photos';

      $.map(uploader.queue, function(file_obj) {
        file_obj.url = '/products/'+$scope.product.id+'/photos';
      })
      
      uploader.onCompleteAll = function() {
        
        $state.go('editproduct', {id: $scope.product.id});
      };

      uploader.uploadAll();
      $state.go('adminproduct');
    });
  }
  
  $scope.images = [
    {
      url:"https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/13227725_572348286259991_2582891693683454351_o.jpg"
    }
  ]  

  $scope.predicate = 'price';
  $scope.reverse = true;

  $scope.$on('ngCart:itemAdded', function(event, item) {
    console.log('added', item);
  });
}
