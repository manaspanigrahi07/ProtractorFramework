"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
// Read User input data from Excel file
var webElementState = /** @class */ (function () {
    function webElementState() {
    }
    webElementState.verifyElementState = function (text) {
        // Is Element Present.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        protractor_1.element(protractor_1.by.buttonText("Add Customer")).isPresent().then(function (present) {
            console.log("is element present ? : " + present);
            log4jsonconfig_1.log4jsconfig.Log().debug("is element present ? : " + present);
        });
        //Is Element Displayed.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        protractor_1.element(protractor_1.by.buttonText("Add Customer")).isDisplayed().then(function (displayed) {
            console.log("is element displayed ? : " + displayed);
            log4jsonconfig_1.log4jsconfig.Log().debug("is element displayed ? : " + displayed);
        });
        //Is Element Enabled.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        protractor_1.element(protractor_1.by.buttonText("Add Customer")).isEnabled().then(function (enabled) {
            console.log("is element enabled ? : " + enabled);
            log4jsonconfig_1.log4jsconfig.Log().debug("is element enabled ? : " + enabled);
        });
        //Is Element Selected.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        protractor_1.element(protractor_1.by.buttonText("Add Customer")).isSelected().then(function (selected) {
            console.log("is element selected ? : " + selected);
            log4jsonconfig_1.log4jsconfig.Log().debug("is element selected ? : " + selected);
        });
        expect(protractor_1.element(protractor_1.by.buttonText('Add Customer')).getText()).toEqual('Add Customer'); //Correct expectation
    };
    return webElementState;
}());
exports.webElementState = webElementState;
