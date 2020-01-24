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

    it("Invoke Bank app", function() { 
        browser.get(prop1.siteurl);

    })


});