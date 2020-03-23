import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";

// Group of specs or tests to execute 
describe("Banking Project Test", function () {

    // Switch to Alert, verify and close the Alert dialog box
    function VerifyAndCloseAlert(text: String) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert Not Found");

        let alert = browser.switchTo().alert();
        let alertText = alert.getText();

        //alertText.then(function(txt)){
        //log4jsconfig.log().debug(txt);
        //console.log().debug(txt);
        //})
        browser.sleep(3000);
        expect(alertText).toContain(text);
        alert.accept();
    }

    //Get application URL before each test function
    beforeEach(function () {
        browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
    })

    // verify application URL
    it("Verify application url", function () {
        expect(browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function (txt) {
            if (txt == "Valid Application URL") {
                console.log("Browser Title :-" + txt);
            }else{
                console.log("Please Enter Valid Application URL");
            }
        });
    })

    // 1st Test to Add Customer1 details
    it("Add Customer1", function () {
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        element(by.buttonText('Add Customer')).click();
        browser.sleep(3000);
        element(by.model("fName")).sendKeys("Manas");
        element(by.model("lName")).sendKeys("Panigrahi");
        element(by.model('postCd')).sendKeys('12345');
        element(by.className('btn btn-default')).click();

        // Verify and Close Alert dialog box
        VerifyAndCloseAlert("Customer added successfully");

    })

    // Test to Add Customer2 details
    // it("Add Customer2", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     element(by.buttonText('Add Customer')).click();
    //     browser.sleep(3000);
    //     element(by.model("fName")).sendKeys("Vamsi");
    //     element(by.model("lName")).sendKeys("Davu");
    //     element(by.model('postCd')).sendKeys('123456');
    //     element(by.className('btn btn-default')).click();

    //Verify and close Alert dialogbox
    //     VerifyAndCloseAlert("Customer added successfully");
    // })

    // Test to Add Customer3 details
    // it("Add Customer3", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     element(by.buttonText('Add Customer')).click();
    //     browser.sleep(3000);
    //     element(by.model("fName")).sendKeys("Abhai");
    //     element(by.model("lName")).sendKeys("Kumar");
    //     element(by.model('postCd')).sendKeys('1234567');
    //     element(by.className('btn btn-default')).click();

    //Verify and Close Alert dialog box
    //     VerifyAndCloseAlert("Customer added successfully");
    // })

    // 2nd Test to Open customer Account
    it("Open Accounts", function () {
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        element(by.buttonText('Open Account')).click();
        //element(by.className('btn btn-lg tab btn-primary')).click();
        let customers = element(by.model('custId'));
        let options = customers.all(by.tagName('option'));

        options.then(function (items) {
            //log4jconfig.log().debug("Dropdown option size" + items.length);
            console.log("Dropdown option size :" + items.length);

            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    //console.log().debug(txt);
                    console.log(txt);
                    if (txt == "Manas Panigrahi") {
                        console.log("Item found on the list");
                        items[i].click();
                    }
                })
            }
        })
        // Select Curreny value
        element(by.model('currency')).$('[value="Dollar"]').click(); //$=by.css (Single Column)
        element(by.buttonText("Process")).click();
        browser.sleep(4000);

        // Verify and close alert dialogbox
        VerifyAndCloseAlert("Account created");
    })

    //Verify customer details in table 
    it("Customers Table", function () {
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        element(by.buttonText('Customers')).click();
        let rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        browser.sleep(10000);

        // Check Customer details and delete customer from table
        // rows.each(function (row: any) {
        //     let cells = row?.$$('td'); //all(by.css)(Multiple Columns)
        //     cells.get(0).getText().then(function (txt: any) {
        //         if (txt == 'Manas') {
        //             cells.get(4).$('button').click();
        //             console.log('Customer details deleted from table successfully');
        //         }
        //     })
        // })
    })
    browser.sleep(10000);

    // Login with Customer Name
    it("Customer Login", function () {
        element(by.buttonText('Home')).click();
        browser.sleep(3000);
        element(by.buttonText('Customer Login')).click();
        browser.sleep(3000);
        //element(by.className('btn btn-lg tab btn-primary')).click();

        // Select Customer from Dropdown
        let customers = element(by.model('custId'));
        let options = customers.all(by.tagName('option'));

        options.then(function (items) {
            //log4jconfig.log().debug("Dropdown option size" + items.length);
            console.log("Dropdown option size :" + items.length);

            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    //console.log().debug(txt);
                    console.log(txt);
                    if (txt == "Manas Panigrahi") {
                        console.log("Item found on the list");
                        items[i].click();
                    }
                })
            }
        })
        // Click on Login Button
        element(by.buttonText("Login")).click();
        browser.sleep(4000);

        // Verify Post Login Page
        element(by.binding('Manas Panigrahi')).getText().then(function(txt){
        expect(txt).toBe("Welcome Manas Panigrahi !! ")
        })
    })

})