// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js



angular.module('starter', ['ionic', 'starter.services'])
    .constant('$ionicLoadingConfig', {
        template: 'Default Loading Template...'
    })
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    /*
    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

      $ionicConfigProvider.platform.android.tabs.position('bottom');

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/dash');*



    });*/

.config(['$stateProvider', '$urlRouterProvider','$ionicConfigProvider', function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

        //$ionicConfigProvider.views.transition('none');
        $stateProvider
            .state('root', {
                url: '/root',
                templateUrl: 'root.html',
                controller: 'RootPageController'
            })

        .state('fst', {
                url: '/fst',
                templateUrl: 'fst-abstract.html',
                abstract: true,
                controller: 'FstController'
            })
            .state('fst.home', {
                url: '/home',
                views: {
                    'fst': {
                        templateUrl: 'fst-home.html',
                        controller: 'FstHomePageController'
                    }
                }
            })
            .state('fst.first', {
                url: '/first',
                views: {
                    'fst': {
                        templateUrl: 'fst-first.html',
                        controller: 'FstFirstPageController'
                    }
                }
            })
            .state('fst.second', {
                url: '/second',
                views: {
                    'fst': {
                        templateUrl: 'fst-second.html',
                        controller: 'FstSecondPageController'
                    }
                }
            })
            .state('snd', {
                url: '/snd',
                templateUrl: 'snd-abstract.html',
                abstract: true,
                controller: 'SndController'
            })
            .state('snd.home', {
                url: '/home',
                views: {
                    'snd': {
                        templateUrl: 'snd-home.html',
                        controller: 'SndHomePageController'
                    }
                }
            })
            .state('snd.chat', {
                url: '/chat',
                views: {
                    'snd': {
                        templateUrl: 'snd-chat.html',
                        controller: 'SndChatPageController'
                    }
                }
            })
            .state('snd.chat-single', {
                url: '/chat-single',
                views: {
                    'snd': {
                        templateUrl: 'snd-chat-single.html',
                        controller: 'SndChatSinglePageController'
                    }
                }
            })
            .state('snd.drink', {
                url: '/drink',
                views: {
                    'snd': {
                        templateUrl: 'snd-drink.html',
                        controller: 'SndDrinkPageController'
                    }
                }
            })
            .state('snd.policy', {
                url: '/policy',
                views: {
                    'snd': {
                        templateUrl: 'snd-policy.html',
                        controller: 'SndPolicyPageController'
                    }
                }
            })

        $urlRouterProvider.otherwise('/root');
    }])
    .controller('RootPageController', function($scope, $ionicSideMenuDelegate) {})

.controller('NavController', function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    .controller('FstController', function($scope, $ionicSideMenuDelegate) {})
    .controller('FstHomePageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('FstFirstPageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('FstSecondPageController', function($scope, $ionicSideMenuDelegate) {})

.controller('SndController', function($scope, $ionicSideMenuDelegate) {})
    .controller('SndHomePageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('SndChatPageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('SndChatSinglePageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('SndDrinkPageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('SndPolicyPageController', function($scope, $ionicSideMenuDelegate) {})
