(function () {
    angular.module("myApp")
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            

            $stateProvider
                .state('main', {
                    url: "/",
                    templateUrl: "App/app.tmpl.html",
                    controller: "appController",
                    controllerAs: 'vm'
                })
                .state('view-products', {
                    url: "/products",
                    templateUrl: "App/products/view/products.view.tmpl.html",
                    controller: "productsViewController",
                    controllerAs: 'vm'
                })
                
                
        });
})()