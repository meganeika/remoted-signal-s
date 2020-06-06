function doGet(e){
  var num = e.parameter.con;
  if(num=="1"){
    const htmlOut = HtmlService.createTemplateFromFile("control").evaluate();
    htmlOut
        .setTitle('SignalTest|リモコン側')
    //    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    return htmlOut;
  }else{
    const htmlOut = HtmlService.createTemplateFromFile("main").evaluate();
    htmlOut
        .setTitle('SignalTest|メイン側')
    //    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    return htmlOut;
  }
}

function getFlag() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('flag');
  const result = sheet.getRange('A1').getValue();
  console.log(result);
  return result;
}

function setFlag(bl){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('flag');
  const range = sheet.getRange('A1');
  range.setValue(bl);
}

function getValuesFromSS(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('jsonlike');
  const range = sheet.getDataRange();
//  console.log(range.getValues());
  return range.getValues();
}

function doPost(e){
   setToSS(e.parameter.sec);
   return HtmlService.createTemplateFromFile("control").evaluate();
}