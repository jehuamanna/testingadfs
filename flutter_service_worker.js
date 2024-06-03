'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"version.json": "ff62b84b9e71959f1084faf409bf9ca3",
"main.dart.js": "bd6cdde74d47db61a4c41ccdd24f85c9",
"assets/AssetManifest.json": "195cab068dd2ef31d157f086fb8a2457",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1b8b86e33150213541f3ae0c1dd1d84e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/profile_pic.png": "e2c3d81e3bb2b37836b143e4596d6254",
"assets/assets/images/check.svg": "00a9b8c173eeb43e9ae380452e65d966",
"assets/assets/images/close.png": "35af44bc51bca12de0e8b0e1d2680b07",
"assets/assets/images/magnifying_glass.png": "97045cc589ba701342f5fafd690d7f97",
"assets/assets/images/arcticons_microsoft-excel_(1).png": "85b285fc15b1f426299b1b93d1e49040",
"assets/assets/images/delivery-1.png": "a94cee9c2228c9a67b0706de711fbd71",
"assets/assets/images/Successful_1.png": "e7b13f0d44f3571fdfafd16e1d334e8d",
"assets/assets/images/Frame_1171275454.png": "2ac05da9bedaa30e99e1fe8cb6ff1c0b",
"assets/assets/images/Column.png": "67f5bdc9942876f315dd66abc31751e2",
"assets/assets/images/PinCodeNote.png": "b06ba3893a23c6f62324441af5985d85",
"assets/assets/images/download_icon.png": "b6a3884d6590bc42b6b1631e45e50bd0",
"assets/assets/images/shipment_icon.png": "f667279c32177c7274c03477858a20a3",
"assets/assets/images/backArrow.png": "14e4c3ab3cd1bb8b98238ff851c963f0",
"assets/assets/images/copy.png": "349aa2f7f487930cb73009755933a7ba",
"assets/assets/images/DHL_logo.png": "610ea4b03e72a63479d6337f91751cf9",
"assets/assets/images/download.png": "47f51f474294ad93ae6dd609207ee4fc",
"assets/assets/images/PayPerClick.png": "f66dcc39363267457df6ec8ea506f83c",
"assets/assets/images/app_launcher_icon.png": "610ea4b03e72a63479d6337f91751cf9",
"assets/assets/images/Vector.svg": "a9f61d1c5a2a93cdd2a188c5b4c2940b",
"assets/assets/images/phone.png": "16324204f6b5bc0f7562dc81a92329fe",
"assets/assets/images/pass.png": "6ff60bbabab7a9829c740a0fde186468",
"assets/assets/images/DHL_logo.svg": "3a0f8a43d957e695ef76c3f4e0b3cb32",
"assets/assets/images/addMail.png": "9f133b7a8fe2a6aada8af1a13cff9101",
"assets/assets/images/Icon_Frame.png": "3cb76f117975af8f316787b5f4ac912b",
"assets/assets/images/image_251.png": "e149ce50a0e62e17ec7d35ca2e4d3879",
"assets/assets/images/logout.png": "78000bdac0220e0df370e54b6fd5b68b",
"assets/assets/images/infoTAT.png": "e36cfa7429639b47e857dfd9fc50ca3d",
"assets/assets/images/Row_(1).png": "799c37de343a96e16a617413c17fc4bc",
"assets/assets/images/notification.png": "4e542f6b0a9452a3ee57305527c2d586",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/alert.png": "f2cb0c0d43966f29720760d6ca5f47e6",
"assets/assets/images/settings.svg": "ee939e8efc0a27b62ee536c7c6b86627",
"assets/assets/images/packaging.png": "5f5164d3a335378332cf0a9856d10684",
"assets/assets/images/mpin.png": "a60336953173af9c10c156e513b4aedb",
"assets/assets/images/Vector_529.png": "e3f3686e304b27f771c677f87144daef",
"assets/assets/images/image_249.png": "3d5dd41bc90bc173711fa3725a4eea0d",
"assets/assets/images/image_250.png": "058c7ed8c0f2b4519f3f1c3441cd0909",
"assets/assets/images/newMail.png": "8a57c4f555987c74d8e904d7d1a5822e",
"assets/assets/images/refresh.png": "be9f643736451108a17693fe2064687a",
"assets/assets/images/Vector.png": "efadf30517bd26ae570280ff75f7903f",
"assets/assets/images/next_arrow.png": "6ebc62d86e2637f0c5372e1675bc3e1c",
"assets/assets/images/express-delivery.png": "41600b0599bcf7335ac9dbc43ec894e3",
"assets/assets/images/fluent-mdl2_vacation.png": "d3aab527ae5242e9b53b28f6747ecca3",
"assets/assets/images/Edit.svg": "be9fb208c6cbf83bf3dec46343f6527f",
"assets/assets/images/oui_alert_black.png": "70fe3744701508f8c541797ff8b76f35",
"assets/assets/images/arcticons_microsoft-excel.png": "c0ea95d5f78c4422e1e41a5dcdf73d76",
"assets/assets/images/TaTRightArrow.png": "12f66a5436f648441747b67f2646240a",
"assets/assets/images/sample_notification.png": "dbabd803fbb3d0bda3a7de859b4d6df9",
"assets/assets/images/arrow.svg": "21f4e5ca407a45727a6ca224768de0df",
"assets/assets/images/cross.png": "8678f4499c90390936098eed3b86e6b0",
"assets/assets/images/image_(7).png": "ddede1c8c9ab0b19fab2a581bf78d93c",
"assets/assets/images/password-recovery.png": "3f1ea643e378087bd6884cb72b39d0d6",
"assets/assets/images/wallet.png": "e0b11507ddec0f6710e66eb47ebcd653",
"assets/assets/images/logo.png": "884c117064f12beba32c285840c6566c",
"assets/assets/images/mobiletxt.png": "eafec4ed70b4dc34214a375895f3a129",
"assets/assets/images/excelDownlaod.png": "8932dfbcb54e1276a94ef7f0e74a2b85",
"assets/assets/images/k7eg7_8.png": "c408d496e282adbfe52d17fbf5a0b91b",
"assets/assets/images/DTDC_logo.svg": "34545ed8dd624d500b376a3b77c7b218",
"assets/assets/images/oui_alert.svg": "bd5c4c51bfdc7d4c42f5a94ee907a5e0",
"assets/assets/images/arcticons_microsoft-excel.svg": "b20e30afddf57d7322f9fa214ceff0f9",
"assets/assets/images/details.png": "39d9b31a667fba954114d24f3614a60c",
"assets/assets/images/loginBackground.png": "729a9723d8c95041e83f8dfc153ed18b",
"assets/assets/images/Frame_1171275183.svg": "09a2d793a3e681c9f14f8c152b2bc62c",
"assets/assets/images/sideMenuLogo.png": "d057ae0d6976f46e1d446e0e12eed9e3",
"assets/assets/images/cross.svg": "917d30a4c6825097005544173d802d64",
"assets/assets/images/icon.png": "24c09336ed3c1b4489bed0ef60c58405",
"assets/assets/images/adaptive_foreground_icon.png": "610ea4b03e72a63479d6337f91751cf9",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Acumin-BdPro.otf": "f55e6e6014f6e1692edbb46a156d65b6",
"assets/assets/fonts/Acumin-BdItPro.otf": "4f0a639659911a42b8befd7e1280439a",
"assets/assets/fonts/Acumin-ItPro.otf": "6649f383c19abc37ef8549c0f25a9139",
"assets/assets/fonts/Acumin_Pro_UltraBlack.otf": "e1580ba9afab320045ca6168599b8f5e",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Acumin-RPro.otf": "bdb37477b68d098317daaf939f295527",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "c682e39d691b73e4c554637c3cb5db54",
"assets/FontManifest.json": "24413156ba387de1eac5da2e15246dd3",
"assets/fonts/MaterialIcons-Regular.otf": "f8d8c6d13147d85ae9a2fe5637079332",
"assets/AssetManifest.bin": "082d84c5c94a2819f560c7b967604515",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "51214b0ed96c9b28496753e508bccc15",
"index.html": "8d070f4d9a3842df2eacc0d4db24a454",
"/": "8d070f4d9a3842df2eacc0d4db24a454",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/app_launcher_icon.png": "610ea4b03e72a63479d6337f91751cf9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"image_(7).png": "c82f57cbc0cb933975c32bd0fb796a89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
