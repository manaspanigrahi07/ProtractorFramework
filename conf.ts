
import { Config, browser } from "protractor";
import { platform } from "os";

var jasmineReporters = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter-2');
var fs = require('fs-extra');


export let config: Config = {
    framework: "jasmine2",
    //defaultTimeoutInterval: 60000,
    //defaultTimeoutInterval: 2500000,
    useAllAngular2AppRoots: true,

    capabilities: {
        browserName: 'chrome',
        // browserName : 'firefox',
        // marionette : true,
        //acceptSslCerts : true
    },
    //specs :['./specs/calculator.js'],
    //specs :['./bankspec/banktest.js'],
    //specs :['./bankspec/banktestPOM.js'],
    //specs : ['./bankspec/banktestPOM.js','./specs/calculator.js'],

    suites: {
        calculator: ['./specs/calculator.js'], //Sanity Test
        bank: ['./bankspec/banktest.js'], //Smoke Test
        banktestPOM: ['./bankspec/banktestPOM.js'], //Bank Test POM
        bothapp: ['./specs/calculator.js', './bankspec/banktest.js', './bankspec/banktestPOM.js'], // Regression Test
        nonangular: ['./specs/nonAngularTest.js'] //Non Angular Application

    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function () {
        //
        (global as any).isAngularSite = function (flag: boolean) {
            browser.ignoreSynchronization = !flag;
        }
        var os = require('os');
        //browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(4000);

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/xml',
            filePrefix: 'xmlresults'
        }));

        fs.emptyDir('./reports/screenshots', function (err: any) {
            console.log(err);
        });

        //
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('./reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },

    //HTMLReport called once tests are finished
    onComplete: function () {
        var browserName, browserVersion, platform, testConfig;
        var capsPromise = browser.getCapabilities();
        //
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            //
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports/',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            //
            new HTMLReport().from('./reports/xml/xmlresults.xml', testConfig);
        });
    },




}
