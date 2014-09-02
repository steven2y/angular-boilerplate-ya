exports.config = {
// The address of a running selenium server.
    seleniumServerJar: '../../../selenium-server-standalone-2.42.2.jar',
    seleniumPort: 4444,

    capabilities: {
        'browserName': 'firefox'
    },
    allScriptsTimeout: 30000,

// Spec patterns are relative to the location of this config.
    specs: [
        '../features/main/*'
    ],
    params: {
        server: 'http://localhost:3000'
    },
// ----- The test framework -----
//
// Jasmine and Cucumber are fully supported as a test and assertion framework.
// Mocha has limited beta support. You will need to include your own
// assertion framework if working with mocha.
    framework: 'cucumber',
// ----- Options to be passed to cucumber -----
    cucumberOpts: {
// Require files before executing the features.
        require: '../features/step_definitions',
// Only execute the features or scenarios with tags matching @dev.
// This may be an array of strings to specify multiple tags to include.
//tags: ['~@stubbed', '~@contentEditable'],
// How to format features (default: progress)
        format: 'pretty'
    }
};