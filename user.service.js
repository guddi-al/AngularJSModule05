(function () {
    'use strict';

    angular.module('RestaurantApp')
        .service('UserService', UserService);

    function UserService() {
        var service = this;
        var user = null;

        service.saveUser = function (userInfo, menuItem) {
            userInfo.menuItem = menuItem;
            user = userInfo;
        };

        service.getUser = function () {
            return user;
        };
    }
})();
