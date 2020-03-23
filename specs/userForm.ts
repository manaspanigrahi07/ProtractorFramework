import { browser, element, by } from "protractor";
//import { xlReader } from '../util/xlReader';
import { log4jsconfig } from '../config/log4jsonconfig';
import { protractor } from "protractor/built/ptor";

fdescribe("User Form Test", function () {

    // Global Veriables

    //Get application URL before each test function
    beforeEach(function () {
        browser.get("http://localhost:4200/");
    })

    // verify application URL
    log4jsconfig.Log().debug("Verifying Application Url");
    it("Verify application url", function () {
        expect(browser.getTitle()).toContain("Dynamic");
        //log4jsconfig.Log().debug("Browser Title :-" +browser.getTitle());
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    })

    // 1st Test "Add User Form Data"
    // anonymous function dynamically declared at runtime, can accept inputs and returns outputs
    it("Add User Form Data", function () {
        log4jsconfig.Log().debug("Test Started to Add User Data");
        if (element(by.id("firstName")).sendKeys('')) {
            //browser.sleep(3000);
            browser.waitForAngular();
            //firstName.sendKeys(protractor.Key.TAB);
            element(by.id("firstName")).sendKeys(protractor.Key.TAB);
            //element(by.id("lastName")).sendKeys('');
            browser.sleep(3000);
            expect(element.all(by.cssContainingText('errorMessage ng-star-inserted', 'First Name is required')))
            log4jsconfig.Log().debug("firstName field validation done..!!");
        }

        element(by.id("firstName")).sendKeys('Manas');
        element(by.id("lastName")).sendKeys('Panigrahi');
        element(by.id('Select Preferred Units')).click();
        //element(by.className('mat-option-text')).click();
        element.all(by.cssContainingText('span.mat-option-text', "two")).click();
        //element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        browser.sleep(3000);
        element(by.buttonText("Save")).click();
        browser.sleep(3000);

        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Correct expectation
        //expect(history.count()).toEqual('3');
        log4jsconfig.Log().debug("Test Completed... Add User Data..");
    })
})
