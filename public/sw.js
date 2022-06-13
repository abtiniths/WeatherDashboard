let cacheData = "grillkorvV2";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/index.html",
        "/favicon.ico",
        "/img/wn/01d@2x.png",
        "/img/wn/02d@2x.png",
        "/img/wn/03d@2x.png",
        "/img/wn/04d@2x.png",
        "/img/wn/05d@2x.png",
        "/img/wn/06d@2x.png",
        "/img/wn/07d@2x.png",
        "/img/wn/08d@2x.png",
        "/img/wn/09d@2x.png",
        "/img/wn/10d@2x.png",
        "/img/wn/04n@2x.png",

        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
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
