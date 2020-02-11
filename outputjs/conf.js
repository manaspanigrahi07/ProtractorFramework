"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import protractor configurations
var protractor_1 = require("protractor");
// opensource jasmine2 reporter
var jasmineReporters = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter-2');
var fs = require('fs-extra');
exports.config = {
    // To run code without running standalone webdriver manager server
    //directConnect: true,
    framework: "jasmine2",
    //defaultTimeoutInterval: 60000,
    useAllAngular2AppRoots: true,
    //specify the browsers details to run test
    capabilities: {
        browserName: 'chrome',
    },
    // To run individual test specs
    //specs :['./specs/calculator.js'],
    //specs :['./bankspec/banktest.js'],
    //specs :['./bankspec/banktestPOM.js'],
    //specs : ['./bankspec/banktestPOM.js','./specs/calculator.js'],
    // To run all test specs as a suites
    suites: {
        calculator: ['./specs/calculator.js'],
        bank: ['./bankspec/banktest.js'],
        banktestPOM: ['./bankspec/banktestPOM.js'],
        bothapp: ['./specs/calculator.js', './bankspec/banktestPOM.js', './specs/nonAngularTest.js'],
        nonangular: ['./specs/nonAngularTest.js'] //Non Angular Application
    },
    // Selenium webdriver url details
    seleniumAddress: 'http://localhost:4444/wd/hub',
    /* A callback function called once protractor is ready and available, and before the specs are executed.
    If multiple capabilities are being run, this will run once per capability. */
    onPrepare: function () {
        //
        global.isAngularSite = function (flag) {
            protractor_1.browser.ignoreSynchronization = !flag;
        };
        // Environment details
        var os = require('os');
        //browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(4000);
        // generates the xml reports of test results
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/xml',
            filePrefix: 'xmlresults'
        }));
        // specify the directory to store screenshots
        fs.emptyDir('./reports/screenshots', function (err) {
            console.log(err);
        });
        //generate jasmine reports with environment details
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    protractor_1.browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        protractor_1.browser.takeScreenshot().then(function (png) {
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
        var capsPromise = protractor_1.browser.getCapabilities();
        //
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            //Protractor Test Execution Reports
            // Path : file:///Users/manasp/Documents/ProtractorTest/reports/ProtractorTestReport.html
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
};
