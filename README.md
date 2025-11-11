# 紅包記帳系統（相機 + OCR 強化版 v2.0.3）

- 自動偵測 GitHub Pages 子路徑
- 首次會下載 OCR 語言（需要網路），Service Worker 會把 CDN 靜態檔做 runtime 快取
- 有「線上/離線」狀態顯示、診斷資訊
- PWA 可離線使用；之後更新請調整 service-worker.js 的 VERSION

## 部署
1. 新建 GitHub Repo（任意名），上傳本包所有檔案至根目錄並 Commit。
2. Settings → Pages：Source 選 Deploy from a branch；Branch 選 main、資料夾 /(root)。
3. 以 `https://你的帳號.github.io/<repo>/` 開啟；iPhone 用 Safari 可加入主畫面。

## 提示
- 若在 LINE/FB 內建瀏覽器開啟，可能無法取用相機。請改用 Safari。
- Safari → AA → 網站設定 → 相機：允許。
- 首次辨識需要網路，待語言檔快取後，下次可離線辨識（快取可能受瀏覽器策略影響）。
