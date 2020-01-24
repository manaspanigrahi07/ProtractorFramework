
//import { browser, element, by, logging } from "protractor";

describe('Enter Google Cloud Console', function() {

    
    //it('Should Enter name as manas', function()
    it ('Should Login to Google Cloud', function()
    {
        //page.navigateTo();
        browser.get('https://console.cloud.google.com/');
        //expect(browser.getTitle(by.id('headingSubtext'))).toEqual('to continue to Google Cloud Platform');
        element(by.id('identifierId')).sendKeys('manasranjan05@gmail.com');
        element(by.id('identifierId')).sendKeys('manasranjan05@gmail.com');
        element(by.id('identifierId')).sendKeys('manasranjan05@gmail.com');
        element(by.id('identifierId')).sendKeys('manasranjan05@gmail.com');
        //var text = element(by.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/div'));

        //expect(text.getText()).toEqual('manasranjan05@gmail.com');

        //expect(element(by.xpath('/html/body/pan-shell/pcc-shell/cfc-panel-container/div/div/cfc-panel[1]/div[1]/div/div[1]/pcc-platform-bar/cfc-platform-bar/div/div[1]/xap-deferred-loader-outlet/pcc-platform-bar-purview-switcher/pcc-purview-switcher/cfc-switcher-button/button/span/div')).getText());
        //expect(element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/input')).getText()).toEqual('Hello manas');

    });
});