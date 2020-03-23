import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from "../config/log4jsonconfig";
import { alert } from "../utils/alert";
//import * as prop from "../testdata/prop.json";

export class CustomerLogin{
    prop1 = require("../testdata/prop1");
    // Drop Down and Options
    Customers = element(by.model('custId'));
    options = this.Customers.all(by.tagName('option'));

    // Select Customer
    //CustID = element(by.model('custId')); //$=by.css (Single Column)
    Login = element(by.buttonText("Login"));
    //name = (<any>prop).customers.firstname + " " +(<any>prop).customers.lastname;
    name = this.prop1.customers.firstname + " " + this.prop1.customers.lastname;

    //Select Customer
    SelectACustomer(Customers : String) {
        let name = this.name;
        this.options.then(function (items) {
            log4jsconfig.Log().debug("Dropdown option size" + items.length);
            //console.log("Dropdown option size :" + items.length);

            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    log4jsconfig.Log().debug(txt);
                    //console.log(txt);
                    if (txt == name) {
                        log4jsconfig.Log().debug("Name found on the List")
                        //console.log("Item found on the list");
                        items[i].click();
                    }
                })
            }
        })
    }

    // Select Customer : Name
    SelectCustomerName(Customers : String) {
        //this.CustID.$('[value="Harry Potter"]').click();
        //this.Customers.$('[value="Harry Potter"]').click();
        browser.sleep(3000);
    }

    //Click on Login Button
    ClickLoginBtn() {
        this.Login.click();
        browser.sleep(3000);
        alert.VerifyAndCloseAlert("Customer Logged In");

    }
}