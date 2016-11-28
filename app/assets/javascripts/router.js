angular
  .module('MyStore', [
    'ngAnimate', 
    'ui.router', 
    'ngMaterial',     
    'ngStorage', 
    'templates',
    'ngResource', 
    'ng-token-auth', 
    'Devise',
    'xeditable',
    // 'yaru22.angular-timeago',
    'pascalprecht.translate',
    'youtube-embed',
    'ngSanitize',
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$translateProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
      $stateProvider
      .state('home', {
        url: '/', 
        controller: 'mainCtrl',
        templateUrl: 'main/index.html'
      })
      .state('about', {
        url: '/about', 
        controller: 'mainCtrl',
        templateUrl: 'main/about.html'
      })
      .state('portfolio', {
        url: '/portfolio', 
        controller: 'portfolioCtrl',
        templateUrl: 'portfolio/index.html'
      })
      .state('price', {
        url: '/price', 
        controller: 'priceCtrl',
        templateUrl: 'price/index.html'
      })
      .state('contact', {
        url: '/contact', 
        controller: 'mainCtrl',
        templateUrl: 'main/contact.html'
      })
      .state('create', {
        url: '/create', 
        controller: 'createCtrl',
        templateUrl: 'create/index.html'
      })
      .state('seo', {
        url: '/seo', 
        controller: 'seoCtrl',
        templateUrl: 'seo/index.html'
      })
      .state('smm', {
        url: '/smm', 
        controller: 'smmCtrl',
        templateUrl: 'smm/index.html'
      });
      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $locationProvider.hashPrefix('!');

      $translateProvider.translations('en', {
        'ADMIN_WELCOME': 'Welcome!',
      });
   
      $translateProvider.translations('ru', {
        'ADMIN_WELCOME': 'Добро пожаловать!',
      });

      $translateProvider.translations('ua', {
        'ADMIN_WELCOME': 'Ласкаво просимо!',
      });
   
      $translateProvider.preferredLanguage('en');
    }
    
  ]);
