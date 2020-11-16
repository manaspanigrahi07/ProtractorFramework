"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//import protractor configurations
var protractor_1 = require("protractor");
// opensource jasmine2 reporter
var jasmineReporters = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter-2');
var fs = require('fs-extra');
exports.config = {
    // To run code without running standalone webdriver manager server
    directConnect: true,
    framework: "jasmine2",
    //defaultTimeoutInterval: 60000,
    useAllAngular2AppRoots: true,
    //specify the browsers details to run test
    capabilities: {
        browserName: 'chrome',
        chromeDriver: './chromedriver.exe',
    },
    // To run individual test specs
    //specs :['./specs/calculator.js'],
    //specs :['./bankspec/banktest.js'],
    //specs :['./bankspec/banktestPOM.js'],
    //specs : ['./bankspec/banktestPOM.js','./specs/calculator.js'],
    // To run all test specs as a suites
    suites: {
        calculator: ['./specs/calculator.js'],
        banktest: ['./bankspec/banktest.js'],
        banktestPOM: ['./bankspec/banktestPOM.js'],
        bothapp: ['./specs/calculator.js', './bankspec/banktestPOM.js', './specs/nonAngularTest.js'],
        nonangular: ['./specs/nonAngularTest.js'],
        userform: ['./specs/userForm.js'],
        custLogin: ['./bankspec/custLogin.js'] // Customer Login
    },
    // Selenium webdriver url details
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    /* A callback function called once protractor is ready and available, and before the specs are executed.
    If multiple capabilities are being run, this will run once per capability. */
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function () {
            var os;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //
                        global.isAngularSite = function (flag) {
                            //browser.ignoreSynchronization = !flag;
                            protractor_1.browser.waitForAngularEnabled(!flag);
                        };
                        os = require('os');
                        return [4 /*yield*/, protractor_1.browser.manage().deleteAllCookies()];
                    case 1:
                        _a.sent();
                        // https://github.com/angular/protractor/issues/1467
                        //browser.manage().window().maximize();
                        return [4 /*yield*/, protractor_1.browser.manage().window().setSize(1280, 1024)];
                    case 2:
                        // https://github.com/angular/protractor/issues/1467
                        //browser.manage().window().maximize();
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.manage().timeouts().implicitlyWait(20000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.manage().timeouts().pageLoadTimeout(60000)];
                    case 4:
                        _a.sent();
                        // generates the xml reports of test results
                        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                            consolidateAll: true,
                            savePath: './output/reports/xml',
                            filePrefix: 'xmlresults'
                        }));
                        // specify the directory to store screenshots
                        fs.emptyDir('./output/reports/screenshots', function (err) {
                            console.log(err);
                        });
                        //generate jasmine reports with environment details
                        jasmine.getEnv().addReporter({
                            specDone: function (result) {
                                if (result.status == 'failed') {
                                    protractor_1.browser.getCapabilities().then(function (caps) {
                                        var browserName = caps.get('browserName');
                                        protractor_1.browser.takeScreenshot().then(function (png) {
                                            var stream = fs.createWriteStream('./output/reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                                            stream.write(new Buffer(png, 'base64'));
                                            stream.end();
                                        });
                                    });
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
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
                outputPath: './output/reports/',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './output/reports/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            // /Users/manasp/Documents/ProtractorTest/output
            new HTMLReport().from('./output/reports/xml/xmlresults.xml', testConfig);
        });
    },
};
