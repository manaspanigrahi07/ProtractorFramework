"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
//import * as prop from "../testdata/prop.json";
var CustomersPage = /** @class */ (function () {
    function CustomersPage() {
        this.prop1 = require("../testdata/prop1");
        // Drop Down and Options
        this.rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        //fname = (<any>prop).customers.firstname;
        this.fname = this.prop1.customers.firstname;
    }
    CustomersPage.prototype.VerifyCustEntryAndDelete = function () {
        var fname = this.fname;
        this.rows.each(function (row) {
            var _a;
            var cells = (_a = row) === null || _a === void 0 ? void 0 : _a.$$('td'); //all(by.css)(Multiple Columns)
            //browser.sleep(3000);
            cells.get(0).getText().then(function (txt) {
                if (txt == fname) {
                    cells.get(4).$('button').click();
                    log4jsonconfig_1.log4jsconfig.Log().debug('Customer details deleted from table successfully');
                    //console.log('Customer details deleted from table successfully');
                }
            });
        });
    };
    return CustomersPage;
}());
exports.CustomersPage = CustomersPage;
