(function () {
    angular.module("productsModule")
        .factory("ProductServices", productServices);

    function productServices($http, $q, GENERAL_CONFIG) {
        var productServices = {};

        var _getProducts = function () {
            var deferred = $q.defer();
            $http.get(GENERAL_CONFIG.BASE_URL + "/App/jsonFiles/Products.json")
                .success(function (data) {
                    return deferred.resolve(data);
                })
                .error(function (data) {
                    return deferred.resolve(data);
                });
            return deferred.promise;

        }

        productServices.GetProducts = _getProducts;
        return productServices;
    }

})()