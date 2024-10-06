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
        //  launch url
        //  browser.url('https://www.linkedin.com/login')  
        //  //identify the email field then enter key - email
        //  $("#username").setValue(email)
        //  //identify password field then enter key - password
        //  $("#password").setValue(password)
        //  //identify Sign in button then click
        //  $("button[type='submit']").click() 
        //  //verify error message
        //  const e = $('#error-for-password')
        //  console.log(e.getText() + ' - Error Text') 
        //  //verify Alert text with Chai assertion
        //  c(e.getText()).to.equal("The password you provided must have at least 6     characters.")
      });
   });
}); 