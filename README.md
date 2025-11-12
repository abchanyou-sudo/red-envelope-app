# 紅包記帳系統（修正版 v5 API，v2.5.1）
- 已改為 Tesseract.js v5 正確語法：`await Tesseract.createWorker('chi_tra', 1, {...})`
- 語言模型從 jsDelivr 下載並快取；支援 PWA 離線、相機/相簿、多張紙鈔加總、CSV 匯出。

## 部署（GitHub Pages）
1. 上傳全部檔案至 repo 根目錄
2. Settings → Pages：Deploy from a branch → main → /(root)
3. 手機 Safari 開啟 `https://<帳號>.github.io/<repo>/`，加入主畫面
