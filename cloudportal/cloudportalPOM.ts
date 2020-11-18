import { browser } from "protractor";
import { log4jsconfig} from '../config/log4jsonconfig';
import { CPUserLoginPage } from "../pages/CPUserLoginPage";
//import * as prop from '../testdata/prop.json';

// Group of specs or tests to execute 
describe("Cloud Portal UI Project Test", function(){

    let cpuserprop = require("../data/cpuserprop");
    
    let originalTimeout : any;
    beforeEach(function(){
        //browser.get("http://10.105.127.83:4200/login");
        //browser.get((<any>prop).appurl);
        browser.get(cpuserprop.appurl);

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    })
     afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    // verify application url before test
    it("Verify application url", function(){
        expect(browser.getTitle()).toContain("CloudportalUi");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            //console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :- " + txt);
            
        });
    })

    // application end-to-end flow test
    it("Cloud Portal Application Login", function(){
        log4jsconfig.Log().debug("Test Started to Login to Cloud Portal..");
    
        // Login to Cloud Portal Application
        //new CPBasePage().CPUserLogin();
        let cploginpage = new CPUserLoginPage();

        // Add customer details (userName,userPassword)
        cploginpage.CPUserLogin("username","password");
        log4jsconfig.Log().debug("Loggedin successfully to Cloud Portal..");
        browser.sleep(8000);

        // Validate CloudPortal Home Page 
        browser.getTitle()
            .then(()=>(log4jsconfig.Log().debug("Loggedin successfully to Cloud Portal UI..")));
            browser.sleep(5000);

    })
})