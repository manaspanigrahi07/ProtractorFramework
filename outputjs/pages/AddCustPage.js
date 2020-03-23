"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import { log4jsconfig } from '../config/log4jsconfig';
var alert_1 = require("../utils/alert");
//import * as prop from "../testdata/prop.json";
var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage() {
        this.prop1 = require("../data/prop1");
        this.fname = protractor_1.element(protractor_1.by.model('fName'));
        this.lname = protractor_1.element(protractor_1.by.model("lName"));
        this.postalcode = protractor_1.element(protractor_1.by.model('postCd'));
        this.addcustomerbtn = protractor_1.element(protractor_1.by.className('btn btn-default'));
        // firstname = (<any>prop).customers.firstname;
        // lastname = (<any>prop).customers.lastname;
        // postcode = (<any>prop).customers.postalcode;
        this.firstname = this.prop1.customers.firstname;
        this.lastname = this.prop1.customers.lastname;
        this.postcode = this.prop1.customers.postalcode;
    }
    // AddCustomer(){
    //     //this.fname.sendKeys("Manas");
    //     //this.lname.sendKeys("Panigrahi");
    //     //this.postalcode.sendKeys("12345");
    //     this.fname.sendKeys(this.firstname);
    //     this.lname.sendKeys(this.lastname);
    //     this.postalcode.sendKeys(this.postcode);
    //     this.addcustomerbtn.click();
    //     browser.sleep(3000);
    //     alert.VerifyAndCloseAlert("Customer added");
    // }
    AddCustomerPage.prototype.AddCustomer = function (firstname, lastname, postalcode) {
        //this.fname.sendKeys("Manas");
        //this.lname.sendKeys("Panigrahi");
        //this.postalcode.sendKeys("12345");
        this.fname.sendKeys(this.firstname);
        this.lname.sendKeys(this.lastname);
        this.postalcode.sendKeys(this.postcode);
        this.addcustomerbtn.click();
        protractor_1.browser.sleep(3000);
        alert_1.alert.VerifyAndCloseAlert("Customer added");
    };
    return AddCustomerPage;
}());
exports.AddCustomerPage = AddCustomerPage;
