import { browser, element, by } from "protractor";
import { log4jsconfig } from "../config/log4jsonconfig";

// Group of specs or tests to execute
describe("Non Angular Application Test", function(){

    // Get non-angular application url before each test
    beforeEach(function(){
        //browser.ignoreSynchronization = true;
        (global as any).isAngularSite(false);
        browser.get("http://qavalidation.com/demo/");
        browser.sleep(2000);
    })

    // Verify application url
    log4jsconfig.Log().debug("Verifying Application Url");
    it("Verify application url", function(){
        expect(browser.getTitle()).toContain("Demo : Practice test automation");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            //console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    })

    // 1st Test to Enter User Details
    log4jsconfig.Log().debug("Test Started to Enter User details");
    it("Add two numbers", function(){
        element(by.id("username")).sendKeys("Manas");
        element(by.id("email")).sendKeys("Panigrahi");
        element(by.id("tel")).sendKeys("45687");
        //element(by.id("email")).sendKeys("Panigrahi");
        
        element(by.xpath("/html/body/div[1]/div/div/div/div/section/div[2]/article/div/div[1]/form/fieldset/div[9]/input")).click();
        browser.sleep(3000);
        log4jsconfig.Log().debug("Test Completed with Entering User details");
        

    })

    
})