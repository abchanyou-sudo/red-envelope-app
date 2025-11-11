# 紅包記帳系統（GitHub Pages + 相機 + OCR）

- 自動偵測 GitHub Pages 子路徑（不用修改 repo 名稱也可運作）。
- 內建相機辨識（Tesseract.js），可拍照或上傳照片辨識「名字與金額」。
- 記錄儲存在本機 localStorage，可匯出 CSV。
- PWA 可離線使用（含 offline.html 後備頁）。

## 部署
1. 建立任意名稱的 GitHub 倉庫。
2. 上傳本包所有檔案到倉庫根目錄並 Commit。
3. Settings → Pages：Source 選 Deploy from a branch；Branch 選 main、資料夾 /(root)。
4. 以 `https://你的帳號.github.io/<repo>/` 開啟；手機用 Safari 可加入主畫面。

## 使用
- 開啟相機（HTTPS 必須），拍照後會執行 OCR，嘗試帶出名字與金額，儲存前可人工修改。
- 若相機不支援，可改用「選擇照片」上傳辨識。

## 注意
- OCR 語言資料（繁中/英文）會在首次辨識時下載，需網路；之後可離線使用（若瀏覽器仍保留快取）。
- 為強制更新，請改 `service-worker.js` 的 `VERSION`。
