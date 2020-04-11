/**
 * User Controller
 * @param {*} $scope 
 * @param {*} $localStorage 
 * @param {*} ServiceLocator 
 */
var myProfileCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'User', ServiceLocator, true);

    $scope.preload = function () {
        ServiceLocator.http.get('User/preload', null, function (response) {
            $scope.rolelist = response.rolelist;
        })
       
    }

    $scope.display = function (id) {
        ServiceLocator.http.get('User/myProfile',
            null, function (response) {
                $scope.form.success = response.success;
                if (response.success) {
                    $scope.form = response.result;
                }
            });
    }

        /**
     * Uploads User Picture 
     * 
     * @param {*} id 
     */
    $scope.uploadPic = function (id) {
        if (id && id > 0) {
            ServiceLocator.http.postMutipart('User/profilePic', $scope.files, { "id": id }, function (response) {
                console.log(response);
            })
        
        // else{
        //     ServiceLocator.http.postMutipart('User/profilePic', $scope.files, function (response) {
        //         console.log("inside");
        //     })
        }
    }

    $scope.display();
    $scope.preload();

}
app.controller("myProfileCtl", myProfileCtl);