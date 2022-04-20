// //install service worker

// self.addEventListener('install',evt=>{
//     console.log("Service worker has been installed");
// })


// //activate service worker


// self.addEventListener('active',evt=>{
//     console.log("Service worker activated");
// })



const cyclePWA = "cycle-pwa-v1"
const assets = [
  "/",
  "/index.html",

  //CSS files
  "/css/animate.min.css",
  "/css/bootstrap.min.css",
  "/css/jquery-ui.css",
  "/css/jquery.mCustomScrollbar.min.css",
  "/css/meanmenu.css",
  "/css/nice-select.css",
  "/css/normalize.css",
  "/css/owl.carousel.min.css",
  "/css/responsive.css",
  "/css/slick.css",
  "/css/style.css",

 


    // JS files
  "/js/bootstrap.bundle.min.js",
  "/js/custom.js",
  "/js/jquery-3.0.0.min.js",
  "/js/jquery.mCustomScrollbar.concat.min.js",
  "/js/jquery.min.js",
  "/js/jquery.validate.js",
  "/js/plugin.js",
  "/js/popper.min.js",


  // Images files
 
"/images/about-img1.png",
"/images/banner-bg.png",
"/images/contact-bg.png",
"/images/img-2.png",
"/images/img-1.png",
"/images/img-3.png",
"/images/left-quote.png",
"/images/logo_1_512x512.png",
"/images/logo_144x144.png",
"/images/logo.png",
"/images/our-img-1.png",
"/images/right-quote.png",
"/images/search-icon.png",
"/images/shopping-bag.png",
"/images/togle-menu-icon.png",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cyclePWA).then(cache => {
      cache.addAll(assets)
      // cache.addAll([
      //   "/",
      //   "/index.html",
      
      //   //CSS files
      //   "/css/animate.min.css",
      //   "/css/bootstrap.min.css",
      //   "/css/jquery-ui.css",
      //   "/css/jquery.mCustomScrollbar.min.css",
      //   "/css/meanmenu.css",
      //   "/css/nice-select.css",
      //   "/css/normalize.css",
      //   "/css/owl.carousel.min.css",
      //   "/css/responsive.css",
      //   "/css/slick.css",
      //   "/css/style.css",
      
       
      
      
      //     // JS files
      //   "/js/bootstrap.bundle.min.js",
      //   "/js/custom.js",
      //   "/js/jquery-3.0.0.min.js",
      //   "/js/jquery.mCustomScrollbar.concat.min.js",
      //   "/js/jquery.min.js",
      //   "/js/jquery.validate.js",
      //   "/js/plugin.js",
      //   "/js/popper.min.js",
      
      
      //   // Images files
       
      // "/images/about-img1.png",
      // "/images/banner-bg.png",
      // "/images/contact-bg.png",
      // "/images/img-2.png",
      // "/images/img-1.png",
      // "/images/img-3.png",
      // "/images/left-quote.png",
      // "/images/logo_1_512x512.png",
      // "/images/logo_144x144.png",
      // "/images/logo.png",
      // "/images/our-img-1.png",
      // "/images/right-quote.png",
      // "/images/search-icon.png",
      // "/images/shopping-bag.png",
      // "/images/togle-menu-icon.png",
      
      // ]);
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

  self.addEventListener("push", event => {
    let message = event.data.json();
  
    switch(message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  }, false);
  



  self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});

  // self.addEventListener('notificationclick', (event) => {
  //   console.log('[Service Worker] Notification click Received.', event);
  //   event.notification.close();
  
  //   const launchUrl = event.action || event.notification.data.launchUrl;
  
  //   if (launchUrl) {
  //     event.waitUntil(clients.openWindow(launchUrl));
  //   }
  // });