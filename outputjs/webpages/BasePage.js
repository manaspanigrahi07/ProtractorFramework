"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var webElementState_1 = require("../util/webElementState");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.addCustTab = protractor_1.element(protractor_1.by.buttonText('Add Customer'));
        this.openAccTab = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.openCustTab = protractor_1.element(protractor_1.by.buttonText('Customers'));
    }
    BasePage.prototype.ClickAddCustTab = function () {
        // // Is Element Present.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isPresent().then(function(present){
        //     console.log("is element present ? : " +present)
        //     log4jsconfig.Log().debug("is element present ? : " +present)
        // })
        // //Is Element Displayed.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isDisplayed().then(function(displayed){
        //     console.log("is element displayed ? : " +displayed)
        //     log4jsconfig.Log().debug("is element displayed ? : " +displayed)
        // })
        // //Is Element Enabled.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isEnabled().then(function(enabled){
        //     console.log("is element enabled ? : " +enabled)
        //     log4jsconfig.Log().debug("is element enabled ? : " +enabled)
        // })
        // //Is Element Selected.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isSelected().then(function(selected){
        //     console.log("is element selected ? : " +selected)
        //     log4jsconfig.Log().debug("is element selected ? : " +selected)
        // })
        // expect<any>(element(by.buttonText('Add Customer')).getText()).toEqual('Add Customer'); //Correct expectation
        // Element not present.
        //expect(element(by.binding('notPresent')).isPresent()).toBe(false);
        //expect<any>(element(by.binding('Add Customer')).getText()).toEqual('Add');
        //let elementName = this.addCustTab;
        webElementState_1.webElementState.verifyElementState("Add Customer");
        this.addCustTab.click();
        //this.addCustTab.click();
    };
    BasePage.prototype.ClickOpenAccTab = function () {
        webElementState_1.webElementState.verifyElementState("Open Account");
        this.openAccTab.click();
    };
    BasePage.prototype.ClickCustTab = function () {
        webElementState_1.webElementState.verifyElementState("Customers");
        this.openCustTab.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
