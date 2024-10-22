(function () {
    'use strict';

    angular.module('RestaurantApp')
        .component('signup', {
            templateUrl: 'signup.template.html',
            controller: 'SignUpController'
        });

    angular.module('RestaurantApp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService', '$http'];
    function SignUpController(UserService, $http) {
        var $ctrl = this;
        $ctrl.user = {};

        $ctrl.submit = function () {
            if ($ctrl.signupForm.$valid) {
                var menuUrl = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + $ctrl.user.menuNumber.charAt(0) + '/menu_items/' + ($ctrl.user.menuNumber.slice(1) - 1) + '.json';
                $http.get(menuUrl).then(function (response) {
                    if (response.data) {
                        UserService.saveUser($ctrl.user, response.data);
                        $ctrl.successMessage = "Your information has been saved";
                        $ctrl.errorMessage = "";
                    } else {
                        $ctrl.errorMessage = "No such menu number exists";
                        $ctrl.successMessage = "";
                    }
                });
            }
        };
    }
})();
