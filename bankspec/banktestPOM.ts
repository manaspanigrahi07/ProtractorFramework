import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from '../webpages/AddCustPage';
import { BasePage } from '../webpages/BasePage';
import { OpenAccountPage } from '../webpages/OpenAccountPage';
import { CustomersPage } from '../webpages/CustomersPage';
import { log4jsconfig} from '../config/log4jsonconfig';
//import * as prop from '../testdata/prop.json';

describe("Banking Project Test", function(){

    let prop1 = require("../testdata/prop1");
    
    let originalTimeout : any;
    beforeEach(function(){
        //browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
        //browser.get((<any>prop).appurl);
        browser.get(prop1.appurl);

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    })
     afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    
    it("Launch url Check", function(){
        expect(browser.getTitle()).toContain("Bank");
        //console.log("Browser Title :-" +browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            //console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title 1:- " + txt);
            log4jsconfig.Log().debug("Browser Title 2:- " + txt);
            
        });
    })

    it("Verify Application Flow", function(){
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(3000);
        
        new BasePage().ClickAddCustTab();

        let addcustpage = new AddCustomerPage();
        addcustpage.AddCustomer("firstname","lastname","postalcode");
        browser.sleep(3000);

        new BasePage().ClickAddCustTab();
        new BasePage().ClickOpenAccTab();

        let openaccpage = new OpenAccountPage();
        openaccpage.SelectACustomer();
        openaccpage.SelectDollar();
        browser.sleep(3000);
        
        openaccpage.ClickProcessBtn();
        browser.sleep(3000);

        //new BasePage().ClickAddCustTab();
        new BasePage().ClickCustTab();
        browser.useAllAngular2AppRoots();
        browser.sleep(3000);

        new CustomersPage().VerifyCustEntryAndDelete();
        browser.sleep(3000);

    })
    // it("Verify Application Flow2", function(){
    //     element(by.buttonText('Bank Manager Login')).click();
    //     browser.sleep(3000);
        
    //     new BasePage().ClickAddCustTab();

    //     let addcustpage = new AddCustomerPage();
    //     addcustpage.AddCustomer("firstname","lastname","postalcode");
    //     browser.sleep(3000);

    //     new BasePage().ClickAddCustTab();
    //     new BasePage().ClickOpenAccTab();

    //     let openaccpage = new OpenAccountPage();
    //     openaccpage.SelectACustomer();
    //     openaccpage.SelectDollar();
    //     browser.sleep(3000);
        
    //     openaccpage.ClickProcessBtn();
    //     browser.sleep(3000);

    //     //new BasePage().ClickAddCustTab();
    //     new BasePage().ClickCustTab();
    //     browser.useAllAngular2AppRoots();
    //     browser.sleep(3000);

    //     new CustomersPage().VerifyCustEntryAndDelete();
    //     browser.sleep(3000);

    // })


})