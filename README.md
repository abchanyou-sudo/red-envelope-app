# 紅包記帳系統（相機 + OCR + 自動編碼 版 v2.0.4）

- GitHub Pages 就緒（自動偵測 basePath）
- iPhone 可「拍照」或「從相簿選擇」
- OCR：Tesseract.js（繁中+英文），首次需網路下載語言檔
- PWA：離線可用、CDN 重要檔 runtime cache
- 新增「編碼」欄位：每新增一筆自動 +1，可按「重設為 1」

## 部署
1. 建立（或使用既有）GitHub Repo。
2. 上傳本包所有檔案到根目錄並 Commit。
3. Settings → Pages：Source 選 Deploy from a branch；Branch 選 main、資料夾 /(root)。
4. 以 `https://你的帳號.github.io/<repo>/` 開啟；iPhone 用 Safari 可加入主畫面。

## 使用
- 「拍照」：`<input type="file" capture="environment">` 會優先開相機。
- 「從相簿選擇」：沒有 capture，會打開 iPhone 照片庫。
- 「編碼」：預設從 1 開始，新增完自動 +1；可手動修改或用「重設為 1」。

## 更新
- 調整程式後 Commit；若載入到舊版，請改 `service-worker.js` 的 `VERSION` 後再部署。
