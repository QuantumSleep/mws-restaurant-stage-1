self.addEventListener('install', event => {
    console.log("Attempting");
    event.waitUntil(
        caches.open("restaurant-reviews-v1").then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/responsive.css',
                '/css/style.css',
                '/data/restaurants.json',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/registerSW.js',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg'
            ])
            .catch(error => {
                console.log("Failed to open: " + error);
            });
        })
    );
});

self.addEventListener("fetch", event => {
    let cacheRequest = event.request;
    console.log(event.request);
    if (event.request.url.indexOf('restaurant.html') > -1){
        cacheRequest = new Request("restaurant.html");
    }
    event.respondWith(
        caches.match(cacheRequest).then(response =>{
            console.log("In cache");
            return response || fetch(event.request);
        })
    );

});