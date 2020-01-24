import{config, browser} from "protractor"

export let config = {
    framework: 'jasmine',
    defaultTimeoutInterval: 60000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/calculator.js'],

    capabilities: {
        browserName: 'chrome'
    }

    // multiCapabilities: [{
    //     browserName: 'firefox'
    //   }, {
    //     browserName: 'chrome'
    //   }]
};