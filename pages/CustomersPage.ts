import { browser, element, by, protractor } from "protractor";
import {log4jsconfig } from "../config/log4jsonconfig";
import {alert} from "../utils/alert";
//import * as prop from "../data/prop.json";

export class CustomersPage{
    prop1 = require("../data/prop1");
    
    // Drop Down and Options
        rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        //fname = (<any>prop).customers.firstname;
        fname = this.prop1.customers.firstname;

        // Verify customer entry in the table and delete his details
        VerifyCustEntryAndDelete(){
            let fname = this.fname;
            this.rows.each(function(row: any){
                let cells = row?.$$('td'); //all(by.css)(Multiple Columns)
                //browser.sleep(3000);
                cells.get(0).getText().then(function(txt: any){
                    if(txt == fname){
                        cells.get(4).$('button').click();
                    log4jsconfig.Log().debug('Customer details deleted from table successfully');
                    //console.log('Customer details deleted from table successfully');
    
                    }
                })
    
            }) 
           
        }

    }