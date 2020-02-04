import { browser, element, by } from "protractor";
import { xlReader } from '../util/xlReader';

describe("Calculator Test", function () {
    //Get application URL before each test function
    beforeEach(function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
    })

    // verify application URL
    it("Verify application url", function () {
        expect(browser.getTitle()).toContain("Super");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
        });
    })

    // 1st Test "Add two numbers"
    // anonymous function dynamically declared at runtime, can accept inputs and returns outputs
    var TEST_DATA = xlReader.read_from_excel('addInput');
    TEST_DATA.forEach(function (data: any) {
        it("Add two numbers", function () {
            element(by.model("first")).sendKeys(data.firstNumber);
            element(by.model("second")).sendKeys(data.secondNumber);
            element(by.model('operator')).click();
            element(by.xpath(".//option[@value= 'ADDITION']")).click();
            element(by.id("gobutton")).click();
            browser.sleep(3000);
            //expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Incorrect expectation
            //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Correct expectation
            expect<any>(element(by.binding('latest')).getText()).toEqual(String(data.output)); //Correct expectation
        })
    })

    // 2nd Test "Subtract two numbers"
    it("Substract two numbers", function () {
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
        element(by.xpath(".//option[@value= 'SUBTRACTION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('5'); //Correct expectation
    })

    // 3rd Test "Multiply two numbers"
    it("Multiply two numbers", function () {
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
        element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('50'); //Correct expectation
    })

    // 4th Test "Devide two numbers"
    it("Devide two numbers", function () {
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("5");
        element(by.model('operator')).click();
        element(by.xpath(".//option[@value= 'DIVISION']")).click();
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        //expect<any>(element(by.binding('latest')).getText()).toEqual('15'); //Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('2'); //Correct expectation
    })

    // 5th Test "Modulo % of two numbers"
    it("Modulo % two numbers", function () {
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