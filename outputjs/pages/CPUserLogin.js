"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var alert_1 = require("../utils/alert");
//import * as prop from "../testdata/prop.json";
var CPUserLogin = /** @class */ (function () {
    function CPUserLogin() {
        this.cpuserprop = require("../testdata/cpuserprop");
        // Drop Down and Options
        this.Customers = protractor_1.element(protractor_1.by.model('custId'));
        this.options = this.Customers.all(protractor_1.by.tagName('option'));
        // Select Customer
        //CustID = element(by.model('custId')); //$=by.css (Single Column)
        this.Login = protractor_1.element(protractor_1.by.buttonText("Login"));
        //name = (<any>prop).customers.firstname + " " +(<any>prop).customers.lastname;
        this.name = this.cpuserprop.customers.firstname + " " + this.cpuserprop.customers.lastname;
    }
    //Click on Login Button
    CPUserLogin.prototype.ClickLoginBtn = function () {
        this.Login.click();
        protractor_1.browser.sleep(3000);
        alert_1.alert.VerifyAndCloseAlert("Customer Logged In");
    };
    return CPUserLogin;
}());
exports.CPUserLogin = CPUserLogin;
