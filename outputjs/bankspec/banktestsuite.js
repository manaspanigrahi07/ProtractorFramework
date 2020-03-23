"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import * as prop from '../data/jsonUtils/prop.json';
// Group of specs or tests to execute 
describe("Banking Project Test", function () {
    var prop1 = require("../data/prop1");
    it("Invoke Bank app", function () {
        protractor_1.browser.get(prop1.siteurl);
    });
});
