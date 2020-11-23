"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
var CPUserLoginPage_1 = require("../pages/CPUserLoginPage");
//import * as prop from '../testdata/prop.json';
// Group of specs or tests to execute 
describe("Cloud Portal UI Project Test", function () {
    var cpuserprop = require("../data/cpuserprop");
    var originalTimeout;
    beforeEach(function () {
        //browser.get("http://10.105.127.83:4200/login");
        //browser.get((<any>prop).appurl);
        protractor_1.browser.get(cpuserprop.appurl);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    // Verify application url before test
    it("Verify application url", function () {
        expect(protractor_1.browser.getTitle()).toContain("CloudportalUi");
        //console.log("Browser Title :-" +browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsonconfig_1.log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    });
    // Application end-to-end flow test
    it("Cloud Portal Application Login", function () {
        log4jsonconfig_1.log4jsconfig.Log().debug("Test Started to Login to Cloud Portal..");
        // Login to Cloud Portal Application
        //new CPBasePage().CPUserLogin();
        var cploginpage = new CPUserLoginPage_1.CPUserLoginPage();
        // Add customer details (userName,userPassword)
        cploginpage.CPUserLogin("username", "password");
        log4jsonconfig_1.log4jsconfig.Log().debug("Loggedin successfully to Cloud Portal..");
        protractor_1.browser.sleep(3000);
        // Validate CloudPortal Home Page 
        protractor_1.browser.getTitle()
            .then(function () { return (log4jsonconfig_1.log4jsconfig.Log().debug("Loggedin successfully to Cloud Portal UI..")); });
        protractor_1.browser.sleep(3000);
    });
});
