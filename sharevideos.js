function sharevideos_deburi3url() {

   //シートを使う準備
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 　var sheet = Spreadsheet.getActiveSheet();
  var date = sheet.getRange(6,13).getValue();
  var post_number = sheet.getRange(6,15).getValue();
  var Rownums = findRow(sheet,date,2); 
  
  
  var target_row = Rownums[0];

   
  //ターゲット列の動画URLを読み取りSharevideosAPIになげて、url取得して書き込み
  for(var i=0;i<post_number;i++){
  
  
  
      //// 動画ULR 1  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var original_url = sheet.getRange(target_row + i,4).getValue();
      var original_url = encodeURI(original_url);
                  
      try {
         var share_request = UrlFetchApp.fetch('http://api.share-videos.se/api/request_video_get?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
      } catch (e) {
        //エラー時の処理
      }
      
      sheet.getRange(target_row + i,7).setValue(share_request);
      
      if(share_request == 'すでに変換は終了しています'){
     
         
        try {
           var share_json = UrlFetchApp.fetch('http://api.share-videos.se/api/is_sv?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
        } catch (e) {
           var share_json = UrlFetchApp.fetch('http://api.share-videos.se/api/is_sv?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
          //エラー時の処理
        }
          
                
          if(share_json != '失敗/非対応'){
             
                  var jsonObj = JSON.parse(share_json);
                  var sharevideos_url = jsonObj['share-videos_url'];
                  sharevideos_url = sharevideos_url.replace( /uid=13/g , 'uid=2372' ) ; 
                 
                  sheet.getRange(target_row + i,7).setValue(sharevideos_url);
             
          }else{
              sheet.getRange(target_row + i,7).setValue('no url');
          }
          
      }
      //// 動画ULR 1  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      
      //// 動画ULR 2  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var original_url = sheet.getRange(target_row + i,5).getValue();
      var original_url = encodeURI(original_url);
                  
      try {
         var share_request = UrlFetchApp.fetch('http://api.share-videos.se/api/request_video_get?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
      } catch (e) {
        //エラー時の処理
      }
      
      sheet.getRange(target_row + i,8).setValue(share_request);
      
      if(share_request == 'すでに変換は終了しています'){
     
         
        try {
           var share_json = UrlFetchApp.fetch('http://api.share-videos.se/api/is_sv?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
        } catch (e) {
           var share_json = UrlFetchApp.fetch('http://api.share-videos.se/api/is_sv?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
          //エラー時の処理
        }
          
                
          if(share_json != '失敗/非対応'){
             
                  var jsonObj = JSON.parse(share_json);
                  var sharevideos_url = jsonObj['share-videos_url'];
                  sharevideos_url = sharevideos_url.replace( /uid=13/g , 'uid=2372' ) ; 
                 
                  sheet.getRange(target_row + i,8).setValue(sharevideos_url);
             
          }else{
              sheet.getRange(target_row + i,8).setValue('no url');
          }
          
      }
     //// 動画ULR 2  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     
     //// 動画ULR 3  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var original_url = sheet.getRange(target_row + i,6).getValue();
      var original_url = encodeURI(original_url);
                  
      try {
         var share_request = UrlFetchApp.fetch('http://api.share-videos.se/api/request_video_get?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
      } catch (e) {
        //エラー時の処理
      }
      
      sheet.getRange(target_row + i,9).setValue(share_request);
      
      if(share_request == 'すでに変換は終了しています'){
     
         
        try {
           var share_json = UrlFetchApp.fetch('http://api.share-videos.se/api/is_sv?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
        } catch (e) {
           var share_json = UrlFetchApp.fetch('http://api.share-videos.se/api/is_sv?url=' + original_url,{ muteHttpExceptions:true }).getContentText();
          //エラー時の処理
        }
          
                
          if(share_json != '失敗/非対応'){
             
                  var jsonObj = JSON.parse(share_json);
                  var sharevideos_url = jsonObj['share-videos_url'];
                  sharevideos_url = sharevideos_url.replace( /uid=13/g , 'uid=2372' ) ; 
                 
                  sheet.getRange(target_row + i,9).setValue(sharevideos_url);
             
          }else{
              sheet.getRange(target_row + i,9).setValue('no url');
          }
          
      }
     //// 動画ULR 3  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  

      
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
  
}
