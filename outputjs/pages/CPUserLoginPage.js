"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import * as prop from "../testdata/prop.json";
var CPUserLoginPage = /** @class */ (function () {
    function CPUserLoginPage() {
        this.cpuserprop = require("../data/cpuserprop");
        // User Login details
        this.userName = protractor_1.element(protractor_1.by.id('mat-input-0'));
        this.userPassword = protractor_1.element(protractor_1.by.id('mat-input-1'));
        this.loginButton = protractor_1.element(protractor_1.by.buttonText('Log on'));
        this.username = this.cpuserprop.admin.username;
        this.password = this.cpuserprop.admin.password;
    }
    CPUserLoginPage.prototype.CPUserLogin = function (username, password) {
        this.userName.sendKeys(this.username);
        this.userPassword.sendKeys(this.password);
        //Click on Login Button
        this.loginButton.click();
        protractor_1.browser.sleep(5000);
        protractor_1.browser.getTitle().then(function (title) { return (console.log(title)); });
    };
    return CPUserLoginPage;
}());
exports.CPUserLoginPage = CPUserLoginPage;
