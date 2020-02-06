"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var xlReader_1 = require("../util/xlReader");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
describe("Calculator Test", function () {
    //Get application URL before each test function
    beforeEach(function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    });
    // verify application URL
    log4jsonconfig_1.log4jsconfig.Log().debug("Verifying Application Url");
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
        //log4jsconfig.Log().debug("Browser Title :-" +browser.getTitle());
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    });
    // 1st Test "Add two numbers"
    // anonymous function dynamically declared at runtime, can accept inputs and returns outputs
    var TEST_DATA = xlReader_1.xlReader.read_from_excel('addInput');
    TEST_DATA.forEach(function (data) {
        var first = data.firstNumber;
        var second = data.secondNumber;
        var exceptedOutput = data.output;
        it("Add two numbers (" + first + " + " + second + " = ?)", function () {
            log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to add two numbers (" + first + " + " + second + " = ?)");
            protractor_1.element(protractor_1.by.model("first")).sendKeys(first);
            protractor_1.element(protractor_1.by.model("second")).sendKeys(second);
            protractor_1.element(protractor_1.by.model('operator')).click();
            protractor_1.element(protractor_1.by.xpath(".//option[@value= 'ADDITION']")).click();
            protractor_1.element(protractor_1.by.id("gobutton")).click();
            protractor_1.browser.sleep(3000);
            //expect<any>(element(by.binding('latest')).getText()).toEqual('10'); //Incorrect expectation
            //expect<any>(element(by.binding('latest')).getText()).toEqual('20'); //Correct expectation
            expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual(String(exceptedOutput)); //Correct expectation
            log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed... Added two numbers.. Verified the Output (" + first + " + " + second + " =" + exceptedOutput + ")");
        });
    });
    // 2nd Test "Subtract two numbers"
    it("Substract two number", function () {
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Substract two numbers");
        protractor_1.element(protractor_1.by.model("first")).sendKeys('10');
        protractor_1.element(protractor_1.by.model("second")).sendKeys('5');
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('5'); //Correct expectation
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed... Substract two numbers.. Verified the Output ('5')");
    });
    // 3rd Test "Multiply two numbers"
    it("Multiply two numbers", function () {
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Multiply two numbers ");
        protractor_1.element(protractor_1.by.model("first")).sendKeys('10');
        protractor_1.element(protractor_1.by.model("second")).sendKeys('5');
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('50'); //Correct expectation
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed... Multiply two numbers.. Verified the Output ('50')");
    });
    // 4th Test "Devide two numbers"
    it("Devide two numbers", function () {
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Devide two numbers ");
        protractor_1.element(protractor_1.by.model("first")).sendKeys('15');
        protractor_1.element(protractor_1.by.model("second")).sendKeys('5');
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'DIVISION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('3'); //Correct expectation
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed... Devide two numbers.. Verified the Output ('3')");
    });
    // 5th Test "Modulo % of two numbers"
    it("Modulo % two numbers", function () {
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Modulo(%) two numbers ");
        protractor_1.element(protractor_1.by.model("first")).sendKeys('12');
        protractor_1.element(protractor_1.by.model("second")).sendKeys('5');
        protractor_1.element(protractor_1.by.model("operator")).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'MODULO']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('20'); //Correct expectation
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed... Modulo(%) two numbers.. Verified the Output ");
    });
});
