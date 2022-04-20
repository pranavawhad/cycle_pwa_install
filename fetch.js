const cacheName = 'ecommerce'
const cacheAssets = [
    '/',
    'index.html',
    "images\about-img1.png",
    "images\img-1.png",
    "images\img-2.png",
    "images\img-3.png",
    "images\logo.png",
    , 
];
self.addEventListener('fetch', evt => {
    //console.log('fetch event:',evt)
    evt.respondWith(
        caches.match(evt.request).then(res => {
            return res || fetch(evt.request)
        })
    )
});