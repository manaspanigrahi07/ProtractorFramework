import { element, by, browser } from "protractor"
import { log4jsconfig } from "../config/log4jsonconfig"

// Read User input data from Excel file
export class webElementState {
    static verifyElementState(text: String) {
        // Is Element Present.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        element(by.buttonText("Add Customer")).isPresent().then(function(present){
            //console.log("is element present ? : " +present)
            log4jsconfig.Log().debug("is element present ? : " +present)
        })

        //Is Element Displayed.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        //expect(browser.driver.findElement(by.locator("Add Customer")).isDisplayed()).toBe(true);
        element(by.buttonText("Add Customer")).isDisplayed().then(function(displayed){
            //console.log("is element displayed ? : " +displayed)
            log4jsconfig.Log().debug("is element displayed ? : " +displayed)
        })

        //Is Element Enabled.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        element(by.buttonText("Add Customer")).isEnabled().then(function(enabled){
            //console.log("is element enabled ? : " +enabled)
            log4jsconfig.Log().debug("is element enabled ? : " +enabled)
        })

        //Is Element Selected.
        //expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);
        element(by.buttonText("Add Customer")).isSelected().then(function(selected){
            //console.log("is element selected ? : " +selected)
            log4jsconfig.Log().debug("is element selected ? : " +selected)
        })

        expect<any>(element(by.buttonText('Add Customer')).getText()).toEqual('Add Customer'); //Correct expectation

    }

}