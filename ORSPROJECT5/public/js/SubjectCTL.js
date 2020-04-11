var subjectCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'Subject', ServiceLocator);

    $scope.preload = function () {
        ServiceLocator.http.get('Subject/preload', null, function (response) {
            $scope.clist = response.clist;
            $scope.slist = response.slist;
        })
    }

    // Display page
    $scope.search();

    //Preload Data
    $scope.preload();
}

app.controller("subjectCtl", subjectCtl)