'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e4d50b320cb8123a388a8900b15c5aef",
"version.json": "b8afe743409b110f35f41bb42be9f352",
"index.html": "a0dee1a0578901cff159c845b4810380",
"/": "a0dee1a0578901cff159c845b4810380",
"js/face-api-helper.js": "e09b47b441a0399ffb14fed254f701ce",
"js/face_worker.js": "a6db5b0413791f09cfe6b8058199ed41",
"js/face-api.js": "a754891679442459b6eb77933917ae40",
"js/camera_logic.js": "0fbf889b2ea1bf6cafee9fc9c90989f6",
"main.dart.js": "69b2914c369c530487e3e341b48a6906",
"moth.jpeg": "8ecf1e01f8519eb5ceee460a13fd966d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"models/face_landmark_68_tiny_model-shard1": "47047fee26557b55d985952bdfc6cba1",
"models/face_recognition_model-shard2": "f2091ed03625f6e164a637c2326691c1",
"models/face_landmark_68_model-weights_manifest.json": "1d4029763003335bc6921aadeb58706a",
"models/face_landmark_68_model-shard1": "124304f06e07fcf928290ff776e96141",
"models/mtcnn_model-shard1": "846e8dd4e6a7ed12a2c749324adf0e11",
"models/tiny_face_detector_model-weights_manifest.json": "5bab50532388f5da9b4cd85b15adc11c",
"models/ssd_mobilenetv1_model-shard1": "37ef238973ea93daac91f1914478c40b",
"models/age_gender_model-weights_manifest.json": "d443abfd550a910c026d40cad6ea6000",
"models/face_expression_model-weights_manifest.json": "1eee5a2eea5ea5652904a2af88333dc1",
"models/ssd_mobilenetv1_model-weights_manifest.json": "cd2d65ec62107ba72b8b8d5047011647",
"models/face_recognition_model-shard1": "cb6f0f62e7598d70acf76483185a962b",
"models/face_landmark_68_tiny_model-weights_manifest.json": "29ea9c5c0e59a3069f8999b4ba1bd173",
"models/tiny_face_detector_model-shard1": "2e48b20953b0c59df47459d0319843a0",
"models/age_gender_model-shard1": "c34648b1f6dcf740eedef0473f13f4e1",
"models/ssd_mobilenetv1_model-shard2": "b6d5e81e2506145360be5c4278067080",
"models/face_recognition_model-weights_manifest.json": "6ecdaf3ea10d4fd3792e485f971e8b96",
"models/mtcnn_model-weights_manifest.json": "781bd744a5399d7cb0516d2a59a7c1c0",
"models/face_expression_model-shard1": "33ec63fec9fc41801930d44f4f4ea8f0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "77b30a89f738dc14097d4e3c225e8875",
"assets/AssetManifest.json": "74d8c9be9f523ff61b5da50bb99b9b77",
"assets/NOTICES": "0e185d16dfec638cbd2840b564cbf6a6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ae76a46c635d373a5c6cb9133a9379fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6fd75ad20d13a560865655e4cfbbb228",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_filter.frag": "7a69a481c4b01af713dc9d1ba40463fa",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass.frag": "fa5a88a14da4fa86658916f255386c91",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_final_render.frag": "74847f4cb2e2f8787c4303fffef1e81d",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "165123cf809bb7cea0f60cdb8658f67a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_lighting.frag": "24e5b88d98be2ad80c6fd0e1f2dbf7e0",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_geometry_blended.frag": "884d38ba3a7ab0ab72a463611f229e53",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d7421a307a44d87fc00413f5970fe809",
"assets/fonts/MaterialIcons-Regular.otf": "a1a2d471b3ea285d6c1b77fd3bcc5cb1",
"assets/assets/images/mmgsll_w.png": "d0329c85782f6093229586ee41b2a700",
"assets/assets/images/reel.gif": "1b6977088dc550f85552b252eb6ab71d",
"assets/assets/images/mmgsll%2520(trbg_w).png": "ec74aa6ab70fa147d1b516903f03888d",
"assets/assets/images/moth.jpeg": "8ecf1e01f8519eb5ceee460a13fd966d",
"assets/assets/images/moth.png": "4d3c7d583744c6d059ba6fb8eacc12ee",
"assets/assets/images/face_align_icon.png": "caec7e5c63b1a4acde9aa07d7f8014b5",
"assets/assets/images/detecting_face.gif": "e13af414eb1d520905df64f799dbbaa6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
