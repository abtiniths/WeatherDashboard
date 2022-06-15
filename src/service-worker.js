/* eslint-disable no-restricted-globals */
let cacheData = "grillkorvV2";

const stuff = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/index.html",
        "/favicon.ico",
        " http://openweathermap.org/img/wn/01d@2x.png",
        " http://openweathermap.org/img/wn/02d@2x.png",
        " http://openweathermap.org/img/wn/03d@2x.png",
        " http://openweathermap.org/img/wn/04d@2x.png",
        " http://openweathermap.org/img/wn/05d@2x.png",
        " http://openweathermap.org/img/wn/06d@2x.png",
        " http://openweathermap.org/img/wn/07d@2x.png",
        " http://openweathermap.org/img/wn/08d@2x.png",
        " http://openweathermap.org/img/wn/09d@2x.png",
        " http://openweathermap.org/img/wn/10d@2x.png",
        " http://openweathermap.org/img/wn/01n@2x.png",
        " http://openweathermap.org/img/wn/02n@2x.png",
        " http://openweathermap.org/img/wn/03n@2x.png",
        " http://openweathermap.org/img/wn/04n@2x.png",
        " http://openweathermap.org/img/wn/05n@2x.png",
        " http://openweathermap.org/img/wn/06n@2x.png",
        " http://openweathermap.org/img/wn/07n@2x.png",
        " http://openweathermap.org/img/wn/08n@2x.png",
        " http://openweathermap.org/img/wn/09n@2x.png",
        " http://openweathermap.org/img/wn/10n@2x.png",
        "/",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestURL = event.request.clone();
        fetch(requestURL);
      })
    );
  }
});
