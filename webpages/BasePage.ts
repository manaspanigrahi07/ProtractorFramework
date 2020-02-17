import { browser, element, by } from "protractor";
//import {log4jsconfig } from "../config/log4jsconfig";
import { alert } from "../util/alert";
import { log4jsconfig } from '../config/log4jsonconfig';
import { webElementState } from '../util/webElementState';

export class BasePage {
    addCustTab = element(by.buttonText('Add Customer'));
    openAccTab = element(by.buttonText('Open Account'));
    openCustTab = element(by.buttonText('Customers'));

    ClickAddCustTab() {
        
        // Element not present.
        //expect(element(by.binding('notPresent')).isPresent()).toBe(false);
        //expect<any>(element(by.binding('Add Customer')).getText()).toEqual('Add');
        //let elementName = this.addCustTab;
        webElementState.verifyElementState("Add Customer");
            this.addCustTab.click();
        //this.addCustTab.click();
    }

    ClickOpenAccTab() {
        webElementState.verifyElementState("Open Account");
        this.openAccTab.click();
    }

    ClickCustTab() {
        webElementState.verifyElementState("Customers")
        this.openCustTab.click();
    }


}