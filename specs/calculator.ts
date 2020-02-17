import { browser, element, by } from "protractor";
import { xlReader } from '../util/xlReader';
import { log4jsconfig } from '../config/log4jsonconfig';

describe("Calculator Test", function () {
    //Get application URL before each test function
    beforeEach(function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
    })

    // verify application URL
    log4jsconfig.Log().debug("Verifying Application Url");
    it("Verify application url", function () {
        expect(browser.getTitle()).toContain("Super");
        //log4jsconfig.Log().debug("Browser Title :-" +browser.getTitle());
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function (txt) {
            //console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    })

    // 1st Test "Add two numbers"
    // anonymous function dynamically declared at runtime, can accept inputs and returns outputs
    var TEST_DATA = xlReader.read_from_excel('addInput');
    TEST_DATA.forEach(function (data: any) {
        var first = data.firstNumber;
        var second = data.secondNumber;
        var exceptedOutput = data.output;
        var histrory = element.all(by.repeater('result in memory'));
        it("Add two numbers (" + first + " + " + second + " = ?)", function () {
            log4jsconfig.Log().debug("Test Started to add two numbers (" + first + " + " + second + " = ?)");
            element(by.model("first")).sendKeys(first);
            element(by.model("second")).sendKeys(second);
            element(by.model('operator')).click();
            element(by.xpath(".//option[@value= 'ADDITION']")).click();
            element(by.id("gobutton")).click();
            browser.sleep(3000);
            //expect<any>(element(by.binding('latest')).getText()).toEqual('10'); //Incorrect expectation
            //expect<any>(element(by.binding('latest')).getText()).toEqual('20'); //Correct expectation
            expect<any>(element(by.binding('latest')).getText()).toEqual(String(exceptedOutput)); //Correct expectation
            expect(history.count()).toEqual(3);
            log4jsconfig.Log().debug("Test Completed... Added two numbers.. Verified the Output (" + first + " + " + second + " =" + exceptedOutput + ")");
        })
    })

    // 2nd Test "Subtract two numbers"
    
    it("Substract two number", function () {
        log4jsconfig.Log().debug("Test Started to Substract two numbers");
        element(by.model("first")).sendKeys('10');
        element(by.model("second")).sendKeys('5');
        element(by.model('operator')).click();
        element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Correct expectation
        expect(history.count()).toEqual(3);
        log4jsconfig.Log().debug("Test Completed... Substract two numbers.. Verified the Output ('5')");
    })

    // 3rd Test "Multiply two numbers"
    
    it("Multiply two numbers", function () {
        log4jsconfig.Log().debug("Test Started to Multiply two numbers ");
        element(by.model("first")).sendKeys('10');
        element(by.model("second")).sendKeys('5');
        element(by.model('operator')).click();
        element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('50'); //Correct expectation
        expect(history.count()).toEqual(3);
        log4jsconfig.Log().debug("Test Completed... Multiply two numbers.. Verified the Output ('50')");
    })

    // 4th Test "Devide two numbers"

    it("Devide two numbers", function () {
        log4jsconfig.Log().debug("Test Started to Devide two numbers ");
        element(by.model("first")).sendKeys('15');
        element(by.model("second")).sendKeys('5');
        element(by.model('operator')).click();
        element(by.xpath(".//option[@value= 'DIVISION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('3'); //Correct expectation
        expect(history.count()).toEqual(3);
        log4jsconfig.Log().debug("Test Completed... Devide two numbers.. Verified the Output ('3')");
    })

    // 5th Test "Modulo % of two numbers"
    it("Modulo % two numbers", function () {
        log4jsconfig.Log().debug("Test Started to Modulo(%) two numbers ");
        element(by.model("first")).sendKeys('12');
        element(by.model("second")).sendKeys('5');
        element(by.model("operator")).click();
        element(by.xpath(".//option[@value= 'MODULO']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('20'); //Correct expectation
        expect(history.count()).toEqual(3);
        log4jsconfig.Log().debug("Test Completed... Modulo(%) two numbers.. Verified the Output ");
    })

    // Get list of all elements
    it(" Get list of all Elements", function(){
        //var histrory = element.all(by.repeater('result in memory'));
        expect(history.count()).toEqual(7);
    })
})