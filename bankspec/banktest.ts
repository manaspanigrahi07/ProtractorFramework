import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";

describe("Banking Project Test", function(){
    function VerifyAndCloseAlert(text: String){
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

    beforeEach(function(){
        browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
    })

    it("Launch url Check", function(){
        expect(browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            console.log("Browser Title :-" + txt);
        });
    })

    it("Add Customer1", function(){
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        element(by.buttonText('Add Customer')).click();
        browser.sleep(3000);
        element(by.model("fName")).sendKeys("Manas");
        element(by.model("lName")).sendKeys("Panigrahi");
        element(by.model('postCd')).sendKeys('12345');
        element(by.className('btn btn-default')).click();

        VerifyAndCloseAlert("Customer added successfully");
        
    })

    // it("Add Customer2", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     element(by.buttonText('Add Customer')).click();
    //     browser.sleep(3000);
    //     element(by.model("fName")).sendKeys("Vamsi");
    //     element(by.model("lName")).sendKeys("Davu");
    //     element(by.model('postCd')).sendKeys('123456');
    //     element(by.className('btn btn-default')).click();
        
    //     VerifyAndCloseAlert("Customer added successfully");
     
    // })

    // it("Add Customer3", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
    //     element(by.buttonText('Add Customer')).click();
    //     browser.sleep(3000);
    //     element(by.model("fName")).sendKeys("Abhai");
    //     element(by.model("lName")).sendKeys("Kumar");
    //     element(by.model('postCd')).sendKeys('1234567');
    //     element(by.className('btn btn-default')).click();
        
    //     VerifyAndCloseAlert("Customer added successfully");
        
    // })

    it("Open Accounts", function(){
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        element(by.buttonText('Open Account')).click();
        //element(by.className('btn btn-lg tab btn-primary')).click();
        let customers = element(by.model('custId'));
        let options = customers.all(by.tagName('option'));

        options.then(function(items){
            //log4jconfig.log().debug("Dropdown option size" + items.length);
            console.log("Dropdown option size :" + items.length);
            
            for(let i=0 ; i < items.length ; i++){
                items[i].getText().then(function(txt: any){
                    //console.log().debug(txt);
                    console.log(txt);
                    if(txt == "Manas Panigrahi"){
                    console.log("Item found on the list");
                        items[i].click();
                    }
                })
            }
        })
        element(by.model('currency')).$('[value="Dollar"]').click(); //$=by.css (Single Column)
        element(by.buttonText("Process")).click();
        browser.sleep(4000);

        VerifyAndCloseAlert("Account created");
    })

    it("Customers Table", function(){
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        element(by.buttonText('Customers')).click();
        let rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        browser.sleep(10000);

        rows.each(function(row: any){
            let cells = row?.$$('td'); //all(by.css)(Multiple Columns)
            cells.get(0).getText().then(function(txt: any){
                if(txt == 'Manas'){
                    cells.get(4).$('button').click();
                console.log('Customer details deleted from table successfully');

                }
            })

        }) 

    })
    browser.sleep(10000);


})