//library for parsing JSON file
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
        
        console.log('===============' +ProductName);
        console.log('///////' +Size);
      });
   });
}); 