"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
var alert_1 = require("../util/alert");
//import * as prop from "../testdata/prop.json";
var OpenAccountPage = /** @class */ (function () {
    function OpenAccountPage() {
        this.prop1 = require("../testdata/prop1");
        // Drop Down and Options
        this.Customers = protractor_1.element(protractor_1.by.model('custId'));
        this.options = this.Customers.all(protractor_1.by.tagName('option'));
        // Select Currency
        this.Currency = protractor_1.element(protractor_1.by.model('currency')); //$=by.css (Single Column)
        this.Process = protractor_1.element(protractor_1.by.buttonText("Process"));
        //name = (<any>prop).customers.firstname + " " +(<any>prop).customers.lastname;
        this.name = this.prop1.customers.firstname + " " + this.prop1.customers.lastname;
    }
    //Select Customer
    OpenAccountPage.prototype.SelectACustomer = function () {
        var name = this.name;
        this.options.then(function (items) {
            log4jsonconfig_1.log4jsconfig.Log().debug("Dropdown option size" + items.length);
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    log4jsonconfig_1.log4jsconfig.Log().debug(txt);
                    //console.log(txt);
                    if (txt == name) {
                        log4jsonconfig_1.log4jsconfig.Log().debug("Item found on the List");
                        //console.log("Item found on the list");
                        items[i].click();
                    }
                });
            };
            //console.log("Dropdown option size :" + items.length);
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
    };
    // Select Currency : Dollar
    OpenAccountPage.prototype.SelectDollar = function () {
        this.Currency.$('[value="Dollar"]').click();
        protractor_1.browser.sleep(3000);
    };
    //Click on Process Button
    OpenAccountPage.prototype.ClickProcessBtn = function () {
        this.Process.click();
        protractor_1.browser.sleep(3000);
        alert_1.alert.VerifyAndCloseAlert("Account created");
    };
    return OpenAccountPage;
}());
exports.OpenAccountPage = OpenAccountPage;
