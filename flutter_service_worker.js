'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9832ccb309b9d1560031ae79f213adab",
"version.json": "72b519eff78c457dabb879b0c1e0f445",
"index.html": "db2a0da6bff78078a6a9cd0ecd2165d8",
"/": "db2a0da6bff78078a6a9cd0ecd2165d8",
"favicon.jpeg": "1d352ca15dc939168e92b0b438f2f8b3",
"main.dart.js": "b747aecf3fa6e72bdb3c84a31aa00837",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1747e3df12a29eb0d6aa4986d16c32e8",
".git/config": "1b91a66f8b9489cc65c58e27eeec9bd0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/04/e2bd6392702a8464ed9e14ebaa5990ec5a4230": "c66abd205ea1163785603a59a59c7b1d",
".git/objects/04/27eb730dc6180223ea0a0f2d8f6ddb70b0c040": "8cc6bdea6ecf752262de0f188101a46a",
".git/objects/32/ec907ae83feb1269a8ccd37bcbdbde9131e03c": "d7cbf33d10da13b9fce4ecdc78f3615e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/1815849bf3c80bae7e593bc4243a9f5f8f9d69": "c283df3c3d242c53a169c14fc4266ce5",
".git/objects/3c/1c8be7a9852e5af9177e4c2bceb14d4bc483f1": "86fad514726283c05a5f60a6c4201931",
".git/objects/02/cb673935488c4776c6d282994b429c0fba2f20": "a2024c15d0c12550a07918a65e2493e2",
".git/objects/b5/1055691f6aebfa38e491f97bc39a26c84f1c5e": "e6a4b3ab38676544eb3e2a2e778115f1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/223036a01af231a83719adf78fb3d9b303beab": "f6ef8e005afec0e8e532347cfe7f54b5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/9875d1ad9094101d863d33f3320a5f41db9356": "0ffe72c706399f1e24192a2ed3874913",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/48fca797e6e8d709648b3493bbe18140644fb4": "cec2e07f4f9cddbde179f11369f1f584",
".git/objects/ab/5a5281b4937d93a3c81def8bcac91ebde043d0": "4843a4634ee7b796ea634df675730667",
".git/objects/f3/5b2154ab27131fb67295ffb239637e97bdda24": "370ee1b2fa1244231c7e4a00bb5c3971",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/fecaea5ab9889c886dd8f6295971e141d37941": "63f1483eab94a653dc1d2ef3325411bb",
".git/objects/c6/96935f2616c79ac0331995c1a6ab3b6eb5c7ef": "e4a058bc511cc9826467aa27e46a9044",
".git/objects/11/684363ba5ab1069bc71b183aa7df43395f3d00": "01da8c67a7e6e8f2f2ce3075cb5d08e6",
".git/objects/16/182bd8a466792e89596e5e0784378f1ec38224": "61f53150518cc811c28d0d8ad7b21cfd",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/34f1b700f5386bc0e0c0ac11f678705f2c796e": "d60df0d80d241e9fe2ba60188fc89541",
".git/objects/81/51f98458df1d8b26089ac386cee599a7060496": "5e17104b5315df0ba2f2b10805173fa3",
".git/objects/88/2f5ff0f7d409c3c0751df1830a4d1c16f48feb": "c3c044a62b597491a918efc23c371511",
".git/objects/88/e2b8187372badb3d357947566cc018f968785a": "e42fb2c499bdc4db15cbbeb939659caa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/5e817435c4997929c631ef543cb1ee28797180": "62040e2ee2c507cf75b2fd371a545d53",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/2bb302079d4fe37a6bd46c4d4ff95e77a7322e": "dc412fe10dc70230a4d0add47be6349c",
".git/objects/6e/ca260a2502951a73c229fb63e8c9a9f724df31": "9493594a635c2c1250f24eb98ef98f38",
".git/objects/5c/6d24417b7552885e05744d068fe73607dce343": "8889c74a7ff91104c59c6fdb231e285c",
".git/objects/09/77c1acd960bc07a8fe638063e5fe00e1d417af": "2e34d597fd90c607690d985e089f808d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/9989b23316e9b588eee2f438762efa9cace170": "5d1ec0fdd4405111c3715fa2b73b62dc",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/98/997efffdd8c5fee8aeae1611e506ed566ef994": "b79c2df198ce4e5e5f4cbc11889a3343",
".git/objects/98/b6746b127d58a816d9a949d966a981d2ae5ed0": "fede8b112d34bf7f05323d1539f1d348",
".git/objects/5e/52af2a64dbe84d98a25ac80ba9517a0d9679d9": "f88e6624887ced7821a2aa878a2692c2",
".git/objects/06/6ac0b8960218864d522734629c8ed4ee03c544": "e497d13fe06d5046e4a72eb06540f832",
".git/objects/63/5c0ffe3bc237434a467fe249c3f58baa0c5ffe": "75bed4dc26f8601b60adf522eb208bed",
".git/objects/64/f210980a4c8a22d68ba237b7a7b996722477b2": "20b2f7e1e3a59816c7bc5f21936a12b0",
".git/objects/90/e0e6872103c8021039f3f8d19e6846dff0ee7c": "0dfeff1c6fc0bea0c9d634ef425dc9f6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/a70626f42b606a4a78b6cb1eacbd9ce3d5fb1f": "18abe33d4ad441c2949ef6e06bc8507e",
".git/objects/d2/4b3dc959d90f66c947f6368ea314e3f2b601ba": "8a6834ccbf484304c38979ef6caf5258",
".git/objects/d2/9b5d9e965fbec65c5d12126157165550ab69b2": "5a3660053123254c7fcf4fc71c93c72e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6a8b32c201acf6936a3182cb52a139d9057a54": "0ff536f6336fe91ecb78394e303a6435",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8a98180bbbf41d66c5c066ec635e7dd4a7fce7": "bad1d79aad0502e0e02ac024e7284766",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/a83aa82b6fff904acc1f5f236db6aa15c2fd0f": "dd5acf047dab283dab8b21ab00c3191a",
".git/objects/ea/7bf28eba5d173ff1de477e1aaa016581885ad3": "b046181da8285c2ae0d6459114c4ffe1",
".git/objects/e1/17a5fab37f185d3ad1a4bb1d1d9e896c59aa3e": "d5a7b71b827cd0de9ee5fb5091867c4a",
".git/objects/e8/0af530ada01b278f2e328e404877df4c3d57d6": "2ab3921003bae773c17497f84565c96b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/77040facbb5ccb9dd17be90131b4bf4cabba54": "fe919ce8ecb5fdd5366417fec72fa4f2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/74974d90896d6c8b7b568c9a54a27b44fd2f72": "e3ec0a2811100463bc45ba984c52173f",
".git/objects/83/53c56518f477db6526bb1ad65463f4695e0ffe": "5f23e5eaa4e86922b53bb5de5d888af0",
".git/objects/23/61997e235dafce9f05728ba99385b141a14d45": "ebfc12c0204369ae934b34f5cb36e01a",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/8e/b44ecb7f4ff3c26075784238bb33a524afbda3": "5680323bdbd7689615cdcfb073f5e8e5",
".git/objects/22/fa294446c108765ceaad184e7aa4a3b2e8fae2": "491efd18f3f64a1a91b749660d2ad060",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2a08c1313d5cc06810665a4adc09011",
".git/logs/refs/heads/main": "c15ea33fe2a00e23cf6418403f6c526c",
".git/logs/refs/remotes/origin/main": "593afed030b51d29b59a93fe0d942d09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6733aac1f188dd848c1e3d631c123d36",
".git/refs/remotes/origin/main": "6733aac1f188dd848c1e3d631c123d36",
".git/index": "c8d3e018888305a031b7a99a92047675",
".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
"assets/web/assets2/loading.json": "b6410eeff86c542800f8416ed5f88dab",
"assets/AssetManifest.json": "1492bbee89ca389f912ea9b051599be9",
"assets/NOTICES": "7a20c76e85e96108f6380b107e8b69f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4a6294dac308a6822c5ec7502a85bb27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ca425e1be64042e656138f1e73a63382",
"assets/fonts/MaterialIcons-Regular.otf": "e4a25a71e2e5f5f8cdffe01d6e8098c7",
"assets/assets/instagram.svg": "c06f4e917187128efb2a7f5213226c33",
"assets/assets/map.png": "e3f0de88d2c02838e6b761f1fe5d9b23",
"assets/assets/AssetManifest.json": "e76c6fa0cb50ae2af15cc25dac884a26",
"assets/assets/img9.jpg": "dfef37cf59068653eb1433f6c7244293",
"assets/assets/img8.jpg": "8c55165b873cd9bbef06f160bbf44c35",
"assets/assets/NOTICES": "7a20c76e85e96108f6380b107e8b69f1",
"assets/assets/img5.jpg": "92f90aec722073a41f11f00bc3dc0bd2",
"assets/assets/img4.jpg": "07cd39c6b2b206e3192e10b3c5efd758",
"assets/assets/img6.jpg": "5ba43b650faf3e986d6aae84e385eac1",
"assets/assets/img7.jpg": "b65b57d597bd86125e23a3aaea1bfd5a",
"assets/assets/logo.png": "174bf02325b148003f76a73a5480f3de",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/AssetManifest.bin.json": "70a640686e883f7c5dcf224bf4bb46d5",
"assets/assets/img3.jpg": "0cea2f338893147b2a0406967e329d8b",
"assets/assets/img2.jpg": "950c64540586268fc32b6fabcf1273d2",
"assets/assets/img1.jpg": "3ede45ef57f4f60a2c40502adf7d816e",
"assets/assets/logo.jpeg": "1d352ca15dc939168e92b0b438f2f8b3",
"assets/assets/AssetManifest.bin": "c00e49bf89948cc2b0668d64f9f8d335",
"assets2/loading.json": "b6410eeff86c542800f8416ed5f88dab",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "5efd54e5815dac7fc9ef6337707689f6",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "3b89c4d1eb600c3679736f6c78a28369"};
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
