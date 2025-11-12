# 紅包記帳系統（離線模型就緒版 v2.4.0）

> 這個版本「不依賴 CDN」，把 Tesseract 的 worker/core/語言檔放在本機即可。部署到 GitHub Pages 後，第一次打開即能離線運作。

## 你只要做兩件事
1. 放進 **/vendor**：`tesseract.min.js`、`tesseract.worker.min.js`、`tesseract-core.wasm`
2. 放進 **/models**：`chi_tra.traineddata`（可選 `eng.traineddata`）

PWA 的 Service Worker 對 `/vendor` 與 `/models` 走 **cache-first**，確保不會重複下載。

## 功能
- 單次多張紙鈔：擷取 100/200/500/1000（含中文大寫）全部出現次數並加總。
- 編碼自動 +1，CSV 匯出（檔名含日期）。
- 清楚的「模型/worker 來源」診斷面板（本地/或暫用 CDN）。
- GitHub Pages basePath 自動偵測；PWA 離線快取。

## 完全離線（可選）
目前 Tailwind 仍走 CDN。若要 100% 離線，請把 `tailwind.css` 放進 `/vendor/` 並改 `index.html` 為本地引用。

## GitHub Pages 部署
1. 上傳整個資料夾內容（含 /vendor 與 /models）到 repo 根目錄。
2. Settings → Pages：Deploy from a branch → main → /(root)。
3. 手機 Safari 開啟 `https://<帳號>.github.io/<repo>/` → 加入主畫面。
