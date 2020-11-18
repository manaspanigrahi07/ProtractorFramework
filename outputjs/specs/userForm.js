"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import { xlReader } from '../util/xlReader';
var log4jsonconfig_1 = require("../config/log4jsonconfig");
var ptor_1 = require("protractor/built/ptor");
fdescribe("User Form Test", function () {
    // Global Veriables
    //Get application URL before each test function
    beforeEach(function () {
        protractor_1.browser.get("http://10.105.127.83:4200/");
    });
    // verify application URL
    log4jsonconfig_1.log4jsconfig.Log().debug("Verifying Application Url");
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("CloudportalUi");
        //log4jsconfig.Log().debug("Browser Title :-" +browser.getTitle());
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    });
    // 1st Test "Add User Form Data"
    // anonymous function dynamically declared at runtime, can accept inputs and returns outputs
    it("Add User Form Data", function () {
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Add User Data");
        if (protractor_1.element(protractor_1.by.id("firstName")).sendKeys('')) {
            //browser.sleep(3000);
            protractor_1.browser.waitForAngular();
            //firstName.sendKeys(protractor.Key.TAB);
            protractor_1.element(protractor_1.by.id("firstName")).sendKeys(ptor_1.protractor.Key.TAB);
            //element(by.id("lastName")).sendKeys('');
            protractor_1.browser.sleep(3000);
            expect(protractor_1.element.all(protractor_1.by.cssContainingText('errorMessage ng-star-inserted', 'First Name is required')));
            log4jsonconfig_1.log4jsconfig.Log().debug("firstName field validation done..!!");
        }
        protractor_1.element(protractor_1.by.id("firstName")).sendKeys('Manas');
        protractor_1.element(protractor_1.by.id("lastName")).sendKeys('Panigrahi');
        protractor_1.element(protractor_1.by.id('Select Preferred Units')).click();
        //element(by.className('mat-option-text')).click();
        protractor_1.element.all(protractor_1.by.cssContainingText('span.mat-option-text', "two")).click();
        //element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.buttonText("Save")).click();
        protractor_1.browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Correct expectation
        //expect(history.count()).toEqual('3');
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Completed... Add User Data..");
    });
});
