(function () {
    angular.module("productsModule")
        .controller("productsViewController", ["$state", "ProductServices", function ($state, ProductServices) {
            var vm = this;
            vm.products = [];

            vm.initialize = function () {
                ProductServices.GetProducts().then(function (data) {
                    vm.products = data;
                });
            }

            vm.purchaseTicket = function () {

            }

            vm.goToDetails = function () {

            }

        }]);
})()