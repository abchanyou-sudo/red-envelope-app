// service-worker.js
// 以 scope 為基準，動態建立預快取清單（避免 GitHub Pages 子路徑問題）
const VERSION = 'v2.0.0';

function url(p){ return new URL(p, self.registration.scope).toString(); }

const APP_SHELL = [
  url('./'),
  url('./index.html'),
  url('./offline.html'),
  url('./icon-192.png'),
  url('./icon-512.png')
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(`giftbook-${VERSION}`).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => !k.includes(VERSION)).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const urlObj = new URL(req.url);

  // 僅處理同源
  if (urlObj.origin !== location.origin) return;

  // HTML 導航：network-first，失敗回離線頁
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(`pages-${VERSION}`).then(c => c.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cache = await caches.open(`pages-${VERSION}`);
          const cached = await cache.match(req);
          return cached || caches.match(url('./offline.html'));
        })
    );
    return;
  }

  // 其他：stale-while-revalidate
  e.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(networkRes => {
        caches.open(`assets-${VERSION}`).then(c => c.put(req, networkRes.clone()));
        return networkRes;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
