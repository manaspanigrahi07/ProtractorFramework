import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from '../pages/AddCustPage';
import { BasePage } from '../pages/BasePage';
import { OpenAccountPage } from '../pages/OpenAccountPage';
import { CustomersPage } from '../pages/CustomersPage';
import { log4jsconfig} from '../config/log4jsonconfig';
//import * as prop from '../data/jsonUtils/prop.json';

// Group of specs or tests to execute 
describe("Banking Project Test", function(){

    let prop1 = require("../data/prop1");

    it("Invoke Bank app", function() { 
        browser.get(prop1.siteurl);
    })
});