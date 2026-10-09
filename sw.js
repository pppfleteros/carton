// Mínimo para que el celular la ofrezca como app instalable. No guarda nada:
// todo pasa siempre por la red (la app real vive en Apps Script).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
