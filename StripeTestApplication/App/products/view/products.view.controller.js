(function () {
    angular.module("productsModule")
        .controller("productsViewController", ["$state", function ($state) {
            var vm = this;
            vm.test = "hello world"
        }]);
})()