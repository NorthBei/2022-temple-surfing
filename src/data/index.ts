import groupBy from 'lodash/groupBy';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import uniq from 'lodash/uniq';

export type TempleType = {
  name: string;
  shortName: string;
  description: string;
  couplet: {
    left: string;
    right: string;
  };
  fortunePoems: { sentences: string[]; isTextAlignTop: boolean };
  color: { deep: string; light: string };
  mapLink: string;
  worshipGroups: WorshipGroupType[];
};

export type WorshipGroupType = {
  district: string;
  name: string;
  description: string;
  link?: string;
  events: EventType[];
};

export type EventType = {
  type: string;
  time1: string;
  time2: string;
  time3: string;
  location: string;
  isShowLocationText: boolean;
  name: string;
  price: string;
  isShowApplyButton: boolean;
  applyUrl?: string;
  description: string;
  order: number;
};

// export type WorshipGroupWithRefType = {
//   templeRef: TempleType;
// } & WorshipGroupType;

export type EventWithRef = {
  templeRef: TempleType;
  worshipGroupRef: WorshipGroupType;
} & EventType;

const temples: TempleType[] = [
  // 慈
  {
    name: '慈祐宮',
    shortName: '慈',
    description:
      '新莊慈祐宮（在地人稱媽祖宮）是新莊最古老的廟宇，清朝時面朝當時熱鬧的新莊港渡口，後來港口沒落堤防興建，媽祖娘娘依然溫柔且堅定地坐鎮守護新莊世世代代。',
    couplet: {
      left: '溫柔堅定的力量',
      right: '媽祖・辦桌',
    },
    fortunePoems: {
      sentences: [
        '慈航渡眾生',
        '萬頃波濤欣利濟',
        '祐國安蓬島',
        '千秋俎豆薦馨香',
      ],
      isTextAlignTop: false,
    },
    color: { deep: '#E5573B', light: '#EF867B' },
    mapLink: 'https://goo.gl/maps/wukyQvwPdTQjtcKo6',
    worshipGroups: [
      {
        district: '臺北',
        name: '《移工怎麼都在直播》江婉琦',
        description:
          '江婉琦，新書《移工怎麼都在直播》的作者，曾經為了有趣的田野觀察，擲筊十一個聖杯，成為臺南鹿耳門天后宮媽祖欽點仙女。新書所講的是臺灣印尼移工的戀愛、自我成長、生命煩惱，仙女此次來到慈祐宮，親手作籤詩，為各位在人間擁有煩惱的朋友解籤解惑。',
        link: 'https://www.books.com.tw/products/0010936629',
        events: [
          {
            type: '分享會',
            time1: '15:15-16:00',
            time2: '15:15-16:00',
            time3: '15:15-16:00',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '《移工怎麼都在直播》新書分享會',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '我們說議題，講的其實是一群人的煩惱。\n這是一本我來到臺北移工社群七年的成長紀錄，也是我觀察著移工社群裡，每個人心中那些小小的煩惱之書。愛情的煩惱、沒有自信的煩惱、生活的煩惱，煩惱到我去了屏東請示王爺，這些煩惱，該怎麼辦呢？',
            order: 12,
          },
        ],
      },
      {
        district: '新莊',
        name: '皂書',
        description:
          '以皂為畫筆，書寫地方的故事，勾勒生活的質感。希望將在地方感受的故事，以手工皂的意象，呈現出來。以地方特有圖騰、圖樣轉譯到手工皂上，讓大家透過欣賞手工皂的紋路、花樣，了解地方文化的脈絡。\n',
        link: 'https://www.facebook.com/profile.php?id=100064054984084',
        events: [],
      },
      {
        district: '汐止',
        name: '田間文創工作室',
        description:
          '汐止社后，一個你可能不一定聽過的地名，但卻富含早期漢人移入的文化痕跡及豐富的生態環境。來自汐止社后的田間文創工作室，關注「生態永續」議題與在地「文化保存」，這次透過「古厝變遷保存」的命運桶，和手繪速寫工作坊，邀請你一起來認識「福美寮聚落」的新舊樣貌。',
        link: 'https://www.facebook.com/profile.php?id=100079189023251',
        events: [
          {
            type: '工作坊',
            time1: '13:20｜15:30',
            time2: '13:20-14:00\n15:30-16:10',
            time3: '場次A 13:20-14:00\n場次B 15:30-16:10',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '廟宇手繪工作坊',
            price: '$ 200元／人',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1280#shop-head',
            description:
              '在臺灣廟宇是我們日常的景象，你曾坐下來好好細細端詳過嗎？午後，廟宇內的療癒手繪，跟著老師一起學習取景，看見建築更細緻的美；用水彩顏料，描繪出你心中的慈祐宮，建築速寫，你也可以！（現場還有古厝著色明信片，歡迎大小朋友一起！）',
            order: 5,
          },
        ],
      },
      {
        district: '新莊',
        name: '新莊故事遊藝隊',
        description:
          '遊藝隊是8年前成立的團隊，堅持每月一次的免費走讀，至今已累計了上百場！從新莊街頭走到街尾，希望透過說故事讓人看見新莊的過去、現在和未來。\n走讀這條路上累積了說不完的新莊故事，這次邀請蔡永根阿公糕餅行和同鴻照相館展出文物與老照片，乘坐時光機回到新莊的古今中外。',
        link: 'https://www.facebook.com/roaminginstory',
        events: [
          {
            type: '導覽',
            time1: '11:30-12:10',
            time2: '11:30-12:10',
            time3: '11:30-12:10',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '香客小旅行：走入清代五十六坎，回到人聲鼎沸的街市',
            price: '免費參加',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/checkout/2283/23339?locale=zh-TW',
            description:
              '傳說慈祐宮到武聖廟之間在清代時兩旁共有56間店舖，各種商業的聚集相當的熱鬧，這段路從清代的五十六坎到現代新莊夜市都可說是整條新莊街蛋黃區中的蛋黃區，新莊300多年的發展在街區巷弄中保留了許多不同時期的故事，除了清朝時期留下的廟宇，由廟宇延伸出的傳統美食和娛樂需求；臺灣的械鬥故事不只是書上的一頁，而是活生生的在新莊人的生活中；老街如何變夜市的答案也在手繪招牌巷裡等著說給你聽喔！',
            order: 14,
          },
          {
            type: '導覽',
            time1: '13:30-14:10',
            time2: '13:30-14:10',
            time3: '13:30-14:10',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '香客小旅行：走進新莊後街仔，臨水而居的時代',
            price: '免費參加',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/checkout/2283/23340?locale=zh-TW',
            description:
              '新莊街你可能很熟悉，但你知道新莊後街仔在哪裡嗎？過去後街仔是新莊路商業街的「服務區」，沿河而建，設有船頭行和渡船頭，製飴業跟米業都是當時盛行的產業。\n還未蓋堤坊時，在老一輩新莊人的記憶中沿著大漢溪邊有許多與水相關的娛樂，划龍舟、抓魚抓毛蟹、游泳渡河到對岸，是現代的新莊孩子很難想像的風景。新海橋是新莊第一座聯外橋樑，在還未有橋時，與板橋的來往皆使用渡船為主要交通，民國40年江仔翠女兒嫁到新莊街，對於渡船的記憶就是回家的記憶，這些新莊人點滴的生活故事都在港乾仔邊等著你來認識！',
            order: 15,
          },
          {
            type: '導覽',
            time1: '16:00-16:40',
            time2: '16:00-16:40',
            time3: '16:00-16:40',
            location: '地藏庵',
            isShowLocationText: true,
            name: '香客小旅行：大拜拜與弄過火，新莊慶典朝聖',
            price: '免費參加',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/checkout/2283/23341?locale=zh-TW',
            description:
              '2022年新北市的民俗無形文化資產共有13項，新莊就佔了其中2項，分別為新莊地藏庵的文武大眾爺祭典，俗稱新莊大拜拜；另一個則是新莊保元宮的弄過火儀式。\n這兩間廟宇都是新莊超過200年以上的廟宇，更是在地人的信仰中心，邀請大家來聽聽這兩間廟宇的故事，也認識新莊的無形文化資產。',
            order: 16,
          },
        ],
      },
      {
        district: '三芝',
        name: '三分芝一',
        description:
          '你最念念不忘的料理是什麼呢？是母親的拿手菜還是家鄉小吃的某一味？每道料理背後的故事源自於不同生命經驗的積累，來自三芝的「三分芝一」團隊，由社區長輩和刺繡藝術家共同紀錄地方飲食的生活記憶。邀請你來一場紙刺繡體驗，用三分之一的時間療癒自己，帶走屬於你的第一道手路菜刺繡明信片！',
        link: '',
        events: [
          {
            type: '工作坊',
            time1: '11:00｜15:30',
            time2: '11:00-12:00\n15:30-16:30',
            time3: '場次A 11:00-12:00\n場次B 15:30-16:30',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '手路菜刺繡體驗',
            price: '$ 180元／人',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1281#shop-head',
            description:
              '適合零基礎又想體驗手工刺繡的朋友們參加！學習如何在紙張上創作刺繡，並搭配水性色鉛筆的繪畫，創作出一道屬於你的手路菜，一張專屬於你的在地料理名片！',
            order: 4,
          },
        ],
      },
      {
        district: '新莊',
        name: '新莊社區大學',
        description:
          '新莊社區大學今年度走進新莊泰山地區公有市場，用文字與影像紀錄在地故事，為新莊第一公有市場的不同世代變遷拍攝紀錄片；也透過獨立小誌製作，留下公有市場奇特多元的面貌。\n本次設攤由獨立小誌延伸出市場的好味道，將記憶中的美味化成食譜，邀請民眾一起組合出關鍵食材，還有遊戲挑戰成功的小禮物喔。',
        link: 'https://www.facebook.com/encounter.org.tw',
        events: [],
      },
      {
        district: '新店',
        name: '陶子多元文化傳承藝術團',
        description:
          '來自中國大陸的陶子老師，為了相同讓遠嫁來臺的姐妹們一解鄉愁而創辦越劇藝術團。為促進越劇與更多臺灣文化的交流，堅持每年與臺灣原住民交流不同地理背景下的音樂文化。\n越劇曲調溫婉柔美，像是一條涓涓細流沁透心靈，這次將帶來越劇「追魚」中鯉魚仙子勇敢追求人間愛情的故事，一起傳遞愛與溫暖！"',
        link: 'https://www.facebook.com/profile.php?id=100077713812372',
        events: [
          {
            type: '表演',
            time1: '14:15-14:30',
            time2: '14:15-14:30',
            time3: '14:15-14:30',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '越劇演出：追魚·觀燈',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '越劇，中國主要戲曲劇種之一，這次陶子多元文化傳承藝術團將帶來越劇「追魚」中的「觀燈」片段，在啟動儀式上分享劇中女主角鯉魚仙子來到人間勇敢追愛，歡喜熱鬧！',
            order: 20,
          },
        ],
      },
      {
        district: '三芝',
        name: '三芝國小舞獅隊',
        description:
          '三芝國小舞獅隊成立於民國95年3月，由巫祥興主任倡導成立，聘請國際級教練楊天德教練進行指導。今年參與關渡宮聖母盃、新北冠軍盃成績亮眼。',
        link: '',
        events: [
          {
            type: '表演',
            time1: '14:00-14:15',
            time2: '14:00-14:15',
            time3: '14:00-14:15',
            location: '慈祐宮',
            isShowLocationText: false,
            name: '三芝國小舞獅表演',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '三芝國小舞獅隊為傳統南獅（又稱廣東獅、醒獅）。透過現場敲打的鼓鈸聲及獅子眼睛、耳朵、嘴巴及尾巴等可動機關的操作，帶來活潑生動的演出並給現場增添熱鬧氣氛，今天為大家帶來的套路為「祥獅獻瑞」，透過雙獅的互動及布條的展現，預祝這次的活動圓滿成功。',
            order: 19,
          },
        ],
      },
    ],
  },
  // 廣
  {
    name: '廣福宮',
    shortName: '廣',
    description:
      '廣福宮，北臺灣歷史最悠久的三山國王廟。隨著潮州客家人移民來臺，也把家鄉的三山國王廟的「爐香」攜帶過來，祈求庇佑。從1936年後廟內就無大整建，建築保留完整，現為國定古蹟。',
    couplet: {
      left: '開枝散葉的力量',
      right: '三山國王・畫攤',
    },
    fortunePoems: {
      sentences: [
        '國勢縱難圖',
        '匡輔有心殊不死',
        '王家本能艾',
        '貞忠大節自如生',
      ],
      isTextAlignTop: false,
    },
    color: { deep: '#48A4D6', light: '#94D8F0' },
    mapLink: 'https://goo.gl/maps/GcEqapVLYVaDxU2r8',
    worshipGroups: [
      {
        district: '平溪',
        name: '菁桐社區發展協會',
        description:
          '我們是來自平溪的菁桐社區，有一群外表看似平凡的阿嬤，其實屢次幫助平溪奪下多項的Taiwan NO.1！她們被稱為「礦男媳婦」，究竟他們有什麼神祕力量呢？讓我們一個輕鬆有趣的虛擬實境解謎，一邊遊覽菁桐的景點，一起探尋礦男媳婦的身世之謎吧！',
        link: 'https://www.youtube.com/channel/UC5rxj5LdtaOaZRMqLOOsgzw',
        events: [],
      },
      {
        district: '新店',
        name: '張廖客家人',
        description:
          '你知道有一群人，生的時候姓廖，死後改姓張？他們就是「張廖客」！\n關於廖家有很多長輩留下來要遵循的傳統習俗——生廖死張、吃不吃雞頭、閩南話的客家人…等等。\n這次將在廣福宮展出張廖客家人的訪談人物似顏繪，從家族族譜上一個一個名字變成一張張臉龐，讓我們一起來聊聊家族故事！',
        link: 'https://www.facebook.com/ZhangLiaoFamily',
        events: [],
      },
      {
        district: '新莊',
        name: '遊境感知所',
        description:
          '團隊來自新北市新莊，擅長以策展、遊戲、課程體驗等媒介，轉譯社區歷史文化。議題式桌遊〈圳邊拍賣會〉以塭仔圳的歷史變遷為背景，與玩家共同討論城市與居住的未來想像。',
        link: 'https://www.facebook.com/you.jing.studio',
        events: [
          {
            type: '互動遊戲',
            time1: '11:00｜15:00',
            time2: '11:00-12:30\n15:00-16:30（親子場）',
            time3: '場次A 11:00-12:30\n場次B 15:00-16:30（親子場）',
            location: '廣福宮',
            isShowLocationText: false,
            name: '想想塭仔圳：圳邊拍賣會桌遊',
            price: '$ 88元／人',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1278#shop-head',
            description:
              '都市更新計畫啟動那一刻，居民被迫搬離熟悉的家園，緊握手中僅有的財產資源，能帶走的只有求生意志和決心！\n投身勝者為王的資本市場競爭，想盡辦法在城市的另一頭重新安頓，最後，誰能安然無恙、全身而退？\n適合孩童年齡：5歲以上，有加減運算能力。',
            order: 8,
          },
          {
            type: '互動遊戲',
            time1: '15:00後，隨到隨玩',
            time2: '15:00後，隨到隨玩',
            time3: '15:00後，隨到隨玩',
            location: '廣福宮',
            isShowLocationText: false,
            name: '新莊解夢之旅：河神踅眠夢',
            price: '$ 168元／人',
            isShowApplyButton: true,
            description:
              '新莊大漢溪自清朝以來住著神出鬼沒的河神，她已接近300歲，表達自我的方式非常獨特，受到人們愛戴，喜歡與人交流的河神經常傾聽大家的心聲，人們可以默唸咒語召喚河神，請祂幫忙占卜解夢，解開夢境的詩籤散落在老街廟宇，夢遊者們需跟隨河神的聲音指引，找到自己的解答。',
            order: 9,
          },
        ],
      },
      {
        district: '澎湖',
        name: '邊畫畫邊旅居的 Malaika',
        description:
          '邊畫肖像邊旅行，柔安靠這個方式旅行了四年，到了世界各地歐亞非三洲的24個國家，回臺灣後出版了「我沒錢 所以邊畫畫邊旅行」一書。\n在畫肖像的過程中和被繪者聊天，在交流中感受對方的狀態和情緒，最後在肖像完成時，寫下一句祝福的話送給對方，希望他不只是一張肖像畫，更是一個祝福的禮物。',
        link: 'https://www.facebook.com/traveler.painter',
        events: [],
      },
    ],
  },
  // 文
  {
    name: '文昌祠',
    shortName: '文',
    description:
      '新莊文昌祠除了祭祀，在日本時代曾作為公學校校舍、辦理漢文補習教育，也曾於民國六十年為鎮公所選為托兒所場地。現今文昌祠恢復祭祀，是新莊學子們考前必來之地。',
    couplet: {
      left: '見多識廣的力量',
      right: '文昌帝君・書攤',
    },
    fortunePoems: {
      sentences: [
        '新人不識舊人哭',
        '莊上老者已千古',
        '鎮中青少皆未識',
        '上下人兒亦不知',
      ],
      isTextAlignTop: true,
    },
    color: { deep: '#FF7F00', light: '#F6B37A' },
    mapLink: 'https://goo.gl/maps/keWNUHkib433BuQG9',
    worshipGroups: [
      {
        district: '新莊',
        name: '新莊騷',
        description:
          '新莊不悶，其實有點騷！新北市新莊聚集著來自四面八方不同文化背景族群的熔爐，同時卻也保留著許多歷久彌新的文化足跡。\n《新莊騷》由一群看得見新莊『騷』在哪裡的創意團隊，透過發行《新莊騷》在地刊物分享各式各樣座落在新莊區域的美好記錄與探索。',
        link: 'https://www.facebook.com/XinzhuangSao',
        events: [
          {
            type: '分享會',
            time1: '15:30-17:00',
            time2: '15:30-17:00',
            time3: '15:30-17:00',
            location: '文昌祠',
            isShowLocationText: false,
            name: '跟著新莊騷起來：地方品牌的編輯與策動',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '「新莊不悶，其實有點騷！」新莊騷以地方刊物形式創辦近三年，不只獨立發行雜誌，還在舉辦主題講座、街區導覽、文史調查、培力工作坊和音樂市集等。這次分享會將會告訴大家，雖然繁華城市沒有流失人口，卻遺失了人心？當刊物不只是刊物，能有多少可能性？新莊騷是如何探索主題、編輯地方，以及如何開始策動一座城市，就讓我們來聆聽充滿心路歷程的實務經驗吧！ ',
            order: 13,
          },
        ],
      },
      {
        district: '新莊',
        name: '元益蔘藥行',
        description:
          '你喝過有中藥香的咖啡嗎？歡迎來到元益蔘藥行一探究竟。\n元益蔘藥行用咖啡香搭起人們與中藥房的連結，自己烘焙的咖啡豆再加上品質良好的中藥材，費時費工卻又耐人尋味。\n臺灣職人精神信手捻來結合千年漢藥歷史與百年咖啡文化，為新莊帶來最美好的傳統與創新。',
        link: 'https://yuanibaolai.weebly.com/',
        events: [],
      },
      {
        district: '新莊',
        name: '貓頭鷹圖書館',
        description:
          '貓頭鷹圖書館由新莊在地耕耘圖書文化十多年的劉戀文化基金會支持而成，是屬於新莊區大小貓頭鷹的親子圖書館，也是屬於所有人的全齡學習交流空間。\n這次活動我們將派出貓頭鷹行動故事廚房，邀請大家一起來聽聽故事、看看繪本，也跟我們聊聊關於親子共讀的大小事和一間不一樣的圖書館的所有可能。',
        link: 'https://www.facebook.com/owllibrary.org/',
        events: [
          {
            type: '分享會',
            time1: '11:15｜13:00｜14:30｜16:00',
            time2: '11:15-12:00，13:00-13:45\n14:30-15:15，16:00-16:45',
            time3:
              '場次A 11:15-12:00\n場次B 13:00-13:45\n場次C 14:30-15:15\n場次D 16:00-16:45',
            location: '文昌祠',
            isShowLocationText: false,
            name: '貓頭鷹故事湯',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '貓頭鷹故事主廚這次來文昌祠進香了！來自各國的精彩繪本，每個場次貓頭鷹故事主廚都會為大家帶來精選的故事，來體驗貓頭鷹故事湯的魅力、爸爸媽媽與小孩體驗共讀的親子時光。',
            order: 10,
          },
        ],
      },
      {
        district: '新莊',
        name: '辰星大飯店',
        description:
          '外公就是來自新莊慈祐宮前的攤位起家，新莊第三代人回來啦！\n辰星大飯店為為充滿鄉土關懷的油飯品牌，帶大家用食材認識這片土地，精選臺灣各地好食材融入其中，為古早味食物帶來不一樣的感受。這次進香，只要與攤主有互動回答問題，還會有限定的禮物贈送喔！數量有限，送完為主！',
        link: 'https://www.instagram.com/cx_riceshoppe/',
        events: [],
      },
      {
        district: '臺北',
        name: '街頭迷你偶戲《盒盒盒》',
        description:
          '由偶戲表演者—好好小姐所創作的《盒盒盒》源起於2021年無獨有偶工作室劇團「偶戲培養皿」工作坊。以窺探洞口的好奇心，吸引觀眾主動進入迷你盒中的世界。每場演出時間為三分鐘，單場觀眾為一人，造就了不受他人打擾的偶戲觀賞體驗，精緻且親密。',
        link: 'https://www.facebook.com/MissHaoHao',
        events: [],
      },
    ],
  },
  // 藏
  {
    name: '地藏庵',
    shortName: '藏',
    description:
      '地藏庵，又名大眾廟。起初，人們於此地祭祀因病或械鬥過世的文武大眾爺，而後引入地藏王菩薩為主神，改名地藏庵。有名的新莊大拜拜、官將首就是出於地藏庵！',
    couplet: {
      left: '挖掘內在的力量',
      right: '地藏王菩薩・伸展臺',
    },
    fortunePoems: {
      sentences: ['地道騰光', '浩劫幾經磨煉', '藏身以恕', '斯人久喻慈悲'],
      isTextAlignTop: false,
    },
    color: { deep: '#B25ED5', light: '#E8ABDD' },

    mapLink: 'https://goo.gl/maps/atEmKRxJQ5pJtMnn6',
    worshipGroups: [
      {
        district: '新莊',
        name: '新興糊紙文化',
        description:
          '「親愛的，我把紙紮人帶到法國羅浮宮！」\n《新興糊紙文化》祖傳四代至今120餘年，延伸「新興糊紙店」的美學脈絡，致力保留紙紮文化深度並融合創新與時代接軌，成為首位代表臺灣糊紙工藝受邀至法國展出的團隊組織，替紙紮工藝開創文化新格局。透過傳統糊紙工藝技法，延伸多元化課程及工作坊教學，以達糊紙文化的理念推廣及知識傳承。',
        link: 'https://www.facebook.com/hsinhsinjosspaper \n',
        events: [
          {
            type: '工作坊',
            time1: '10:30｜15:00',
            time2: '10:30-12:30\n15:00-17:00',
            time3: '場次A 10:30-12:30\n場次B 15:00-17:00',
            location: '地藏庵',
            isShowLocationText: false,
            name: '飛聯剪紙：福符飛飛好彩頭',
            price: '$ 200元／人',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1284#shop-head',
            description:
              '剪出一個屬於你的超美祈福之物！\n喜慶的過年、廟宇慶典、農曆七月的普渡，都會看到長條狀的「飛聯」，這些懸掛的彩紙也稱作「福符」，上面的字樣及圖樣都有著祈福、招祥、喜慶的意味。這次新興紙糊文化以「剪紙」的技藝呈現，對稱剪的吉祥花樣，讓你帶走雙雙對對的好運氣！',
            order: 1,
          },
        ],
      },
      {
        district: '新莊',
        name: '官將BOY',
        description:
          '畢業於輔仁大學織品系的王翊軒，這次在地藏庵展覽了其中系列作品「官將BOYII」，其作品創作靈感來自臺灣傳統的八家將臉譜，王翊軒的標誌性設計是將臺灣傳統廟宇文化與現代時裝相融合，這次與地藏庵完美的結合，成為一場精彩的靜態服裝秀。',
        link: 'https://m.facebook.com/guanjianboy1017/',
        events: [
          {
            type: '靜態展',
            time1: '11:00-17:00',
            time2: '11:00-17:00',
            time3: '11:00-17:00',
            location: '地藏庵',
            isShowLocationText: false,
            name: '服飾展：官將BOY',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '畢業於輔仁大學織品系的王翊軒，這次在地藏庵展覽了其中系列作品「官將BOYII」，其作品創作靈感來自臺灣傳統的八家將臉譜，王翊軒的標誌性設計是將臺灣傳統廟宇文化與現代時裝相融合，這次與地藏庵完美的結合，成為一場精彩的靜態服裝秀。',
            order: 23,
          },
        ],
      },
      {
        district: '臺北',
        name: '將容文創',
        description:
          '臉譜是讓凡人神化的一個媒介，也是代表八家將或官將首身份角色的重要元素。常在廟會中看到扮將者跳將的精彩片段。你對臉譜的認識有多少？臉上的那些紋路都代表了什麼意思？畫臉的感覺又是什麼？將容文創在這次活動中舉辦完整體驗工作坊外，其他時段也都有畫臉體驗喔！',
        link: 'https://www.facebook.com/JIANGRONG2016/',
        events: [
          {
            type: '工作坊',
            time1: '11:00｜15:00',
            time2: '11:00-12:00\n15:00-16:00',
            time3: '場次A 11:00-12:00\n場次B 15:00-16:00',
            location: '地藏庵',
            isShowLocationText: false,
            name: '懂懂差～家將畫臉及服飾體驗',
            price: '$ 300元／人',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1285#shop-head',
            description:
              '將容文創這次將帶來完整的家將畫臉及扮裝體驗！在地藏庵如此神秘又蘊含豐富文化之地，邀請你一起來共襄盛舉。跳脫以往的廟會旁觀者，我們會帶領大家透過被畫臉及畫他人的臉，感受面師這項工作的神聖及有趣之處，最後穿上家將服裝，扮演一位帥氣的將並攝影留念！',
            order: 3,
          },
        ],
      },
    ],
  },
  // 元
  {
    name: '保元宮',
    shortName: '元',
    description:
      '保元宮（在地人稱王爺廟或太子爺廟），祀奉池府王爺及哪吒太子。農曆9月9日太子爺聖誕，舉行「弄過火」——信眾抬著神轎赤腳走過炭火堆，被指定為新北市無形文化資產。',
    couplet: {
      left: '赤子之心的力量',
      right: '三太子・遊戲場',
    },
    fortunePoems: {
      sentences: [
        '元黃開天地',
        '滋生萬物盡沾恩',
        '帥功興帝業',
        '民親禮樂富周仁',
      ],
      isTextAlignTop: false,
    },
    color: { deep: '#F4AB19', light: '#FFD464' },
    mapLink: 'https://goo.gl/maps/siXFBvvZ3W44FisF9',
    worshipGroups: [
      {
        district: '三芝',
        name: '解析度設計',
        description:
          '三芝不僅只有筊白筍及櫻花，更有著一群認真生活、創造許多文化資產的人們在社區中默默耕耘著。把在地既有的生活方式作為基底，以「三芝的文化推廣」和「五感教育、藝術陪伴」兩大方向，進而發展新型態的全齡社造概念，建立起地方認同感。這次來進香除了在攤位上與民眾分享好玩的拼貼畫，也帶來巨大的真人象棋，讓藝術與互動完美的結合！',
        link: 'https://www.facebook.com/Sanchih.corner/',
        events: [
          {
            type: '工作坊',
            time1: '11:00｜13:00｜15:30',
            time2: '11:00-11:40\n13:00-13:40\n15:30-16:10',
            time3: '場次A 11:00-11:40\n場次B 13:00-13:40\n場次C 15:30-16:10',
            location: '保元宮',
            isShowLocationText: false,
            name: '新年新氣象—絹印與剪花手作體驗',
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1283#shop-head',
            price: '$ 150元／人',
            isShowApplyButton: true,
            description:
              '新的一年要來啦！給生活一點儀式感，剪出自己接下來新的一年，透過剪紙和絹印，印出你的下一個新年的模樣與色彩！',
            order: 2,
          },
        ],
      },
      {
        district: '新北',
        name: '小丑氣球：香蕉先生',
        description:
          '香蕉先生黃譯民曾以街頭賣藝環遊世界，擅長運用默劇、魔術手法，結合腹語與氣球創造出有趣好玩的表演，來保元宮逛逛，他將現身帶給遊戲場更多驚喜！',
        events: [
          {
            type: '表演',
            time1: '11:00-17:00',
            time2: '11:00-17:00',
            time3: '11:00-17:00',
            location: '保元宮',
            isShowLocationText: false,
            name: '小丑氣球',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '香蕉先生黃譯民曾以街頭賣藝環遊世界，擅長運用默劇、魔術手法，結合腹語與氣球創造出有趣好玩的表演，來保元宮逛逛，他將現身帶給遊戲場更多驚喜！',
            order: 17,
          },
        ],
      },
      {
        district: '三芝',
        name: '山海盃象棋大戰',
        description:
          '真人玩的巨大象棋大戰來啦！在依山傍海的三芝，福成社區的長輩和孩子還有解析度的團隊一起製作了「浮球巨型象棋」，應用三芝海邊常見的浮球材料，不折不扣是山海中的象棋！這次從三芝帶來新莊，在保元宮展開真人象棋大戰！加入你的戰隊，保護你的將軍、你的元帥，贏得一盤這輩子第一次的真人象棋大戰！最終優隊伍將可以獲得神小秘禮物唷！',
        link: 'https://www.facebook.com/Sanchih.corner/',
        events: [
          {
            type: '互動遊戲',
            time1: '11:30｜15:00',
            time2: '11:30-12:00\n15:00-15:30',
            time3: '場次A 11:30-12:00\n場次B 15:00-15:30',
            location: '保元宮',
            isShowLocationText: false,
            name: '山海盃象棋大戰',
            price: '免費參加',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1282#shop-head',
            description:
              '保元宮展開真人象棋組隊大戰，直接加入紅隊或黑隊，保護你的將軍你的帥！加入你的小隊，贏得一盤這輩子第一次的真人象棋大戰！快來加入我們！',
            order: 7,
          },
        ],
      },
      {
        district: '新北',
        name: '捏麵人：陳秀忄用',
        description:
          '陳秀忄用老師是一位經驗豐富、參與過大小活動與比賽的捏麵老師，精湛的手藝，生動好玩的教學，讓你看到不一樣的捏麵人世界！',
        events: [],
      },
      {
        district: '新北',
        name: '花式扯鈴：郭建廷',
        description:
          '郭建廷，扯鈴玩了10年！走訪過許多國家，也登上過臺灣大大小小的舞台，每當在表演時，總希望可以散播更多快樂能量給現場的觀眾，就讓我們也一起來現場感受滿滿的快樂能量吧！',
        events: [
          {
            type: '表演',
            time1: '11:00-15:00',
            time2: '11:00-15:00',
            time3: '11:00-15:00',
            location: '保元宮',
            isShowLocationText: false,
            name: '花式扯鈴',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '郭建廷，扯鈴玩了10年！走訪過許多國家，也登上過臺灣大大小小的舞台，每當在表演時，總希望可以散播更多快樂能量給現場的觀眾，就讓我們也一起來現場感受滿滿的快樂能量吧！',
            order: 18,
          },
        ],
      },
      {
        district: '新北',
        name: '吉他歌唱：黃茵琪',
        description:
          '黃茵琪，獨立音樂創作歌手，有著忠於自己認真生活、不輕易放棄初衷的想法！2012年因為第一首創作展開了創作旅途。現場演出總能把聽眾逗得又哭又笑，擁有療癒的歌聲，陪伴他們走過每個失落的夜晚，來現場聽聽他真誠的演出吧！',
        events: [
          {
            type: '表演',
            time1: '15:00-17:00',
            time2: '15:00-17:00',
            time3: '15:00-17:00',
            location: '保元宮',
            isShowLocationText: false,
            name: '吉他歌唱：黃茵琪',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '黃茵琪，獨立音樂創作歌手，有著忠於自己認真生活、不輕易放棄初衷的想法！2012年因為第一首創作展開了創作旅途。現場演出總能把聽眾逗得又哭又笑，擁有療癒的歌聲，陪伴他們走過每個失落的夜晚，來現場聽聽他真誠的演出吧！',
            order: 21,
          },
        ],
      },
    ],
  },
  // 武
  {
    name: '武聖廟',
    shortName: '武',
    description:
      '新莊武聖廟（在地人稱關帝廟）建於乾隆廿五年（1760年），當時新莊商業鼎盛，相傳這裡是臺北地區最早的關帝廟。關公以勇武著稱，進香團也將傳承此精神。',
    couplet: {
      left: '勇敢面對的力量',
      right: '關公・算命攤',
    },
    fortunePoems: {
      sentences: ['武而文', '志讀春秋闡大義', '聖乃神', '氣吞吳魏秉精忠'],
      isTextAlignTop: false,
    },
    color: { deep: '#1E1E1E', light: '#999999' },
    mapLink: 'https://goo.gl/maps/KuC7y64n6mzKnb79A',
    worshipGroups: [
      {
        district: '新莊',
        name: '塭仔圳在地服務與發展協會',
        description:
          '緣起於新莊和泰山地區的塭仔圳在地居民、工廠業主、青年之間的相遇。如今我們的社區家園成功保留，但工廠因為重劃已經搬離，成立協會後也持續關心地方空間規劃、參與公共議題。這次來武聖廟駐點進香，歡迎來認識塭仔圳老社區、黑手職人、地景變遷的各種故事！',
        link: 'https://www.facebook.com/wenzaizun/',
        events: [],
      },
      {
        district: '新莊',
        name: '爛泥發芽',
        description:
          '2018年最野生的音樂祭——爛泥發芽發源在新莊工業區登場，有別於官方音樂祭，位置邊緣體制外、充滿野性的爛泥發芽，一直是獨特的存在。如何在新莊開始，如何繼續在新莊茁壯，爛泥發芽這次回來新莊，一同來進香！現場有爛泥發芽的各種周邊，還有新莊長大的創辦人在場與各位分享爛泥是如何發芽！',
        link: 'https://www.facebook.com/BreakingMudFest/',
        events: [],
      },
      {
        district: '新店',
        name: '暗坑文化工作室',
        description:
          '那一塊塊古墓，是在為我們訴說著曾經在這裡生活的人與事。\n來自暗坑的柏瑋，從自我尋根的故事帶出暗坑社造計畫內容，攤位提供拓印體驗，也將帶來祖先溯源、信仰議題、以及墓葬文化等三大主題的分享會短講。更值得一提的是，本次活動場域新莊老街那邊原本也曾是墓園。',
        link: 'https://www.facebook.com/AmKhenn',
        events: [
          {
            type: '分享會',
            time1: '13:00-13:40',
            time2: '13:00-13:40',
            time3: '13:00-13:40',
            location: '武聖廟',
            isShowLocationText: false,
            name: '你從哪裡來？——墓葬文化分享會',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '「有一天，我看到我阿公的名字在廟裡面，為什麼啊....」暗坑的柏瑋從自己的生命故事發現，原來，一座墳墓，一個墓碑，多的是你不知道的事！透過這次的故事分享會，一起來了解自己的祖先溯源、認識地方信仰議題、以及墓葬文化。',
            order: 11,
          },
        ],
      },
    ],
  },
  // 潮
  {
    name: '潮江寺',
    shortName: '潮',
    description:
      '潮江寺建築小巧獨具風格，不同於傳統廟宇建築。二樓為清朝末年泉漳械鬥，新莊人為防守對岸板橋人所搭建。現今祭祀土地公及觀音菩薩，藏身於清幽安靜的碧江街上。',
    couplet: {
      left: '安靜聆聽的力量',
      right: '觀音菩薩・電臺',
    },
    fortunePoems: {
      sentences: ['潮音振耳', '江水澄心', '福由天降', '德在人修'],
      isTextAlignTop: true,
    },
    color: { deep: '#0043C9', light: '#7599CC' },
    mapLink: 'https://goo.gl/maps/gt3mGhYL13h3ns346',
    worshipGroups: [
      {
        district: '新莊',
        name: '新莊街仔聲',
        description:
          '「新莊街仔聲Podcast」為營造穿梭街巷的氛圍和移動感，台呼融合冰淇淋叭噗聲和廣播喇叭效果。此次在潮江寺作為首次實體展邀請民眾來體驗，潮江寺在清朝時曾作為瞭望台，固守大漢溪畔的新莊港口，傳說二樓祭拜的觀音石像是林口人蔡盛在溪邊撿拾的，見證新莊與大漢溪緊密相依的歷史風華。「潮音街仔聲」帶你鑽進聽覺的時空隧道，重新回味三百年新莊歷史故事。',
        link: 'https://open.firstory.me/user/xinzhuangvoice/platforms',
        events: [
          {
            type: '靜態展',
            time1: '11:00-17:00',
            time2: '11:00-17:00',
            time3: '11:00-17:00',
            location: '潮江寺',
            isShowLocationText: false,
            name: '潮音街仔聲',
            price: '免費參加',
            isShowApplyButton: false,
            description:
              '「新莊街仔聲Podcast」為營造穿梭街巷的氛圍和移動感，台呼融合冰淇淋叭噗聲和廣播喇叭效果。此次在潮江寺作為首次實體展邀請民眾來體驗，潮江寺在清朝時曾作為瞭望台，固守大漢溪畔的新莊港口，傳說二樓祭拜的觀音石像是林口人蔡盛在溪邊撿拾的，見證新莊與大漢溪緊密相依的歷史風華。「潮音街仔聲」帶你鑽進聽覺的時空隧道，重新回味三百年新莊歷史故事。',
            order: 22,
          },
        ],
      },
      {
        district: '新莊',
        name: '聲音旅人，蕭芸安',
        description:
          '「在採集世界聲景的旅途中，聆聽內在的聲音。」\n音樂創作人、聲景採集人、聲音藝術家。\n近年於臺灣各地，帶領大眾以「聆聽」培養深刻的感知與覺察，發展出使當代人身心轉化的實踐方法。',
        link: 'https://www.facebook.com/soundtraveler.yunanhsiao',
        events: [
          {
            type: '工作坊',
            time1: '15:00｜16:00',
            time2: '15:00-15:30\n16:00-16:30',
            time3: '場次A 15:00-15:30\n場次B 16:00-16:30',
            location: '潮江寺',
            isShowLocationText: false,
            name: '潮江觀音．聲音之旅：內外覺察的漫步走聽',
            price: '$ 100元／人',
            isShowApplyButton: true,
            applyUrl:
              'https://templesurfing.backme.tw/shops/2283?locale=zh-TW&reward_cid=1279#shop-head',
            description:
              '觀，是向外觀察，也可以是向內觀看，若聆聽作為一種觀照的方式，我們是否能藉由「聽見」外在環境的聲音「觀」進自己內在的風景？在潮江觀音寺前，邀請你成為聆聽的旅者，漫步走聽，「聽見」路上的風景，觀外在的音，也觀內在的音。\n（照片提供：指南宮、蕭芸安）',
            order: 6,
          },
        ],
      },
    ],
  },
];

const events: EventWithRef[] = [];

temples.forEach((temple) => {
  temple.worshipGroups.forEach((worshipGroup) => {
    // worshipGroup.templeRef = temple;

    worshipGroup.events.forEach((event) => {
      // const eventWithRef = {
      //   item: event,
      //   templeRef: temple,
      //   worshipGroupRef: worshipGroup,
      // };
      events.push({
        ...event,
        templeRef: temple,
        worshipGroupRef: worshipGroup,
      });
    });
  });
});

events.sort((event1, event2) => event1.order - event2.order);

export const eventTypes = uniq(map(events, 'type'));

export const eventsTypeKeyObj: Record<string, EventWithRef[]> = groupBy(
  events,
  'type'
);

export const templeNameKeyObj: Record<string, TempleType> = keyBy(
  temples,
  'name'
);

export const isEventClose = true;

export default temples;
