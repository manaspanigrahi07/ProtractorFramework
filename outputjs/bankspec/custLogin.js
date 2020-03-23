"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustPage_1 = require("../pages/AddCustPage");
var BasePage_1 = require("../pages/BasePage");
var OpenAccountPage_1 = require("../pages/OpenAccountPage");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
var CustomerLogin_1 = require("../pages/CustomerLogin");
//import * as prop from '../testdata/prop.json';
// Group of specs or tests to execute 
describe("Banking Project Test", function () {
    var prop1 = require("../testdata/prop1");
    var originalTimeout;
    beforeEach(function () {
        //browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
        //browser.get((<any>prop).appurl);
        protractor_1.browser.get(prop1.appurl);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    // verify application url before test
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title 1:- " + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title 2:- " + txt);
        });
    });
    // application end-to-end flow test
    it("Verify Application Flow", function () {
        protractor_1.element(protractor_1.by.buttonText('Bank Manager Login')).click();
        protractor_1.browser.sleep(3000);
        // Click Add Customer tab
        new BasePage_1.BasePage().ClickAddCustTab();
        //navigate to Add customer page
        var addcustpage = new AddCustPage_1.AddCustomerPage();
        // Add customer details (name,postalcode etc)
        addcustpage.AddCustomer("firstname", "lastname", "postalcode");
        protractor_1.browser.sleep(3000);
        new BasePage_1.BasePage().ClickAddCustTab();
        // Click Open Accounts tab
        new BasePage_1.BasePage().ClickOpenAccTab();
        // Navigate to Open Account page
        var openaccpage = new OpenAccountPage_1.OpenAccountPage();
        //Select Customer from dropdown
        openaccpage.SelectACustomer();
        //Select Currency from dropdown
        openaccpage.SelectDollar();
        protractor_1.browser.sleep(3000);
        //Click on Process button
        openaccpage.ClickProcessBtn();
        protractor_1.browser.sleep(3000);
        //new BasePage().ClickAddCustTab();
        new BasePage_1.BasePage().ClickCustTab();
        protractor_1.browser.useAllAngular2AppRoots();
        protractor_1.browser.sleep(3000);
        // Click on Home button Go to Customer Login Page
        // Navigate to Open Account page
        var custlogin = new CustomerLogin_1.CustomerLogin();
        //Select Customer from dropdown
        custlogin.SelectACustomer("Manas Panigrahi");
        protractor_1.browser.sleep(3000);
        //let addcustpage = new AddCustomerPage();
        //Select Customer : Name
        // SelectCustomerName(){
        //     this.CustID.$('[value="Harry Potter"]').click();
        //     browser.sleep(3000);
        // }
        //custlogin.$('[value="Harry Potter"]').click();
        protractor_1.browser.sleep(3000);
        // Select Customer
        var Login = protractor_1.element(protractor_1.by.buttonText("Login"));
        //CustID = element(by.model('custId')); //$=by.css (Single Column)
        //Click on Login Button
        Login.click();
        protractor_1.browser.sleep(3000);
    });
});
