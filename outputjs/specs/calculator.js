"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var xlReader_1 = require("../util/xlReader");
describe("Calculator Test", function () {
    //Get application URL before each test function
    beforeEach(function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    });
    // verify application URL
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
        });
    });
    // 1st Test "Add two numbers"
    // anonymous function dynamically declared at runtime, can accept inputs and returns outputs
    var TEST_DATA = xlReader_1.xlReader.read_from_excel('addInput');
    TEST_DATA.forEach(function (data) {
        it("Add two numbers", function () {
            protractor_1.element(protractor_1.by.model("first")).sendKeys(data.firstNumber);
            protractor_1.element(protractor_1.by.model("second")).sendKeys(data.secondNumber);
            protractor_1.element(protractor_1.by.model('operator')).click();
            protractor_1.element(protractor_1.by.xpath(".//option[@value= 'ADDITION']")).click();
            protractor_1.element(protractor_1.by.id("gobutton")).click();
            protractor_1.browser.sleep(3000);
            //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
            //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Correct expectation
            expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual(String(data.output)); //Correct expectation
        });
    });
    // 2nd Test "Subtract two numbers"
    it("Substract two numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("10");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('5'); //Correct expectation
    });
    // 3rd Test "Multiply two numbers"
    it("Multiply two numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("10");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('50'); //Correct expectation
    });
    // 4th Test "Devide two numbers"
    it("Devide two numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("10");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'DIVISION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('2'); //Correct expectation
    });
    // 5th Test "Modulo % of two numbers"
    it("Modulo % two numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("12");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model("operator")).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'MODULO']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('20'); //Correct expectation
    });
});
