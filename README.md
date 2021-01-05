> 這是一個執行在cloudflare workers 上的部落格程式,使用 cloudflare KV作為資料庫,無其他依賴.
相容靜態部落格的速度,以及動態部落格的靈活性,方便搭建不折騰.
示範地址: [https://blog.gezhong.vip](https://blog.gezhong.vip "cf-blog示範站點")

### TG 討論群: [@CloudflareBlog](https://t.me/cloudflareblog "")
# 主要特點
* 使用workers提供的KV作為資料庫
* 使用cloudflare快取html來降低KV的讀寫
* 所有html頁面均為快取,可達到靜態部落格的速度
* 使用KV作為資料庫,可達到wordpress的靈活性
* 後台使用markdown語法,方便快捷
* 一鍵發布(頁面重構+快取清理)

# 承載能力
 * KV基本上不存在瓶頸,因為使用了快取,讀寫很少
 * 唯一瓶頸是 workers的日訪問量10w,大約能承受2萬IP /日
 * 文章數:1G儲存空間,幾萬篇問題不大

# 部署步驟
  這裡沒有即時預覽真難受,一系列坑會慢慢填到部落格,敬請關注 [https://blog.gezhong.vip](https://blog.gezhong.vip "")

# 更新日誌

> [持續更新地址https://blog.gezhong.vip/article/009000/update-log.html](https://blog.gezhong.vip/article/009000/update-log.html "更新日誌")
  
## 最近更新(2020-12-31)
* 2020-12-31:加入sitemap.xml
* 2020-12-24:本次更新,主要針對seo和閱讀次數,以及多項細節最佳化




### 前端示範:[https://blog.gezhong.vip](https://blog.gezhong.vip "示範站點")
![](https://s3.ax1x.com/2020/12/22/rrP81S.png)

### 後端示範:
![](https://s3.ax1x.com/2020/12/22/rrAWrD.png)

## 捐贈

如果你覺得本項目幫到你了，還請支持一下原作者[gdtool/cloudflare-workers-blog](https://github.com/gdtool/cloudflare-workers-blog "")
