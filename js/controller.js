app.controller('PostsController', function($scope, FirebaseService) {
    
    var getPosts = function() {
        FirebaseService.    
    }.then(function(response) {
        $scope.posts = response;
    });
});