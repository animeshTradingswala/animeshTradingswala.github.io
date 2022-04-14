'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b39d08753d6d3016e1e2adca557a2d18",
"assets/assets/2min1.mp4": "7bfbeb442be3dfdd0c3731e55dfb4551",
"assets/assets/2min2.m3u8": "06cf4ef6ada2675d9221b8ac4646f82e",
"assets/assets/2min2.mp4": "137b1f39c0188ab73c8e439c2bfe5ebf",
"assets/assets/BarlowSemiCondensed-Black.ttf": "e607f379629a5e875d44a7169039e64a",
"assets/assets/bg.png": "899fbf9342aeece0ae9dfec2ad09466b",
"assets/assets/DualiteAmbassdors/1.png": "7eb685cf4dd50045828b07e041a7cd48",
"assets/assets/DualiteAmbassdors/2.png": "55da501f25a6c3977a1c80634e44e966",
"assets/assets/DualiteAmbassdors/img.png": "131a8d01135cf44162d2b99602816d7c",
"assets/assets/DualiteCompetition/1.png": "04c924ab5184e02fe04ebf22de8baa35",
"assets/assets/DualiteCompetition/3.png": "4cd182478660ec23c50a65e1dc5849ae",
"assets/assets/DualiteCompetition/4.png": "18625337774d8e0d1c7d39a140a137f8",
"assets/assets/DualiteCompetition/5.png": "0797f152f92a33c39edc772a0e11f8ec",
"assets/assets/DualiteCompetition/6.png": "ff5db92034fb8f3a9b46a344b83b8ea7",
"assets/assets/DualiteCompetition/circle_ronaldo.png": "df55e88c0ac8a83b6a5a3a0fdfc24a82",
"assets/assets/DualiteCompetition/circle_tamasha.png": "5c37f777269c1a1935407462f777c69b",
"assets/assets/DualiteCompetition/circle_vd.png": "2b0edd248c7557eca0ff8db296f8d5f3",
"assets/assets/DualiteCompetition/e.png": "ea5270aa80603aee138fd8f01925e2c6",
"assets/assets/DualiteCompetition/t1.png": "fce6b9575bd6519892b47d6bf96b6ca3",
"assets/assets/DualiteCompetition/t2.png": "f9d56c836435898afdf8cece5c333891",
"assets/assets/DualiteCompetition/t3.png": "aea74394f7293324741f4022d77cf7fd",
"assets/assets/DualiteCompetition/t4.png": "850347bf60503da723c90b365eaac7d6",
"assets/assets/DualiteCompetition/upload.png": "a52c31a12a18056c380823990a629e74",
"assets/assets/DualiteCompetition/x.png": "f9d56c836435898afdf8cece5c333891",
"assets/assets/DualiteCompetition/y.png": "ec5179185f9ef4e706574f6ac99816fc",
"assets/assets/fb.png": "dda1cef99ae20a3936d3a5060c48331a",
"assets/assets/font/Aileron-Regular.otf": "d321fa78bb7190a8ca7e14213ef63203",
"assets/assets/font/Barlow-Black.ttf": "3259b9d5da281613ed918c9d165c20a5",
"assets/assets/font/blauth-regular.ttf": "8fa48cce519749e39a748787514e7ff9",
"assets/assets/font/bridge-text-medium.ttf": "bedbe0af22dba55d3632ebb5b88c2da3",
"assets/assets/font/Horizon.ttf": "12a085ce2709cd07f165bcc367fc9bb6",
"assets/assets/font/OpenSauceSans-SemiBold.ttf": "559352ec65338eea91e899bf45df1263",
"assets/assets/font/PlayfairDisplay-Italic-VariableFont_wght.ttf": "f54fcb31947f45744af46e4bb6166b0e",
"assets/assets/font/PlayfairDisplay-VariableFont_wght.ttf": "168ee09f171436bd22bfc276dc181ada",
"assets/assets/font/RussoOne-Regular.ttf": "8a511841065ce7bd13b845eeea880d6e",
"assets/assets/font/SpaceGrotesk-Regular.ttf": "9589c3d42504fe59926fb74b90b74061",
"assets/assets/font/SpaceMono-Regular.ttf": "93e5f901c7ee7aaedbfd8a9bb0ffe636",
"assets/assets/font/Swiss%2520721%2520Black%2520BT.ttf": "75c766401b6dc0dd531172f8cf00cf81",
"assets/assets/font/Swiss%2520721%2520Bold%2520BT.ttf": "b0ff35c4fe28bbe6f85c40d736a0aa69",
"assets/assets/font/VisiaPro-Regular.ttf": "e7f0574c9bc8a638add57773da196ddb",
"assets/assets/home/1.png": "b04cb6be4f590bfd7dc3a7335a86c0ff",
"assets/assets/home/2.png": "11af1d7e38dc9ee446e41e4403a3dbf1",
"assets/assets/home/3.png": "08e0bb759dfbdddf2a0e453a9f41c717",
"assets/assets/home/4.png": "7f0f1cac4514a14b819aeb072f51a33f",
"assets/assets/home/bottom_home.png": "f4fd410feda5c46d35286c8274d12c87",
"assets/assets/home/iPhone%2520X,%2520XS,%252011%2520Pro%2520%25E2%2580%2593%252010%2520(1).png": "2ee2f610208f7a0cf4a7fa0998415036",
"assets/assets/infinity_loader.gif": "74ca342cd229054eeb3d9b97feaa791d",
"assets/assets/insomnia.jpg": "565dc71185eae6cffcf4a4b8000ff90f",
"assets/assets/insta.png": "abf377f91cf2d5aa74037b1d1df6d353",
"assets/assets/instagram.png": "77a75a5acc7b7a91a54b2f6e27b0bba7",
"assets/assets/linkdin.png": "e8744bda546965bbea1ce0fae53f0205",
"assets/assets/linkedin_outline.png": "a073ecdfc08870a4b033b6869c7f48fa",
"assets/assets/logo.png": "4e37e276e9ded8fa11641cb2206050a5",
"assets/assets/p1.png": "29c273fa8797d3fec84801589af269ca",
"assets/assets/pic1.jpg": "a43b33b908e4a1bb8d6cbf79194768d4",
"assets/assets/twitter.png": "99f3d33362017384c6a425f2b8b7ccad",
"assets/assets/twitter_outline.png": "8bf8b4ad569285d0e312ff46e2098bfe",
"assets/assets/v1_Trim.mp4": "f7aa4b93bfee2896667d491005461396",
"assets/assets/v2_Trim.mp4": "409067eeb813248f7a07a923e8ca35d6",
"assets/assets/web_about_us/HOME%2520PAGE-DesktopVersion%25207.png": "4925dc92093c07a17ee86f5bd691ef63",
"assets/assets/web_about_us/HOME%2520PAGE-DesktopVersion%25208.png": "c55967353be5f1297d67bdacbee2db27",
"assets/assets/web_competition/1.png": "a2d1ef3dff4bb2ace382b41edd01bb43",
"assets/assets/web_competition/10.png": "6c5fb28742e3a2976aced678242fa318",
"assets/assets/web_competition/11.png": "903faa082c0bfd70986b9203cd1eed71",
"assets/assets/web_competition/12.png": "4750d016420d781030964013bada82ca",
"assets/assets/web_competition/13.png": "d83d0db5a0828d28f298e313d0ed19de",
"assets/assets/web_competition/14.png": "4376fb86ade5fc5153661b3b769f23c7",
"assets/assets/web_competition/15.png": "e832bd672ba7185d77f2232ad8c8a1be",
"assets/assets/web_competition/16.png": "a4230a13c1dcb7d736affef25b7c3a42",
"assets/assets/web_competition/17.png": "5ce4e7b4d251f7120a37819687356198",
"assets/assets/web_competition/18.png": "b2f80141e740634ea5b0e6fd1d3f70f8",
"assets/assets/web_competition/19.png": "4933bdb49090f2706b495e4380f8d630",
"assets/assets/web_competition/2.png": "ec4184c74c25a121031743e1d6b0a146",
"assets/assets/web_competition/20.png": "6f1632392f994d4092e28d9a1681f8c2",
"assets/assets/web_competition/21.png": "0ab40eb86b17c9d55e7cf2a8d001d8d4",
"assets/assets/web_competition/3.png": "9fbce82de7ec933f822882c168c590b3",
"assets/assets/web_competition/4.png": "f6607cc5c8fb6ff838c92c8d932a7e2c",
"assets/assets/web_competition/5.png": "744751f87022e88127b21bc578f013c9",
"assets/assets/web_competition/6.png": "c40ee27b87158e324e53c5c7bafc3db7",
"assets/assets/web_competition/7.png": "37746747cecb3cc67dbb2248c52879c9",
"assets/assets/web_competition/8.png": "12c73fcb9a0e31d9e5ea8a4f5f501722",
"assets/assets/web_competition/9.png": "31b59745bda44f89dee9261ecc761f47",
"assets/assets/web_competition/bg/bg1.png": "12302ec9c486552e54da0bc55b8dc5ed",
"assets/assets/web_competition/bg/bg2.png": "6f0ee7654d0d5b90cca0f80e3d737f92",
"assets/assets/web_competition/bg/bg3.png": "7d2518af8c691945af9d2501b01cc6ae",
"assets/assets/web_competition/bg/bg4.png": "d3f0fe4f594960c00a5a19d91568ab3c",
"assets/assets/web_competition/bg/bg5.png": "04d0ac7677b026aae1d2a2c021a7dfc5",
"assets/assets/web_competition/circle_ronaldo.png": "df55e88c0ac8a83b6a5a3a0fdfc24a82",
"assets/assets/web_competition/circle_tamasha.png": "5c37f777269c1a1935407462f777c69b",
"assets/assets/web_competition/circle_vd.png": "2b0edd248c7557eca0ff8db296f8d5f3",
"assets/assets/web_gallery/gal_1.png": "e038a523065b2422f0b359692b2fc8b0",
"assets/assets/web_gallery/gal_2.png": "b81616b6c42fe289cedd77f2d41fadd5",
"assets/assets/web_home/back.png": "e674231adec403c076473de6e14b41c3",
"assets/assets/web_home/forward.png": "a4925dc09fef63a69dd7d88d1026589d",
"assets/assets/web_home/HOME%2520PAGE-DesktopVersion%25204.png": "21ff566abeeaf97c3a8951c26c250490",
"assets/assets/web_home/HOME%2520PAGE-DesktopVersion%25205.png": "4aeeab7b05a10511cbb66a22d5a6852c",
"assets/assets/web_home/HOME%2520PAGE-DesktopVersion%25207.png": "cbc42a4382ecc4f6317376e3cc0ec91b",
"assets/assets/web_home/home_1.png": "04a3ec59a9e9f4937af69e1ecd310978",
"assets/assets/web_home/home_2.png": "9dbcc0361b99f955281b13fd41a9c5b1",
"assets/assets/web_home/home_3.png": "d1b04cb73cebb7dd75d9241e638fe9e4",
"assets/assets/web_home/linkedin.png": "a073ecdfc08870a4b033b6869c7f48fa",
"assets/assets/web_home/Screenshot%25202022-04-12%2520at%25201.09%25201.png": "aa84fdd5e472861c60aae9ecfca469cc",
"assets/FontManifest.json": "fbcb9d3e43bd85b530b34f5ad14fe54b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2d9b32b48133e0c019e53b35ed3de3fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "021599ec6de28e05865980d24d0eff1f",
"/": "021599ec6de28e05865980d24d0eff1f",
"main.dart.js": "6b4dafad627a0c24832f81332da20dec",
"manifest.json": "6f432e233be88c5d23f16adcd0e58a91",
"version.json": "6f21d3d7f9cb4d02b8915809cc1c908a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
