function csv_deburi3url() {


  //シートを使う準備
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
　 var sheet = Spreadsheet.getActiveSheet();
  var date = sheet.getRange(4,13).getValue();
  var post_number = sheet.getRange(4,15).getValue();
  var Rownums = findRow(sheet,date,2); 
  var site_rows_set = new Array();
  var target_row ; //定義はsite_row functionの中には入れないでここでする
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  // 「月」と「日」で1桁だったときに頭に 0 をつける
  if (m < 10) {
    m = '0' + m;
  }
  if (d < 10) {
    d = '0' + d;
  }
  
  
  target_row = Rownums[0];
 
  var data = sheet.getRange(target_row,4,post_number,19).getValues(); 
  var human = sheet.getRange(target_row,1,post_number,1).getValues();
  

  var objSheets //スプレレッドシート全体の情報を取得
  objSheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  
  var intMaxIndex = objSheets.length; // インデックスの最大を取得
  //Browser.msgBox(intMaxIndex);
  
  
  for (intIndex = 0; intIndex < intMaxIndex; intIndex++) {
  
     var sheet_name = objSheets[intIndex].getName();
     
     if(sheet_name.indexOf('csv') != -1){//全シートの名前をスキャンして、csvが含まれるもののインデックス数をcsv_sheet_indexに取得
                          
       var csv_sheet_index = intIndex ;

     }
     

     
  }
  
  var csv_sheet = Spreadsheet.getSheets()[csv_sheet_index];
  csv_sheet.clear(); //いったんクリア
 
  csv_sheet.getRange(1,1).setValue('post_date'); // post_date：2017/2/25 0:07
  csv_sheet.getRange(1,2).setValue('post_category'); // post_category：カテゴリ,カテゴリ,カテゴリ
  csv_sheet.getRange(1,3).setValue('post_title');   // post_title：タイトルタイトルタイトルタイトル
  csv_sheet.getRange(1,4).setValue('post_content'); //post_content：本文本文本文本文本文本文
  csv_sheet.getRange(1,5).setValue('thumbnails_url_01'); // thumbnails_url_01：<img src="" alt="タイトル" />
  
  csv_sheet.getRange(1,6).setValue('video_url'); // video_url：
  csv_sheet.getRange(1,7).setValue('video_url2'); // video_url2：
  csv_sheet.getRange(1,8).setValue('video_url3'); // video_url3：
  
  csv_sheet.getRange(1,9).setValue('post_name'); //post_name：
  csv_sheet.getRange(1,10).setValue('post_author'); //post_author：
  
  csv_sheet.getRange(1,11).setValue('dmm_title'); // dmm_title：商品タイトル
  csv_sheet.getRange(1,12).setValue('dmm_affiliate_url'); // dmm_affiliate_url：
  csv_sheet.getRange(1,13).setValue('dmm_img_url'); // dmm_img_url：
  
  csv_sheet.getRange(1,14).setValue('meta_title'); // meta_title：タイトル
  csv_sheet.getRange(1,15).setValue('meta_keywords'); // meta_keywords：カテゴリ,カテゴリ,カテゴリ
  csv_sheet.getRange(1,16).setValue('post_type'); // post_type：post
  csv_sheet.getRange(1,17).setValue('post_status'); // post_status：publish
  
  csv_sheet.getRange(1,18).setValue('post_tags'); // post_tags：
  csv_sheet.getRange(1,19).setValue('accesstrade_url'); // accesstrade_url：
  csv_sheet.getRange(1,20).setValue('site_url'); // site_url：
  
  csv_sheet.getRange(1,21).setValue('meta_description'); // meta_description：本文
  csv_sheet.getRange(1,22).setValue('thumbnails_text_01'); // thumbnails_text_01：動画はこちら
  csv_sheet.getRange(1,23).setValue('thumbnails_text_02'); // thumbnails_text_02：またははこちら
  csv_sheet.getRange(1,24).setValue('maker'); // maker：メーカー様
  
  csv_sheet.getRange(1,25).setValue('ori_video_url'); // ori_video_url：
  csv_sheet.getRange(1,26).setValue('ori_video_url2'); // ori_video_url2：
  csv_sheet.getRange(1,27).setValue('ori_video_url3'); // ori_video_url3：
  
  
  
  
  for(var i=0;i<post_number;i++){
      
     //data[i][0] = ori_url
     //data[i][1] = ori_url2
     //data[i][2] = ori_url3
     //data[i][3] = share_url
     //data[i][4] = share_url2
     //data[i][5] = share_url3
     //data[i][6] = カテゴリー
     //data[i][7] = タイトル
     //data[i][8] = 本文
     //data[i][9] = DMMタイトル
     //data[i][10] = DMMULR
     //data[i][11] = DMMimgURL
     //data[i][12] = 時
     //data[i][13] = 分
     //data[i][14] = アクトレURL
     //data[i][15] = メーカー
     
     sheet.getRange(target_row + i,3).setValue('o');
     //データをcsvに書き出した時点で、post項目に'o'マークをつける

     csv_sheet.getRange(2 + i,1).setValue(y+'/'+m+'/'+d+' '+data[i][12]+':'+data[i][13]); // post_date：2017/2/25 0:07
     csv_sheet.getRange(2 + i,2).setValue('\\' + data[i][6]); // post_category：カテゴリ,カテゴリ,カテゴリ,カテゴリ,カテゴリ
     csv_sheet.getRange(2 + i,3).setValue('\\' + data[i][7]); // post_title：タイトルタイトルタイトルタイトルタイトルタイトル
     csv_sheet.getRange(2 + i,4).setValue('\\' + data[i][8]); //post_content：本文本文本文本文本文本文本文本文本文本文本文本文

     csv_sheet.getRange(2 + i,5).setValue('<img src="http://xvideos-jp-edb.com/wp-content/uploads/'+ y +'/'+ m +'/'+ d +'/'+ i +'.jpg" alt="\\'+ data[i][7] +'" />');    
     // thumbnails_url_01：<img src="" alt="" />
     
     if ( data[i][3].indexOf('http') != -1) { //変換が終わっているかのチェック
          csv_sheet.getRange(2 + i,6).setValue(data[i][3]); // video_url：
     }
     
     if ( data[i][4].indexOf('http') != -1) { //変換が終わっているかのチェック
          csv_sheet.getRange(2 + i,7).setValue(data[i][4]); // video_url：
     }
     
     if ( data[i][5].indexOf('http') != -1) { //変換が終わっているかのチェック
          csv_sheet.getRange(2 + i,8).setValue(data[i][5]); // video_url：
     }
     
     csv_sheet.getRange(2 + i,9).setValue(y+'_'+m+'_'+d+'_'+i); //post_name：
     csv_sheet.getRange(2 + i,10).setValue('erodebris_author'); //post_author：
     
     csv_sheet.getRange(2 + i,11).setValue('\\' + data[i][9]); 
     csv_sheet.getRange(2 + i,12).setValue(data[i][10] + '/xxx'); 
     csv_sheet.getRange(2 + i,13).setValue(data[i][11]); // dmm_img_url：
     
     csv_sheet.getRange(2 + i,14).setValue('\\' + data[i][7]); // meta_title：【
     csv_sheet.getRange(2 + i,15).setValue('\\' + data[i][6]); // meta_keywords：
     csv_sheet.getRange(2 + i,16).setValue('post'); // post_type：post
     csv_sheet.getRange(2 + i,17).setValue('publish'); // post_status：publish
     
     csv_sheet.getRange(2 + i,18).setValue('\\'); // post_tags：
     csv_sheet.getRange(2 + i,19).setValue(data[i][14]);// accesstrade_url：
     csv_sheet.getRange(2 + i,20).setValue(data[i][14]);// site_url：h
     
     csv_sheet.getRange(2 + i,21).setValue('\\' + data[i][8]);// meta_description：本文
     csv_sheet.getRange(2 + i,22).setValue('\\動画はこちら');// thumbnails_text_01：動画はこちら
     csv_sheet.getRange(2 + i,23).setValue('\\またははこちら');// thumbnails_text_02：またははこちら
     
     csv_sheet.getRange(2 + i,24).setValue('\\' + data[i][15]);// maker：SODクリエイト
     
     csv_sheet.getRange(2 + i,25).setValue(data[i][0]); // ori_video_url：hubtraffic系動画URL
     csv_sheet.getRange(2 + i,26).setValue(data[i][1]); // ori_video_url2：hubtraffic系動画URL
     csv_sheet.getRange(2 + i,27).setValue(data[i][2]); // ori_video_url3：hubtraffic系動画URL
    
  }



  
      
  function findRow(sheet,value,col){
    
      var dat = sheet.getDataRange().getValues(); //受け取ったシートのデータを二次元配列に取得
      var j = 0 ;
      var hit_rows = new Array();
      
      for(var i=1;i<dat.length;i++){
        
        if((dat[i][col-1] - value) == 0){ //日付データ同士を引き算することで一致するかチェック
          
          hit_rows[j] = i+1 ;
          j++;
        }
        
      }
      
      if(hit_rows != null){
        return hit_rows ;
      }else{
        return 0;
      }
    
  }
  

// exportのオプション
//var fileTitle = csvFileName;
var gdocUrl    = 'https://docs.google.com/spreadsheets/';
var exportOptions = {
  exportFormat: "csv",
  size:         "7",
  fzr:          "false",
  portrait:     "false",
  gridlines:    "false",
  printtitle:   "true",
  sheetnames:   "false",
};

// 対象となるファイルとシート（この場合は最初のシート）
var fileId = Spreadsheet.getId();
var sheetId = Spreadsheet.getSheets()[csv_sheet_index].getSheetId();

//時刻データを取得して変数jikanに格納する
var jikan= new Date();

//時・分・秒を取得する
var hour = jikan.getHours();
var minute = jikan.getMinutes();
var second = jikan.getSeconds();


  // 「時間」と「分」で1桁だったときに頭に 0 をつける
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }

