var studentCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'Student', ServiceLocator);

    $scope.preload = function () {
        ServiceLocator.http.get('Student/preload', null, function (response) {
            $scope.clist = response.clist;
        })
    }

    // Display page
    $scope.search();

    //Preload Data
    $scope.preload();
}

app.controller("studentCtl", studentCtl)