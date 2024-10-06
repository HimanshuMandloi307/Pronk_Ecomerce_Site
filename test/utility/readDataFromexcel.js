const path = require('path');
const excelLib = require('xlsx');

class XlsxReader {
    async readDatafromExcel(excelFileName, excelSheetName) {
        try {
            const excelFilePath = path.resolve(excelFileName); // Ensures path is resolved properly4
            let fileData = excelLib.readFile(excelFilePath);
            const sheetData = fileData.Sheets[excelSheetName];
            const data = excelLib.utils.sheet_to_json(sheetData);
            console.log('Excel Data:', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Error reading Excel file:', error);
        }
    }
}

export default new XlsxReader();
