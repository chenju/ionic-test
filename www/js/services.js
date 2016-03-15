angular.module('starter.services', [])

.factory('IssuePostService', function($http, $q) {
    // Might use a resource here that returns a JSON array
    var issuePosts = {};
    //var restUrl = 'http://lumen.app/issues';
    var restUrl = 'rss_api/posts';
    return {

        getPosts:function(){
            return issuePosts
        },
        setPosts:function(data){
            issuePosts=data
        },

        fetchIssuePosts: function(pageId) {
            var self = this;
            var deferred = $q.defer();
            var run=false

            var req = {
                method: 'GET',
                url: restUrl+ '/' + pageId,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            };
            if(!run){
            $http(req).success(function(response) {
                run=false
                console.log(response)
                return deferred.resolve(response)
            }).error(
                function(data) {
                    return deferred.resolve('404')
                }
            )
          }
            return deferred.promise



            /*transformResponse: function(cnv) {
                var x2js = new X2JS();
                var aftCnv = x2js.xml_str2json(cnv);
                //return aftCnv;
                deferred.resolve(aftCnv);
            }*/
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
