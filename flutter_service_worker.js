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
"assets/NOTICES": "0dbc9d6856f1a1a10c263b7061262817",
"assets/AssetManifest.json": "d92d479d4252d0634b7a55bc228b5c32",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "04f4fcf2bf96b88d86076108a578f893",
"favicon.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"version.json": "975227bf01f49f3b456be7d890565170",
"index.html": "73bbcff1f5542085f690f9859c40853f",
"/": "73bbcff1f5542085f690f9859c40853f",
"main.dart.js": "cb13280d1b56e675d0e7f24b5dae7639",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
".git/logs/refs/remotes/origin/main": "08a057eadb67f9384c11470668912275",
".git/logs/refs/heads/main": "d403d337eb8cbea72d1a4cd173c49012",
".git/logs/HEAD": "23eb83d8825ea92d66e09552339abf77",
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
".git/COMMIT_EDITMSG": "9842a1d6a9784623a6170498f59d0a3f",
".git/refs/remotes/origin/main": "958c784f48a4738df7771e81e1eaafe3",
".git/refs/heads/main": "958c784f48a4738df7771e81e1eaafe3",
".git/objects/40/ff876134b1ae014cc0b7a5f779e8f3758beefd": "b3f6f242df46d254b8d82e50a11514bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/6a/80b87cc3e11e8a77788f6716af762489a277bd": "409edc0741afac9f701536a87cc6ae05",
".git/objects/48/98706134fe39860387aee599e3dc506f1b2c54": "08ef9ce5a53567b9f4de739ef6b3da37",
".git/objects/48/39312ddeefeddafe5914bb13c9a69dfd46e814": "40fe3db4c9f3b022267d8603454cc66f",
".git/objects/b4/aceba8b79da4c60236acb03db431c65634aaf4": "b3c9d3f803d702fe870a70d0519d8c4c",
".git/objects/43/84c7ee234195bc6ce2d0515741f1158c94d6d7": "beca50f037e80e792b81075880e8b730",
".git/objects/0a/d4ac4040afd6a40229d33341e1f2edeb8bd166": "dbe21c218a2369f45983a342283f327c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/3a/96a3de7d39fe06ac4b7ca2b74147a78f5b2375": "5301221e0aefe67e47dacb2b2acf65c3",
".git/objects/5d/8594eecb005005216e199dbbd21cb935c26243": "421a340b66b09a715711f1d4270d91ee",
".git/objects/b7/42961be5212e548d96068e36f576b09a80f425": "4cd1eb3f8086b43855e9fe31f840d260",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/b1/62881b58fa21dadec80735993a8dd0e1b79224": "bc8094dad17ad9171ba53b90aac00c88",
".git/objects/c9/b649221e353a4a517739bc5db4706b7cdc4acb": "ddf4ecfe7249e86753021e4fa437dfa0",
".git/objects/c0/9a076c9f877dbe45247f88074cfae952a27b0f": "1eb5f85c1e60c780395d18c278020064",
".git/objects/ab/738872746b1e2c2e843cf10bbc4fb189e4e1c5": "467000a29e54d4cb6be3e519e72bdc87",
".git/objects/65/904374ecff437118e2776c9ab2cc7366765260": "01f1c3d90a15fc0a1b6192dd51229e92",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/e7/2b51ec6bdde9c2a00bd6ecbfc1137307abf844": "98bb9b76dfc5a237186f255b7a798071",
".git/objects/8b/3667b08e13709600e501fad81fd91e6cc32c12": "0ecdd10bbc04f2eb94129801ffc0c3a5",
".git/objects/1c/cff3632e2657442e89729d88cc5de65f817105": "188e1a2c122a21b85f39946f699c71c7",
".git/objects/b2/66614e6fb9bb18248c30613d34c824fba6cada": "9a44a238c62df39f9ee66e6b93a45777",
".git/objects/b3/8f055999b5e13f67cc8142286eb37577e32487": "43f4c601e8819784c6bb5db0f484db6e",
".git/objects/57/e9c374ef69f1433eab736f1b1c0e1d61b1ab77": "60b7ba939113f0f4451a05a478421ec9",
".git/objects/f2/2483a9e06ed81fbec632ba48f84469c8e1a7e3": "ccac8c232e3e04ea69f4d42c0281f5d2",
".git/objects/39/27e0fc9b92b89d037a44abbf1bda5b2e88a49f": "a172643f0dae435a55f1ec71ed080ee3",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/99/db35fa778575e6aabdb35020a6b8a1745685a2": "e0fa8263c68975e9efee55b345c87067",
".git/objects/68/615ee1c4ce257e2c272114369426849f1bf8b6": "88a7881cb549598f6f86f6d5ccfaa038",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/21/e4070530a4c1739d4b948d98db81ec97ad2f7f": "c6587e9dfd0bb076fe8fd1f512e55216",
".git/objects/69/2b2741c482220d6aa0c2fd0ce3bff606a8e0a6": "1d70ad35bf3eca99ebee95c5f96eccf0",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/31413859da5b2f647a1d0b2821401ab5cb5e6f": "48644f30821587e55143130c2995585d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/6d/36f239c2e648e6140a77f1338bb9e607d6ccf9": "a1ed7872728a20d6be043c9a2dacda27",
".git/objects/f1/059e5496271b2cf77e6e8f5dec26be6ddefb35": "4672bbdc71f8e70368317f3a2862f913",
".git/objects/d9/25b8d5b2f7572be0a2c3b6599445f56c8938af": "d07452b9c56998f92c9a2c9e73ada0f5",
".git/objects/34/4a53582a67c991b0cc2935dbda4a093c788fdd": "c1b2c2814e587843d485372f5b61cbe6",
".git/objects/59/b926630a72d4064ff5c6ddc52d89bda77aa0fb": "76c9562577a96fb059088bd344367f70",
".git/objects/a1/8cb88fd3cbf2ef0f806a4469732be55dd71607": "b0d390eabd6775a99ceeaad1e7bb7420",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/08/2bf582728daaa69e83e4ab045cd62bea279a92": "42b1ed8dbfa7e3da1041a710ac9f1f18",
".git/objects/78/bde6028819756c9a67a06b7721536a4a7fcf49": "f0db69826b04ed8b0d638ec705c5b677",
".git/objects/70/17c2bfd3d9ac4585714d18eabbff9721d7ddfd": "6448f1550d7545a3e122e376cb0cc9f5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/47/d6361d349576e2b3cfa1e66e42c14276c0ea90": "6dd5f3b1cc16ebe5ac877398b5e9e9f8",
".git/objects/76/0bad60c276f02317d97aba3fd24cc7ba8226ea": "2defbf59cd5b53eca6025c967ea30aef",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/ad/987ebede3e611a2740c1ac1f93b62b756b2a35": "48e4a9b5f26cb18481d1c7a90dbf348b",
".git/objects/3d/974fafd992bec037f864e458d2f947033deccd": "f8ccc9acf4096677766c2de8e4c009b6",
".git/objects/93/d4fc776eec7b9610784717b37a886575890e4b": "743816b55b8985ca0e533ee5ce09b77d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/9c/a85049e83930c1f163bb99751e61dfe11f81a9": "875f403bae7dba1065e784b5cf070190",
".git/objects/9c/c7a353c28d461b8a5f94cc235d5d5887f8d6e6": "5ff1c460b33d13c27c443d102e637609",
".git/objects/d6/f5856c1fdcca30f549d2e6c46de86349143698": "480a8868f6f13e9899a35cf52b8db406",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/09e2aa3c3cd91e0341f0099d0d3ff11fa84b5e": "3005921e8189b20530c61d9d5fd4e3f8",
".git/objects/e8/175515a3f796dc283cefdaf8312d2bdc60ab9d": "40ce7cbca68deed3aec9f494401f7e6f",
".git/objects/e8/e26ca5f483010f33c62a8ef098edfb37d63ccc": "2b7fbe3cabb968cd6e272081cd9f7bd7",
".git/objects/c8/001b9ba11d50d79f23598d66f40282b56e5397": "1e1d7328ec0edb848822b967943d90e9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/41/86ae16754f41d664f0dc261fa6843cad06abbc": "1d9577cb0126173c176c9a8637c0b19c",
".git/objects/41/a13359cdc02dce9d4b32317729f7d642f03f08": "120d0c1cb9436b48ace357eddc303b7f",
".git/objects/6c/c103eaa13903f66e62f4651f2eaf836a48008e": "f01d09a331b94b4c3398f352e76350f6",
".git/objects/b0/2ba206872a0db997f6c09fb1839ba34c8ca422": "f1eee5d74ac8fc3a925a327bd784eb75",
".git/objects/ec/419520cfae06fabb3968adb96bd54bf0a61510": "dce9ac6bb9ac2fd96569f7a5b54f8056",
".git/objects/bb/ab0ceaa1d141e7f3ab7409f05134af9ec54a42": "6b95ceeb19dfb1e9dc29837c433833fb",
".git/objects/66/404e946bd130aeebdf4e769fe9e2979cb14331": "a30654013056816d3ede9d1ab1b3a7a0",
".git/objects/24/e3dc780af3eae2d69aa2d37a511c353d6abba2": "7daa1bdf520693723a37bdadace0ab90",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/be/64c9d6214cd6456045ce648a651b3accfc3f7f": "45f7a7730b0d446d2c002044427cd183",
".git/objects/73/0427f062e0a047cbec504c77ef7681a7dfc0ac": "6ad24db79a623750d922fccfd12464c1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/38/4fba86910341270bf93ced7d4d49c3863376b6": "ab5b8b44c4c84fa5661a03bf15fa5fa7",
".git/objects/fe/064e304819863cfeae34bc9c993dcf90c7d698": "e88f0732342fc79488ec5d6983ddaad7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "b1805db189d6cbd37d57c285b152dc06",
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
