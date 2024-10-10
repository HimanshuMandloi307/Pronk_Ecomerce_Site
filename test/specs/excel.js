//library for parsing JSON file
const { default: AllureReporter } = require('@wdio/allure-reporter');
const execlLib =require('xlsx')
let fileData =execlLib.readFile('test/Data/Demo_Data_Automation_testing.xlsx')
// test suite name

const sheetData = fileData.Sheets['Sheet1'];
const data = execlLib.utils.sheet_to_json(sheetData);
console.log('=====' +JSON.stringify(data));

describe('Tutorialspoint application', function(){
   //iterate the test case
   data.forEach(({ProductName,Size})  =>{
      //test case
      it('Data Driven testing', function(){ 
        AllureReporter.addStep("Check Produt Name and Size get from Excel Sheet",true);
        console.log('===============' +ProductName);
        console.log('///////' +Size);
      });
   });
}); 