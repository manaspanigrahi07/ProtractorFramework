import { browser, element, by } from "protractor";

describe("Non Angular Application Test", function(){

    beforeEach(function(){
        //browser.ignoreSynchronization = true;
        (global as any).isAngularSite(false);
        browser.get("http://qavalidation.com/demo/");
        browser.sleep(2000);
    })

    it("Verify application url", function(){
        expect(browser.getTitle()).toContain("Demo : Practice test automation");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            console.log("Browser Title :-" + txt);
        });
    })
    it("Add two numbers", function(){
        element(by.id("username")).sendKeys("Manas");
        element(by.id("email")).sendKeys("Panigrahi");
        element(by.id("tel")).sendKeys("45687");
        //element(by.id("email")).sendKeys("Panigrahi");
        
        element(by.xpath("/html/body/div[1]/div/div/div/div/section/div[2]/article/div/div[1]/form/fieldset/div[9]/input")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
	    //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Correct expectation

    })

    
})