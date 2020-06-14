function doGet(e){
  var num = e.parameter.con;
  if(num=="0"){
    const htmlOut = HtmlService.createTemplateFromFile("countdown_control").evaluate();
    htmlOut
        .setTitle('Signal|リモコン側');
    //    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    return htmlOut;
  }if(num=="1"){
    const htmlOut = HtmlService.createTemplateFromFile("control").evaluate();
    htmlOut
        .setTitle('Signal|ボタン式リモコン側')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return htmlOut;
  }else{
    const htmlOut = HtmlService.createTemplateFromFile("main").evaluate();
    htmlOut
        .setTitle('Signal|メイン側');
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
//  console.log(range.getValues().toString());
  return range.getValues.toString();
}

function TEST_getJson(){
return '';
}

function doPost(e){
   setFlag(true);
   const htmlOut = HtmlService.createTemplateFromFile("control_omachi").evaluate();
   htmlOut
        .setTitle('Signal|ボタン式リモコン側2')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
   return htmlOut;
}

function myPostWithFetch(){
    // POSTデータ
var payload = {
  "user_id" : "userid",
  "password" : "pass",
  "submit" : "ログイン"
};
// POSTオプション
var options = {
  "method" : "POST",
  "payload" : payload
};

// アクセス先
var url = "https://script.google.com/macros/s/AKfycbwRMBqFmmgeTJTaRt1XBCXisY97b1gKnGl74c25VyBvz-oYw5E/exec"
// POSTリクエスト
var response = UrlFetchApp.fetch(url, options);
// HTML結果を取得（引数のcharsetは設定したほうが良い）
var content = response.getContentText("UTF-8");
  
}