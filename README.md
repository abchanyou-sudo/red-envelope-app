# 紅包記帳系統（單次多張紙鈔辨識版 v2.2.0）

**一張照片就同時偵測多張紙鈔**：自動蒐集 100/200/500/1000 的出現次數並加總，避免出現 71、序號等誤判。

- GitHub Pages 自動 basePath
- 相簿選擇 + 拍照 +（可選）相機串流截圖辨識
- 編碼：每新增自動 +1，可手動修改或「重設為 1」
- 列表顯示總額與明細（100×a、200×b、…）
- CSV 匯出含總額、總張數與各面額數量
- 首次上線下載 OCR 語言；SW 具 CDN runtime cache、PWA 離線可用

## 部署
1. 建立（或使用既有）GitHub Repo。
2. 上傳本包所有檔案到根目錄並 Commit。
3. Settings → Pages：Source 選 Deploy from a branch；Branch 選 main、資料夾 /(root)。
4. 開啟 `https://你的帳號.github.io/<repo>/`；iPhone 用 Safari 可加入主畫面。

## 使用建議
- 讓紙鈔佔畫面 60%+、光線均勻、避免反光。
- 抓不到時可用按鈕手動 +/− 調整各面額張數後再新增記錄。