Spreadsheet.getSheets()[csv_sheet_index].setName('csv'+y+m+d+'_deburi_'+post_number+'set_'+hour+'_'+minute+'_'+second);//シート名がファイル名になるのでシート名を変更


// export用のURLを生成
var qs = [];
qs.push( "gid=" + sheetId );
for( paranName in exportOptions ){
  qs.push( paranName + "=" + exportOptions[paranName] );
}
var fetchUrl = gdocUrl +'d/'+fileId+'/export?' + qs.join("&");


  
//http://blog.kcmservice.biz/?p=1521
// メッセージウィンドウを開く処理。

// title：ウィンドウタイトル
// message：アンカータグが設定されるメッセージ
// href：リンク先URL

function showURL(title,message,href){ 

// 新規メッセージウィンドウのサイズを設定。
var app = UiApp.createApplication().setHeight(50).setWidth(500);

app.setTitle(title); // ウィンドウのタイトルを設定

var link = app.createAnchor(message, href); // ウィンドウの内容として、アンカーリンクを設定
app.add(link);

// アクティブなシートにウィンドウを表示する
var doc = SpreadsheetApp.getActive();
doc.show(app);
}

showURL('CSV file','download',fetchUrl);

//Spreadsheet.deleteSheet(onetime_sheet);

//このサイトで勉強する：https://www.virment.com/create-pdf-google-apps-script/


 
}




