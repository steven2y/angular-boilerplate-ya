
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\.spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}


require.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public',
    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        angular: 'vendor/angular/angular',
        'angular-route': 'vendor/angular-route/angular-route',
        'angularMock': 'vendor/angular-mocks/angular-mocks'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'ngRoute'
        },
        angularMock: {
            deps: ['angular'],
            exports: 'angularMock'
        }
    },

// ask Require.js to load these files (all our tests)
    deps: tests,
// start test run, once Require.js is done
    callback: window.__karma__.start
});