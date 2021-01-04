
// 獲得相對路徑
function getUrlRelativePath() {
　　var url = document.location.toString();
　　var arrUrl = url.split("//");

　　var start = arrUrl[1].indexOf("/");
　　var relUrl = arrUrl[1].substring(start); //stop省略，截取從start開始到結尾的所有字元

　　if(relUrl.indexOf("?") != -1){
　　　　relUrl = relUrl.split("?")[0];
　　}
　　return relUrl;
}

// 入口
$(() => {
  
  // 懸浮框
  $('[data-toggle="tooltip"]').tooltip();

  // 程式碼突顯
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });

  // 首頁預載入微博內容
  if (getUrlRelativePath() == '/') {
    let url = '/micro-blog/2020.json'
    $.get(url, res => {
      localStorage.setItem('micro-blog-content', JSON.stringify(res))
    })
  }

});
