var XLSX = require('xlsx');

// Read User input data from Excel file
export class xlReader {
    static read_from_excel(sheetName: string) {
        var workbook = XLSX.readFile('./testdata/testData.xlsx');
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: true });
    }

}