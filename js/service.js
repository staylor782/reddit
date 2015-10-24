app.service('FirebaseService', function($http, $q) {
    
    var endPoint = 'https://devmtn.firebaseio.com/posts.json';
    
    var dafur = $q.defer();
    
    this.getPosts = function() {
        $http ({
            method: 'GET',
            url: endPoint
        })
    };
});