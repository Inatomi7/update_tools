function keyword() {

  var html = UrlFetchApp.fetch('http://movie.eroterest.net/keyword/').getContentText();
  
  //<b>1</b>位</span>マジックミラー号</h4>
  //</b>位</span>jk&nbsp;&#187;<
  
  var partten = /位<\/span>(.*?)</g ;
  
  var hits ;
  var ranking = new Array();
  
  var i = 0 ;
  
  
   while(i < 100){
   
     hits = partten.exec(html) ;
     ranking[i] = hits[1];
  
     if (ranking[i].match(/&/)) {
      //ranking[i]に'&'を含む場合の処理
         ranking[i]=ranking[i].substring(0,ranking[i].indexOf("&")); //&以降を除外
      }
     i++ ;
     
   }
   
  
  var set_rank = new Array();
  
  var i = 0 ;

  while(i < 10){ // 10ワードずつを配列に格納する処理
  
    var j = 0 ;
    
    while(j < 10){
    
      if(j == 0 ){
          set_rank[i] = ranking[j + (i + i * 9)] + '  ,  ';
      }else{
          set_rank[i] += ranking[j + (i + i * 9)] + '  ,  ';
      }
      
      j++;
    
    }
   
    i++ ;
  }
   
   
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
　  var sheet = Spreadsheet.getActiveSheet();
  var sheetname = Spreadsheet.getActiveSheet().getName();
    
  sheet.getRange(2,10).setValue(set_rank[0]);
  sheet.getRange(3,10).setValue(set_rank[1]);
  sheet.getRange(4,10).setValue(set_rank[2]);
  sheet.getRange(5,10).setValue(set_rank[3]);
  sheet.getRange(6,10).setValue(set_rank[4]);
  sheet.getRange(7,10).setValue(set_rank[5]);
  sheet.getRange(8,10).setValue(set_rank[6]);
  sheet.getRange(9,10).setValue(set_rank[7]);
  sheet.getRange(10,10).setValue(set_rank[8]);
  sheet.getRange(11,10).setValue(set_rank[9]);

}
