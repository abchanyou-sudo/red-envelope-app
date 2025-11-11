# 紅包記帳系統（GitHub Pages 自動偵測版）

不論你的倉庫叫什麼名字，本版會自動偵測 basePath，避免白畫面（多半是路徑或 SW/manifest 沒對到）。

## 部署步驟
1. 新增 GitHub 倉庫（任意名稱）。
2. 上傳這包檔案到倉庫根目錄並 Commit。
3. **Settings → Pages** 啟用：
   - Source: Deploy from a branch
   - Branch: main / (root)
4. 用手機或桌機開 `https://你的帳號.github.io/<你的倉庫名>/`。

## 更新
- 改任何檔案後 Commit。
- 若想強制使用者拿到新版，請改 `service-worker.js` 的 `VERSION` 值。
