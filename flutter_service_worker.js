'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "855e572e7c8ce7b0e0f7773ca6bcef6a",
"version.json": "065adace2d09b10401838fa2d8402be4",
"index.html": "21f8751c2636be27d8d513b6115b6b13",
"/": "21f8751c2636be27d8d513b6115b6b13",
"main.dart.js": "941f847baeff45b615250c63b72e2a45",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "795e87aa16c26d26ef4f179011be6604",
".git/config": "7ee09f067b75080449421823c73039eb",
".git/objects/0d/c947a5a4144345c709ab5470f491f196a2a8d9": "3a5bd4bfae6ae7ba2cd0b9dfd194e2fb",
".git/objects/92/2b412ec2138c75ec894b7d3254ca867f2e6e9b": "14062803a793fa0ba10372806c00cd34",
".git/objects/92/4a9fbbd7577e9984f9c632be3d058f168df88b": "5b48f84935c0eabe7b434a990b48e390",
".git/objects/3e/f4779e06a1135a769280ba89d302b6a1875196": "90f5b2fac5783813464ff118232abfe3",
".git/objects/68/87bccde98c1611dd06140f3bf839bebca16579": "0b7a4e3392d2a5874f05a9734da8c005",
".git/objects/57/2bcd25b9d42f8bf824c2e5c86ec14c161a15f9": "9d0926a023781fc130cdfba4e1e4a40c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/76a45e1fd366b4ad80a520778946696bedb73d": "1bfa150b6a55845bdea6f0f550182dc4",
".git/objects/3b/d716bb39c19691a97c885f5cb96340cddad254": "93b9202d229c1a4467c0586d30d9d860",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/3b7b0cb20e6b40a970516419291ef4e88aae29": "a18de5a0c165568c1e0f080bbb4623a2",
".git/objects/9b/ba8759a331833a4e4512c250a0da4895da3720": "3e3364cad34bdd5e8d29dc0852f1b177",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/32/071c3750eb1667e4fb4dcf1dda3d6279a4f73d": "5efbc11bb931a70d54b1f39f1e188343",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/7590d1a3674d7872cc9770dd1ebef925060c74": "57b664457c7fcf648ac874351232df2b",
".git/objects/56/79af6092df87bb054c5434c2ebe40e057cfcc1": "fe751123e0b4229f696439ff5cf01b87",
".git/objects/51/f88a5862ef5d650a9188bf25f299c8505ab44f": "98f1e7e217ef1fa3f47078041cbb16f6",
".git/objects/67/748b929807f0264f2e314c0fbebdd285fe5f9d": "a276d92aa7edbeab3fa8f877f18eda75",
".git/objects/67/a7dbd816a2cd358fbd070442ded1d0b8482b52": "8cc18300edddc3c9da35145f063c8018",
".git/objects/0b/57560016bdff40a294df25bc6ba8bb59ab4309": "5775b2c281bbd8531ac1e5dfac080e6a",
".git/objects/93/d598a60dc580d961b016b4979e27ee0a51a87e": "2f639f288b34926bf4935b4f0527c39d",
".git/objects/93/6f15fb24f3ba7bdf0c4c6746422b55be3dafdb": "1892a3bd95daf99bf7475c5d03ccac2f",
".git/objects/34/d4294149e0eca64708ac8bb4ad755005406d7c": "8a82f2787c55470d2785a05eaf435e02",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/0754996ae9f1c659953b350a0714414c387671": "cb3e69c562b53df2195ed3d58000e7c2",
".git/objects/02/0496d8de91d47af1a36032ff5c10cd24528be2": "92c57041389348629f1eb508cde34df6",
".git/objects/02/079d9bff3dd20b631ea1a18b3fc7587db8da6d": "0d43e20595318fb77a0293b3678cc62e",
".git/objects/b5/e6344b959d5345f142738a6ca41c4e572444bb": "23e4c4f76db126c440f869158d671757",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/b935dd6b3e33703592c66b26c2cb7456ff84aa": "16268da4c67f598ffaaac9ef8c54212b",
".git/objects/ad/29d6384fc971245e25cd38ec0e1526cabca4e0": "ad694cde9efbe71741e96951c496437a",
".git/objects/be/19d9df58f239de930a4e5bfd43ad7602feea0d": "2fd81dcca8a39f1e6792975b6699eaa9",
".git/objects/df/900941a70f31d1c7674b61209ba1acdd004517": "4bf8b6fafe66d16584cc451f3f55a857",
".git/objects/da/068eb115c4ad613e285d2d39f5ebe536648a56": "271c7b3c3885544cd73999e8fb79a89a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/95316929ed9b8684e9cbe51758effdbb62153e": "a451f40a1635a4799aed3c8265a98029",
".git/objects/ae/c09aedb6377b59da0a1e9e441d53551465c1e3": "fc1e8d9e20732c6929778739acfe8401",
".git/objects/d8/534ce8a3acd776b57c97a1c23b879c1038fcdc": "2a117f4b5b1d419360538bed973fabef",
".git/objects/d8/cbd420c6f93efaca5dae7291ab90ea6c325005": "68554e491fdd74e42e0d87933e3571dd",
".git/objects/ab/4014dfb4f6f8ddb99e8b01b2fea63c8aebabef": "e20ec0e2c108a40692e065b3af72ace7",
".git/objects/e2/dfd0a1cb1e448da4a42f25faefd96b418f1356": "26a7e938ce80e07c059ffe17ece7c678",
".git/objects/e2/8fc5d22db5f53ef8bd171e0802ab862a91e8ac": "daf352ee36b059dc942a8366889c2f39",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/f4ad06afaeb702ca6d9dc975d125f2658ea0b8": "3987c41e5965d4ad465333bd0edb991c",
".git/objects/fd/0826a387abbe74cacc6d1bbb584910945a223f": "cd0303412a1c4b04edb326ff0e306869",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/584485c6eecf3f3276068d10c15b2a2d21acb4": "826924a40dfa4080ba6772286c98e16b",
".git/objects/e3/b416ec05e7f00f4e8fa2feed5f8766fb5c7b10": "7b3fc7e5f2925609fad86486c2ddb534",
".git/objects/fe/77de08f4e2b42a960f26b696aad86ec1033894": "aa6bbc20f02f157bd3c71d20f3e4cb1b",
".git/objects/fb/6e6715ba2f62373d37438853fd06398af483b5": "74278e52887a73c3ef1af5ca8bc7baac",
".git/objects/fb/3431ef59736d9eea7e1c1a8fe1a98abeb651d3": "6d7ad2ee8c53e6cdd0237f1fcaebfc16",
".git/objects/c1/c0ca1cba405b800ea8c4a7653386326707137c": "7c3b0ef80c373aa197deef422541bac6",
".git/objects/c6/2278cc686d6f062d35b48e637a378e734dbaad": "6db79d7dc5ae3b09256e59a59bdde13f",
".git/objects/20/537d259be7128f30fc9aa6ad131ed2bb940749": "8487f91e607dc1345f870cb5c173ba0a",
".git/objects/7d/326ba025f610a9fce80612821690526a69b3a7": "16d571e81f92702453d541967db257e8",
".git/objects/29/5cc83c72b0143b5812a0d7ca4797246da6a863": "a2d00275e2969d4980c799f61fd95151",
".git/objects/7c/029b30f7feaa44a88164ddee263fd2ad1f0ba4": "f5b13f926c54349e2cca80aacb1f1c83",
".git/objects/89/1d1054fb1d9716fbcf544150eaa6ea27350d5d": "1006bbb90320f7d2b4bfe9ac05e788cc",
".git/objects/80/d3a508392decb3bb1929178ae689a784ae2590": "045b6633aa9e083d83f935d775c68d89",
".git/objects/74/6353f0f0fb26071f12ed55b3e60e71fcc59ba9": "c5d1cee2e481fe47c3f83b85c6624d06",
".git/objects/28/31dd67e2fbf55b2d981befcf1ae4b14e9e733e": "b1b652b5f48e091fe28a583ac3b5bb02",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/fac5b50d2078c6f85b3a57bb7f9ddb38f25bef": "407aab88fef53a6e503e33934d46c604",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/3f4d65d46b30b91cd85e8bce4a59d39c711dd1": "c68ddc4e589b67d559272d5148b4c3b9",
".git/objects/26/055f6c79cd7a72983b8aa69e61b53a97922545": "4ba3a4e85382bbb04dba7b1ae9ee43de",
".git/objects/4d/9ba8aff05b8ece8b2022fbe41b5a5c3c7ec558": "cf40d82174ab4cc823fd7e6ec60f95e0",
".git/objects/81/5dee15fda35852d80e9910c021a3b508a08f6f": "0e9500bc4da4333432f76b3624a03cbd",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/72/db2df859ebb548b4ddf8a9cdb3f8a1afe99364": "0db727d6c4e05b94a8d3cf5eb1a204fc",
".git/objects/44/73910589549032281eb0d1c596d4c94a737e4a": "22f4c974d9abaf72f3032e25c18d4890",
".git/objects/2a/4a028cb2375a9504abce7edc6b5259ffbfc20b": "fd10e1039b2df6f7bd0faeeb8fccdb74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/eb0db49d47dfc325ff957b8ccef2188c8f84df": "fc1662d0e1e0b0b130c3a8e84f59b58c",
".git/objects/36/4eb257148f2603f09b8df5fc0daf1e06b3a91e": "a4eb41cc7a7ba270bf3060a664276136",
".git/objects/5c/e4578ae87c12af514073d7554402477cdfd0fa": "a1168b660e20e448719cef8128a3dd04",
".git/objects/5c/1f368b31d78353a52949a568b6ac20eb8f2549": "73848eee2a592a13c637f9feaa0c82ed",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/9176f97bf68b499041047c49786e226e8ff38c": "12c3c18fa4b980305483ed10c9111ec6",
".git/objects/62/5b80b87aa405fce8119205f6fbef3d81c123d1": "deb95ded9056f5734588257675a7c37d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/8ee8b8a35c40020acc923fc4013b5f117c49be": "233a443aea26594eefdbf312ea318446",
".git/objects/98/ba66a27c241136e0bc321f599f69486bcfbb21": "89a95c53b417d7ffe55bffc67d387b6c",
".git/objects/53/8cc7ff98602ccbc6376cb4a503c957e941459d": "38608c06e7a82e71a3b249431db9c9aa",
".git/objects/5e/a75ff5df1d08db4c5708ff174d25d0aa7c33fd": "80fb5ada7ab333b6652d5c9fc9d3a6ea",
".git/objects/37/619f3f4e873ef88c99d42c076eed07fa3210e1": "9b431f394a27fbbe5c363d6d153be496",
".git/objects/39/6af9e823052013805a06b01ef4e3220e6a6927": "a3247b7f2ad026ab02a4cfd0720ab181",
".git/objects/99/10740be8453395b943893ea9a15c87ad20111a": "a9879d868f3d9b4e80fc3a205bb72448",
".git/objects/55/7a8f8082e01c41c9cbc34b2718503e1c1f17d2": "bfcff8b34abfaa0a42138b10e312c50d",
".git/objects/55/1b461a0ee680a6223a6f5d00a51768f26c99c0": "4b9410f9fd414e5553b9ea39113d4881",
".git/objects/63/8d3de309a83c858c4c8eca34476d84fa6b82f4": "69500b13e3781f92eea7a1b764fa479a",
".git/objects/63/3e89dfa19cde02c4dd8679640a70be5814a658": "115960bfefcc9d7f404acabaa7dd6493",
".git/objects/0f/42807780ce11855ddbcb166334d832613c2d11": "cd3e8ea2f3cfef51ba3b7168e4eef2dc",
".git/objects/0a/b2b7b151d7048cd9d0319d43d5c8801c7b5b34": "0dec2dab8cfe1e813ba1a3d3e67efcb3",
".git/objects/90/e29efc299c47c644824291ab18d5ee294db5c8": "bbc40f7caf12e830791abc3c836c25b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/132c7700fd14a3c641bf74515117a2b7421d62": "a55e31029937f99b26426e84ea40facf",
".git/objects/a7/6d3c7e235f0e159f28ccda59712b0b5390336f": "04d9a644aa108c724d9bc97ddfc0c74c",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/112442f1b911e57a32d98f33b5cda216e63c88": "e238582334a5a99a62182d8efe5f9c20",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/af/b9f6753af1878a10fa6a1d8413c4aab8ae4206": "cd7717794a8db2ef502fe25e777b1574",
".git/objects/b7/e7e92826f02330634a8cffa6e9cee60f3e9506": "e2adaacc4b643a7d6fb883141f28fda3",
".git/objects/b7/d394c05af733dd59b36249b9c2b6a7d9f3b09b": "3ecd106b5540d9b87679a4b4d5bb7e2c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4f0431f7e8f0e90e5e7279728ac1cad41a5ef7": "31503d7a94310fc21abdec5b75c35a8d",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/2d9aa4948b4302d7acf8153be651b7fea8883e": "45b752b7d8d51a89df915f56bd5c5382",
".git/objects/b0/b4857ae8b8d7ab6d24a4691117590dc23dc3b8": "2bbea8a955ba9eb116ff147b4beaa28a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e2329e2e768e28dae354eb7db7b184e89ad575": "5404bd879cf6a93560bd79cdfb318a0f",
".git/objects/a1/5e73a6f5b41ea57e61f3323df9ec20163f5852": "8757261396e795dd4c081a46535f611f",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/0e7199e579f33a16a3dab0b9a853119eaa9ccf": "ff45418b6015fe1b22e33412df93cab7",
".git/objects/e1/feadf5c81bc044f87c58c2ac766a1ac1033146": "36a81ba4ecc6b39bb991ea9b2d33f08a",
".git/objects/e8/92804e79b7da1cfd10fdfa9a48b54849ba066b": "80f0cc54573b236d7d989d882e3803c5",
".git/objects/e8/fb08ddf6ef14bd706c3755418d9474898aadef": "c2d52e91c2aa79449ae772a9a65cc9ec",
".git/objects/ff/aab586dcbc10323c913f455df1f748d5e44f49": "56ba70bdb524bc1f1d736cb7591285e8",
".git/objects/f1/ff7c43be0f0e539522fad1fa89e4a03f72a2fa": "5957dd0a90b69dedebb7a34ed4262c3e",
".git/objects/ce/610e74a2361d64654a9b50316cce12cf0b3fb4": "5f97efb83450abc2ed9fb480f54ca30a",
".git/objects/79/753c888cfa1ee2de4873a14154e8e2a07624b6": "6a2ceebd7c9df6b351642ee010ce090a",
".git/objects/2d/053553b993c9fd98e13cd298ce1603b6aefb04": "0dfe44d4fa56075532790d9f2cfb132f",
".git/objects/1b/3e602d2d8ea39306a7392c03f70417ac5fd8b7": "fd953c757320529ac821a9bb0fcca56c",
".git/objects/48/d3977bfcf5a68500b18c17d9c6102ade320901": "b83ae79f23e0b8f34d4e11ea381a33a6",
".git/objects/84/59c8bf0d1c179f2c3c902cc2a1e47152f1b231": "25f42e43bf826263285c3cc30e993b60",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/2f065416d919f4f71950b46a4c517e7171ecd0": "28c0bb8d9a3d27bd9d214a6ea2c98d59",
".git/objects/85/b17dea724cb00a2951f9273fb946c6ee4d617b": "3cf8479934f782800dfcb677fe20b13b",
".git/objects/71/9fd95600f9d7e51e58beb5b73c16ed574b0368": "ffe26a28a4fe204692a9d48a4b31e225",
".git/objects/76/40aab9507f84882ac7c06e9c3b1cdee2845685": "d2f8b2b75c4475f31815413b34119021",
".git/objects/49/f0a89f2516c97a70a1b0b93d33fbf44d64fb33": "bb9c5818c13582c3d641dacfb6f5f5e3",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/d376db94bcb800bb5b5aa470e66bc8e17811e4": "23a09fd8f29469701d0e0b0050505f2b",
".git/objects/47/b6004464cfb4b8bf8ced54cbb8e1d2c07bee92": "69c9181e74ea44b9eaf733b72bf81579",
".git/objects/78/64ebc953f53bf91ac7eebe12aa4efbeb2fc4a0": "17219954581b0654fab5ce7b01ca0d84",
".git/objects/78/7975b638c0b34795f697d89fee1979c707f689": "4d7e335cc71eadddeffa5b3f64413ef9",
".git/objects/8b/5695d2987f0324e7a7f5fe208dc4c5fcf1d541": "eab1f4d4e1953dd108763cfb821cfd59",
".git/objects/13/5818d507d7e8495b330736be1d2a6b9eadd249": "5c5583c39e479dedcafce7bee653ec7e",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29156ee4b71bcde3795a9d9b92ef5d91",
".git/logs/refs/heads/gh-pages": "29156ee4b71bcde3795a9d9b92ef5d91",
".git/logs/refs/remotes/origin/gh-pages": "083e7e822494d6cacf6b5c70b45a9b36",
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
".git/refs/heads/gh-pages": "1e1eee7b17549a3916d7919fc1ac0d3a",
".git/refs/remotes/origin/gh-pages": "1e1eee7b17549a3916d7919fc1ac0d3a",
".git/index": "64212a9591f5a5ff935404a95bc2884c",
".git/COMMIT_EDITMSG": "d55d077a3d42c860e1366ee4a03ccbf4",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "03adc65d24c3ace1473407b4251277f0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "1e34140111380492bd5a1f9127d60a95",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
