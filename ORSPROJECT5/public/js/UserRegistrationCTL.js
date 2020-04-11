/**
 * Forgot Password Controller

 * @param {*} $scope 
 * @param {*} ServiceLocator 
 */
var userRegistrationCtl = function ($scope, ServiceLocator) {

    //initialize scope
    initScope($scope, 'User', ServiceLocator, true);

    $scope.submit = function () {
        ServiceLocator.http.post(`auth/register`, $scope.form, function (response) {
            $scope.form.show = true;
            $scope.form.success = response.success;
            $scope.form.message = response.result;
        });
    }

    $scope.display = function () {
        $scope.resetForm();
    }

    $scope.display();

}
app.controller("userRegistrationCtl", userRegistrationCtl);