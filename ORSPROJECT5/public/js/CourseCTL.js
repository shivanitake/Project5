var courseCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'Course', ServiceLocator);

    $scope.preload = function () {
        ServiceLocator.http.get('Course/preload', null,
            function (response) {
               
                $scope.clist = response.clist;
            })
    }


    //Display list page
    $scope.search();
    $scope.preload();

}
app.controller("courseCtl", courseCtl)
