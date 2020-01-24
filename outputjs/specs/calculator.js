"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Calculator Test", function () {
    beforeEach(function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    });
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
        });
    });
    it("Add two numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("10");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model('operator')).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'ADDITION']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('15'); //Correct expectation
    });
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
    it("Modulo % two numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("12");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model("operator")).click();
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'MODULO']")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('200'); //Correct expectation
    });
});
