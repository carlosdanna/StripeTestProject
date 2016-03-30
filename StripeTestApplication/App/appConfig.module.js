(function () {
    angular.module("AppConfig", [])
        .constant('GENERAL_CONFIG', {
            'APP_NAME':     'STRIPE_TEST_PROJECT',
            'APP_VERSION':  '0.0.0',
            'BASE_URL':     'http://localhost:50544/',
            'STRIPE_PBKEY': 'pk_test_Hu8z1YdrihyLyaGeuxEiA67o',
        });
})()