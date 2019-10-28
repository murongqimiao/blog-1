/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "df91cae2a6f544c0ae2335eaa625d8ca"
  },
  {
    "url": "assets/css/0.styles.42373c9e.css",
    "revision": "2e4323fd5f1421ab61bbd1deef8744a9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41dbd96c.js",
    "revision": "d35947b6372b678128cd9760ad324d64"
  },
  {
    "url": "assets/js/100.0a1dffbe.js",
    "revision": "f818a2ec2a3a37c55d373129556479a0"
  },
  {
    "url": "assets/js/101.ce9f63f7.js",
    "revision": "fe0f6163058fc3ddfd990b6df97a64ee"
  },
  {
    "url": "assets/js/102.0a484fe3.js",
    "revision": "578929131d0e1a98f5fa67f590aadb57"
  },
  {
    "url": "assets/js/103.57852eeb.js",
    "revision": "a012b85c16e5307ab5123f63625d0842"
  },
  {
    "url": "assets/js/104.c63b9716.js",
    "revision": "c110b2a3991945b97e73465b1b17e401"
  },
  {
    "url": "assets/js/105.98f83937.js",
    "revision": "684e80d0899b5ba064f61dfd1566e6a3"
  },
  {
    "url": "assets/js/106.cb6e994d.js",
    "revision": "91811875fb51e17ef6a2d49bb254af4a"
  },
  {
    "url": "assets/js/107.731c02b2.js",
    "revision": "a015e0a0ba36d655e555b06b5320829d"
  },
  {
    "url": "assets/js/108.6bcf1f4c.js",
    "revision": "e5ec96dc7bbbb3f58868953175737b2e"
  },
  {
    "url": "assets/js/109.b8422bac.js",
    "revision": "5e47aa880904adf6a5bd7b5d8e2fb210"
  },
  {
    "url": "assets/js/11.59051f17.js",
    "revision": "fc636188dfaa5776ac9fbece1167d6c1"
  },
  {
    "url": "assets/js/110.94012a6b.js",
    "revision": "3a3dbdebf73d1f90bbc9f744934bdbf2"
  },
  {
    "url": "assets/js/111.72598200.js",
    "revision": "c4a4bd42589d3bca32225f08a0744cd3"
  },
  {
    "url": "assets/js/112.5769d9fe.js",
    "revision": "3beac09d988aa8c06c30f7c2769edfc8"
  },
  {
    "url": "assets/js/113.b08c011c.js",
    "revision": "36589dd44514740edcb9ff2d2b4dc98c"
  },
  {
    "url": "assets/js/114.5445d5cf.js",
    "revision": "76bdad3c38f30b71039ea6c40c2700aa"
  },
  {
    "url": "assets/js/115.d1d9c73c.js",
    "revision": "4931f9d22279912780ae2bee6b28ed04"
  },
  {
    "url": "assets/js/116.81369b97.js",
    "revision": "43843be93bdcdca5f1326ae40dbb7fca"
  },
  {
    "url": "assets/js/117.f104c5c4.js",
    "revision": "85d0cee2e1ca749255c268a6604af4df"
  },
  {
    "url": "assets/js/118.22019263.js",
    "revision": "edb483420398e4b14c22603a9054318b"
  },
  {
    "url": "assets/js/119.256a8727.js",
    "revision": "16c8b578c7d36025dedc249f0adcd1c1"
  },
  {
    "url": "assets/js/12.228741a5.js",
    "revision": "b4f7be223f3adb8ca92f9889333105da"
  },
  {
    "url": "assets/js/120.567b96ce.js",
    "revision": "88da5a2e2b1610b3049d1a6a66eae334"
  },
  {
    "url": "assets/js/121.2f0b66bb.js",
    "revision": "49c9fb005486f3974f81a8ae934071a3"
  },
  {
    "url": "assets/js/122.6884f660.js",
    "revision": "116c904eed99c7c22d2e2c9c0a4c63dd"
  },
  {
    "url": "assets/js/123.1bad1dc4.js",
    "revision": "d08b64d84fd76c9aecebbe68d95b6bc7"
  },
  {
    "url": "assets/js/124.5c113baa.js",
    "revision": "b7559771da351591eda0b52ad3737429"
  },
  {
    "url": "assets/js/125.fbd94b6d.js",
    "revision": "57616aa9fd5ddc9e0cb357fb0f449838"
  },
  {
    "url": "assets/js/126.acdeaa12.js",
    "revision": "3cd1401db73284e14209a37088ef677e"
  },
  {
    "url": "assets/js/127.8e70b10a.js",
    "revision": "13a11bdd255b35f808e1be29d1890f0a"
  },
  {
    "url": "assets/js/128.11614fd9.js",
    "revision": "8aa4ce6807defef64c827913a9823e8f"
  },
  {
    "url": "assets/js/129.4f6a4c09.js",
    "revision": "deebf6f6cbf41e915d00e74ead13846e"
  },
  {
    "url": "assets/js/13.1e8df012.js",
    "revision": "b13c172102ef83747bdd12b42f691c75"
  },
  {
    "url": "assets/js/130.6a50873b.js",
    "revision": "482f5d85546f68b14fb58eb94048eb2a"
  },
  {
    "url": "assets/js/131.8614d83a.js",
    "revision": "7c92e6fabd81f75ef9600ac0e9cf5c61"
  },
  {
    "url": "assets/js/132.8e109999.js",
    "revision": "1b8591cf115c2f67e3da1447675fdbf5"
  },
  {
    "url": "assets/js/133.5c703f18.js",
    "revision": "722900ddfea02d340405abccd3f4e35f"
  },
  {
    "url": "assets/js/134.5bbd1141.js",
    "revision": "190008b2a10be3745678f232860cdad5"
  },
  {
    "url": "assets/js/135.6bfa9afc.js",
    "revision": "029dec99243abb43ac08cf4d3efe0bfe"
  },
  {
    "url": "assets/js/136.88cd2577.js",
    "revision": "8aac562fd2d03283f7659c03584086ca"
  },
  {
    "url": "assets/js/137.f6f70f50.js",
    "revision": "86932f232dd7335d48814270da79b064"
  },
  {
    "url": "assets/js/138.5bbd7028.js",
    "revision": "db10726774b591d3d3a518bf3910d9b2"
  },
  {
    "url": "assets/js/139.230571c3.js",
    "revision": "fd062c0f607e235d670209c6ab9bcc93"
  },
  {
    "url": "assets/js/14.febfef5a.js",
    "revision": "da3bd47e1b553417caa8467a6423479f"
  },
  {
    "url": "assets/js/140.f798ae25.js",
    "revision": "615becbb864ec61f5205151c6aa929a2"
  },
  {
    "url": "assets/js/141.83856cb6.js",
    "revision": "d2db3b7ca9dce98d547aa6724a77bc44"
  },
  {
    "url": "assets/js/142.736a3307.js",
    "revision": "bef96a5fdd46b813d80b8768f463e0ab"
  },
  {
    "url": "assets/js/143.34f28846.js",
    "revision": "b62a217386fbf9821f06ebe576af7956"
  },
  {
    "url": "assets/js/144.3d65dde2.js",
    "revision": "780b18d4455d161649af3e36890f95c7"
  },
  {
    "url": "assets/js/145.371a0d17.js",
    "revision": "1360b95c1cd39521b159550b2723872d"
  },
  {
    "url": "assets/js/146.efbf5fc0.js",
    "revision": "c3aa3a5d8098af4bedf4ab62a5ec5f9f"
  },
  {
    "url": "assets/js/147.954be436.js",
    "revision": "c85fcc34a76fec9811d559c64bad6d88"
  },
  {
    "url": "assets/js/148.2327cb81.js",
    "revision": "4a37e857bd30187375158b77df36ca07"
  },
  {
    "url": "assets/js/149.8dce3b23.js",
    "revision": "7c44aa29944fc4f28dfece97c923df97"
  },
  {
    "url": "assets/js/15.ef90f252.js",
    "revision": "b94c291fdc327db8babdd7613ff1489b"
  },
  {
    "url": "assets/js/150.330630a2.js",
    "revision": "f00e5037a1e3bafffb1a9926863edd8b"
  },
  {
    "url": "assets/js/151.5496c9ed.js",
    "revision": "acf5818cd8aa6c0d10b8f544506c6ada"
  },
  {
    "url": "assets/js/152.824a940f.js",
    "revision": "4ca5c6a3d2e438ab2a7cdea915c0fd82"
  },
  {
    "url": "assets/js/153.2edfcc7d.js",
    "revision": "c1fe7be7577fc878d50f30e3a8f8e3df"
  },
  {
    "url": "assets/js/154.90ac0917.js",
    "revision": "daf6369aafd5c3e602da9c02be67f0b8"
  },
  {
    "url": "assets/js/155.43b2f680.js",
    "revision": "4862c56ed2eb23987165a2251a2c2083"
  },
  {
    "url": "assets/js/156.231c7b00.js",
    "revision": "4bdfdb29d125c1fc1919470aa6345d0d"
  },
  {
    "url": "assets/js/157.22938dfc.js",
    "revision": "9d53cc6cf3d5573a32ddcb69adf2a48a"
  },
  {
    "url": "assets/js/158.3f1284f1.js",
    "revision": "9de60d87e8a55cca9bd1c223c79bfd72"
  },
  {
    "url": "assets/js/159.89a6d214.js",
    "revision": "a74e98f36a7575bd91a625a6e88b634e"
  },
  {
    "url": "assets/js/16.20b6666b.js",
    "revision": "957762fb1076ac233993547cc4846f16"
  },
  {
    "url": "assets/js/160.02e051df.js",
    "revision": "7921cd39956ef388a644ac6a76ba5827"
  },
  {
    "url": "assets/js/161.ea0b6ffd.js",
    "revision": "43d9595710d4e641b256a53c4e0ebe34"
  },
  {
    "url": "assets/js/162.f8edf932.js",
    "revision": "a78b59ddbd7800719e9bf8f3185c7960"
  },
  {
    "url": "assets/js/163.a3a458d0.js",
    "revision": "30ca63d3c033b6ba4afff6056f627b0a"
  },
  {
    "url": "assets/js/164.77ffaea6.js",
    "revision": "060b8617fb55424666911ed724c4616d"
  },
  {
    "url": "assets/js/165.11808e41.js",
    "revision": "34db8ff1000bc45ec3be9519f8fa2262"
  },
  {
    "url": "assets/js/166.b1c6da22.js",
    "revision": "14b0eaa263e6a08deb5bb0a0d906f62e"
  },
  {
    "url": "assets/js/167.64ffe161.js",
    "revision": "7e2ffd1410fbc342dec5d68ac68a5279"
  },
  {
    "url": "assets/js/17.96bd4baa.js",
    "revision": "accc826e33f9e08d3f97e8c64580f2d9"
  },
  {
    "url": "assets/js/18.57746ff0.js",
    "revision": "7b1458125ed64a89c106719746e0a1c4"
  },
  {
    "url": "assets/js/19.bdf260a4.js",
    "revision": "b95563edc7b478f5fb6e75c341b6520a"
  },
  {
    "url": "assets/js/2.f2881f60.js",
    "revision": "caf7f1967295c3d438c091701432371e"
  },
  {
    "url": "assets/js/20.8959fb99.js",
    "revision": "f43ea04162b8efcde70c3b9fd7b36f36"
  },
  {
    "url": "assets/js/21.843f2878.js",
    "revision": "f8030561f820a0e5b746bc839bda37f5"
  },
  {
    "url": "assets/js/22.0260b0a8.js",
    "revision": "a062be4c2b2d77a0f15c169585575a1d"
  },
  {
    "url": "assets/js/23.a0ff7a4c.js",
    "revision": "de12b7d5e78757795d43da8584dbc153"
  },
  {
    "url": "assets/js/24.93557841.js",
    "revision": "d56fc13a2b09c0c41b3ebd3276d6d3c7"
  },
  {
    "url": "assets/js/25.84c98456.js",
    "revision": "9ca633430077683f02ef2627105f7df1"
  },
  {
    "url": "assets/js/26.acb20f2f.js",
    "revision": "f274dfb835ebdd2ec534df2e7b4d52c4"
  },
  {
    "url": "assets/js/27.5bb12904.js",
    "revision": "f0eb09370afc9a62c8dc4d9974b4edf2"
  },
  {
    "url": "assets/js/28.4361691a.js",
    "revision": "3b2f90c9a0fa1aeb4cfe40d50b0e8dc9"
  },
  {
    "url": "assets/js/29.6eeddad5.js",
    "revision": "d061361e00a1cb16419d9340f1dd7f15"
  },
  {
    "url": "assets/js/3.2482c351.js",
    "revision": "d5ad98dc2620addb133fdc9f36d7280a"
  },
  {
    "url": "assets/js/30.29829b00.js",
    "revision": "675ff50564e4b6e235791fbe93fb3ebc"
  },
  {
    "url": "assets/js/31.3760ed61.js",
    "revision": "9370058084b922b70af9190335e93f1b"
  },
  {
    "url": "assets/js/32.4842452d.js",
    "revision": "f12ba3c09a819fe1193d1b1d2904dda5"
  },
  {
    "url": "assets/js/33.1f557708.js",
    "revision": "90199c5c8755b797a524c55da76dc6c4"
  },
  {
    "url": "assets/js/34.179bca21.js",
    "revision": "3f657358ddf39b6cb2039730d0bce9fd"
  },
  {
    "url": "assets/js/35.a1980271.js",
    "revision": "b811af908b5a77739666e5ca81f756c4"
  },
  {
    "url": "assets/js/36.76b6e269.js",
    "revision": "26d5f70fa14c96afaabd0dcbb5cf59dc"
  },
  {
    "url": "assets/js/37.caa1a215.js",
    "revision": "ba47c4ac07aef6b8f4106df027dd3d5e"
  },
  {
    "url": "assets/js/38.292e7b0d.js",
    "revision": "ab130696607daac8ed4b5a5308641ac1"
  },
  {
    "url": "assets/js/39.8b286afa.js",
    "revision": "05d576134e88882e9d252ad1aa7393ff"
  },
  {
    "url": "assets/js/4.6561383e.js",
    "revision": "ffc8e5c537bab8ee1f15c3cd9bfc8f3a"
  },
  {
    "url": "assets/js/40.eefdc1b5.js",
    "revision": "23d449f7db4383ac08d7d4bd21b8e79c"
  },
  {
    "url": "assets/js/41.45611f05.js",
    "revision": "6ab32bea135291ee4f833c072ccd3af6"
  },
  {
    "url": "assets/js/42.bcb8e51b.js",
    "revision": "ddc8e1e3b0f37d638085fce021652d23"
  },
  {
    "url": "assets/js/43.4d5c1e8d.js",
    "revision": "a6df927aafa1602f6e443c6ed2cfe6c2"
  },
  {
    "url": "assets/js/44.972dadb1.js",
    "revision": "df678902cf0953e64b9f7e9a6ba78772"
  },
  {
    "url": "assets/js/45.2aed4e85.js",
    "revision": "e9df60f2e49e150086f0f6e5bbc5c02d"
  },
  {
    "url": "assets/js/46.9e5b1ed5.js",
    "revision": "6065c57c49cfb98189ec2561e8e7d53c"
  },
  {
    "url": "assets/js/47.ffd531a2.js",
    "revision": "f00200d790ff809faf0801bfefb0760d"
  },
  {
    "url": "assets/js/48.9e8e0eea.js",
    "revision": "dad7469e3237e20592363a025831a6e6"
  },
  {
    "url": "assets/js/49.d1a131bd.js",
    "revision": "8b1c25b0ed73b124a2f62c5ca38cc942"
  },
  {
    "url": "assets/js/5.a692a018.js",
    "revision": "41db3e91d2c6c18dc98238540cf5de91"
  },
  {
    "url": "assets/js/50.0997f7ca.js",
    "revision": "90825f8f9bbee51d4a4bb88a0de6e0ae"
  },
  {
    "url": "assets/js/51.ba22fc5b.js",
    "revision": "277d1f8a19ba1c4eb728825af8ac400d"
  },
  {
    "url": "assets/js/52.1a949406.js",
    "revision": "1c71a25a808180caac65287682264f4c"
  },
  {
    "url": "assets/js/53.13e92f7d.js",
    "revision": "781e8cd85624054a74193edf99d57348"
  },
  {
    "url": "assets/js/54.5b916891.js",
    "revision": "5d6a311b7cafd581d64d67f4b6e99082"
  },
  {
    "url": "assets/js/55.ca564a59.js",
    "revision": "97ac3d2c86a93fa7f42aca7dd9ceae37"
  },
  {
    "url": "assets/js/56.f7c61650.js",
    "revision": "32a5640a20c562d9c137157808db6717"
  },
  {
    "url": "assets/js/57.53f0ddb3.js",
    "revision": "2f3c071d03d86fea64ca0cb34e8326b5"
  },
  {
    "url": "assets/js/58.08bf17e7.js",
    "revision": "3d0f18fbb9b50368cddb7a11eecc2d17"
  },
  {
    "url": "assets/js/59.aa886459.js",
    "revision": "3a16fed5618a56a640b001843d0828f8"
  },
  {
    "url": "assets/js/6.1ac29e1f.js",
    "revision": "14b66509dc6819a8995e79b39336089f"
  },
  {
    "url": "assets/js/60.0037383f.js",
    "revision": "544609eb13446b08b591fd5c21671838"
  },
  {
    "url": "assets/js/61.e28ac1cc.js",
    "revision": "1c70c74fafb04a06634f899a0b4a36bd"
  },
  {
    "url": "assets/js/62.75c749d7.js",
    "revision": "46895f89e6153f2ece7632dde36937e8"
  },
  {
    "url": "assets/js/63.fd076771.js",
    "revision": "1a30b280595b6d7a1b328b580c7469fc"
  },
  {
    "url": "assets/js/64.567f0c43.js",
    "revision": "4f751c44ca12f85c7fd73680d7996514"
  },
  {
    "url": "assets/js/65.465f912d.js",
    "revision": "cbb01f07fb79e78ac17f6e37f8f264a3"
  },
  {
    "url": "assets/js/66.7919cd15.js",
    "revision": "e3dfc7f4360923c11c9e96814f80ae5b"
  },
  {
    "url": "assets/js/67.26edaf22.js",
    "revision": "3c9c2f1675a90af95443fbdc6e15f29c"
  },
  {
    "url": "assets/js/68.a96d0770.js",
    "revision": "1e1834c607fd5dff4254346abe19c954"
  },
  {
    "url": "assets/js/69.68a7d7fd.js",
    "revision": "3cd04ee0357158123dae7486057707a5"
  },
  {
    "url": "assets/js/7.eee03784.js",
    "revision": "072ccfc800e021fbe4f442bc867fc7a7"
  },
  {
    "url": "assets/js/70.aa582aa5.js",
    "revision": "203dfd6b3e740d8ddc092bb4f3d6c277"
  },
  {
    "url": "assets/js/71.a8876ed5.js",
    "revision": "b19fefec26aafe0db7e4fa2f951dda44"
  },
  {
    "url": "assets/js/72.0cbd9a31.js",
    "revision": "7450e5af6350e21d9d6dfdf334a1bbf3"
  },
  {
    "url": "assets/js/73.23f4d7d7.js",
    "revision": "428e9ecd9d4e75037e81d49703567ed4"
  },
  {
    "url": "assets/js/74.71a8ee7e.js",
    "revision": "c75802cef5dd178bc9b7e164c421c49d"
  },
  {
    "url": "assets/js/75.be1c01a9.js",
    "revision": "b7c77eeb3532150a5d61b21326e5f412"
  },
  {
    "url": "assets/js/76.afbe25ba.js",
    "revision": "e569c69bad48b168c6c5214b4eb1a750"
  },
  {
    "url": "assets/js/77.56ad8e37.js",
    "revision": "b7edc7b276d92bfb691eb200559832b3"
  },
  {
    "url": "assets/js/78.8d63ca4c.js",
    "revision": "b529bb869030ad1932f86e50087d6171"
  },
  {
    "url": "assets/js/79.e868d7e8.js",
    "revision": "aee5baa50f61868a2664b0dac60712af"
  },
  {
    "url": "assets/js/8.71158a57.js",
    "revision": "652466fc58f206050d902effc216da6e"
  },
  {
    "url": "assets/js/80.d97395f1.js",
    "revision": "6bbabd0a4ab784ba364a70f778b63701"
  },
  {
    "url": "assets/js/81.f7c5c9ea.js",
    "revision": "adbe0328dc70becff51c6d15ac227411"
  },
  {
    "url": "assets/js/82.38d86106.js",
    "revision": "fda0111c58c9fee4aaa3cf030666faf6"
  },
  {
    "url": "assets/js/83.c00de78c.js",
    "revision": "103ada6bbf9498879a599c34d3805145"
  },
  {
    "url": "assets/js/84.2db125af.js",
    "revision": "2aa75bdf3e8152063fa9d026d7bd1d54"
  },
  {
    "url": "assets/js/85.a4e85829.js",
    "revision": "9ccdcb146284e8b4725611c3ab53b352"
  },
  {
    "url": "assets/js/86.83e127b6.js",
    "revision": "a8229e1d70ec41c9cdf4528bfcb1e2c8"
  },
  {
    "url": "assets/js/87.36fc859c.js",
    "revision": "26f6f07c02ca1456e7478e6d5cabfe83"
  },
  {
    "url": "assets/js/88.41e4207f.js",
    "revision": "e443f6667fb35f2387a2b81b5ca1a22a"
  },
  {
    "url": "assets/js/89.5dfd4600.js",
    "revision": "5f7b3b4a8c6d3dbea93341d68445ca99"
  },
  {
    "url": "assets/js/9.70045519.js",
    "revision": "c01655b448188d35951840107de816d2"
  },
  {
    "url": "assets/js/90.e623bcd0.js",
    "revision": "8063966d006f6883a9916fca2ba17acf"
  },
  {
    "url": "assets/js/91.2d3dbfb6.js",
    "revision": "d29b6bdc11f90cd4aff692c265cad266"
  },
  {
    "url": "assets/js/92.1c7705c8.js",
    "revision": "2623e3b9cf1fa7a12de7140618c7c5a8"
  },
  {
    "url": "assets/js/93.7e6dfc41.js",
    "revision": "71c1c845b62b608e876aa15cf7a873d2"
  },
  {
    "url": "assets/js/94.79114883.js",
    "revision": "e78cc254816e9b6f4a90b1f8f904ecfb"
  },
  {
    "url": "assets/js/95.e0be8cef.js",
    "revision": "d9d49fc85e29dbb079bbd6c725fa2f4b"
  },
  {
    "url": "assets/js/96.195f75c4.js",
    "revision": "a6a91e0e88ceec2120d13ff150561911"
  },
  {
    "url": "assets/js/97.d9555598.js",
    "revision": "c9b5b64d465c1b52af4595b36bb766ad"
  },
  {
    "url": "assets/js/98.367a3cc8.js",
    "revision": "0cb6b78e5eef513f59d62d27b17b5056"
  },
  {
    "url": "assets/js/99.9f9d5c1c.js",
    "revision": "8bd43f4ca75918c107ef5624b9192cb1"
  },
  {
    "url": "assets/js/app.2d73e62c.js",
    "revision": "327e13b4bc8d7b7595f36cd187887479"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "4547f59be4e56c518357330cbdcf0a73"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "9e5d1cfdcbded87a41f43ea3083e6516"
  },
  {
    "url": "guide/index.html",
    "revision": "ffc11768e4066ce6a2837f8ed2afa833"
  },
  {
    "url": "index.html",
    "revision": "5360fa86070e688cf8702497249f7c19"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "89eb2cf38aeaa804627226c488b91e6b"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "3287de6d8f1271c911cf0556516fcff5"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "44f17f9bc2e664cb21e34876c607354f"
  },
  {
    "url": "notes/待整理.html",
    "revision": "9c6f10f47b09f7754f6c8ceba0d7a9bf"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "0fc2964f153251ae28cbe9d9910c9bdd"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "3ba61d608e23621145851bc2795d19e1"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "1364fa9f919bc5cf624ca3f63b7c3a06"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "b739a4f73a6e05473b37661d7f314981"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "76b65400cc8b0868ea9254400e5693d9"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "477f724209e45e863586ccd31798f9fb"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "ccd3c7cc85c789e8372f4f68c31f7846"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "33360c31eb4defb2065f40082d73894b"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "2a90d8ed380998be0264502fcfd5b3d2"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "d8636f149169e5af29572fa59130da76"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "96e64796864cdb625eb94bc27b43ac48"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "eb5f26e1458c7e36d7d823404fa8e8ef"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "9b8f223912f654dec2e6bd29d889bec9"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "0ef34ade10397f64e0df3cb8e9ca8902"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "f7b633e72ef8df66be2e8614c342e7fd"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "e3b36d3a0c85c10f18d9e1efe82f1ab7"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "a56c28d34d8af1642b9fe947ff4ca48c"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "6d648bf7c9b03044e5d93b73feacedc6"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "8722cc8c38b3c9dfe6f2b5b855e82437"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "083dd80236d3e284f88dfd67eafe8eb5"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "872e2777fea1e43d1d1020f659b9c286"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "42224e7cc64571847e22620e14f37a15"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "41b3b11e7aeb872fbd1b520fdda488f5"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "cf9ee593e994618783581010b73931f3"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "b8105c1513cff5cac1131c103827e9c8"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "4da8b73966e93187274045f86244876f"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "c9cee1bc1421badcc0e5226e4ed14c1f"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "e421a63a908545412de14af23f9c20b0"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "272207602533f98ab7209c37ca6bcd25"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "fd3a67ddd3e926ff4a8178f7500d6499"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "06a9b24d0abd2c7f09ff4f91afdacb5c"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "21499d3352e67f0d14750b09ae9c0cbc"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "d5ab599583b5e4ce721ee8f44ce1096e"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "a7ce6133f6c79825b33044c69cc42de0"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "1aaf8bbc84588e217a989823fa314faa"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "6a0e720c6e779c48ffa110b21992008d"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "be22431421a843a7e620ffaab97c42b5"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "0f5257cd83fc2aa8e5c270b4ae94d611"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "64230dc78b9f8ccc8c3ff29b7d80ff45"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "eaa81e7589a6bf4c899034a5c10054f8"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "b42b99c39fc6ac5c6541dfb9049655fd"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "9e6cc1e84b764c0f14979a2e71dfe34b"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "409f2104360d2a2190d81810d543d3dd"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "3f0adadafa935e1cb8dfa8e8b4853c42"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "7156b0fbd19156f4dcf658140d43cbab"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "200e86cba8b507a44d12ddcaff9adf1f"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "d2c2c75106a8af8dc7b88e54b461d357"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "a696ccd080e2afcb0197250555df2796"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "eee21575df5a0cbf93f2ed8912a6d614"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "ab54df3765a739cc27d6ede968a3b160"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "26a0324413946f5488e21ac961df48dc"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "59b2888fa9c9dd96733860c14d3f35b6"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "c42039f9716bf11796e7a6b8091cd9a5"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "1e09e06da4e6c70e294c3be69948b20e"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "c7d380f889fdf84b2a528183bcc03241"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "4084d3b3ab7a68b6c293d9d05f90d923"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "472c49285225af9263d846a577ce8cc7"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "64561f73c3f6c2b8f7c09921f6253e6b"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "8c3d977cebd343b2f58a3c569ebc631d"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "2e6c87e86f9dfb44f1625a5270fb163e"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "2704218427b3d491aebfe886d9dc5b0b"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "a2d79f7497e86d05ed97a4f9b2891d39"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "a4b2f11e90e6ccc014cd2f28f41c3dd4"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "93c0ebc096df07fce83b0d47a8953210"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "25b19867b78eb348bb8065636cb7eba8"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "99cf937049b4728d8baeb3616e406c13"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "ca273ab9e2395e10ff69e7c560b79cc6"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "4b649d3f30d7bfcdccc769bb7f173401"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "cf8f9587e3ed9c9e8fb1f3f384c755c0"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "a74612ebaef3d921fbe871385649e668"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "8fa1c279055554008cee9d9468eb9a66"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "5ee994bafb5a2042b2b53313a8e6b898"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "a094d2d3adedd23ff30db5a92217ab1d"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "8eacc0ddb1a8a80291bdc2a3b3abc737"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "a8c031691f9da803fd280c8ef7b1d316"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "414758ba9662b13004c606925c05c25f"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "ec00a4a43ec48c3991408749c377be6f"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "c21b6c23894009c400cfee08914b8932"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "7e818cff62d30d0af7bc6402da5da6c8"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "961f6592a50a5672456aba7071276b0d"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "184e58d97e7c0036b82ecac455bc9932"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "8987ea13f3aa7b06b8047c6108cb5293"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "418584ca22179d7cc6b270e21aef31a9"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "f824f3dba51d983197747b59f01b8196"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "f5f1b267dab3f8f78e5ce0e1102acb99"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "bdcb79b21a15f5e853da28fb73cf0614"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "ccad9bc816f60e4a725bcb6a05149049"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "3af18379061fe5d13f98fef5714f0f90"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "e5cf7e32fc4360f0de022c3566a3744d"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "8ee024701e6683c2b968b14af45dd310"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "e61e7a7d646dcd9e1b293c2828c80e2a"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "1128e2724bc3078105f9844da43551b1"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "1873a18d269e5a99ac86df240c89ea14"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "4ac11b8af6421641532987e6ec1796d6"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "3f8328c8c4db8e6cde7c7ae74649187e"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "eeeac3bf8a90c4fc35d4f2abe761ff46"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "90efb4a6565af33c9fa8be680ada9365"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "3e766a949d4aa7183f20fb2a64254c77"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "e7065e0fd57a7aaac15a65d44a3470a5"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "4c5e6a97467881186b3f6c08b6e17df1"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "bf92fd458dd348d4d69b41308ecb8fec"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "d5055917785037e02ec50deb8f8e4594"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "e78a9fea01c7ace7f1661580519b2040"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "c653a58b186036616487d0229fe2df97"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "efc584bc9e8527c0e91a54d8b563b6a5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "61a03de789d4dc26cd295d0bc4d2ac5d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "063c4dd4819e03b5014270b22c193df3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "e56b058ec444ad36259c825405d34148"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "a0a2f8b5fd9f82153381a9d56acb050b"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "f8d394e3dc777e023ec3512d29d093f4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "acbcb431fa8d348a89c3cdcae93d03c3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "e261ab2601b0e79ee334728bc44d481a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "690b6a599be35260f313d216e003d3bb"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "c2cc41eeb5fb8a8ab63b01298bf83e43"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "106b6008a05f824e6c0647572f8641ba"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "11ddc0c7dddee047bf85b42679eacab5"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "3de654e861f3ece63e8b9caa09d40013"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "ff06886828e04a882cb05dc6ff32b324"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "0bfa99148102090dd2c36c4dd9c13dc3"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "359f16c378fd57231dad621ed8186d95"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "e34f148897f5219f2075cc8ccf045a5f"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "c191835b54f2a0a2e8eaf88598a4a1c0"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "2606ed607d67cd8d8e5d53f3dc73ddfa"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "63e866da192e34ede857b8a91d7b8e22"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "fbc410f29a15349011ceea07ec58abd9"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "7cc1ba8bbda5e87686955e0ac6e60350"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "0286255be46654b58bb288dc87ef0e7d"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "0a1d950243ab7f164810fa73d2df5fe4"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "602fbfee13741d2f2c6dded4fcf149c1"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "794c582a83166ee7fa6c54818c978128"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "afcfce82e2e7126c3120e4f2aa8cf7a8"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "9922a8cc40659064a0b1667b590a9309"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "a20604de8c7c4d22fcb6e26f93a07bde"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "b8d1958fc120fb786331f2c963145ffd"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "cec327afb3df0a28e77f593748d10402"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "17b15a2df0362018659b57c1033ef9bf"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "92a08272418c2e3779bad354fd890e31"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "95fac2f2dc541062dd4243f26b2c6b25"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "e93514c72f0c2c6e3a18594db7eb8b01"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "6d749ccde97075ec9cd9e93460c3e45d"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "3b1310085e338a9834b1acfe461037af"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "16738015389cdf6da393ea4cba35670d"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "a57a8c698ffc7a7541d4909ac1898a19"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "9a262251631182cd9b10c09d929cba4d"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "1257ee1f56f20beb2037a55f35d62377"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "d577f2ef68f07f2e9010c6f827edd822"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "f7bf07810aff549e192ae5a7580a8ee3"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "df35a08b6da9e26587253e68c3b5f91c"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "123935640cc8da34c5d552d96ed7ba9b"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "e746d376209a2040cecef470630a6d83"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "a86dd7d7f7555cd37577b1356fd65318"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "a0fdee27773dd8a211ab78934e3f2185"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "bae22a2a86ce93cebae96fc3ec341426"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
