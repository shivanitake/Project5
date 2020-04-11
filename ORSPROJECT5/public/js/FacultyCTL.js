var facultyCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'Faculty', ServiceLocator);

    $scope.preload = function () {
        ServiceLocator.http.get('Faculty/preload', null, function (response) {
            $scope.clist = response.clist;
            $scope.slist = response.slist;  
            
        })

    }   

    // Display page
    $scope.search();

    //Preload Data
    $scope.preload();
}

app.controller("facultyCtl", facultyCtl)