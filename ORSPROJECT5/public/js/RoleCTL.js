var roleCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'Role', ServiceLocator);

    $scope.preload = function () {
        ServiceLocator.http.get('Role/preload', null, function (response) {
            $scope.roleList = response;
        })
    }

    //Display list page
    $scope.search();

    //Preload Data
    $scope.preload();

}
app.controller("roleCtl", roleCtl)