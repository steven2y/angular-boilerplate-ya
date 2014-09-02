var expect = require('../support/chai').expect;
module.exports = function () {

    this.Given(/^I am on the Main site$/, function (next) {
        browser.driver.get('http://localhost:3000').then(next);


    });

    this.Then(/^I should see "(.*)" in the div "(.*)"$/, function (text, dataSelector, next) {
        expect($('[data-selector='+dataSelector+']').getText()).to.eventually.equal(text).notify(next);
    });

};