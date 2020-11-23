"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var webElementState_1 = require("../utils/webElementState");
var CPBasePage = /** @class */ (function () {
    function CPBasePage() {
        //home = element(by.buttonText('Home'));
        this.login = protractor_1.element(protractor_1.by.buttonText('Log on'));
        // ClickOpenAccTab() {
        //     webElementState.verifyElementState("Open Account");
        //     this.openAccTab.click();
        // }
        // ClickCustTab() {
        //     webElementState.verifyElementState("Customers")
        //     this.openCustTab.click();
        // }
    }
    // addCustTab = element(by.buttonText('Add Customer'));
    // openAccTab = element(by.buttonText('Open Account'));
    // openCustTab = element(by.buttonText('Customers'));
    CPBasePage.prototype.CPUserLogin = function () {
        // Click on Login Button
        webElementState_1.webElementState.verifyElementState("Login");
        this.login.click();
    };
    return CPBasePage;
}());
exports.CPBasePage = CPBasePage;
