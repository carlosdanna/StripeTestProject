(function () {
    angular.module("myApp")
        .controller('appController', ["$state", function ($state) {

            var vm = this;
            vm.test = "this should work";

    }]);
})();