import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { log4jsconfig } from "../config/log4jsonconfig";

// Verify and Close Alert dialog box
export class alert {
    static VerifyAndCloseAlert(text: String){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert Not Found");

        let alert = browser.switchTo().alert();
        let alertText = alert.getText();

        alertText.then(function(txt){
            log4jsconfig.Log().debug(txt);
            console.log(txt);

        browser.sleep(3000); 
        expect(alertText).toContain(text);
        alert.accept();
        })
    }
}