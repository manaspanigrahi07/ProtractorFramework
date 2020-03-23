"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
var log4jsonconfig_1 = require("../config/log4jsonconfig");
// Verify and Close Alert dialog box
var alert = /** @class */ (function () {
    function alert() {
    }
    alert.VerifyAndCloseAlert = function (text) {
        var EC = ptor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.alertIsPresent(), 4000, "Alert Not Found");
        var alert = protractor_1.browser.switchTo().alert();
        var alertText = alert.getText();
        alertText.then(function (txt) {
            log4jsonconfig_1.log4jsconfig.Log().debug(txt);
            console.log(txt);
            protractor_1.browser.sleep(3000);
            expect(alertText).toContain(text);
            alert.accept();
        });
    };
    return alert;
}());
exports.alert = alert;
