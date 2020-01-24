"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustPage_1 = require("../webpages/AddCustPage");
var BasePage_1 = require("../webpages/BasePage");
var OpenAccountPage_1 = require("../webpages/OpenAccountPage");
var CustomersPage_1 = require("../webpages/CustomersPage");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
//import * as prop from '../testdata/prop.json';
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
    it("Launch url Check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title 1:- " + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title 2:- " + txt);
        });
    });
    it("Verify Application Flow", function () {
        protractor_1.element(protractor_1.by.buttonText('Bank Manager Login')).click();
        protractor_1.browser.sleep(3000);
        new BasePage_1.BasePage().ClickAddCustTab();
        var addcustpage = new AddCustPage_1.AddCustomerPage();
        addcustpage.AddCustomer("firstname", "lastname", "postalcode");
        protractor_1.browser.sleep(3000);
        new BasePage_1.BasePage().ClickAddCustTab();
        new BasePage_1.BasePage().ClickOpenAccTab();
        var openaccpage = new OpenAccountPage_1.OpenAccountPage();
        openaccpage.SelectACustomer();
        openaccpage.SelectDollar();
        protractor_1.browser.sleep(3000);
        openaccpage.ClickProcessBtn();
        protractor_1.browser.sleep(3000);
        //new BasePage().ClickAddCustTab();
        new BasePage_1.BasePage().ClickCustTab();
        protractor_1.browser.useAllAngular2AppRoots();
        protractor_1.browser.sleep(3000);
        new CustomersPage_1.CustomersPage().VerifyCustEntryAndDelete();
        protractor_1.browser.sleep(3000);
    });
    // it("Verify Application Flow2", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     new BasePage().ClickAddCustTab();
    //     let addcustpage = new AddCustomerPage();
    //     addcustpage.AddCustomer("firstname","lastname","postalcode");
    //     browser.sleep(3000);
    //     new BasePage().ClickAddCustTab();
    //     new BasePage().ClickOpenAccTab();
    //     let openaccpage = new OpenAccountPage();
    //     openaccpage.SelectACustomer();
    //     openaccpage.SelectDollar();
    //     browser.sleep(3000);
    //     openaccpage.ClickProcessBtn();
    //     browser.sleep(3000);
    //     //new BasePage().ClickAddCustTab();
    //     new BasePage().ClickCustTab();
    //     browser.useAllAngular2AppRoots();
    //     browser.sleep(3000);
    //     new CustomersPage().VerifyCustEntryAndDelete();
    //     browser.sleep(3000);
    // })
});
