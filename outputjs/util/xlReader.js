"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XLSX = require('xlsx');
// Read User input data from Excel file
var xlReader = /** @class */ (function () {
    function xlReader() {
    }
    xlReader.read_from_excel = function (sheetName) {
        var workbook = XLSX.readFile('./testdata/testData.xlsx');
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: true });
    };
    return xlReader;
}());
exports.xlReader = xlReader;
