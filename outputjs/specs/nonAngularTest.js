"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Non Angular Application Test", function () {
    beforeEach(function () {
        //browser.ignoreSynchronization = true;
        global.isAngularSite(false);
        protractor_1.browser.get("http://qavalidation.com/demo/");
        protractor_1.browser.sleep(2000);
    });
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Demo : Practice test automation");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
        });
    });
    it("Add two numbers", function () {
        protractor_1.element(protractor_1.by.id("username")).sendKeys("Manas");
        protractor_1.element(protractor_1.by.id("email")).sendKeys("Panigrahi");
        protractor_1.element(protractor_1.by.id("tel")).sendKeys("45687");
        //element(by.id("email")).sendKeys("Panigrahi");
        protractor_1.element(protractor_1.by.xpath("/html/body/div[1]/div/div/div/div/section/div[2]/article/div/div[1]/form/fieldset/div[9]/input")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Correct expectation
    });
});
