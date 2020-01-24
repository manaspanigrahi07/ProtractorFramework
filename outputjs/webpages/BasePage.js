"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.addCustTab = protractor_1.element(protractor_1.by.buttonText('Add Customer'));
        this.openAccTab = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.openCustTab = protractor_1.element(protractor_1.by.buttonText('Customers'));
    }
    BasePage.prototype.ClickAddCustTab = function () {
        this.addCustTab.click();
    };
    BasePage.prototype.ClickOpenAccTab = function () {
        this.openAccTab.click();
    };
    BasePage.prototype.ClickCustTab = function () {
        this.openCustTab.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
