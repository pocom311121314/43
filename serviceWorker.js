const dc = "dcstore"
const assets = [
  "/",
  "/home-mobile.html"
]
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(dcstore).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })