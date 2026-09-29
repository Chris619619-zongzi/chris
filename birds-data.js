/* 鸟类图鉴数据库
 * imagePrompt：答题页主图（也是名片页头图）
 * gallery：名片页补充照片的生成提示词
 */
window.BIRDS = [
  {
    id: 'sparrow',
    name: '树麻雀',
    alias: '麻雀',
    latin: 'Passer montanus',
    en: 'Eurasian Tree Sparrow',
    length: '13–15 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['头顶栗褐色', '脸颊一块黑斑', '喉部黑色小围兜', '雌雄同色'],
    profile:
      '树麻雀是中国城市和乡村最常见的鸟类之一，也是很多人认识的第一种鸟。它们体型圆胖，在地上靠双脚蹦跳前进，活泼胆大，常成群觅食。',
    habitat:
      '城市街区、村庄、农田、林缘等几乎所有有人类活动的开阔环境，喜欢在建筑缝隙、空调孔和树洞中筑巢。',
    diet:
      '杂食。繁殖期主要捕食昆虫并以虫育雏，平时以谷物、草籽和人类食物残渣为主。',
    behavior:
      '留鸟，常年在出生地附近活动。喜欢结群，群体中有明确的等级顺序，叫声就是人们最熟悉的叽叽喳喳声。',
    distribution:
      '广布于中国各地及欧亚大陆，是城市环境中密度最高的野生鸟类之一。',
    facts: [
      '一年可繁殖 2–3 窝，巢常筑在屋檐、空调孔、招牌缝隙等意想不到的角落里。',
      '1958 年它曾被当作主要吃粮的害鸟遭到大规模捕杀，后来的昆虫学研究纠正了这一错误认识。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a Eurasian tree sparrow, small plump brown bird with chestnut brown cap, distinct round black cheek spot and small black throat bib, short thick beak, perched on a branch in a city park, soft daylight, full body, sharp focus, blurred green background',
    gallery: [
      'Wildlife photograph of a small flock of Eurasian tree sparrows eating grains on a village courtyard ground, brown birds with black cheek patches, natural daylight, documentary style',
      'Extreme close-up portrait of a Eurasian tree sparrow showing the round black cheek spot, chestnut cap and dark eye, perched on a twig, blurred green bokeh background, ultra sharp'
    ]
  },
  {
    id: 'magpie',
    name: '喜鹊',
    alias: '普通喜鹊',
    latin: 'Pica pica',
    en: 'Eurasian Magpie',
    length: '40–50 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['体羽黑白相间', '尾长呈楔形', '翅膀尾羽泛蓝绿金属光泽'],
    profile:
      '喜鹊是鸦科的大型鸣禽，适应力极强，几乎在全国各地都能见到。在中国文化里它是报喜之鸟，"喜鹊叫，喜事到"的说法流传千年。',
    habitat:
      '平原、丘陵地带的林地、农田、公园和城市大树，避开茂密的原始森林。',
    diet:
      '杂食性机会主义者：昆虫、谷物、果实、垃圾、小型脊椎动物都吃，也会偷食其他鸟类的卵和雏鸟。',
    behavior:
      '留鸟。极其聪明，是少数通过"镜像自我识别测试"的非哺乳动物；会埋藏食物并准确记忆，还会合作围攻猛禽。',
    distribution:
      '遍布中国大部分地区，以及欧亚大陆、北非的广大区域。',
    facts: [
      '喜鹊的巢是鸟类中最精致的巢之一：用树枝搭成带顶的球状，侧面开门，内部涂泥并铺有软草。',
      '牛郎织女"鹊桥相会"的传说，使它成为中国文化中知名度最高的鸟之一。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a Eurasian magpie standing on green grass, bold black and white plumage, iridescent blue-green sheen on wings and very long graduated black tail, black beak, side view, full body, city park background, daylight, sharp focus',
    gallery: [
      'Wildlife action photograph of a Eurasian magpie in flight against blue sky, spread wings showing big white patches and extremely long black tail, elegant gliding',
      'Close-up portrait of a Eurasian magpie head, intelligent dark eye, iridescent dark feathers with green and purple sheen, sharp detail, blurred background'
    ]
  },
  {
    id: 'bulbul',
    name: '白头鹎',
    alias: '白头翁',
    latin: 'Pycnonotus sinensis',
    en: 'Light-vented Bulbul',
    length: '18–19 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['头顶黑色', '枕部一块白斑', '喉部白色', '上体橄榄绿灰色'],
    profile:
      '白头鹎是中国南方城市最常见的鸣禽之一，鸣声清脆婉转。近几十年它不断向北扩散，如今在北京、辽宁等地也已经成为繁殖鸟。',
    habitat:
      '林缘、灌丛、城市公园、居民小区绿化和行道树都能生存，适应力很强。',
    diet:
      '杂食：植物浆果、花蜜与昆虫都占一定比例，冬季尤其爱吃香樟等树木的果实。',
    behavior:
      '留鸟，常小群活动。繁殖季节雄鸟会站在树顶显眼处鸣唱占区，巢为编织精巧的深杯状。',
    distribution:
      '中国中南部、东部为核心分布区，近年正快速向北扩张；越南北部等地也有分布。',
    facts: [
      '"白头"只是后脑勺的一块白斑，并不是年纪大了头发变白。',
      '它和树麻雀、暗绿绣眼鸟一起，被认为是中国城市里最容易见到的三种小鸟。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a light-vented Chinese bulbul, small songbird with glossy black head, distinct white patch on the nape, white throat and olive grey-green body, perched upright on a garden bush branch, full body, soft daylight, sharp focus, blurred green background',
    gallery: [
      'Wildlife photograph of a Chinese bulbul eating red berries on a garden shrub, black head with white nape patch clearly visible, daylight, documentary style',
      'Close-up of a light-vented bulbul perched on a park fence singing, black head and white nape patch, blurred urban greenery background, sharp detail'
    ]
  },
  {
    id: 'dove',
    name: '珠颈斑鸠',
    alias: '野鸽子',
    latin: 'Spilopelia chinensis',
    en: 'Spotted Dove',
    length: '27–34 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['整体粉褐色', '后颈黑底白点如珍珠披肩', '尾长，外侧尾羽白色'],
    profile:
      '珠颈斑鸠是城市绿地里最常见的"野鸽子"，常在地面慢悠悠地踱步觅食，起飞时翅膀会发出哨音般的响声。',
    habitat:
      '村庄、公园、小区、农田边缘的乔木和开阔地面，依赖树木筑巢。',
    diet:
      '几乎纯素食：草籽、谷物、植物嫩芽为主，偶尔取食小型昆虫。',
    behavior:
      '留鸟，单独或成对活动。叫声是低沉而反复的"咕咕——咕"。巢极为简陋，只用几根树枝搭成浅盘状。',
    distribution:
      '中国中部、南部、东部广泛分布，在南方城市中极为常见。',
    facts: [
      '它的巢简陋到在树下透过巢缝就能看到白色的卵。',
      '后颈那串"珍珠斑点"是成年鸟的标志，幼鸟要长大才会换上。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a spotted dove, plump pinkish-brown dove walking on a garden lawn, distinctive black patch on the back of neck covered in white pearl-like spots, long tail with white outer feathers, side view, full body, natural light, sharp focus, green background',
    gallery: [
      'Wildlife photograph of a spotted dove pair perched closely together on a tree branch, pink brown plumage and black neck collars with white pearl spots, soft daylight',
      'Extreme close-up of a spotted dove neck and head showing the black nape patch dotted with pearl white spots, soft pink plumage, green bokeh background, ultra sharp'
    ]
  },
  {
    id: 'kingfisher',
    name: '普通翠鸟',
    alias: '翠鸟',
    latin: 'Alcedo atthis',
    en: 'Common Kingfisher',
    length: '15–17 cm',
    residence: '南方留鸟 / 北方迁徙',
    status: '国家三有保护动物',
    marks: ['体型小巧', '背羽金属亮蓝色', '腹面橙栗色', '喙长而尖锐'],
    profile:
      '普通翠鸟是水边最艳丽的小生灵，常像一枚蓝色宝石停在芦苇、水草或探出的枝条上，一动不动地盯着水面，瞬间俯冲捕鱼。',
    habitat:
      '池塘、河流、湖泊、溪涧等静水或缓流水域，需要有停栖点以及可供挖洞筑巢的土崖、砂堤。',
    diet:
      '几乎只吃小鱼，也捕食水生昆虫、虾和蝌蚪。',
    behavior:
      '在岸边土崖上挖掘约 60–90 厘米深的水平隧道作巢，末端扩大成巢室。捕到鱼后会先在枝条上摔打致晕，再鱼头朝里整条吞下。',
    distribution:
      '广布中国东部及中部水域，南方种群为留鸟，北方繁殖鸟南迁越冬。',
    facts: [
      '它羽毛上的蓝色主要是结构色，由光线折射形成，把羽毛磨碎后蓝色就会消失。',
      '消化不了的鱼骨和几丁质，会被压成食团从嘴里吐出。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a common kingfisher, tiny jewel-like bird with brilliant metallic electric blue back, rich orange-brown underparts, long dagger-shaped black beak and tiny red feet, perched on a reed stem above still water, full body, sharp focus, blurred pond background',
    gallery: [
      'High speed wildlife action photograph of a common kingfisher diving into water catching a tiny fish, blue wings spread, water splash frozen, bright blue and orange plumage',
      'Close-up of a common kingfisher holding a tiny fish in its long beak, brilliant blue head and orange belly, sharp detailed feathers, blurred water background'
    ]
  },
  {
    id: 'tit',
    name: '大山雀',
    alias: '仔仔黑',
    latin: 'Parus major',
    en: 'Great Tit',
    length: '13–15 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['头部亮黑色', '两颊大白斑', '腹中央一条黑色纵带'],
    profile:
      '大山雀是森林和城市园林里的捕虫能手，活泼好动，常倒挂在枝叶间翻找食物，鸣声响亮，两短一长很有辨识度。',
    habitat:
      '各类林地、公园、苗圃和行道树，也非常乐意接受人工悬挂的鸟巢箱。',
    diet:
      '以毛虫、甲虫等林业害虫为主，冬季补充植物种子，并会把多余食物藏起来备用。',
    behavior:
      '洞巢鸟类，在树洞或墙缝中筑巢。经典鸣声听起来像"吇——吇——黑"，容易在林子里循声找到它。',
    distribution:
      '广布于中国大部分地区，以及整个古北界的森林地带。',
    facts: [
      '腹部的黑色纵带越粗越连贯，通常越是种群中占优势的雄鸟。',
      '它是挂人工巢箱时最容易被吸引来繁殖的鸟类之一。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a great tit, small energetic songbird with glossy black head, large bright white cheek patches, yellow underparts with a bold black central stripe from throat to belly, grey-green back, perched on a tree branch, full body, sharp focus, forest background',
    gallery: [
      'Wildlife photograph of a great tit bringing a green caterpillar to chicks peeking out of a tree hole nest entrance, black head and white cheeks visible, daylight',
      'Close-up portrait of a great tit showing glossy black head, big white cheek patch, yellow belly with black stripe, blurred forest bokeh, ultra sharp detail'
    ]
  },
  {
    id: 'bluemagpie',
    name: '红嘴蓝鹊',
    alias: '长尾巴练',
    latin: 'Urocissa erythroryncha',
    en: 'Red-billed Blue Magpie',
    length: '53–68 cm（含长尾）',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['红喙红脚', '头颈黑色、头顶白斑', '体背蓝紫色', '尾极长、末端白色'],
    profile:
      '红嘴蓝鹊是中国山林里最华丽的鸦科鸟类之一，拖着占体长约三分之二的长尾，飞行时呈优雅的波浪状滑翔，过目难忘。',
    habitat:
      '中低山森林、林缘、竹林，也常进入植被良好的城市大型公园和校园。',
    diet:
      '杂食：昆虫、浆果、谷物，也捕食蛙、蜥蜴、鸟卵甚至小蛇。',
    behavior:
      '常小群活动，性情凶猛，繁殖期亲鸟会俯冲驱赶靠近巢区的猛禽甚至人类。',
    distribution:
      '中国中部、南部、西南及东部山地，北至华北南部。',
    facts: [
      '它展开的长尾黑白蓝相间，被一些学者认为可能是《山海经》中"青鸟"的原型之一。',
      '作为鸦科成员，它也会埋藏食物并同时记住多个藏食地点。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a red-billed blue magpie, stunning bird with bright coral red beak and red feet, black head with white crown patch, blue-violet body plumage and extremely long graduated blue tail with white tips, perched on a grey rock, full body including tail, sharp focus, forest mountain background',
    gallery: [
      'Wildlife photograph of a red-billed blue magpie in gliding flight among pine trees, extremely long blue tail trailing, red bill clearly visible, elegant wave-shaped flight',
      'Close-up portrait of a red-billed blue magpie showing coral red beak, black head with white crown patch and blue eye, sharp feather detail, blurred green background'
    ]
  },
  {
    id: 'hoopoe',
    name: '戴胜',
    alias: '臭姑姑',
    latin: 'Upupa epops',
    en: 'Eurasian Hoopoe',
    length: '26–28 cm',
    residence: '北方夏候鸟 / 南方留鸟',
    status: '国家三有保护动物',
    marks: ['细长微弯的喙', '橙棕色扇形羽冠带黑端', '翅膀黑白横纹'],
    profile:
      '戴胜长相奇特，像戴了一顶皇冠。它在草坪上踱步、用长喙探刺土壤的身影，是春日公园里极具辨识度的一景。',
    habitat:
      '开阔草地、农田、林缘和城市草坪，需要树洞、墙缝或崖洞来营巢。',
    diet:
      '蝼蛄、蛴螬等地下昆虫及幼虫，用长喙探入土中再夹出。',
    behavior:
      '平时羽冠收拢如一根细锥，兴奋或受惊时才展开如折扇。巢内不清理粪便，雌鸟还会分泌臭液涂抹羽毛，靠臭味防御天敌。',
    distribution:
      '中国广泛分布，北方多为夏候鸟，南方可见越冬或终年留居。',
    facts: [
      '戴胜是以色列的国鸟，形象也出现在古埃及的壁画中。',
      '它是戴胜科中唯一一种在我国全境都可能见到的鸟类。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a Eurasian hoopoe on a green lawn, cinnamon-orange bird with dramatic black-and-white striped wings, long thin slightly curved beak, upright fan-shaped orange crest tipped with black and white, side view, full body, daylight, park background, sharp focus',
    gallery: [
      'Wildlife action photograph of a Eurasian hoopoe in flight with broad black and white barred wings fully spread like a butterfly, crest raised open, blue sky background',
      'Close-up of a Eurasian hoopoe probing grass and soil with its long curved beak, raised spotted orange crest, black and white wing bars, sharp detail'
    ]
  },
  {
    id: 'egret',
    name: '白鹭',
    alias: '小白鹭',
    latin: 'Egretta garzetta',
    en: 'Little Egret',
    length: '55–65 cm',
    residence: '南方留鸟 / 北方夏候鸟',
    status: '国家三有保护动物',
    marks: ['通体雪白', '黑色喙', '腿黑而脚趾鲜黄', '繁殖期有蓬松饰羽'],
    profile:
      '白鹭是湿地最常见的白色鹭鸟，姿态优雅，常单独或成群在浅水中缓步前行、伺机啄鱼，也是南方城市公园水塘的常客。',
    habitat:
      '稻田、河滩、沼泽、鱼塘、河口等浅水区域。',
    diet:
      '鱼、虾、蝌蚪、水生昆虫；有时会用黄色的脚趾在水中搅动，把猎物惊扰出来。',
    behavior:
      '繁殖期成群在大树上筑巢（这样的繁殖群叫"鹭林"），头、胸、背会长出蓬松丝状的婚饰羽。',
    distribution:
      '中国中南部广泛留居，北方为夏候鸟，迁徙时各地湿地均可见。',
    facts: [
      '看脚识鹭：白鹭黑腿配亮黄色脚趾，远远看去像穿了一双黄袜子。',
      '19 世纪西方曾因女帽装饰羽毛的时尚大量猎杀白鹭，这直接推动了早期鸟类保护运动。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a little egret, slender pure white heron with long black beak, long thin black legs and striking bright yellow feet, S-curved neck, standing still in shallow water fishing, full body, soft daylight, wetland background, sharp focus',
    gallery: [
      'Wildlife photograph of a little egret wading in a flooded rice paddy catching a small fish, pure white plumage, yellow toes visible in water, documentary daylight',
      'Close-up portrait of a little egret in breeding plumage with long wispy white crest plumes, delicate white facial skin, sharp eye detail, blurred water background'
    ]
  },
  {
    id: 'swallow',
    name: '家燕',
    alias: '燕子',
    latin: 'Hirundo rustica',
    en: 'Barn Swallow',
    length: '15–19 cm',
    residence: '夏候鸟',
    status: '国家三有保护动物',
    marks: ['蓝黑色金属光泽背羽', '红额红喉', '腹部浅色', '尾深叉形'],
    profile:
      '家燕是最著名的候鸟之一，每年春来秋去，在人们屋檐下衔泥筑巢，与人相伴已有数千年。',
    habitat:
      '村镇、农田、河流上空活动，在屋檐、廊梁等建筑构件上筑泥巢。',
    diet:
      '几乎全部在飞行中捕捉蚊、蝇等飞虫。',
    behavior:
      '每年春季从南方乃至南半球返回北方繁殖地，秋季集成大群南迁。巢由一粒粒湿泥丸混合草茎、羽毛堆成半碗状。',
    distribution:
      '全国广布繁殖，迁徙时各地可见；越冬于华南、东南亚直至澳大利亚。',
    facts: [
      '它的迁徙路线可长达上万公里，许多个体会年复一年回到同一处屋檐。',
      '"旧时王谢堂前燕，飞入寻常百姓家"，古诗里的燕子说的就是家燕。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a barn swallow, sleek streamlined bird with glossy blue-black back and wings, chestnut red forehead and throat patch, creamy white underparts and deeply forked long tail, perched on a wire, side view, full body, village sky background, sharp focus',
    gallery: [
      'Wildlife action photograph of a barn swallow flying fast and low over a green farm field with pointed wings spread, catching insects, forked tail visible, blue sky',
      'Wildlife photograph of a barn swallow mud cup nest built under a traditional house eave, small chicks peeking out with open orange mouths, rural daylight'
    ]
  },
  {
    id: 'blackbird',
    name: '乌鸫',
    alias: '百舌',
    latin: 'Turdus mandarinus',
    en: 'Chinese Blackbird',
    length: '23–29 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['雄鸟全身近黑', '黄色眼圈', '黄色喙', '雌鸟偏棕褐色'],
    profile:
      '乌鸫是小区草坪上的常见黑鸟，看似普通，却是鸟类里公认的"情歌王子"，繁殖季清晨的鸣唱婉转多变、音量洪亮。',
    habitat:
      '林地、公园、校园和居民小区的乔木与草坪，在城市中适应良好。',
    diet:
      '蚯蚓、昆虫、蜗牛为主，秋冬季大量取食香樟、榕树等的浆果。',
    behavior:
      '留鸟。常在草坪上奔跑——停下——侧耳倾听，再从土里拽出蚯蚓。善于模仿其他鸟类的鸣唱，因此古称"百舌"。',
    distribution:
      '中国中南部、东部广泛分布，北方城市也越来越常见。',
    facts: [
      '区分乌鸦和乌鸫：乌鸫体型小得多，而且有黄色的喙和眼圈。',
      '乌鸫曾长期与欧洲乌鸫视为同一种，后者是瑞典国鸟。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a male Chinese blackbird, medium thrush with glossy all-black plumage, distinctive bright yellow eye-ring and vivid yellow beak, standing upright on garden soil, side view, full body, soft daylight, blurred green lawn background, sharp focus',
    gallery: [
      'Wildlife photograph of a Chinese blackbird pulling a long earthworm from a green lawn, glossy black plumage and yellow bill visible, natural daylight, documentary style',
      'Close-up portrait of a male Chinese blackbird singing on a branch, bright yellow eye ring and yellow beak, glossy black feathers, blurred green bokeh, ultra sharp'
    ]
  },
  {
    id: 'whiteeye',
    name: '暗绿绣眼鸟',
    alias: '绣眼',
    latin: 'Zosterops japonicus',
    en: 'Warbling White-eye',
    length: '10–11 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['体型极小', '橄榄绿色', '眼周一圈醒目的白绒边', '喉部淡黄色'],
    profile:
      '绣眼鸟小巧玲珑，因眼睛周围一圈白色细羽如刺绣而得名，常成群在花间灵活窜动、吸食花蜜。',
    habitat:
      '林地、灌丛、园林和行道树，尤其偏爱开花的树木。',
    diet:
      '花蜜、浆果、蚜虫等小型昆虫。',
    behavior:
      '群栖性强，非繁殖期常十几只结群活动，叫声是连续细弱的"唧——"。巢是悬挂在细枝间的精巧小吊篮。',
    distribution:
      '中国东部、中部、南部及西南，日本、朝鲜半岛也有分布。',
    facts: [
      '它的舌尖有毛刷状结构，非常适合探入花中取食花蜜。',
      '野生鸟类最好的欣赏方式是在自然中观察，而不是关入笼中。'
    ],
    imagePrompt:
      'Professional macro wildlife photograph of a warbling white-eye, tiny olive-green songbird with a distinctive crisp white embroidered ring around its dark eye, pale yellow throat, tiny pointed beak, perched among pink cherry blossoms, full tiny body, soft daylight, ultra sharp focus, blurred floral background',
    gallery: [
      'Wildlife photograph of a tiny warbling white-eye feeding on flower nectar among pink cherry blossoms, white eye ring clearly visible, delicate feet gripping a twig, soft spring light',
      'Extreme close-up of a warbling white-eye head showing the perfect white ring around the black eye, yellow throat and olive green feathers, blurred blossoms background, macro detail'
    ]
  },
  {
    id: 'shrike',
    name: '棕背伯劳',
    alias: '胡不拉',
    latin: 'Lanius schach',
    en: 'Long-tailed Shrike',
    length: '24–28 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['黑色贯眼纹如面罩', '背棕灰色', '腹面棕黄', '喙带钩、尾长黑色'],
    profile:
      '棕背伯劳虽属于鸣禽，却过着猛禽般的生活。它常站在电线、树梢等制高点守望猎物，是田边地头最显眼的"小屠夫"。',
    habitat:
      '疏林、农田、灌丛、公园边缘等开阔且有突出立木的环境。',
    diet:
      '大型昆虫、蜥蜴、蛙、鼠类，甚至其他小鸟。',
    behavior:
      '会把猎物穿挂在荆棘、树刺甚至铁丝上撕食和储存，这种"猎物挂尸"的地方被称为贮食台（larder）。',
    distribution:
      '中国南方、东部广泛分布，向北可至河南、陕西南部。',
    facts: [
      '它的属名 Lanius 在拉丁语里就是"屠夫"的意思。',
      '长着鸣禽的身子，却有猛禽一样的钩喙，能捕猎比自己还重的脊椎动物。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a long-tailed shrike, slim songbird with a bold black bandit mask through the eye, grey-brown mantle, rufous orange-brown flanks and belly, hooked raptor-like beak, very long black tail, perched upright on a farm fence post, side view, full body, daylight, blurred field background, sharp focus',
    gallery: [
      'Wildlife photograph of a long-tailed shrike holding a large green grasshopper in its hooked beak, black eye mask and rufous flanks visible, perched on a farmland branch, documentary daylight',
      'Close-up portrait of a long-tailed shrike showing the black facial mask, fierce eye and hooked raptor-like beak, rufous brown flanks, blurred green background, ultra sharp'
    ]
  },
  {
    id: 'woodpecker',
    name: '大斑啄木鸟',
    alias: '花啄木',
    latin: 'Dendrocopos major',
    en: 'Great Spotted Woodpecker',
    length: '22–25 cm',
    residence: '留鸟',
    status: '国家三有保护动物',
    marks: ['黑白斑驳体色', '肩部大块白斑', '尾下鲜红色', '雄鸟后枕红斑'],
    profile:
      '大斑啄木鸟是典型的"树木医生"，沿树干螺旋式攀爬，用喙快速敲击树皮取食蛀虫，咚咚的敲击声在林子里能传很远。',
    habitat:
      '各类乔木林、城市公园和高大的行道树。',
    diet:
      '树皮缝和木质部里的昆虫、蚂蚁，冬季也吃坚果和松树种子。',
    behavior:
      '在树干上凿洞筑巢；舌头极长，不用时绕在头骨后方，可以伸进虫洞钩出幼虫；坚硬的尾羽撑在树皮上形成三脚架。',
    distribution:
      '中国大部分林区均有分布。',
    facts: [
      '啄木时每秒敲击可达约 20 次，特殊的头骨与舌骨结构能帮它吸收冲击。',
      '它凿出的旧洞会被山雀、鸀等很多洞巢鸟类二次利用，堪称森林里的"房东"。'
    ],
    imagePrompt:
      'Professional wildlife photograph of a great spotted woodpecker clinging vertically to a tree trunk, bold black and white pied plumage with a large white shoulder patch, bright crimson red patch under the tail and small red nape spot, chisel-shaped beak pressed to bark, full body, forest background, daylight, sharp focus',
    gallery: [
      'Wildlife photograph of a great spotted woodpecker drumming on a pine trunk, head blurred with speed, black and white feathers and red undertail patch visible, bark chips flying, forest light',
      'Close-up of a great spotted woodpecker head against rough bark showing the red nape patch, bold black and white face pattern and powerful chisel beak, ultra sharp detail'
    ]
  }
];
