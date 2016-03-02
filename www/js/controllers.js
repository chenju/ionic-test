/*angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicLoading) {

    $ionicLoading.hide()
    $scope.showLoading = function() {
    $ionicLoading.show(); //options default to values in $ionicLoadingConfig
  };
    

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$ionicLoading,$ionicSideMenuDelegate,$ionicScrollDelegate) {

  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.toggle = function() {
    //$ionicSideMenuDelegate.canDragContent(false)
    $ionicScrollDelegate.getScrollView().__enableScrollY = false
    var scrollPos = $ionicScrollDelegate.getScrollPosition().top
    console.log(scrollPos)
  };

  $scope.toggle1 = function() {
    $ionicSideMenuDelegate.canDragContent(true)
  };

  $scope.disableVerticalScrolling = function() {
    var scrollPos = $ionicScrollDelegate.getScrollPosition().top;
    $ionicScrollDelegate.scrollTo(0, scrollPos, false);
}
  

  $scope.settings = {
    enableFriends: true
  };
});*/
