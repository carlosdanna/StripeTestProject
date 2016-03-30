(function () {
    angular.module("productsModule")
        .controller("productsViewController", ["$state", "ProductServices", "GENERAL_CONFIG", function ($state, ProductServices, GENERAL_CONFIG) {
            var vm = this;
            vm.products = [];
            var amount = 0;
            var checkout = StripeCheckout.configure({
                key: GENERAL_CONFIG.STRIPE_PBKEY,
                image: '',
                locale: 'auto',
                token: function (token) {
                    console.log(token);
                    var data = {};
                    data.id = token.id;
                    data.amount = amount;
                    ProductServices.PurchaseProducts(data);
                }
            });

            vm.initialize = function () {
                ProductServices.GetProducts().then(function (data) {
                    vm.products = data;
                });
            }

            vm.purchaseTicket = function (product) {
                console.log(product);
                
                
                amount = product.balance;
                console.log(product.balance);
                checkout.open({
                    name: 'TTB',
                    currency: "usd",
                    description: product.product,
                    amount: product.balance,
                    allowRememberMe: false
                });
            }

            vm.goToDetails = function () {

            }

        }]);
})()