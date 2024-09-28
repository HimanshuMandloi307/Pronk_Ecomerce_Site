const excelLib = require('xlsx')

class xlsx {

    async readDatafromExcel(excelFileName, excelSheetName) {
        let fileData = excelLib.readFile(excelFileName);
        const sheetData = fileData.Sheets[excelSheetName];
        const data = excelLib.utils.sheet_to_json(sheetData);
        console.log('=====' + JSON.stringify(data));
        return data;
    }

};

export default new xlsx();