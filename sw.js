/* sw.js — Service Worker for offline support */
const CACHE = 'ecc-v5';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './css/main.css',
    './css/themes.css',
    './css/components.css',
    './js/utils.js',
    './js/math.js',
    './js/history.js',
    './js/themes.js',
    './js/i18n.js',
    './data/constants.js',
    './data/formulas-math-civil.js',
    './data/formulas-geotech-survey.js',
    './data/formulas-electrical-mech.js',
    './data/formulas-conversions.js',
    './js/basic.js',
    './js/scientific.js',
    './js/civil.js',
    './js/structural.js',
    './js/geotech.js',
    './js/survey.js',
    './js/electrical.js',
    './js/mechanical.js',
    './js/hydraulic.js',
    './js/converter.js',
    './js/formula.js',
    './js/constants-ui.js',
    './js/tabs.js',
    './js/app.js'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).then(res => {
            // Cache new same-origin requests
            if (res.ok && new URL(e.request.url).origin === location.origin) {
                const clone = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return res;
        }).catch(() => caches.match('./index.html')))
    );
});
