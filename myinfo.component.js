(function () {
    'use strict';

    angular.module('RestaurantApp')
        .component('myinfo', {
            templateUrl: 'myinfo.template.html',
            controller: 'MyInfoController'
        });

    angular.module('RestaurantApp')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
        var $ctrl = this;
        $ctrl.user = UserService.getUser();

        if (!$ctrl.user) {
            $ctrl.message = "Not Signed Up Yet. Sign up Now!";
        } else {
            $ctrl.menuItem = $ctrl.user.menuItem;
        }
    }
})();
