import { browser, element, by } from "protractor";

describe("Calculator Test", function(){

    beforeEach(function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
    })

    it("Verify application url", function(){
        expect(browser.getTitle()).toContain("Super");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            console.log("Browser Title :-" + txt);
        });
    })
    it("Add two numbers", function(){
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
	    element(by.xpath(".//option[@value= 'ADDITION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
	    expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Correct expectation

    })

    it("Substract two numbers", function(){
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
	    element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
	    expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Correct expectation

    })

    it("Multiply two numbers", function(){
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
	    element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
	    expect<any>(element(by.binding('latest')).getText()).toEqual('50'); //Correct expectation

    })

    it("Devide two numbers", function(){
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
	    element(by.xpath(".//option[@value= 'DIVISION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
	    expect<any>(element(by.binding('latest')).getText()).toEqual('2'); //Correct expectation

    })

    it("Modulo % two numbers", function(){
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("5");
        element(by.model("operator")).click();
        element(by.xpath(".//option[@value= 'MODULO']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
	    expect<any>(element(by.binding('latest')).getText()).toEqual('20'); //Correct expectation

    })
})