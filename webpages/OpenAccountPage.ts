import { browser, element, by, protractor } from "protractor";
import {log4jsconfig } from "../config/log4jsonconfig";
import {alert} from "../util/alert";
//import * as prop from "../testdata/prop.json";

export class OpenAccountPage{
    prop1 = require("../testdata/prop1");
    // Drop Down and Options
    Customers = element(by.model('custId'));
    options = this.Customers.all(by.tagName('option'));

    // Select Currency
    Currency = element(by.model('currency')); //$=by.css (Single Column)
    Process = element(by.buttonText("Process"));
    //name = (<any>prop).customers.firstname + " " +(<any>prop).customers.lastname;
    name = this.prop1.customers.firstname + " " + this.prop1.customers.lastname;

    //Select Customer
    SelectACustomer(){
    let name = this.name;
    this.options.then(function(items){
        log4jsconfig.Log().debug("Dropdown option size" + items.length);
        //console.log("Dropdown option size :" + items.length);
        
        for(let i=0 ; i < items.length ; i++){
            items[i].getText().then(function(txt: any){
                log4jsconfig.Log().debug(txt);
                //console.log(txt);
                if(txt == name){
                    log4jsconfig.Log().debug("Item found on the List")
                    //console.log("Item found on the list");
                    items[i].click();
                }
            })
        }
    })
}
    // Select Dollar
    SelectDollar(){
        this.Currency.$('[value="Dollar"]').click();
        browser.sleep(3000);
    }

    //Click on Process Button
    ClickProcessBtn(){
        this.Process.click();
        browser.sleep(3000);
        alert.VerifyAndCloseAlert("Account created");
    }
}