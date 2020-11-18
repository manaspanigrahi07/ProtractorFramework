import { browser, element, by } from "protractor";
//import {log4jsconfig } from "../config/log4jsconfig";
import { alert } from "../utils/alert";
import { log4jsconfig } from '../config/log4jsonconfig';
import { webElementState } from '../utils/webElementState';

export class CPBasePage {
    //home = element(by.buttonText('Home'));
    login = element(by.buttonText('Log on'));
    // addCustTab = element(by.buttonText('Add Customer'));
    // openAccTab = element(by.buttonText('Open Account'));
    // openCustTab = element(by.buttonText('Customers'));

    CPUserLogin(){
        // Click on Login Button
        webElementState.verifyElementState("Login");
        this.login.click();
    }

    // ClickOpenAccTab() {
    //     webElementState.verifyElementState("Open Account");
    //     this.openAccTab.click();
    // }

    // ClickCustTab() {
    //     webElementState.verifyElementState("Customers")
    //     this.openCustTab.click();
    // }


}