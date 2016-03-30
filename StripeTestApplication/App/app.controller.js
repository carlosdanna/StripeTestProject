(function () {
    angular.module("myApp")
        .controller('appController', ["$state", "GENERAL_CONFIG", function ($state, GENERAL_CONFIG) {

            var vm = this;
            vm.test = "this should work";

    }]);
})();