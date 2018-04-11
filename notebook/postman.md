 ### reference

[Postman - 測試Web Service的工具](https://medium.com/@mikru168/postman-測試web-service的工具-c7726997868a)

##前置作業

1.Chrome 商店搜尋 postman 並將該功能加到 chrome<br>
2. 新增應用程式至 Chrome 的擴充功能<br>
3. 至擴充功能查看 Postman 是否有被啟用<br>
4. 從應用程式打開 Postman 並註冊帳號(可以直接使用 Google 的帳號登入即可)<br>

##Postman 工具簡介

實作 1 - 使用 Get 的方式發送請求給 Web Service

Web Service 的 URL => http://127.0.0.1:8090/esblab1/

Web Service 接受的參數傳遞方式 => 接在 URL 後，例如：http://127.0.0.1:8090/esblab1/Frank

帶入 Web Service 的 URL 和參數

Web Service 回傳一個 XML 格式的資料結果


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

