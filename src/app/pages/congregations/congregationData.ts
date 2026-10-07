export interface CongLang {
  en: string;
  uk: string;
}

export interface Congregation {
  slug: string;
  name: CongLang;
  fullName: CongLang;
  location: CongLang;
  address?: CongLang;
  addressIsContactOnly?: boolean;
  phone?: string;
  pastors: CongLang[];
  worship: {
    schedule: CongLang;
    scheduleUnconfirmed?: boolean;
    languages?: CongLang;
    isOnline?: boolean;
    onlineMeetingNote?: CongLang;
    noLivestream?: boolean;
    onlineStreamUrl?: string;
    onlineStreamLabel?: CongLang;
  };
  about?: CongLang;
  ministries?: CongLang[];
  sections?: { title: CongLang; content: CongLang }[];
  cardExcerpt?: CongLang;
  googleMaps?: string;
  social: {
    facebook?: string;
    facebookLabel?: CongLang;
    instagram?: string;
    instagramLabel?: CongLang;
    instagram2?: string;
    instagram2Label?: CongLang;
    youtube?: string;
    youtubeLabel?: CongLang;
  };
  photos?: string[];
  region: "ukraine" | "germany";
}

export const congregations: Congregation[] = [
  // 1. Dzherelo Kyiv
  {
    slug: "dzherelo-kyiv",
    name: { en: "Dzherelo UMC", uk: "ОМЦ «Джерело»" },
    fullName: { en: "Dzherelo United Methodist Church", uk: "Об'єднана Методистська Церква «Джерело»" },
    location: { en: "Kyiv, Ukraine", uk: "Київ, Україна" },
    address: { en: "84 Verkhovynna Street, Kyiv, Ukraine", uk: "вул. Верховинна, 84, м. Київ, Україна" },
    phone: "+380 63 264 51 24",
    pastors: [{ en: "Volodymyr Khabryko", uk: "Володимир Хабрико" }],
    worship: {
      schedule: { en: "Sunday, 11:00 AM", uk: "Неділя, 11:00" },
    },
    about: {
      uk: "Церква «Джерело» — це методистська громада в Києві, яка з 1999 року поєднує євангельське служіння з практичною допомогою людям. Понад чверть століття — молитва, вірність і непохитна присутність у житті міста.",
      en: "Dzherelo Church is a Methodist congregation in Kyiv that, since 1999, has combined evangelical ministry with practical service to people. For more than a quarter of a century — prayer, faithfulness, and an unwavering presence in the life of the city.",
    },
    cardExcerpt: {
      uk: "Громада в Києві з 1999 року — молитва, вірність і практичне служіння людям.",
      en: "A Kyiv congregation since 1999 — prayer, faithfulness, and practical service to people.",
    },
    sections: [
      {
        title: { uk: "Народження громади", en: "The Birth of the Congregation" },
        content: {
          uk: "Наша церква народилася на Трійцю у 1999 році. Це фотографія після першого служіння, і на ній — люди, з яких сьогодні в церкві залишилося лише п'ятеро…\n\nТоді, 27 років тому, нам усе доводилося робити вперше, навчаючись на власних помилках. І це було неймовірно важко, тому що до цього ми ніколи не засновували церков.\n\nСпочатку у нас не було нічого: ні коштів, ні досвіду, ні команди лідерів, ні гурту прославлення. Із церкви, від якої народилася наша громада, просто приходили люди й допомагали нам проводити служіння.\n\nАле минув час, і ми зрозуміли, що далі повинні рухатися самостійно. Відбулися перші хрещення, почали діяти молодіжне служіння та недільна школа. А потім настав перший кризовий період, коли з церкви пішла половина людей… Безсонні ночі, жодної допомоги чи спонсорів і дуже багато молитви…",
          en: "Our church was born on Pentecost in 1999. This photograph was taken after our very first service, and of all the people in it, only five remain in the church today…\n\nBack then, 27 years ago, we had to do everything for the first time, learning from our own mistakes along the way. It was incredibly difficult because we had never planted a church before.\n\nIn the beginning, we had nothing: no finances, no experience, no leadership team, and no worship team. People from the church from which our congregation was born would simply come and help us conduct the services.\n\nBut as time passed, we realized that we had to continue on our own. The first baptisms took place, and our youth ministry and Sunday school began. Then came our first major crisis, when half of the people left the church… Sleepless nights, no outside help or sponsors, and a great deal of prayer…",
        },
      },
      {
        title: { uk: "Нові служіння", en: "New Ministries" },
        content: {
          uk: "Потім розпочався новий етап. З'явилися нові служіння: служіння у в'язницях, служіння дітям із діагнозом ДЦП. Згодом виникла ідея годувати бездомних дітей у підземному переході. Ми робили бутерброди й щовечора несли їх туди, роздаючи дітям.\n\nЗгодом у нас сформувалася сильна молодіжна команда. Влітку ми проводили табори, ставили вистави. Життя громади поступово налагоджувалося. Але одного дня нам не продовжили оренду й повідомили, що приміщення, у якому збиралася церква, продали.",
          en: "Then a new stage began. New ministries appeared: prison ministry and ministry to children diagnosed with cerebral palsy. Later, we had the idea of feeding homeless children in an underground passage. We would make sandwiches and take them there every evening, handing them out to the children.\n\nOver time, a strong youth team was formed. In the summers, we organized camps and staged performances. The life of the congregation gradually became more stable. But one day our lease was not renewed, and we were told that the premises where the church met had been sold.",
        },
      },
      {
        title: { uk: "Роки поневірянь", en: "Years of Moving" },
        content: {
          uk: "І розпочався наступний етап — період наших мандрівок різними приміщеннями… Кожні один-два роки — нова оренда, нові втрати людей. Спочатку ми втратили недільну школу, потім почало занепадати молодіжне служіння. Деякі люди залишали церкву, щиро вважаючи, що з нашою громадою щось не так, і шукали для себе більш правильну та успішну церкву.\n\nАле Бог не залишав нас. Щоразу Він знаходив для нас нове приміщення, коли потрібно було залишати попереднє. Він посилав необхідні кошти, щоб ми могли оплачувати оренду. Він замінив наш старенький церковний автомобіль на новий у той час, коли в країні була криза і про таке можна було лише мріяти, а також приводив до нас нових людей.",
          en: "And so another stage began — a period of moving from one rented location to another… Every one or two years there was a new rental space and another loss of people. First, we lost our Sunday school, and later the youth ministry began to decline. Some people left the church, sincerely believing that something was wrong with our congregation, and searched for what they believed to be a more successful or more suitable church.\n\nBut God did not abandon us. Every time we had to leave one place, He provided another. He provided the finances we needed to pay the rent. He replaced our old church vehicle with a new one at a time when the country was going through a crisis and such a thing seemed almost impossible. And He continued to bring new people into our church.",
        },
      },
      {
        title: { uk: "Обличчя церкви", en: "The Character of the Church" },
        content: {
          uk: "Наша церква й надалі не ставала великою, але вона мала своє обличчя та особливу атмосферу. І коли люди вперше приходили до нас на служіння, вони завжди це відчували. Тому що неможливо не відчути присутність Святого Духа.\n\nМожливо, вся справа в назві? Джерела ніколи не бувають схожими на річки, але вода, витікаючи з них, наповнює річки. Можливо, саме так Бог задумав нашу церкву, назвавши її «Джерелом»?\n\nЗа всі ці роки ми набули досвіду й навчилися не здаватися, що б не відбувалося. Прийшло розуміння, що навіть така маленька церква, як наша, може успішно служити багатьом людям. І ми служили, як могли: своїми коштами, талантами, часом і молитвою.\n\nВ Українській конференції наша церква посідає шосте або сьоме місце за кількістю членів, але вже багато років поспіль займає перше місце за обсягом зібраної десятини та кількістю наданої допомоги.",
          en: "Our church did not become large, but it had its own character and atmosphere. Whenever people attended one of our services for the first time, they could always feel it. Because it is impossible not to sense the presence of the Holy Spirit.\n\nPerhaps it has something to do with the name. A spring never looks like a river, but the water flowing from springs fills the rivers. Perhaps this is how God intended our church to be when He gave it the name \"Dzherelo\" — \"The Spring.\"\n\nOver all these years, we gained experience and learned not to give up, no matter what happened. We came to understand that even a small church like ours could successfully serve many people. And we served in every way we could — with our finances, our talents, our time, and our prayers.\n\nWithin the Ukrainian Conference, our church ranks sixth or seventh in terms of membership, but for many years it has ranked first in the amount of tithes collected and in the amount of assistance provided.",
        },
      },
      {
        title: { uk: "Коли почалася війна", en: "When the War Began" },
        content: {
          uk: "А потім почалася війна…\n\nВійна завжди починається несподівано — з якоїсь, на перший погляд, незначної події.\n\nНікому навіть на думку не могло спасти, що наші сусіди, друзі й практично родичі стануть нашими ворогами та загарбниками. Довгий час ми думали, що це ненадовго, що це якесь непорозуміння, що мине ще кілька днів — і все вирішиться, ми помиримося, і все буде як раніше…\n\nАле як раніше вже не буде.\n\nКоли пролилася перша кров, усі зрозуміли, що це не маленька сварка між братами. Це щось інше — жахливе й незворотне.\n\nКоли приходить спільне лихо, церква не може залишатися осторонь. І наша церква з перших днів зайняла активну позицію.\n\nМи стояли на Майдані, готували їжу, роздавали Біблії, молилися, приносили теплі речі, ліки та продукти. Після роботи багато хто їхав не додому — до телевізора та затишного дивана, — а до намету на Майдані, тому що там була важлива кожна пара рук.\n\nАле навіть тоді ніхто не думав, що Майдан переросте у справжню війну. Що у нас заберуть Крим, а потім — нові території на сході. Ніхто не очікував стільки підлої брехні, якою заповнювали ефір і яку вкладали людям у вуха, обманюючи та залякуючи їх.\n\nЦе була гра без правил, і наша країна, на жаль, не була до цього готова.",
          en: "And then the war began…\n\nWar always begins unexpectedly, often with something that, at first glance, may seem insignificant.\n\nNo one could have imagined that our neighbors, friends, and people who were almost like family would become our enemies and invaders. For a long time, we thought it would not last, that it was some kind of misunderstanding, that in just a few more days everything would be resolved, we would reconcile, and everything would return to the way it had been before…\n\nBut things would never be the same again.\n\nWhen the first blood was shed, everyone understood that this was not a minor quarrel between brothers. It was something else — something terrible and irreversible.\n\nWhen a common tragedy comes, the church cannot remain on the sidelines. From the very first days, our church took an active role.\n\nWe stood on the Maidan, prepared food, distributed Bibles, prayed, and brought warm clothing, medicine, and food. After work, many people did not go home to the television and a comfortable sofa. Instead, they went to the tent on the Maidan, because every pair of helping hands mattered there.\n\nEven then, however, no one imagined that the Maidan would develop into a real war. No one imagined that Crimea would be taken from us, followed by further territories in the east. No one expected such an enormous amount of malicious falsehoods to fill the airwaves and be poured into people's ears, deceiving and frightening them.\n\nIt was a game without rules, and unfortunately, our country was not prepared for it.",
        },
      },
    ],
    social: {},
    region: "ukraine",
  },

  // 2. Hope of the World — Ukrainka
  {
    slug: "hope-of-the-world-ukrainka",
    name: { en: "Hope of the World Church", uk: "Церква «Надія Світу»" },
    fullName: { en: "Hope of the World Church", uk: "Церква «Надія Світу»" },
    location: { en: "Ukrainka, Kyiv Oblast, Ukraine", uk: "Українка, Київська область" },
    address: { en: "2B Pivdenna Street, Ukrainka, Kyiv Oblast, Ukraine", uk: "вул. Південна, 2Б, м. Українка, Київська область, Україна" },
    pastors: [{ en: "Oleksandr Omelchenko", uk: "Олександр Омельченко" }],
    worship: {
      schedule: { en: "Sunday, 11:00 AM", uk: "Неділя, 11:00" },
    },
    about: {
      en: "Hope of the World Church in Ukrainka combines spiritual life with practical service to others. The congregation supports families, internally displaced people and others in need, while developing children's, youth and social ministries.",
      uk: "Церква «Надія Світу» в Українці — це громада, яка поєднує духовне життя з практичним служінням людям. Тут підтримують сім'ї, внутрішньо переміщених осіб, людей, які потребують допомоги, а також розвивають дитяче, молодіжне та соціальне служіння.",
    },
    ministries: [
      { en: "Children's Sunday school", uk: "Недільна школа для дітей" },
      { en: "Bible study gatherings", uk: "Біблійні зустрічі" },
      { en: "Women's prayer gatherings", uk: "Жіночі молитовні зустрічі" },
      { en: "Youth ministry", uk: "Молодіжне служіння" },
      { en: "Music ministry", uk: "Музичне служіння" },
      { en: "Support for internally displaced people", uk: "Допомога внутрішньо переміщеним особам" },
      { en: "Support for families with many children", uk: "Підтримка багатодітних родин" },
      { en: "Support for people with disabilities", uk: "Допомога людям з інвалідністю" },
      { en: "Support for military personnel and wounded service members", uk: "Підтримка військових і поранених захисників" },
      { en: "Spiritual support for people struggling with addiction", uk: "Духовна підтримка людей, які страждають від залежностей" },
      { en: "Social and humanitarian assistance", uk: "Соціальна та гуманітарна допомога" },
    ],
    cardExcerpt: {
      en: "Combines spiritual life with practical service. Supports families, displaced people and those in need.",
      uk: "Поєднує духовне життя з практичним служінням людям.",
    },
    googleMaps: "https://share.google/AIwT6EVn2B7fMaPKc",
    social: {
      facebook: "https://www.facebook.com/share/18vK4LRxFh/?mibextid=wwXIfr",
      facebookLabel: { en: "Facebook", uk: "Facebook" },
    },
    region: "ukraine",
  },

  // 3. St. John's UMC — Lviv
  {
    slug: "st-johns-lviv",
    name: { en: "St. John's UMC", uk: "ОМЦ св. Івана" },
    fullName: { en: "St. John's United Methodist Church in Lviv", uk: "Об'єднана Методистська Церква св. Івана у Львові" },
    location: { en: "Lviv, Lviv Oblast, Ukraine", uk: "Львів, Львівська область" },
    address: {
      en: "5 Henerala Hryhorenka Square, Apt. 17, Lviv, Lviv Oblast, Ukraine",
      uk: "площа Генерала Григоренка, 5, кв. 17, м. Львів, Львівська область, Україна",
    },
    phone: "+380 63 746 31 86",
    pastors: [
      { en: "Volodymyr Prokip", uk: "Володимир Прокіп" },
      { en: "Liubomyr Rudko", uk: "Любомир Рудько" },
    ],
    worship: {
      schedule: { en: "Sunday, 11:00 AM", uk: "Неділя, 11:00" },
      languages: { en: "Ukrainian and English", uk: "Українська та англійська" },
      onlineStreamUrl: "https://www.youtube.com/@youthtojesus3105/streams",
      onlineStreamLabel: { en: "Watch online (YouTube)", uk: "Дивитися онлайн (YouTube)" },
    },
    about: {
      en: "St. John's United Methodist Church in Lviv is a community of people seeking to live out their faith in Jesus Christ and support one another in everyday life. Genuine relationships, shared prayer, Bible study and service to others are important parts of the congregation's life.\n\nEvery Sunday at 11:00 AM, the congregation gathers for preaching, prayer and worship. After the service, there is time for tea, conversation and fellowship. Church life continues throughout the week through Bible gatherings, the Youth to Jesus community, men's groups and shared activities.\n\nHere, faith grows through simple things: caring for others, being willing to help, exploring questions together and spending time with one another. It is a place to get to know God, find support and become part of a community.",
      uk: "Громада Об'єднаної методистської церкви святого Івана у Львові (St. John's UMC Lviv) — це спільнота людей, які прагнуть жити вірою в Ісуса Христа та підтримувати одне одного в повсякденному житті. Тут важливі щирі стосунки, спільна молитва, вивчення Біблії та служіння людям.\n\nЩонеділі об 11:00 громада збирається на богослужіння з проповіддю, молитвою та прославленням. Після служби є час для чаю, розмов і спілкування. Життя церкви продовжується й протягом тижня: у біблійних зустрічах, молодіжній спільноті «Молодь до Ісуса», чоловічих групах та спільних активностях.\n\nЦе громада, де віра зростає через прості речі: уважність до іншого, готовність допомогти, спільний пошук відповідей і час, проведений разом. Місце, де можна знайомитися з Богом, знаходити підтримку та долучатися до життя спільноти.",
    },
    ministries: [
      { en: "Sunday worship", uk: "Недільне богослужіння" },
      { en: "Interdenominational Bible gatherings for young people — Youth to Jesus", uk: "Міжконфесійні біблійні зустрічі для молоді (Молодь до Ісуса)" },
      { en: "Komuna youth ministry", uk: "Молодіжне служіння Комуна" },
      { en: "Women's groups", uk: "Жіночі групи" },
      { en: "Men's groups", uk: "Чоловічі групи" },
      { en: "Prayer gatherings", uk: "Молитовні зібрання" },
      { en: "English conversation club", uk: "Англійський клуб" },
      {
        en: "Hospitality ministry: support for internally displaced people and people facing difficult circumstances",
        uk: "Служіння гостинності (допомога переселенцям і людям, що опинились у складних життєвих обставинах)",
      },
    ],
    cardExcerpt: {
      en: "A community living out faith through worship, youth ministry, Bible study and hospitality.",
      uk: "Спільнота, що живе вірою через богослужіння, молодіжне служіння та гостинність.",
    },
    googleMaps: "https://maps.app.goo.gl/TRxDnAp6H4MXtG5A8",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100064728247702#",
      facebookLabel: { en: "Church Facebook", uk: "Facebook церкви" },
      instagram: "https://www.instagram.com/youthtojesus",
      instagramLabel: { en: "Youth to Jesus Instagram", uk: "Instagram Молодь до Ісуса" },
    },
    region: "ukraine",
  },

  // 4. LightHouse Church — Uzhhorod
  {
    slug: "lighthouse-uzhhorod",
    name: { en: "LightHouse Church", uk: "LightHouse Church" },
    fullName: { en: "LightHouse United Methodist Church", uk: "Об'єднана Методистська Церква LightHouse" },
    location: { en: "Uzhhorod, Zakarpattia Oblast, Ukraine", uk: "Ужгород, Закарпатська область" },
    address: {
      en: "5 Bercheni Street, Uzhhorod, Zakarpattia Oblast, Ukraine",
      uk: "вул. Берчені, 5, м. Ужгород, Закарпатська область, Україна",
    },
    phone: "+380 98 382 91 50",
    pastors: [{ en: "Oleh Starodubets", uk: "Олег Стародубець" }],
    worship: {
      schedule: { en: "Sunday, 11:00 AM", uk: "Неділя, 11:00" },
      languages: { en: "Ukrainian and English", uk: "Українська та англійська" },
      noLivestream: true,
    },
    about: {
      en: "LightHouse Church brings together local residents and people who were forced to move to Uzhhorod because of the war. Its active youth space welcomes many young people, and the congregation combines church life with community, support and service to others.",
      uk: "LightHouse Church — це громада, де зустрічаються місцеві жителі та люди, які були змушені переїхати до Ужгорода через війну. Завдяки активному молодіжному простору тут особливо багато молоді, а громада поєднує церковне життя, спільноту, підтримку та служіння людям.",
    },
    ministries: [
      { en: "Youth ministry", uk: "Молодіжне служіння" },
      { en: "Social outreach", uk: "Соціальне служіння" },
      { en: "Psychological and psychosocial support", uk: "Психологічна та психосоціальна підтримка" },
      { en: "Support for older adults", uk: "Підтримка людей похилого віку" },
      { en: "Ministry to veterans", uk: "Служіння ветеранам" },
      { en: "Youth community space", uk: "Молодіжний простір" },
    ],
    cardExcerpt: {
      en: "Brings together locals and displaced people, with an active youth space and community support.",
      uk: "Громада для місцевих і переміщених, з активним молодіжним простором.",
    },
    googleMaps: "https://maps.app.goo.gl/4eEm2hDaU1rETPAy6?g_st=it",
    social: {
      instagram: "https://www.instagram.com/lighthouse.church.uzhgorod?stkn=am16Nm42anc4ejlk",
      instagramLabel: { en: "Church Instagram", uk: "Instagram церкви" },
      instagram2: "https://www.instagram.com/lighthouse_prostir?stkn=MWxwMjU2dzV6ZWUwNQ==",
      instagram2Label: { en: "LightHouse Youth Space Instagram", uk: "Instagram молодіжного простору LightHouse" },
    },
    region: "ukraine",
  },

  // 5. UMC Uzhhorod — Pidhirna Street
  {
    slug: "umc-uzhhorod",
    name: { en: "UMC, Pidhirna Street", uk: "ОМЦ, вул. Підгірна" },
    fullName: { en: "United Methodist Church in Uzhhorod", uk: "Об'єднана Методистська Церква в Ужгороді" },
    location: { en: "Uzhhorod, Zakarpattia Oblast, Ukraine", uk: "Ужгород, Закарпатська область" },
    address: {
      en: "47 Pidhirna Street, Uzhhorod, Zakarpattia Oblast, Ukraine",
      uk: "вул. Підгірна, 47, м. Ужгород, Закарпатська область, Україна",
    },
    phone: "+380 67 310 52 82",
    pastors: [{ en: "Vasyl Vuksta", uk: "Василь Вукста" }],
    worship: {
      schedule: { en: "Sunday, 10:00 AM", uk: "Неділя, 10:00" },
      languages: { en: "Ukrainian", uk: "Українська" },
      onlineStreamUrl: "https://youtube.com/@umc.uzhhorod?si=mUXLQjA7GNqMQdUM",
      onlineStreamLabel: { en: "Watch online (YouTube)", uk: "Переглянути онлайн (YouTube)" },
    },
    about: {
      en: "Uzhhorod UMC is a Christian congregation where people of all ages can find community, spiritual support and opportunities to serve others. Worship, prayer, Bible study, children's and youth ministries, music and social outreach are important parts of church life.",
      uk: "ОМЦ Ужгород — це християнська громада, де люди різного віку можуть знайти спільноту, духовну підтримку та можливість служити іншим. У житті церкви важливе місце займають богослужіння, молитва, біблійне навчання, робота з дітьми та молоддю, музичне й соціальне служіння.",
    },
    ministries: [
      { en: "Sunday school", uk: "Недільна школа" },
      { en: "Youth ministry", uk: "Молодіжне служіння" },
      { en: "Women's ministry", uk: "Жіноче служіння" },
      { en: "Prayer ministry", uk: "Молитовне служіння" },
      { en: "Music and worship ministry", uk: "Музичне служіння та прославлення" },
      { en: "Social outreach", uk: "Соціальне служіння" },
      { en: "Support for older adults, people experiencing loneliness and people who are ill", uk: "Підтримка літніх, самотніх і хворих людей" },
    ],
    cardExcerpt: {
      en: "A congregation for all ages with worship, Bible study, youth and social ministries.",
      uk: "Громада для всіх: богослужіння, Біблія, молодіжне та соціальне служіння.",
    },
    googleMaps: "https://maps.app.goo.gl/Q9YheidyBnYKXsqh9?g_st=it",
    social: {
      youtube: "https://youtube.com/@umc.uzhhorod?si=mUXLQjA7GNqMQdUM",
      youtubeLabel: { en: "YouTube", uk: "YouTube" },
      instagram: "https://www.instagram.com/umc.uzhhorod?stkn=dnQ5enFheHZ6a2lp",
      instagramLabel: { en: "Instagram", uk: "Instagram" },
    },
    region: "ukraine",
  },

  // 6. UMC Kamianytsia
  {
    slug: "kamianytsia",
    name: { en: "Kamianytsia UMC", uk: "ОМЦ Кам'яниця" },
    fullName: { en: "United Methodist Church in Kamianytsia", uk: "Об'єднана Методистська Церква села Кам'яниця" },
    location: {
      en: "Kamianytsia village, Uzhhorod District, Zakarpattia Oblast, Ukraine",
      uk: "с. Кам'яниця, Ужгородський район, Закарпатська область",
    },
    address: {
      en: "169 Pershotravneva (Syryi Potik) Street, Kamianytsia village, Uzhhorod District, Zakarpattia Oblast, Ukraine",
      uk: "вул. Першотравнева (Сирий Потік), 169, с. Кам'яниця, Ужгородський район, Закарпатська область, Україна",
    },
    phone: "+380 93 804 10 65",
    pastors: [{ en: "Alla Vuksta", uk: "Алла Вукста" }],
    worship: {
      schedule: { en: "Sunday, 11:00 AM", uk: "Неділя, 11:00" },
    },
    about: {
      en: "The United Methodist Church in Kamianytsia is a Christian congregation that is part of The United Methodist Church and serves the village of Kamianytsia in Zakarpattia Oblast, Ukraine.\n\nThe church was founded in the 1930s and continued to exist during the period of state atheism in the Soviet Union. During those years, the congregation met secretly in the homes of church members.\n\nThe congregation has been meeting regularly in its current church building since 1991.\n\nThe church is actively involved in social ministry, supporting people and responding to the needs of the local community. A particular focus of the church's ministry is working with the youth and teenagers of Kamianytsia, creating opportunities for fellowship, learning, and spiritual growth.",
      uk: "Об'єднана методистська церква села Кам'яниця — християнська громада, яка є частиною Об'єднаної методистської церкви та діє в селі Кам'яниця Закарпатської області.\n\nЦерква була заснована у 1930-х роках і продовжувала своє існування в період атеїстичної політики Радянського Союзу. У той час громада збиралася підпільно в домівках прихожан.\n\nУ сучасній церковній будівлі громада регулярно збирається з 1991 року.\n\nЦерква бере активну участь у соціальному служінні, підтримуючи людей та відповідаючи на потреби місцевої громади. Окремим напрямом служіння є робота з молоддю та підлітками села Кам'яниця, створення для них можливостей для спілкування, навчання та духовного розвитку.",
    },
    ministries: [
      { en: "Youth ministry", uk: "Молодіжне служіння" },
      { en: "Ministry for teenagers", uk: "Служіння для підлітків" },
      { en: "Prayer meetings", uk: "Молитовні зустрічі" },
      { en: "Bible study and discussion", uk: "Вивчення та розбір Біблії" },
      { en: "Sunday school", uk: "Недільна школа" },
    ],
    sections: [],
    cardExcerpt: {
      en: "Founded in the 1930s, meeting in the current building since 1991. Active youth, teen and community ministry.",
      uk: "Заснована у 1930-х, у нинішній будівлі з 1991 року. Активне молодіжне та соціальне служіння.",
    },
    googleMaps: "https://maps.app.goo.gl/yucsYdzvTPS4eVJk8?g_st=it",
    social: {
      instagram: "https://www.instagram.com/methodist.church.kam?stkn=eGh5aGNoN2s1YTgy",
      instagramLabel: { en: "Instagram", uk: "Instagram" },
      youtube: "https://youtube.com/@methodist_church_kam?si=7ZnzNylBzaw-5DDU",
      youtubeLabel: { en: "YouTube", uk: "YouTube" },
    },
    region: "ukraine",
  },

  // 7. UMC Perechyn
  {
    slug: "perechyn",
    name: { en: "Perechyn UMC", uk: "ОМЦ Перечин" },
    fullName: { en: "United Methodist Church in Perechyn", uk: "Об'єднана Методистська Церква в Перечині" },
    location: { en: "Perechyn, Zakarpattia Oblast, Ukraine", uk: "Перечин, Закарпатська область" },
    address: {
      en: "31 Chervonoarmiiska Street, Perechyn, Zakarpattia Oblast, Ukraine",
      uk: "вул. Червоноармійська, 31, м. Перечин, Закарпатська область, Україна",
    },
    phone: "+380 95 907 14 78",
    pastors: [{ en: "Petro Korpanets", uk: "Петро Корпанець" }],
    worship: {
      schedule: { en: "Sunday, 10:00 AM", uk: "Неділя, 10:00" },
    },
    about: {
      en: "The United Methodist Church in Perechyn is part of the United Methodist Church in Ukraine. It is a local Christian congregation that brings people together for worship, spiritual growth and service.",
      uk: "Об'єднана Методистська Церква в Перечині є частиною Об'єднаної Методистської Церкви в Україні та місцевою християнською громадою, яка об'єднує людей для спільного поклоніння, духовного зростання та служіння.",
    },
    googleMaps: "https://maps.app.goo.gl/3GbdvHiyqGWVm9xQ9?g_st=it",
    social: {},
    region: "ukraine",
  },

  // 8. Serednie UMC — Ivanivka
  {
    slug: "serednie",
    name: { en: "Serednie UMC", uk: "ОМЦ Середнє" },
    fullName: { en: "Serednie United Methodist Church", uk: "Об'єднана Методистська Церква в Середньому" },
    location: { en: "Ivanivka village, Zakarpattia Oblast, Ukraine", uk: "с. Іванівка, Закарпатська область, Україна" },
    pastors: [{ en: "Volodymyr Surmai", uk: "Володимир Сурмай" }],
    worship: {
      schedule: { en: "Sunday, 11:00 AM", uk: "Неділя, 11:00" },
      languages: { en: "Ukrainian and Romani", uk: "Українська та ромська" },
    },
    about: {
      en: "Serednie United Methodist Church serves the local community in Ivanivka village. The congregation is an important place of spiritual support, fellowship and Christian service for people living in the area.",
      uk: "Об'єднана Методистська Церква в Середньому здійснює служіння в місцевій громаді села Іванівка. Громада є важливим місцем духовної підтримки, спілкування та християнського служіння для людей, які живуть у цій місцевості.",
    },
    social: {},
    region: "ukraine",
  },

  // 9. UMC Kharkiv
  {
    slug: "kharkiv",
    name: { en: "Kharkiv UMC", uk: "ОМЦ Харків" },
    fullName: { en: "United Methodist Church in Kharkiv", uk: "Об'єднана Методистська Церква в Харкові" },
    location: { en: "Kharkiv, Kharkiv Oblast, Ukraine", uk: "Харків, Харківська область" },
    address: {
      en: "37 Taranushenka Street, Kharkiv, Kharkiv Oblast, Ukraine",
      uk: "вул. Таранушенка, 37, м. Харків, Харківська область, Україна",
    },
    addressIsContactOnly: true,
    phone: "+380 66 154 78 30",
    pastors: [{ en: "Dennis Kim", uk: "Денніс Кім" }],
    worship: {
      schedule: { en: "Sunday, 10:00 AM — online", uk: "Неділя, 10:00 — онлайн" },
      isOnline: true,
      onlineMeetingNote: {
        en: "The congregation meets online every Sunday at 10:00 AM. The link to join will be added later.",
        uk: "Зустрічі громади проходять онлайн щонеділі о 10:00. Посилання для приєднання буде додано пізніше.",
      },
    },
    about: {
      en: "The United Methodist Church in Kharkiv continues to sustain congregational life and serve people through available ways of meeting and staying connected online.",
      uk: "Об'єднана Методистська Церква в Харкові продовжує підтримувати життя громади та служіння людям, використовуючи доступні формати спілкування й онлайн-зв'язку.",
    },
    social: {},
    region: "ukraine",
  },

  // 10. UMC Bispingen — Germany
  {
    slug: "bispingen",
    name: { en: "Bispingen UMC", uk: "ОМЦ Біспінген" },
    fullName: { en: "United Methodist Church in Bispingen, Germany", uk: "Об'єднана Методистська Церква в Біспінгені, Німеччина" },
    location: { en: "Bispingen, Germany", uk: "Біспінген, Німеччина" },
    address: {
      en: "Haus Druhwald 1, 29646 Bispingen-Steinbeck (Luhe), Germany",
      uk: "Haus Druhwald 1, 29646 Bispingen-Steinbeck (Luhe), Німеччина",
    },
    phone: "+380 63 843 34 47",
    pastors: [{ en: "Oleksandr Arnaut", uk: "Олександр Арнаут" }],
    worship: {
      schedule: { en: "Sunday, 2:00 PM (14:00), local time", uk: "Неділя, 14:00, місцевий час" },
    },
    googleMaps: "https://maps.app.goo.gl/CTJfjmfbTzm8HSuXA",
    social: {},
    region: "germany",
  },
];
