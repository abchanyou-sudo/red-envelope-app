// service-worker.js
const VERSION = 'v2.0.3';

function url(p){ return new URL(p, self.registration.scope).toString(); }

const APP_SHELL = [
  url('./'),
  url('./index.html'),
  url('./offline.html'),
  url('./icon-192.png'),
  url('./icon-512.png')
];

// 允許快取部分跨網域資源（Tesseract.js / React / Tailwind CDN）
const CROSS_ORIGIN_CACHE_HOSTS = [
  'unpkg.com',
  'cdn.tailwindcss.com',
  'cdn.jsdelivr.net'
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
  const u = new URL(req.url);

  // 嘗試對 Tesseract / CDN 做 runtime cache（stale-while-revalidate）
  if (CROSS_ORIGIN_CACHE_HOSTS.includes(u.host)) {
    e.respondWith(
      caches.match(req).then(cached => {
        const fetchPromise = fetch(req).then(net => {
          caches.open(`cdn-${VERSION}`).then(c => c.put(req, net.clone()));
          return net;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // 僅處理同源
  if (u.origin !== location.origin) return;

  // HTML 導航：network-first
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then(res => {
          caches.open(`pages-${VERSION}`).then(c => c.put(req, res.clone()));
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
      const fetchPromise = fetch(req).then(net => {
        caches.open(`assets-${VERSION}`).then(c => c.put(req, net.clone()));
        return net;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
