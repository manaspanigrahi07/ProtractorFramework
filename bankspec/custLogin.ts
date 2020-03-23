import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from '../pages/AddCustPage';
import { BasePage } from '../pages/BasePage';
import { OpenAccountPage } from '../pages/OpenAccountPage';
import { CustomersPage } from '../pages/CustomersPage';
import { log4jsconfig } from '../config/log4jsonconfig';
import { CustomerLogin } from '../pages/CustomerLogin';
//import * as prop from '../testdata/prop.json';

// Group of specs or tests to execute 
describe("Banking Project Test", function () {

    let prop1 = require("../testdata/prop1");

    let originalTimeout: any;
    beforeEach(function () {
        //browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
        //browser.get((<any>prop).appurl);
        browser.get(prop1.appurl);

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    })
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    // verify application url before test
    it("Verify application url", function () {
        expect(browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title 1:- " + txt);
            log4jsconfig.Log().debug("Browser Title 2:- " + txt);

        });
    })

    // application end-to-end flow test
    it("Verify Application Flow", function () {
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);

        // Click Add Customer tab
        new BasePage().ClickAddCustTab();

        //navigate to Add customer page
        let addcustpage = new AddCustomerPage();

        // Add customer details (name,postalcode etc)
        addcustpage.AddCustomer("firstname", "lastname", "postalcode");
        browser.sleep(3000);

        new BasePage().ClickAddCustTab();

        // Click Open Accounts tab
        new BasePage().ClickOpenAccTab();

        // Navigate to Open Account page
        let openaccpage = new OpenAccountPage();

        //Select Customer from dropdown
        openaccpage.SelectACustomer();

        //Select Currency from dropdown
        openaccpage.SelectDollar();
        browser.sleep(3000);

        //Click on Process button
        openaccpage.ClickProcessBtn();
        browser.sleep(3000);

        //new BasePage().ClickAddCustTab();
        new BasePage().ClickCustTab();
        browser.useAllAngular2AppRoots();
        browser.sleep(3000);

        // Click on Home button Go to Customer Login Page
        // Navigate to Open Account page
        let custlogin = new CustomerLogin();

        //Select Customer from dropdown
        custlogin.SelectACustomer("Manas Panigrahi");
        browser.sleep(3000);
        //let addcustpage = new AddCustomerPage();
        //Select Customer : Name
        // SelectCustomerName(){
        //     this.CustID.$('[value="Harry Potter"]').click();
        //     browser.sleep(3000);
        // }

        //custlogin.$('[value="Harry Potter"]').click();
        browser.sleep(3000);

        // Select Customer
        let Login = element(by.buttonText("Login"));
        //CustID = element(by.model('custId')); //$=by.css (Single Column)

        //Click on Login Button
        Login.click();
        browser.sleep(3000);


    })

});