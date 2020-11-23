import { browser, element, by } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../utils/alert";
//import * as prop from "../testdata/prop.json";

export class AddCustomerPage{
    prop1 = require("../data/prop1");

    fname = element(by.model('fName'));
    lname = element(by.model("lName"));
    postalcode = element(by.model('postCd'));
    addcustomerbtn = element(by.className('btn btn-default'));

    // firstname = (<any>prop).customers.firstname;
    // lastname = (<any>prop).customers.lastname;
    // postcode = (<any>prop).customers.postalcode;

    firstname = this.prop1.customers.firstname;
    lastname = this.prop1.customers.lastname;
    postcode = this.prop1.customers.postalcode;


    // AddCustomer(){
    //     //this.fname.sendKeys("Manas");
    //     //this.lname.sendKeys("Panigrahi");
    //     //this.postalcode.sendKeys("12345");
    //     this.fname.sendKeys(this.firstname);
    //     this.lname.sendKeys(this.lastname);
    //     this.postalcode.sendKeys(this.postcode);
        

    //     this.addcustomerbtn.click();
    //     browser.sleep(3000);
    //     alert.VerifyAndCloseAlert("Customer added");

    // }

    AddCustomer(firstname : string,lastname : string, postalcode :string){
        //this.fname.sendKeys("Manas");
        //this.lname.sendKeys("Panigrahi");
        //this.postalcode.sendKeys("12345");
        this.fname.sendKeys(this.firstname);
        this.lname.sendKeys(this.lastname);
        this.postalcode.sendKeys(this.postcode);
        

        this.addcustomerbtn.click();
        browser.sleep(3000);
        alert.VerifyAndCloseAlert("Customer added");

    }
 
}
 

