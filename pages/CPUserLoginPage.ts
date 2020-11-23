import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from "../config/log4jsonconfig";
import { alert } from "../utils/alert";
import { CustomerLogin } from "./CustomerLogin";
//import * as prop from "../testdata/prop.json";

export class CPUserLoginPage {
    cpuserprop = require("../data/cpuserprop");
    // User Login details
    userName = element(by.id('mat-input-0'));
    userPassword = element(by.id('mat-input-1'));
    loginButton = element(by.buttonText('Log on'));

    username = this.cpuserprop.admin.username;
    password = this.cpuserprop.admin.password;

    CPUserLogin(username: string, password: string) {
        this.userName.sendKeys(this.username);
        this.userPassword.sendKeys(this.password);

        //Click on Login Button
        this.loginButton.click();
        browser.sleep(5000);
        browser.getTitle().then((title)=>(console.log(title)));
    }

    }