"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
// Group of specs or tests to execute
describe("Non Angular Application Test", function () {
    // Get non-angular application url before each test
    beforeEach(function () {
        //browser.ignoreSynchronization = true;
        global.isAngularSite(false);
        protractor_1.browser.get("http://qavalidation.com/demo/");
        protractor_1.browser.sleep(2000);
    });
    // Verify application url
    log4jsonconfig_1.log4jsconfig.Log().debug("Verifying Application Url");
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("Demo : Practice test automation");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    });
    // 1st Test to Enter User Details
    log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Enter User details");
    it("Add two numbers", function () {
        protractor_1.element(protractor_1.by.id("username")).sendKeys("Manas");
        protractor_1.element(protractor_1.by.id("email")).sendKeys("Panigrahi");
        protractor_1.element(protractor_1.by.id("tel")).sendKeys("45687");
        //element(by.id("email")).sendKeys("Panigrahi");
        protractor_1.element(protractor_1.by.xpath("/html/body/div[1]/div/div/div/div/section/div[2]/article/div/div[1]/form/fieldset/div[9]/input")).click();
        protractor_1.browser.sleep(3000);
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed with Entering User details");
    });
});
