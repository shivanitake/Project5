var timetableCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'TimeTable', ServiceLocator);

    $scope.preload = function () {
        ServiceLocator.http.get('TimeTable/preload', null, function (response) {
            $scope.clist = response.clist;
            $scope.slist = response.slist; 
            $scope.semester = response.semester;
            $scope.examTime = response.examTime;
        })

    }

    // Display page
    $scope.search();

    //Preload Data
    $scope.preload();
}

app.controller("timetableCtl", timetableCtl)