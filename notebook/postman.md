 ### reference

[Postman - 測試Web Service的工具](https://medium.com/@mikru168/postman-測試web-service的工具-c7726997868a)

### 前置作業

1.Chrome 商店搜尋 postman 並將該功能加到 chrome<br>
2. 新增應用程式至 Chrome 的擴充功能<br>
3. 至擴充功能查看 Postman 是否有被啟用<br>
4. 從應用程式打開 Postman 並註冊帳號(可以直接使用 Google 的帳號登入即可)<br>

### Postman 工具簡介

1.隱藏或顯示左邊的視窗。

2.Collection Runner 可用來批次執行 Collection Request。

3.可匯入 Postman Collection、Run scope 等資料。

4.另開 Postman 視窗。
5.記錄執行過的請求。

6.類我的最愛，可分群組並將執行過的請求儲存在群組內，方便日後相同的請求不需再重新輸入。
7.HTTP 請求的種類，舉凡我們常看到的 Get、Post、Put、Delete等等。

8.請求的 URL。

9.依 ket、value 的方式來夾帶請求的參數。

10可將執行過的請求儲存在 Collection 裡。

11.可設定 Basic 驗證、Degest 驗證等等。

12.依 key、value 的方式設定 Content-Type = text/html 或 Accept-charset = utf-8。

13.回傳的結果區塊。

14.http 狀態和執行所花費的時間。

15.回傳結果的格式，這邊有 JSON、XML、HTML 等等可選擇。

16.依第15項的設定顯示結果的區塊。

<br>
實作 1 - 使用 Get 的方式發送請求給 Web Service

Web Service 的 URL => http://127.0.0.1:8090/esblab1/

Web Service 接受的參數傳遞方式 => 接在 URL 後，例如：http://127.0.0.1:8090/esblab1/Frank

帶入 Web Service 的 URL 和參數

Web Service 回傳一個 XML 格式的資料結果

<br>

實作 2 - 使用 Post 的方式並夾帶 JSON 格式的參數發送請求給 Web Service

Web Service 的 URL => http://127.0.0.1:8090/checkWebServiceAuth/

Web Service 接受的參數傳遞方式 => JSON 格式，例如：

```
{
  “esb”: 
  { 
   WS_NAME:”Test”,
   END_MK:”N”
  } 
}
```

