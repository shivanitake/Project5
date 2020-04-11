var getmarksheetCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'Marksheet', ServiceLocator);

    // $scope.preload = function () {
    //     ServiceLocator.http.get('Marksheet/preload', null, function (response) {
    //         $scope.studentList = response;
    //     })
    // }


    // Display page
     $scope.displayRollNo();
    //$scope.search();
    //$scope.getMarksheet();

    // //Preload Data
    //  $scope.preload();
}
app.controller("getmarksheetCtl", getmarksheetCtl)
