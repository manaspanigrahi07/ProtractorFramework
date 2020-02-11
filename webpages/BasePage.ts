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
        // // Is Element Present.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isPresent().then(function(present){
        //     console.log("is element present ? : " +present)
        //     log4jsconfig.Log().debug("is element present ? : " +present)
        // })

        // //Is Element Displayed.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isDisplayed().then(function(displayed){
        //     console.log("is element displayed ? : " +displayed)
        //     log4jsconfig.Log().debug("is element displayed ? : " +displayed)
        // })

        // //Is Element Enabled.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isEnabled().then(function(enabled){
        //     console.log("is element enabled ? : " +enabled)
        //     log4jsconfig.Log().debug("is element enabled ? : " +enabled)
        // })

        // //Is Element Selected.
        // //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        // element(by.buttonText("Add Customer")).isSelected().then(function(selected){
        //     console.log("is element selected ? : " +selected)
        //     log4jsconfig.Log().debug("is element selected ? : " +selected)
        // })

        // expect<any>(element(by.buttonText('Add Customer')).getText()).toEqual('Add Customer'); //Correct expectation

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