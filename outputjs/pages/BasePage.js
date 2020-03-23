"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var webElementState_1 = require("../utils/webElementState");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.home = protractor_1.element(protractor_1.by.buttonText('Home'));
        this.custLogin = protractor_1.element(protractor_1.by.buttonText('Customer Login'));
        this.addCustTab = protractor_1.element(protractor_1.by.buttonText('Add Customer'));
        this.openAccTab = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.openCustTab = protractor_1.element(protractor_1.by.buttonText('Customers'));
    }
    BasePage.prototype.CustomerLogin = function () {
        //Click on Home Button
        webElementState_1.webElementState.verifyElementState("Home");
        this.home.click();
        // Click on Cuctomer Login Button
        webElementState_1.webElementState.verifyElementState("Customer Login");
        this.custLogin.click();
    };
    BasePage.prototype.ClickAddCustTab = function () {
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
