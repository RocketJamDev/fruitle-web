'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/banana.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"assets/assets/grapes.png": "c34b5f0a4b64808e16ffd9d7d52cda4e",
"assets/assets/watermelon.png": "b8e70936fbe2bcf6d610c0c0827db416",
"assets/assets/pineapple.png": "849b7c5bc75225aa00b1b0ae752c67a2",
"assets/assets/orange.png": "1f8b0d8f2dad0b1d505cc818669c2ed8",
"assets/assets/quiz.json": "d6417b26e0a67a8ef33243e90df5e30b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "5c399578afcbf47369011f71acc03f30",
"assets/AssetManifest.json": "d92d479d4252d0634b7a55bc228b5c32",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "04f4fcf2bf96b88d86076108a578f893",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "975227bf01f49f3b456be7d890565170",
"index.html": "67188b0a64f04598b56e1e4fd4135f92",
"/": "67188b0a64f04598b56e1e4fd4135f92",
"main.dart.js": "0e465ffa69b00f1f6c674d9e6acb528b",
".git/logs/refs/remotes/origin/main": "712261db7f0097e4f06ebf5ebaa81ab5",
".git/logs/refs/heads/main": "b68aaef6e1d4783b95e33d5aac5e90b7",
".git/logs/HEAD": "d4e8c83736730ab01ec59962e035f6bc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/COMMIT_EDITMSG": "6f5902ac237024bdd0c176cb93063dc4",
".git/refs/remotes/origin/main": "82bcf435f4b25a1f5773df88f6b8b4ff",
".git/refs/heads/main": "82bcf435f4b25a1f5773df88f6b8b4ff",
".git/objects/40/ff876134b1ae014cc0b7a5f779e8f3758beefd": "b3f6f242df46d254b8d82e50a11514bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/6a/80b87cc3e11e8a77788f6716af762489a277bd": "409edc0741afac9f701536a87cc6ae05",
".git/objects/48/98706134fe39860387aee599e3dc506f1b2c54": "08ef9ce5a53567b9f4de739ef6b3da37",
".git/objects/48/39312ddeefeddafe5914bb13c9a69dfd46e814": "40fe3db4c9f3b022267d8603454cc66f",
".git/objects/b4/aceba8b79da4c60236acb03db431c65634aaf4": "b3c9d3f803d702fe870a70d0519d8c4c",
".git/objects/43/84c7ee234195bc6ce2d0515741f1158c94d6d7": "beca50f037e80e792b81075880e8b730",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/b1/62881b58fa21dadec80735993a8dd0e1b79224": "bc8094dad17ad9171ba53b90aac00c88",
".git/objects/ab/738872746b1e2c2e843cf10bbc4fb189e4e1c5": "467000a29e54d4cb6be3e519e72bdc87",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/8b/3667b08e13709600e501fad81fd91e6cc32c12": "0ecdd10bbc04f2eb94129801ffc0c3a5",
".git/objects/57/e9c374ef69f1433eab736f1b1c0e1d61b1ab77": "60b7ba939113f0f4451a05a478421ec9",
".git/objects/f2/2483a9e06ed81fbec632ba48f84469c8e1a7e3": "ccac8c232e3e04ea69f4d42c0281f5d2",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/99/db35fa778575e6aabdb35020a6b8a1745685a2": "e0fa8263c68975e9efee55b345c87067",
".git/objects/68/615ee1c4ce257e2c272114369426849f1bf8b6": "88a7881cb549598f6f86f6d5ccfaa038",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/31413859da5b2f647a1d0b2821401ab5cb5e6f": "48644f30821587e55143130c2995585d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/70/17c2bfd3d9ac4585714d18eabbff9721d7ddfd": "6448f1550d7545a3e122e376cb0cc9f5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/3d/974fafd992bec037f864e458d2f947033deccd": "f8ccc9acf4096677766c2de8e4c009b6",
".git/objects/93/d4fc776eec7b9610784717b37a886575890e4b": "743816b55b8985ca0e533ee5ce09b77d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/9c/a85049e83930c1f163bb99751e61dfe11f81a9": "875f403bae7dba1065e784b5cf070190",
".git/objects/9c/c7a353c28d461b8a5f94cc235d5d5887f8d6e6": "5ff1c460b33d13c27c443d102e637609",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/c8/001b9ba11d50d79f23598d66f40282b56e5397": "1e1d7328ec0edb848822b967943d90e9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/419520cfae06fabb3968adb96bd54bf0a61510": "dce9ac6bb9ac2fd96569f7a5b54f8056",
".git/objects/bb/ab0ceaa1d141e7f3ab7409f05134af9ec54a42": "6b95ceeb19dfb1e9dc29837c433833fb",
".git/objects/24/e3dc780af3eae2d69aa2d37a511c353d6abba2": "7daa1bdf520693723a37bdadace0ab90",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "3d993c9b82eae2c457256fd43b79dcc8",
".git/config": "6dcb486f348b7baf9557141f89b15bc8"
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