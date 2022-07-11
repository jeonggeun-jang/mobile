'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "de9cb597a641a4c5f5fa303dd5f841e7",
"assets/assets/images/account_other_logo.png": "4a3d8f374dc0b5d14fea6f5305e387fe",
"assets/assets/images/account_universe.jpg": "58cabca551494366334f64e492c6a96f",
"assets/assets/images/card_nlp_1.png": "3ccccc8113fec84ab28cbef91daba58b",
"assets/assets/images/card_nlp_2.png": "69b8ab20cba740f348752404d5d4683f",
"assets/assets/images/card_nlp_3.png": "7f889bc12c55e284cc01bf864cab3777",
"assets/assets/images/card_voice_1.png": "a6ad7f06d62e48788d254ecba515cb4b",
"assets/assets/images/card_voice_2.png": "04d32c75da1e3f0e2274b8c1e56244a5",
"assets/assets/images/card_voice_3.png": "19d7dbbff9d7834e50dd3cd03be2477b",
"assets/assets/images/infose_logo.png": "57cb3865fce7a8f134911ec529f4225f",
"assets/assets/images/main_logo.png": "4204138db72bb388837934ba9bb2dfde",
"assets/assets/images/main_robot.png": "842bece9a2589d1f63bce7402919db91",
"assets/assets/images/main_suggestion.png": "6a21516da6fbb361508736f64a88c86a",
"assets/assets/images/main_superNLP.png": "9439d6a94b0a66efe7f04d758c239953",
"assets/assets/images/main_superNLP_black.png": "47622ada371f6c8aad4821d7c5774ec2",
"assets/assets/images/sea_otter.jpg": "eae8388a9747198bc60df54a586a26cc",
"assets/assets/images/stt/icon_01.png": "9618108f56449332f0165b1a060f75a7",
"assets/assets/images/stt/icon_02.png": "eaddb940088421ebf50add1c71154917",
"assets/assets/images/stt/icon_03.png": "3d7bdad556641a9dad957892ce21ac3e",
"assets/assets/images/stt/pattern.png": "12b9a5e0425cdebc8b8273a92785e9d2",
"assets/assets/images/stt/suggestion_01.png": "cde4f8e6b753a90bda32962be244bc0f",
"assets/assets/images/stt/suggestion_02.png": "590a6a3b04e729dbfd26c9f0c97b8a54",
"assets/assets/images/stt/suggestion_03.png": "95c86ec05ea79c173eace02a98f13433",
"assets/assets/images/stt/suggestion_04.png": "7a106017f41691372dd708e22c1b9c16",
"assets/assets/images/stt/suggestion_05.png": "5127281e1f199c7182f7c92ff1beba3d",
"assets/assets/images/stt/suggestion_06.png": "d36c89cca30a5b1190f62be779fb95e1",
"assets/assets/images/stt/top_pattern.png": "dbe5882e424af351df343d844e77f90e",
"assets/assets/images/stt/upload_icon.png": "dde7cd1f25e78fa4db8cb7d1e76d6fab",
"assets/assets/images/tts/icon_01.png": "a6d8554612405278d6c871c589fa634d",
"assets/assets/images/tts/icon_02.png": "b41738c3e8eee6a3117fcb726d7d17b3",
"assets/assets/images/tts/suggestion_01.png": "d22a86f268c356539e5113f32e8e087c",
"assets/assets/images/tts/suggestion_02.png": "1dade1de859eae01f21d39ead9ffcaa5",
"assets/assets/images/tts/suggestion_03.png": "ae72273a105b494dff5ea72b1e963a8d",
"assets/assets/images/tts/suggestion_04.png": "0ddfb479b8f3f5f6212764a999cabbc1",
"assets/assets/images/tts/suggestion_05.png": "2f13c86eb6de855563431f2b7e99a701",
"assets/assets/images/tts/suggestion_06.png": "2b305c8df5c71d2e8153ff11ca632ede",
"assets/assets/images/tts/top_pattern.png": "9587626bf7fb3f4b7f8da6c8d3ff0c98",
"assets/assets/images/uri_logo.png": "248ede9bae544749b37f051933a67b98",
"assets/assets/images/video/demo.png": "3d8eed77fb1c4db70eca50eb8d4cb637",
"assets/assets/images/video/icon_01.png": "5a4f9d3be2d1ae5cb27d5df6adab5d81",
"assets/assets/images/video/icon_02.png": "ff2e71c89334eee1f8ade8f6e84ac5be",
"assets/assets/images/video/top_pattern.png": "45d3df9c762d3eaf20929f292b836586",
"assets/assets/images/video/upload_icon.png": "bef5f235dc2cdbd580cf4387e271c669",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "99056b806d30c37d26612bed2a965aa5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/superNLP_black.png": "47622ada371f6c8aad4821d7c5774ec2",
"assets/superNLP_white.png": "9439d6a94b0a66efe7f04d758c239953",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "32e5424dacca33cea3c90dd5d7a1de5c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d1b74751ecb6e117c888ebf2872a5e83",
"/": "d1b74751ecb6e117c888ebf2872a5e83",
"main.dart.js": "fd8570213c74a9af40f3627ec555fff7",
"manifest.json": "fab29a0c2c29ce0165af354c54ba3742",
"version.json": "2fddb62e923c8f3d5bbfd11e41ce1cd9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
