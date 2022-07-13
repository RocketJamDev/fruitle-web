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
"assets/assets/quiz.json": "3a5db0d6d2377501c95d84048efd96a3",
"assets/packages/flutter_donation_buttons/assets/coffe.png": "2159a0ac84d49abbdb353eaaf502eeb8",
"assets/packages/flutter_donation_buttons/assets/coffe2.png": "1446f4880b85af9912f34dd705a371f5",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "a392b53e1780ca8df3d0ed4fb507f243",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/NOTICES": "0ad7af8f38280c0201ae0de36424f515",
"assets/AssetManifest.json": "292e47ecd8ff939cd1623129475da061",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"icons/Icon-512.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"icons/Icon-maskable-192.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"icons/Icon-192.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"icons/Icon-maskable-512.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"manifest.json": "04f4fcf2bf96b88d86076108a578f893",
"CNAME": "727205be8d5258fb498d1e7122e13eed",
"favicon.png": "59f1ae87e9dcc6aba2f5420cc46bb02c",
"version.json": "975227bf01f49f3b456be7d890565170",
"index.html": "274251b88398ae24d2c6e6b7902e5890",
"/": "274251b88398ae24d2c6e6b7902e5890",
"main.dart.js": "518c55821d74f9ae54767190c02cd27b",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
".git/logs/refs/remotes/origin/main": "492257cf8e5d55a05966ddd47f6f118d",
".git/logs/refs/heads/main": "903ca89050a8d1591bf3dce15757fbbd",
".git/logs/HEAD": "e6522de13fe09e4c3d742fe5a766d718",
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
".git/COMMIT_EDITMSG": "ef39f5eaab7073e08a580afdfd8a70df",
".git/FETCH_HEAD": "0288de82d8abb6583ac9d5297c9b5fe6",
".git/ORIG_HEAD": "81741d4f2a9f8221d485d40e26e73940",
".git/refs/remotes/origin/main": "504c45d90be50a22c77669390f672c00",
".git/refs/heads/main": "504c45d90be50a22c77669390f672c00",
".git/objects/40/ff876134b1ae014cc0b7a5f779e8f3758beefd": "b3f6f242df46d254b8d82e50a11514bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/3e2d4f767ac88fe4d6559dbd29b3aaf8629b7d": "a3cdcd5fd5e293901840eca563ec2271",
".git/objects/6a/80b87cc3e11e8a77788f6716af762489a277bd": "409edc0741afac9f701536a87cc6ae05",
".git/objects/6a/96fbddc9f15b6a9db1c997fbaa3bc556fba9ea": "91dd8d229f5b4e6fda71684397867d86",
".git/objects/48/98706134fe39860387aee599e3dc506f1b2c54": "08ef9ce5a53567b9f4de739ef6b3da37",
".git/objects/48/39312ddeefeddafe5914bb13c9a69dfd46e814": "40fe3db4c9f3b022267d8603454cc66f",
".git/objects/28/3d5988241c73d0c92ce6ea082b5f5d9b8885e2": "fbca26e411af3c22797a94f9daa46b54",
".git/objects/b4/aceba8b79da4c60236acb03db431c65634aaf4": "b3c9d3f803d702fe870a70d0519d8c4c",
".git/objects/43/84c7ee234195bc6ce2d0515741f1158c94d6d7": "beca50f037e80e792b81075880e8b730",
".git/objects/0a/d4ac4040afd6a40229d33341e1f2edeb8bd166": "dbe21c218a2369f45983a342283f327c",
".git/objects/46/c28abacfe5cbef471f6c65be4fd5fdeb5e264a": "5451067273be1051c51e78b6103972c1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/db/faae44d133016f246279bb6717d9ce0a0d95d7": "d9a011905afc90f256f6abfd811d3a73",
".git/objects/d1/c583b392f816bcbf53354d375a96a64c7eb540": "b30154af6dcf8a1d4c0d8eca5f1c15cf",
".git/objects/4a/1091042be232e2fc43e1fcaf5f25ca4af7a0fb": "769827dab2a0750fd2df5acd5982d8fd",
".git/objects/4c/ec23a9699c03a1e3a238d8e85667d3eca22c47": "f7d41342e5f4ff45030eb56dd791db31",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/20/47105695a23dd4b937a6539e5395103ac76a41": "178c16afd17257bcd92c040199e40a8d",
".git/objects/3a/96a3de7d39fe06ac4b7ca2b74147a78f5b2375": "5301221e0aefe67e47dacb2b2acf65c3",
".git/objects/aa/11a4337fe680acfe47ae4554bfdf6cfc9a97ee": "dd82088d3b7cf3a79c6348b6124c2d98",
".git/objects/74/9254aed825b4c322b9192926634eb23d215ab5": "33ef3a47602566b0220c28a162d18feb",
".git/objects/9b/e8006a8a682e6877344bd94211e33ee20ce280": "f1ba1f3d51e7dc6ec75f9a97c91a99e8",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/5d/8594eecb005005216e199dbbd21cb935c26243": "421a340b66b09a715711f1d4270d91ee",
".git/objects/7d/44283b02924158d19d59c8e1bb42300ddfd892": "3176d5cc805cf46c0e12bf09665f63b0",
".git/objects/b7/42961be5212e548d96068e36f576b09a80f425": "4cd1eb3f8086b43855e9fe31f840d260",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/a7c2539fdcf68994491a5d2fbb6356a0b34063": "b10130d85d2ca64ada1bd09e2f75f1ad",
".git/objects/b1/4cdd00b7d9f48227e4691ba3134d4f440c3bf1": "601df6269d27b647a2ebcb64500ac3cd",
".git/objects/b1/62881b58fa21dadec80735993a8dd0e1b79224": "bc8094dad17ad9171ba53b90aac00c88",
".git/objects/c9/b649221e353a4a517739bc5db4706b7cdc4acb": "ddf4ecfe7249e86753021e4fa437dfa0",
".git/objects/c0/9a076c9f877dbe45247f88074cfae952a27b0f": "1eb5f85c1e60c780395d18c278020064",
".git/objects/ab/738872746b1e2c2e843cf10bbc4fb189e4e1c5": "467000a29e54d4cb6be3e519e72bdc87",
".git/objects/65/904374ecff437118e2776c9ab2cc7366765260": "01f1c3d90a15fc0a1b6192dd51229e92",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/f0/3e429931fc97800bded5ef7c4ce3d9cccbf62d": "0570333bd997222c12b2971c311421e5",
".git/objects/e7/2b51ec6bdde9c2a00bd6ecbfc1137307abf844": "98bb9b76dfc5a237186f255b7a798071",
".git/objects/8b/3667b08e13709600e501fad81fd91e6cc32c12": "0ecdd10bbc04f2eb94129801ffc0c3a5",
".git/objects/07/47dd764c3dc79d255d870f7cc263ac7332fcb9": "eccf8975a54d74e642fc58debc2504a5",
".git/objects/07/980bb2bf7e7d475401d5e832265608ec841d53": "98b2ea8433b7847f730ff44494078e59",
".git/objects/cf/145303dc7958a29e4d08fecc6f8a77be868505": "fdb70c7e053e9e98e1bf3f978405bace",
".git/objects/1c/e8bb2d483ed06fb215079393a36357f3b985f1": "00d44c2f1379f9c6ac0d08598aa96d29",
".git/objects/1c/cff3632e2657442e89729d88cc5de65f817105": "188e1a2c122a21b85f39946f699c71c7",
".git/objects/b2/4fb43177089ead7b98a93c4cf9ec5d9ec7037d": "f599ce6e6a9ccd46b175e0d63d47d459",
".git/objects/b2/66614e6fb9bb18248c30613d34c824fba6cada": "9a44a238c62df39f9ee66e6b93a45777",
".git/objects/b3/d34233095845522abae75f8b0f7ad7f26bb891": "6dfbef68d9a9bc5297d5d30c35fe2a23",
".git/objects/b3/8f055999b5e13f67cc8142286eb37577e32487": "43f4c601e8819784c6bb5db0f484db6e",
".git/objects/57/e9c374ef69f1433eab736f1b1c0e1d61b1ab77": "60b7ba939113f0f4451a05a478421ec9",
".git/objects/2b/83978c4189045d1d83ba9a7038ae1fea7856d1": "7f185524bd2985801f7cfacd80d98f99",
".git/objects/f2/af7f7d4f34d6013e7a1c033fbc26f180b7869e": "31f22ba9515e4eaf7b8ca6c4a9bc4ca4",
".git/objects/f2/2483a9e06ed81fbec632ba48f84469c8e1a7e3": "ccac8c232e3e04ea69f4d42c0281f5d2",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/fb/0be18907fb967b5eb51c2baede64091cc16b8d": "d6738a63f6e49388940dc477ee8f6443",
".git/objects/39/7a4bbc327b5cd2ebce8bd4f1314eb09ffad290": "a0d8504fadf4c6ad90132ea03c2fbe54",
".git/objects/39/8e6876b22b5382193245c6cd4ccf85247de658": "71984bebf914f4aaf431632b8a97aebd",
".git/objects/39/27e0fc9b92b89d037a44abbf1bda5b2e88a49f": "a172643f0dae435a55f1ec71ed080ee3",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/b3085aab020c4548cbe99f7c4b0bbfecfecff1": "051156e6633e49073b59ff547e46b482",
".git/objects/99/db35fa778575e6aabdb35020a6b8a1745685a2": "e0fa8263c68975e9efee55b345c87067",
".git/objects/99/636dd822f2bf2dfdf0a9bbe25aebb0e350f68b": "783e3f91a5ec9fadad8c24a7e565ad08",
".git/objects/86/cf49302f6da3b9879314c2b1a4de5a9e94fb2b": "f91d1e0f247d10e857ff019320e2963d",
".git/objects/68/615ee1c4ce257e2c272114369426849f1bf8b6": "88a7881cb549598f6f86f6d5ccfaa038",
".git/objects/52/98a465a4e0fd2fc5c0f45d6fef829fb9b3aed5": "3cf909c9827e788b3971a0bfb44f5003",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/35/3a4149e72a9a93f5a7a32fbb36bfcdd9285605": "708e88065255cb2b5b6cb78ab46579ba",
".git/objects/a3/71c62e1ff499e56256b06cda844c357a2125c0": "8c77a6032fae0fed1b6d6ffb58d2b440",
".git/objects/21/e4070530a4c1739d4b948d98db81ec97ad2f7f": "c6587e9dfd0bb076fe8fd1f512e55216",
".git/objects/cb/e3f63db46fd60b43501635e513ae073a64b7b8": "50dac28be50e2bed7917fe8be01eb426",
".git/objects/82/99d424012e4f7669abe24fce4d309694171546": "7bb8adc90a6f7fabd9691b62f9687a8b",
".git/objects/69/212623d6e8fa175f4fd72f89481b0bbfa2f29b": "07cd9a9d3d44fe3e0fd7ff62d4a65320",
".git/objects/69/2b2741c482220d6aa0c2fd0ce3bff606a8e0a6": "1d70ad35bf3eca99ebee95c5f96eccf0",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/31413859da5b2f647a1d0b2821401ab5cb5e6f": "48644f30821587e55143130c2995585d",
".git/objects/64/47687c0e9f0d853e4163bd25887fdb8810276b": "efec134b345f27a9ffce62b9dcb0178a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/6d/36f239c2e648e6140a77f1338bb9e607d6ccf9": "a1ed7872728a20d6be043c9a2dacda27",
".git/objects/ff/29ba8899e69205e50632441bd2cf447dea4a01": "39bd42414f8b52519fb9c4e22064b885",
".git/objects/a8/746604343e908178e999522108eae9577982d2": "9a2335d0b45088b77d18edf2d6774c87",
".git/objects/bf/5b325c33d09f715a1184577f7b037aa9ff0342": "2905f9094a6495c03625b9b3c25373b8",
".git/objects/bf/d88e85503a6b2b1de8f5fe5f1bb4a2ba9e1fa7": "3ba4b2a1a6ff30c27692241a69af3360",
".git/objects/f1/059e5496271b2cf77e6e8f5dec26be6ddefb35": "4672bbdc71f8e70368317f3a2862f913",
".git/objects/d9/25b8d5b2f7572be0a2c3b6599445f56c8938af": "d07452b9c56998f92c9a2c9e73ada0f5",
".git/objects/34/4a53582a67c991b0cc2935dbda4a093c788fdd": "c1b2c2814e587843d485372f5b61cbe6",
".git/objects/59/b926630a72d4064ff5c6ddc52d89bda77aa0fb": "76c9562577a96fb059088bd344367f70",
".git/objects/a1/8cb88fd3cbf2ef0f806a4469732be55dd71607": "b0d390eabd6775a99ceeaad1e7bb7420",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f5/7bb5dcb7a5dfa11897a8fc34901677064510c3": "1e288cf341b009400f7ac091c55428b0",
".git/objects/f5/f97c84953e62fa42025c95dfbeb12ea0b6e523": "1dea9aab7ccdeae8b298004ae0e65e57",
".git/objects/08/2bf582728daaa69e83e4ab045cd62bea279a92": "42b1ed8dbfa7e3da1041a710ac9f1f18",
".git/objects/08/8b3142a004f7f0b817b93c990ce53458476d37": "b157903a344084b08ee5a365c9dcdbc9",
".git/objects/09/0af2b5a2e0612bf4c66be2f96953f346829308": "f222b53c6f4919e9955d064ed4710728",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/04/4886780dbe2e770603b16d1662c243bc6abb56": "6c4974181a46f31e8a7d0d0a87b9134f",
".git/objects/78/bde6028819756c9a67a06b7721536a4a7fcf49": "f0db69826b04ed8b0d638ec705c5b677",
".git/objects/70/17c2bfd3d9ac4585714d18eabbff9721d7ddfd": "6448f1550d7545a3e122e376cb0cc9f5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/c3/ccf83892bf1879340cba66aefb92755958fd26": "5e2f1390b870218aa401519ab818e7f7",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/2e/44615a41a43041b13d0e7b9ce5cae97a90d103": "6a7384d7cad983357e75b75308b49966",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/47/d6361d349576e2b3cfa1e66e42c14276c0ea90": "6dd5f3b1cc16ebe5ac877398b5e9e9f8",
".git/objects/76/0bad60c276f02317d97aba3fd24cc7ba8226ea": "2defbf59cd5b53eca6025c967ea30aef",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/5e/2772e08dec2c5d5b5e7b396a1b92e2ec0f463d": "05ebeb50e1a90fdcf765746fcf6434fe",
".git/objects/31/21a6008f02e89fd4a02c3869c6202bcfaae299": "2626da3312c1e174e5af984254ae4c02",
".git/objects/ad/f49ec64129a9e7466e826bcb2d5d1246d9b17e": "9dbd27681f8f293ab18fce8f04d5fee4",
".git/objects/ad/987ebede3e611a2740c1ac1f93b62b756b2a35": "48e4a9b5f26cb18481d1c7a90dbf348b",
".git/objects/3d/974fafd992bec037f864e458d2f947033deccd": "f8ccc9acf4096677766c2de8e4c009b6",
".git/objects/45/17f1cadb6bbdf7badf26b17fad7f5c400c2df5": "2e8aed41f1a7929eb9cbbba1be8a521d",
".git/objects/55/4a82b00590e3fd77ad6736cf22aaac5e358044": "157856f82c7142bffafcc3b9b596b5d4",
".git/objects/93/d4fc776eec7b9610784717b37a886575890e4b": "743816b55b8985ca0e533ee5ce09b77d",
".git/objects/93/27ffc3fbb6ab6a36aaabc476e3927b6c20c44d": "e3bfe2eac093d3f9fbc5285148330f92",
".git/objects/96/4531e1b115ebc640c6190b6e724fd07ba2f08b": "1cdf53c4dcfb812f4366bc5204d876e6",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/2f/9f5016ea151791529a2b9ef80122c4a6ce92f5": "d561a112890849d1700a4dffb3d17b59",
".git/objects/ef/d756c30105283aabd2bea690564f28014c8574": "a2256834c907fcd1139f22c420c39f22",
".git/objects/49/5fc1072067ecc735092676e8df81944c946999": "ed0ef0fe3e94f9f654e721c855c9e01f",
".git/objects/9c/a85049e83930c1f163bb99751e61dfe11f81a9": "875f403bae7dba1065e784b5cf070190",
".git/objects/9c/c7a353c28d461b8a5f94cc235d5d5887f8d6e6": "5ff1c460b33d13c27c443d102e637609",
".git/objects/92/1e067a9ae1db83d1e0dc75726a2bcecd082449": "7bfede8eb4b69765d818d8d43a51bb2a",
".git/objects/d6/f5856c1fdcca30f549d2e6c46de86349143698": "480a8868f6f13e9899a35cf52b8db406",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/32/4fe88bcb1af394386623a2e82a8e7c893d0882": "b569e77eb2d1831bb30af131c69bcd0c",
".git/objects/d8/09e2aa3c3cd91e0341f0099d0d3ff11fa84b5e": "3005921e8189b20530c61d9d5fd4e3f8",
".git/objects/e8/175515a3f796dc283cefdaf8312d2bdc60ab9d": "40ce7cbca68deed3aec9f494401f7e6f",
".git/objects/e8/e26ca5f483010f33c62a8ef098edfb37d63ccc": "2b7fbe3cabb968cd6e272081cd9f7bd7",
".git/objects/c8/001b9ba11d50d79f23598d66f40282b56e5397": "1e1d7328ec0edb848822b967943d90e9",
".git/objects/2a/74fe60ec6fbb1ca0f5d8446baf9c1059d760ef": "510ec73e6bc4e27f4047ee316703b183",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/41/86ae16754f41d664f0dc261fa6843cad06abbc": "1d9577cb0126173c176c9a8637c0b19c",
".git/objects/41/a16944d13d06b2f59a9bb383102308a0906794": "fa277c767562a83941dcbcbdbffaa750",
".git/objects/41/a13359cdc02dce9d4b32317729f7d642f03f08": "120d0c1cb9436b48ace357eddc303b7f",
".git/objects/6c/c103eaa13903f66e62f4651f2eaf836a48008e": "f01d09a331b94b4c3398f352e76350f6",
".git/objects/36/4578dcfdf5c1fe8815d772a0d4dff058483160": "5186b2c393a9e7e2b37513153c5f7c7b",
".git/objects/36/ac6ee9172aeb25c7f1ff651f082b3856f21551": "d25ce2f256f3aef75610418f794f8bf2",
".git/objects/b0/2ba206872a0db997f6c09fb1839ba34c8ca422": "f1eee5d74ac8fc3a925a327bd784eb75",
".git/objects/ec/419520cfae06fabb3968adb96bd54bf0a61510": "dce9ac6bb9ac2fd96569f7a5b54f8056",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/44/c19aef1f497968b2e1daa204a636276bdd2168": "6cb57dd45d9a6c244597b813d3977194",
".git/objects/bb/ab0ceaa1d141e7f3ab7409f05134af9ec54a42": "6b95ceeb19dfb1e9dc29837c433833fb",
".git/objects/fc/a2446934435d0c841fe745b64bffccba69e3d6": "3dbb5e365cc6a51efd157d445fb5e5aa",
".git/objects/66/454b95a5166074b1c5231e26a4426d3634629a": "44656df56e7ebce7eeb03d72af39fb64",
".git/objects/66/404e946bd130aeebdf4e769fe9e2979cb14331": "a30654013056816d3ede9d1ab1b3a7a0",
".git/objects/24/e3dc780af3eae2d69aa2d37a511c353d6abba2": "7daa1bdf520693723a37bdadace0ab90",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/e958d2dd5673c02125fdad9a24bd24f91d046f": "a2e55b481174b2bfd1b027fbbae50bd8",
".git/objects/2c/fca9ed0420948b51cd33ad2786a0bb5e63e5cf": "eac3b0d6e10efba234b84505ae1a8b87",
".git/objects/01/528962ca602d610e6f25eda174a1884e4e48fd": "04588294496c933d89107e5bef3da6eb",
".git/objects/be/64c9d6214cd6456045ce648a651b3accfc3f7f": "45f7a7730b0d446d2c002044427cd183",
".git/objects/73/2901f4f0dce74f71aa38cea639a80dcb5a1506": "0f32b1278dffcac188b36932023dea25",
".git/objects/73/0427f062e0a047cbec504c77ef7681a7dfc0ac": "6ad24db79a623750d922fccfd12464c1",
".git/objects/f6/f86db7c8c01e6f71ffa0dbef53762d168a4274": "254696194946443f078d8a917a1d2ae6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/da/9d125befca26f16755dc5dcc7f9c9f5786f016": "aadfc91acbff9b9fb850d9aa0dd7c2d0",
".git/objects/38/4fba86910341270bf93ced7d4d49c3863376b6": "ab5b8b44c4c84fa5661a03bf15fa5fa7",
".git/objects/0e/c2fb45039166aa8be8926137a65538d5070290": "47ed1b507dd2d3bfb0327302e6df5335",
".git/objects/6e/625ec9b0781f0ba3f641a79db65676f3e900f3": "5799a8cee305461438b772c73bc85876",
".git/objects/b8/74f10ae9809bb9b30146c9204033c3b0a42ae3": "3b7c0b18535f7f2d72899d5984750f07",
".git/objects/fe/064e304819863cfeae34bc9c993dcf90c7d698": "e88f0732342fc79488ec5d6983ddaad7",
".git/objects/fe/326b69eb9037909d1f91269700f364ae3649c8": "e5f1c004b596871f108582cdad1b7572",
".git/objects/80/b9ddba11946a7641a1b7d09318461fbda6c6e0": "7d8f423844f724503bb13cfc38a4a055",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "a9a67bd03ac3c16cf60fd86f6d21c292",
".git/config": "6dcb486f348b7baf9557141f89b15bc8"
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
