"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
// Group of specs or tests to execute 
describe("Banking Project Test", function () {
    // Switch to Alert, verify and close the Alert dialog box
    function VerifyAndCloseAlert(text) {
        var EC = ptor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.alertIsPresent(), 4000, "Alert Not Found");
        var alert = protractor_1.browser.switchTo().alert();
        var alertText = alert.getText();
        //alertText.then(function(txt)){
        //log4jsconfig.log().debug(txt);
        //console.log().debug(txt);
        //})
        protractor_1.browser.sleep(3000);
        expect(alertText).toContain(text);
        alert.accept();
    }
    //Get application URL before each test function
    beforeEach(function () {
        protractor_1.browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
    });
    // verify application URL
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
        });
    });
    // 1st Test to Add Customer1 details
    it("Add Customer1", function () {
        protractor_1.element(protractor_1.by.buttonText('Bank Manager Login')).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.buttonText('Add Customer')).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.model("fName")).sendKeys("Manas");
        protractor_1.element(protractor_1.by.model("lName")).sendKeys("Panigrahi");
        protractor_1.element(protractor_1.by.model('postCd')).sendKeys('12345');
        protractor_1.element(protractor_1.by.className('btn btn-default')).click();
        // Verify and Close Alert dialog box
        VerifyAndCloseAlert("Customer added successfully");
    });
    // Test to Add Customer2 details
    // it("Add Customer2", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     element(by.buttonText('Add Customer')).click();
    //     browser.sleep(3000);
    //     element(by.model("fName")).sendKeys("Vamsi");
    //     element(by.model("lName")).sendKeys("Davu");
    //     element(by.model('postCd')).sendKeys('123456');
    //     element(by.className('btn btn-default')).click();
    //Verify and close Alert dialogbox
    //     VerifyAndCloseAlert("Customer added successfully");
    // })
    // Test to Add Customer3 details
    // it("Add Customer3", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     element(by.buttonText('Add Customer')).click();
    //     browser.sleep(3000);
    //     element(by.model("fName")).sendKeys("Abhai");
    //     element(by.model("lName")).sendKeys("Kumar");
    //     element(by.model('postCd')).sendKeys('1234567');
    //     element(by.className('btn btn-default')).click();
    //Verify and Close Alert dialog box
    //     VerifyAndCloseAlert("Customer added successfully");
    // })
    // 2nd Test to Open customer Account
    it("Open Accounts", function () {
        protractor_1.element(protractor_1.by.buttonText('Bank Manager Login')).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.buttonText('Open Account')).click();
        //element(by.className('btn btn-lg tab btn-primary')).click();
        var customers = protractor_1.element(protractor_1.by.model('custId'));
        var options = customers.all(protractor_1.by.tagName('option'));
        options.then(function (items) {
            //log4jconfig.log().debug("Dropdown option size" + items.length);
            console.log("Dropdown option size :" + items.length);
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    //console.log().debug(txt);
                    console.log(txt);
                    if (txt == "Manas Panigrahi") {
                        console.log("Item found on the list");
                        items[i].click();
                    }
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
        // Select Curreny value
        protractor_1.element(protractor_1.by.model('currency')).$('[value="Dollar"]').click(); //$=by.css (Single Column)
        protractor_1.element(protractor_1.by.buttonText("Process")).click();
        protractor_1.browser.sleep(4000);
        // Verify and close alert dialogbox
        VerifyAndCloseAlert("Account created");
    });
    //Verify customer details in table 
    it("Customers Table", function () {
        protractor_1.element(protractor_1.by.buttonText('Bank Manager Login')).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.buttonText('Customers')).click();
        var rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        protractor_1.browser.sleep(10000);
        // Check Customer details and delete customer from table
        rows.each(function (row) {
            var _a;
            var cells = (_a = row) === null || _a === void 0 ? void 0 : _a.$$('td'); //all(by.css)(Multiple Columns)
            cells.get(0).getText().then(function (txt) {
                if (txt == 'Manas') {
                    cells.get(4).$('button').click();
                    console.log('Customer details deleted from table successfully');
                }
            });
        });
    });
    protractor_1.browser.sleep(10000);
});
