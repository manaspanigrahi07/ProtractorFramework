import { browser, element, by } from "protractor";
//import {log4jsconfig } from "../config/log4jsconfig";
import {alert} from "../util/alert";

export class BasePage{
    addCustTab = element(by.buttonText('Add Customer'));
    openAccTab = element(by.buttonText('Open Account'));
    openCustTab = element(by.buttonText('Customers'));

    ClickAddCustTab(){
        this.addCustTab.click();
    }

    ClickOpenAccTab(){
        this.openAccTab.click();
    }

    ClickCustTab(){
        this.openCustTab.click();
    }


}