var meritListCtl = function ($scope, ServiceLocator) {
 //initialize scope
 initScope($scope, 'Marksheet', ServiceLocator);

 
    //Display list page
    $scope.getMeritList();

    //Preload Data
  //   $scope.preload();
}
app.controller("meritListCtl", meritListCtl)