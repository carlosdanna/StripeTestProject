(function () {
    angular.module("productsModule")
        .factory("ProductServices", productServices);

    function productServices($http, $q, GENERAL_CONFIG) {
        var productServices = {};

        var _getProducts = function ()
        {
            var deferred = $q.defer();
            $http.get(GENERAL_CONFIG.BASE_URL + "App/jsonFiles/Products.json")
                .success(function (data) {
                    return deferred.resolve(data);
                })
                .error(function (data) {
                    return deferred.resolve(data);
                });
            return deferred.promise;

        }

        var _purchaseProducts = function (data)
        {
            var deferred = $q.defer();
            $http.post(GENERAL_CONFIG.BASE_URL + "PostCCPayment",data)
                .success(function (data) {
                    return deferred.resolve(data);
                })
                .error(function (data) {
                    return deferred.resolve(data);
                });
            return deferred.promise;
        }

        productServices.GetProducts = _getProducts;
        productServices.PurchaseProducts = _purchaseProducts;
        return productServices;
    }

})()