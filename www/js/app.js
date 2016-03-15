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

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        //$ionicConfigProvider.views.transition('none');
        $stateProvider
            .state('intro', {
                url: '/intro',
                templateUrl: 'intro.html',
                controller: 'RootPageController'
            })
            .state('intro.home', {
                url: '/home',
                views: {
                    'intro': {
                        templateUrl: 'introHome.html',
                        controller: 'IntroCtrl'
                    }
                }
            })
            .state('snd', {
                url: '/snd',
                templateUrl: 'snd-abstract.html',
                abstract: true,
                controller: 'SndController'/*,
                resolve: {
                    issuePosts: ['IssuePostService', function(IssuePostService) {
                        return IssuePostService.fetchIssuePosts(1);
                    }]
                }*/
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
                url: '/chat-single:postId',
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

        $urlRouterProvider.otherwise('/');
    }])
    .controller('RootPageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {


        $scope.data = {
            numViewableSlides: 0,
            slideIndex: 0,
            initialInstruction: true,
            secondInstruction: false,
            slides: [{
                    'template': 'firstSlide.html',
                    'viewable': true
                },

                {
                    'template': 'bonusSlide.html',
                    'viewable': false
                },

                {
                    'template': 'secondSlide.html',
                    'viewable': true
                },

                {
                    'template': 'thirdSlide.html',
                    'viewable': true
                }
            ]
        };

        var countSlides = function() {
            $scope.data.numViewableSlides = 0;

            _.forEach($scope.data.slides, function(slide) {
                if (slide.viewable === true) $scope.data.numViewableSlides++;
            })

            console.log($scope.data.numViewableSlides + " viewable slides");

        }

        countSlides();
        console.log("fuck" + $scope.data)

        // Called to navigate to the main app
        $scope.startApp = function() {
            $state.go('main');
        };
        $scope.next = function() {
            $ionicSlideBoxDelegate.next();
        };
        $scope.previous = function() {
            $ionicSlideBoxDelegate.previous();
        };

        $scope.showBonus = function() {
            var index = _.findIndex($scope.data.slides, {
                template: 'bonusSlide.html'
            });
            $scope.data.slides[index].viewable = true;
            countSlides();
            $scope.data.initialInstruction = false
            $scope.data.secondInstruction = true;

            $ionicSlideBoxDelegate.update();
        };

        // Called each time the slide changes
        $scope.slideChanged = function(index) {

            $scope.data.slideIndex = index;
        };



    })

.controller('NavController', function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
            $ionicSideMenuDelegate.canDragContent(true)

        };
    })
    .controller('FstController', function($scope, $ionicSideMenuDelegate) {})
    .controller('FstHomePageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('FstFirstPageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('FstSecondPageController', function($scope, $ionicSideMenuDelegate) {})

.controller('SndController', function($scope, $ionicSideMenuDelegate, IssuePostService) {
        //console.log(IssuePostService.issuePosts)

    })
    .controller('SndHomePageController', function($scope, $ionicSideMenuDelegate) {})
    .controller('SndChatPageController', function($scope, $ionicSideMenuDelegate, IssuePostService,$state) {


        $scope.hasmore = true;
        var currentPage=1


        /*IssuePostService.fetchIssuePosts(1).then(function(data) {

            if (data != '404') {
                
                $scope.posts = data
                IssuePostService.setPosts(data)
                console.log(data)
                run=false

            } else {
                console.log(data)
            }

        })*/

        $scope.view=function(n){
                
                $state.go("snd.chat-single",{postId:n});
                
            }

        $scope.doRefresh = function() {
    
            IssuePostService.fetchIssuePosts(1).then(function(data) {
                    $scope.posts = data
                    IssuePostService.setPosts(data)
                    run=false
                    console.log(run)
                })
                .finally(function() {
                    // Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                });  
        };

        $scope.loadMore = function() {
            var old = $scope.posts;
            if (old != undefined) {
                var next=currentPage+1;
                IssuePostService.fetchIssuePosts(next).then(function(data) {
                        run=false
                        $scope.posts = $scope.posts.concat(data);
                        IssuePostService.setPosts($scope.posts)
                        if (data == null || data.length == 0) {
                            console.log("结束");
                            $scope.hasmore = false;
                        } else {
                            currentPage+=1
                        }
                        run=false
                        console.log(run)

                    })
                    .finally(function() {
                        // Stop the ion-refresher from spinning
                        $scope.$broadcast('scroll.refreshComplete');
                    });

            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.doRefresh()
    })
    .controller('SndChatSinglePageController', function($scope, $ionicSideMenuDelegate, $rootScope,$stateParams,IssuePostService) {

        $scope.navfloat = true
         console.log(IssuePostService.getPosts())
        $scope.post= IssuePostService.getPosts()[$stateParams.postId]
        $scope.$on('$ionicView.enter', function() {
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function() {
            $ionicSideMenuDelegate.canDragContent(true);
            //$scope.navfloat = true
            //console.log($scope.navfloat)

        });

        $scope.onSwipeRight = function() {

            console.log('aaa')
        }

        $scope.shownav = function() {
            if (!$scope.navfloat) {
                $scope.navfloat = true
            } else {
                $scope.navfloat = false
            }


        }
    })
    .controller('SndDrinkPageController', function($scope, $ionicSideMenuDelegate) {
        $ionicSideMenuDelegate.canDragContent(true)
    })
    .controller('SndPolicyPageController', function($scope, $ionicSideMenuDelegate) {})
    .directive('dragBack', function($ionicGesture, $state) {
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {

                $ionicGesture.on('swipe', function(event) {

                    console.log('Got swiped!');
                    event.preventDefault();
                    window.history.back();

                }, elem);

            }
        }
    })
