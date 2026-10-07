import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, BookOpen, Users, Church, ArrowRight } from 'lucide-react';

// ── Inline bilingual content ──────────────────────────────────────────────────

const content = {
  uk: {
    hero: {
      title: 'Про нас',
      subtitle: 'Об\'єднані у вірі, служимо з любов\'ю',
    },
    whoWeAre: {
      heading: 'Хто ми',
      text: 'Об\'єднана Методистська Церква України — це жива християнська спільнота, яка поєднує духовне життя з активним служінням людям. Ми підтримуємо людей, постраждалих від війни, розвиваємо громади та відкриті до співпраці з людьми, волонтерами й міжнародними партнерами.',
    },
    stats: {
      heading: 'Церква в цифрах',
      note: 'Орієнтовні дані станом на жовтень 2026 року.',
      items: [
        { value: '11', label: 'Церков' },
        { value: '11', label: 'Громад' },
        { value: '12', label: 'Пасторів' },
        { value: '2', label: 'Капелани' },
        { value: '45', label: 'Служителів' },
        { value: '≈300', label: 'Членів церкви та прихожан' },
      ],
    },
    history: {
      heading: 'Наша історія',
      teaser: 'Понад сто років — від перших методистських громад у Закарпатті на початку ХХ століття до сьогодення. Роки переслідувань у радянський час, відродження після незалежності України, єдність у час повномасштабної війни і новий розділ у родині церков Північної Європи та Балтії.',
      cta: 'Читати повну історію',
    },
    vision: {
      heading: 'Наше спільне бачення',
      intro: 'ОМЦ України є частиною глобальної Об\'єднаної Методистської Церкви. Спільне бачення, представлене у 2025 році, є орієнтиром для нашого служіння.',
      statement: 'Сміливо любити. Радісно служити. Відважно вести за собою.',
      items: [
        { title: '«Сміливо любити»', text: 'Бога та ближніх.' },
        { title: '«Радісно служити»', text: 'Людям і громадам.' },
        { title: '«Відважно вести за собою»', text: 'Розвивати учнівство, громади та служіння, яке змінює світ.' },
      ],
    },
    ministries: {
      heading: 'Основні напрями служіння',
      cards: [
        {
          icon: 'church',
          title: 'Духовне життя та церковне служіння',
          items: ['Богослужіння.', 'Молитва.', 'Біблійне навчання.', 'Розвиток церковних громад.', 'Духовна підтримка.'],
          cta: 'Наші громади',
          link: '/churches',
        },
        {
          icon: 'heart',
          title: 'Гуманітарна та соціальна допомога',
          items: ['Підтримка людей, постраждалих від війни.', 'Допомога внутрішньо переміщеним особам.', 'Допомога вразливим групам населення.'],
          cta: null,
          link: null,
        },
        {
          icon: 'users',
          title: 'Психосоціальна підтримка та відновлення',
          items: ['Психологічна підтримка.', 'Програми відновлення.', 'Робота з людьми, які пережили наслідки війни.', 'Підтримка жінок, молоді, ветеранів та інших груп.'],
          cta: 'Центр «Під замком»',
          link: '/pid-zamkom',
        },
        {
          icon: 'book',
          title: 'Робота з молоддю та громадами',
          items: ['Молодіжні центри.', 'Освітні та культурні програми.', 'Молодіжні зустрічі й табори.', 'Інтеграція внутрішньо переміщених осіб.', 'Розвиток лідерства та спільнот.'],
          cta: null,
          link: null,
        },
      ],
    },
    beliefs: {
      heading: 'У що ми віримо як Методистська Церква',
      intro: 'Об\'єднана Методистська Церква є частиною вселенської Христової Церкви. Наша віра укорінена в Святому Письмі і сформована весліанською традицією — живою спадщиною, яка поєднує особисте перетворення з активним служінням у світі.',
      items: [
        { title: 'Ми віримо в Триєдиного Бога', text: 'Ми віримо в єдиного Бога, який існує у трьох особах: Отця, Сина і Святого Духа. Бог є Творцем, Спасителем і Помічником усього живого. Троїця — не богословська формула, яку треба вирішити, а таємниця, до якої нас запрошують: бути у стосунках з Богом, Який є любов\'ю.' },
        { title: 'Ми віримо в Ісуса Христа', text: 'Ми віримо, що Ісус Христос є Сином Божим — повністю Богом і повністю людиною. Він народився від Діви Марії, жив серед людей, страждав, був розп\'ятий, помер і воскрес на третій день. Через Ісуса Бог відкриває нам, Хто Він є і чого хоче для людини. Ісус Христос є нашим Спасителем і Господом.' },
        { title: 'Ми віримо у Святого Духа', text: 'Ми віримо у Святого Духа, Який присутній і діє у світі та Церкві. Святий Дух переконує у гріху, привертає людей до Бога, перетворює серця і наділяє вірян силою для служіння та свідчення. Дух скеровує Церкву до істини і підтримує нас у вірі.' },
        { title: 'Ми віримо в авторитет Святого Письма', text: 'Ми віримо, що Біблія є Богонатхненним Словом Божим і головним джерелом авторитету у питаннях віри та християнського життя. Писання містить усе необхідне для спасіння. Ми читаємо його в громаді вірян — у діалозі з християнською традицією, із залученням розуму та у світлі власного досвіду.' },
        { title: 'Ми віримо в Божу благодать', text: 'Ми віримо, що Божа благодать діє в житті кожної людини — навіть тоді, коли ми ще не усвідомлюємо цього. Ця попередня благодать веде нас до Бога, робить можливою нашу відповідь на Євангеліє. Благодать Божа не заслуговується — вона дається вільно. І вона продовжує діяти в нас як виправдовуюча і освячуюча благодать.' },
        { title: 'Ми віримо, що спасіння — це Божий дар', text: 'Ми віримо, що спасіння є Божим даром, прийнятим через віру в Ісуса Христа. Ми не можемо заробити його власними зусиллями чи добрими вчинками. Коли ми довіряємо Христу, Бог прощає наші гріхи, відновлює нашу спілку з Ним і розпочинає в нас перетворювальну роботу.' },
        { title: 'Ми віримо у святість серця і життя', text: 'Ми віримо, що спасіння — це не лише прощення гріхів, а й перетворення всієї особи. Ціль Бога для кожного вірянина — повна святість: бути наповненим любов\'ю до Бога і ближнього, бути звільненим від влади гріха і постійно зростати в благодаті. Це не досконалізм, а шлях — стати повніше тією людиною, якою нас створив Бог.' },
        { title: 'Ми віримо в Церкву', text: 'Ми віримо у святу вселенську Церкву — Тіло Христове, зібране Святим Духом для поклоніння, спілкування, навчання і служіння. Церква існує у своїх місцевих виявах і як частина всесвітньої спільноти вірян. Їй довірено служіння примирення, і вона покликана бути знаком Царства Божого, що наближається.' },
        { title: 'Ми віримо в Таїнства', text: 'Ми віримо у два Таїнства, встановлені Христом: Хрещення і Вечерю Господню (Свята Причастя). Через ці зовнішні знаки й дії ми отримуємо внутрішню благодать. Хрещення означає вступ до спільноти вірян. Вечеря Господня — це трапеза пам\'яті, присутності і надії, в якій ми зустрічаємо живого Христа.' },
        { title: 'Ми віримо, що віра повинна приносити плід', text: 'Ми віримо, що справжня віра завжди проявляється в дії. Іти за Ісусом — означає дбати про бідних, служити вразливим, шукати справедливості і творити мир. Наша віра не лише особиста — вона є спільнотною і суспільною. Ми покликані бути руками та ногами Христа у цьому світі.' },
      ],
      wesleyan: {
        heading: 'Наша весліанська спадщина',
        paragraphs: [
          'Джон Веслі (1703–1791), англіканський священик і богослов, став засновником методистського руху. Разом зі своїм братом Чарльзом та однодумцями він прагнув відновлення автентичного християнського життя — вкоріненого в благодаті, вираженого через особисту святість і втіленого в служінні іншим.',
          'Веслі розумів Божу благодать як доступну кожній людині. Він вчив, що перш ніж ми звернемося до Бога, Бог вже діє в нашому житті — привертає нас, пробуджує совість, робить можливою нашу відповідь на Євангеліє. Це переконання — що благодать не для вибраних, а для кожного — є серцем методистської традиції.',
          'Веслі наголошував одночасно на особистій і суспільній святості. Він вірив, що християнське життя не може бути прожите наодинці — воно завжди формується і виражається у спільноті. Слідувати за Ісусом означає не лише плекати внутрішнє молитовне і біблійне життя, а й активно піклуватися про бідних, протистояти несправедливості, служити вразливим.',
        ],
        rulesLabel: 'Три правила методиста:',
        rules: ['«Не чини зла.»', '«Роби добро.»', '«Перебувай у засобах Божої благодаті.»'],
        rulesNote: 'Третє правило сьогодні нерідко виражають словами: «Залишайся в любові з Богом».',
      },
      missionVision: {
        heading: 'Наша місія та бачення',
        missionLabel: 'Місія',
        mission: 'Місія Об\'єднаної Методистської Церкви — робити учнями Ісуса Христа задля перетворення світу.',
        visionLabel: 'Бачення',
        vision: 'Об\'єднана Методистська Церква формує учнів Ісуса Христа, які, сповнені силою Святого Духа, сміливо люблять, радісно служать і відважно ведуть за собою у своїх місцевих громадах та у всесвітній спільноті Церкви.',
        pillars: [
          { title: 'Сміливо любити', text: 'Бути учнем Христовим — означає любити Бога всім серцем, розумом і силою та любити ближнього як самого себе. Така любов є сміливою: вона долає страх, перетинає межі й обирає служіння замість зручності.' },
          { title: 'Радісно служити', text: 'Служіння — не обов\'язок, а відповідь на Божу любов. Ми покликані радісно служити: у своїх громадах, у суспільстві та у всесвітній спільноті Церкви — кожен відповідно до своїх дарів і покликання.' },
          { title: 'Відважно вести за собою', text: 'Учнівство Христове вимагає відваги: вести інших до Господа, будувати сильні громади, розвивати нових лідерів і здійснювати служіння, що змінює світ. Ми відважно беремо на себе відповідальність — заради Царства Божого.' },
        ],
        conclusion: 'Ця місія і це бачення стають видимими в тому, як ми любимо, служимо і ведемо — у кожній громаді, у кожному акті милосердя, у кожному вчинку справедливості.',
      },
    },
    structure: {
      heading: 'Структура та міжнародний зв\'язок',
      paragraphs: [
        'Об\'єднана Методистська Церква в Україні є частиною всесвітньої The United Methodist Church — міжнародної християнської спільноти, яка об\'єднує церкви та служіння в різних країнах світу.',
        'Українські громади входять до регіональної методистської структури Північної Європи, Балтійських країн та України. Україна разом із Молдовою утворює Тимчасову щорічну конференцію України та Молдови (Ukraine and Moldova Provisional Annual Conference).',
        'Єпископський нагляд над церквами в Україні здійснює єпископ Кнут Рефсдал. На рівні українського служіння координацію та нагляд здійснює Олег Стародубець (District Superintendent).',
        'Разом ми є частиною глобальної методистської родини, об\'єднаної спільною вірою, служінням і покликанням сміливо любити, радісно служити та відважно вести за собою.',
      ],
      leaderLabel: 'Старший пастор',
    },
    policy: {
      sectionLabel: 'Політика церкви щодо шлюбу та рукоположення',
      title: 'Політика Методистської церкви України щодо шлюбу та рукоположення у священницький сан',
      paragraphs: [
        'Методистська церква в Україні дотримується традиційної богословської позиції.',
        'Методистська церква в Україні не схвалює практику гомосексуальних стосунків і вважає її несумісною з християнським вченням.',
        'Методистська церква в Україні не дозволяє своїм священнослужителям проводити церемонії одностатевого шлюбу або благословення одностатевих союзів, а також не допускає проведення таких церемоній у наших церквах чи інших церковних приміщеннях.',
        'Порушення цих правил вважатиметься дисциплінарним порушенням і призведе до негайного відсторонення від служіння та подальших дисциплінарних заходів.',
        'Методистська церква в Україні не надаватиме ліцензії на служіння та не рукопокладатиме у священницький сан особу, яка практикує гомосексуальні стосунки.',
      ],
    },
    readMinistryTeam: 'Служителі',
  },
  en: {
    hero: {
      title: 'About Us',
      subtitle: 'United in faith, serving with love',
    },
    whoWeAre: {
      heading: 'Who We Are',
      text: 'The United Methodist Church in Ukraine is a vibrant Christian community that combines spiritual life with active service to others. We support people affected by war, strengthen local communities and welcome cooperation with individuals, volunteers and international partners.',
    },
    stats: {
      heading: 'Our Church in Numbers',
      note: 'Approximate figures as of October 2026.',
      items: [
        { value: '11', label: 'Churches' },
        { value: '11', label: 'Congregations' },
        { value: '12', label: 'Pastors' },
        { value: '2', label: 'Chaplains' },
        { value: '45', label: 'Ministry Workers' },
        { value: '≈300', label: 'Church Members and Attendees' },
      ],
    },
    history: {
      heading: 'Our History',
      teaser: 'Over a century of ministry — from the first Methodist congregations in Transcarpathia in the early twentieth century to the present day. Years of persecution under Soviet rule, revival after Ukrainian independence, solidarity during the full-scale war, and a new chapter in the family of churches in Northern Europe and the Baltics.',
      cta: 'Read the Full History',
    },
    vision: {
      heading: 'Our Shared Vision',
      intro: 'The United Methodist Church in Ukraine is part of the worldwide United Methodist Church. The shared vision introduced in 2025 provides a guiding framework for our ministry.',
      statement: 'Love boldly. Serve joyfully. Lead courageously.',
      items: [
        { title: '"Love boldly"', text: 'Love God and our neighbors.' },
        { title: '"Serve joyfully"', text: 'Serve people and communities.' },
        { title: '"Lead courageously"', text: 'Nurture discipleship, strengthen congregations and develop ministry that transforms the world.' },
      ],
    },
    ministries: {
      heading: 'Our Main Areas of Ministry',
      cards: [
        {
          icon: 'church',
          title: 'Spiritual Life and Church Ministry',
          items: ['Worship services.', 'Prayer.', 'Bible study.', 'Development of local congregations.', 'Spiritual support.'],
          cta: 'Our Congregations',
          link: '/churches',
        },
        {
          icon: 'heart',
          title: 'Humanitarian and Social Assistance',
          items: ['Support for people affected by war.', 'Assistance for internally displaced people.', 'Assistance for vulnerable groups.'],
          cta: null,
          link: null,
        },
        {
          icon: 'users',
          title: 'Psychosocial Support and Recovery',
          items: ['Psychological support.', 'Recovery programs.', 'Support for people experiencing the consequences of war.', 'Support for women, young people, veterans and other groups.'],
          cta: 'Pid Zamkom Center',
          link: '/pid-zamkom',
        },
        {
          icon: 'book',
          title: 'Youth and Community Engagement',
          items: ['Youth centers.', 'Educational and cultural programs.', 'Youth gatherings and camps.', 'Integration of internally displaced people.', 'Leadership and community development.'],
          cta: null,
          link: null,
        },
      ],
    },
    beliefs: {
      heading: 'What We Believe as a Methodist Church',
      intro: 'The United Methodist Church is part of the universal Church of Jesus Christ. Our faith is rooted in Scripture and shaped by the Wesleyan tradition — a living heritage that joins personal transformation with active service in the world.',
      items: [
        { title: 'We believe in the Triune God', text: 'We believe in one God existing in three persons — Father, Son, and Holy Spirit. God is Creator, Redeemer, and Sustainer of all life. The Trinity is not a theological puzzle to be solved but a mystery to be entered: an invitation into relationship with God who is love.' },
        { title: 'We believe in Jesus Christ', text: 'We believe that Jesus Christ is the Son of God — fully divine and fully human. He was born of the Virgin Mary, lived among us, suffered, was crucified, died, and rose from the dead on the third day. Through Jesus, God reveals who He is and what He desires for humanity. Jesus Christ is our Savior and Lord.' },
        { title: 'We believe in the Holy Spirit', text: 'We believe in the Holy Spirit, who is present and active in the world and in the Church. The Holy Spirit convicts of sin, draws people to God, transforms hearts, and empowers believers for ministry and witness. The Spirit guides the Church into truth and sustains us in faith.' },
        { title: 'We believe in the authority of Scripture', text: 'We believe the Bible is the inspired Word of God and the primary source of authority for Christian faith and life. Scripture contains all that is necessary for salvation. We read it in the community of faith — in dialogue with Christian tradition, with the use of reason, and in the light of our experience.' },
        { title: "We believe in God's grace", text: "We believe that God's grace is at work in every person's life — even before we are aware of it. This prevenient grace draws us toward God and makes it possible for us to respond to the Gospel. God's grace is not earned but freely given, and it continues to work in us as justifying and sanctifying grace." },
        { title: 'We believe salvation is a gift of God', text: 'We believe that salvation is a gift of God, received through faith in Jesus Christ. We cannot earn it through our own efforts or good works. When we place our trust in Christ, God forgives our sins, restores our relationship with Him, and begins a transforming work within us.' },
        { title: 'We believe in holiness of heart and life', text: "We believe that salvation is not only the forgiveness of sins but the transformation of the whole person. God's goal for every believer is entire sanctification — being filled with love for God and neighbor, freed from the power of sin, and growing continually in grace. This is not perfectionism but a journey: becoming more fully the person God created us to be." },
        { title: 'We believe in the Church', text: "We believe in the holy universal Church — the body of Christ — called together by the Holy Spirit for worship, fellowship, learning, and service. The Church exists in its local expression and as part of the worldwide community of believers. It is entrusted with the ministry of reconciliation and called to be a sign of God's coming kingdom." },
        { title: 'We believe in the sacraments', text: 'We believe in two sacraments instituted by Christ: Baptism and the Lord\'s Supper (Holy Communion). Through these outward signs and acts, we receive inward grace. Baptism marks initiation into the community of faith. Holy Communion is a meal of remembrance, presence, and hope — a table at which we encounter the living Christ.' },
        { title: 'We believe faith must bear fruit', text: 'We believe that genuine faith is always expressed in action. Following Jesus means caring for the poor, serving the vulnerable, seeking justice, and working for peace. Our faith is not only personal — it is communal and social. We are called to be the hands and feet of Christ in the world.' },
      ],
      wesleyan: {
        heading: 'Our Wesleyan Heritage',
        paragraphs: [
          'John Wesley (1703–1791), an Anglican priest and theologian, was the founder of the Methodist movement. Together with his brother Charles and other like-minded Christians, he sought a renewal of authentic Christian life — grounded in grace, expressed through personal holiness, and lived out in service to others.',
          "Wesley understood God's grace as available to every person. He taught that before we turn to God, God is already at work in our lives — drawing us, awakening our conscience, and making it possible for us to respond to the Gospel. This conviction — that grace is not reserved for a chosen few but offered freely to every person — lies at the heart of the Methodist tradition.",
          'Wesley emphasized both personal holiness and social holiness. He believed that the Christian life cannot be lived in isolation — it is always formed and expressed within community. Following Jesus means not only cultivating an inner life of prayer and Scripture but also caring actively for the poor, opposing injustice, and serving the vulnerable.',
        ],
        rulesLabel: 'The Three Methodist Rules:',
        rules: ['"Do no harm."', '"Do good."', '"Attend upon the ordinances of God."'],
        rulesNote: 'The third rule is often expressed today as: "Stay in love with God."',
      },
      missionVision: {
        heading: 'Our Mission and Vision',
        missionLabel: 'Mission',
        mission: 'The mission of The United Methodist Church is to make disciples of Jesus Christ for the transformation of the world.',
        visionLabel: 'Vision',
        vision: 'The United Methodist Church forms disciples of Jesus Christ who, empowered by the Holy Spirit, love boldly, serve joyfully, and lead courageously in local communities and worldwide connections.',
        pillars: [
          { title: 'Love Boldly', text: 'To be a disciple of Christ is to love God with all your heart, mind, and strength, and to love your neighbor as yourself. That love is bold: it overcomes fear, crosses boundaries, and chooses service over comfort.' },
          { title: 'Serve Joyfully', text: "Service is not an obligation but a response to God's love. We are called to serve joyfully — in our local communities, in society, and in the worldwide connection of the Church — each according to their gifts and calling." },
          { title: 'Lead Courageously', text: "Discipleship requires courage: leading others to the Lord, building strong congregations, developing new leaders, and carrying out ministry that transforms the world. We take on responsibility courageously — for the sake of God's Kingdom." },
        ],
        conclusion: 'This mission and vision become visible in the way we love, serve, and lead — in every congregation, in every act of mercy, and in every pursuit of justice.',
      },
    },
    structure: {
      heading: 'Our Structure and Global Connection',
      paragraphs: [
        'The United Methodist Church in Ukraine is part of the worldwide United Methodist Church — an international Christian community connecting congregations and ministries across many countries.',
        'Ukrainian congregations belong to the regional Methodist structure of Northern Europe, the Baltic countries and Ukraine. Together, Ukraine and Moldova form the Ukraine and Moldova Provisional Annual Conference.',
        'Knut Refsdal serves as Bishop of the Northern Europe and Ukraine Regional Conference UMC, providing episcopal oversight of the churches in Ukraine. Oleh Starodubets serves as District Superintendent, coordinating and overseeing ministry in Ukraine.',
        'Together, we are part of the global Methodist family, united by a shared faith, ministry and calling to love boldly, serve joyfully and lead courageously.',
      ],
      leaderLabel: 'District Superintendent',
    },
    policy: {
      sectionLabel: 'Church Policy on Marriage and Ordination',
      title: 'Policy of the Methodist Church in Ukraine Regarding Marriage and Ordination',
      paragraphs: [
        'The Methodist Church in Ukraine maintains a traditional theological position.',
        'The Methodist Church in Ukraine does not approve of the practice of homosexual relationships and considers such practice incompatible with Christian teaching.',
        'The Methodist Church in Ukraine does not permit its clergy to conduct same-sex marriage ceremonies or blessings of same-sex unions, nor does it permit such ceremonies to take place in our churches or other church facilities.',
        'Violation of these rules will be considered a disciplinary offense and will result in immediate suspension from ministry and further disciplinary action.',
        'The Methodist Church in Ukraine will not grant a ministry license to, or ordain, a person who practices homosexual relationships.',
      ],
    },
    readMinistryTeam: 'Ministry Team',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  church: <Church className="w-7 h-7 text-primary" />,
  heart: <Heart className="w-7 h-7 text-primary" />,
  users: <Users className="w-7 h-7 text-primary" />,
  book: <BookOpen className="w-7 h-7 text-primary" />,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const c = content[lang];
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">{c.hero.title}</h1>
          <p className="text-lg text-muted-foreground">{c.hero.subtitle}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-14">

        {/* Who We Are */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-4">{c.whoWeAre.heading}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{c.whoWeAre.text}</p>
        </section>

        {/* Church in Numbers */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{c.stats.heading}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {c.stats.items.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{c.stats.note}</p>
        </section>

        {/* History teaser */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-4">{c.history.heading}</h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-6">{c.history.teaser}</p>
          <Link
            to="/history"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-2"
          >
            {c.history.cta}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Shared Vision */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-3">{c.vision.heading}</h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{c.vision.intro}</p>
          <blockquote className="text-xl lg:text-2xl font-bold text-primary border-l-4 border-primary pl-5 mb-8 leading-snug">
            {c.vision.statement}
          </blockquote>
          <div className="grid sm:grid-cols-3 gap-5">
            {c.vision.items.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-5">
                <p className="font-semibold mb-1 text-sm">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Four Areas of Ministry */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{c.ministries.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.ministries.cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {iconMap[card.icon]}
                </div>
                <div>
                  <h3 className="font-semibold mb-3">{card.title}</h3>
                  <ul className="space-y-1.5">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {card.cta && card.link && (
                  <div className="mt-auto pt-2">
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-2"
                    >
                      {card.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* What We Believe — 10 statements */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-3">{c.beliefs.heading}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-7">{c.beliefs.intro}</p>
          <div className="space-y-5">
            {c.beliefs.items.map((item, i) => (
              <div key={i} className="border-l-4 border-primary pl-5">
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wesleyan Heritage */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-6">{c.beliefs.wesleyan.heading}</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-7">
            {c.beliefs.wesleyan.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              {c.beliefs.wesleyan.rulesLabel}
            </p>
            <ol className="space-y-2 mb-4">
              {c.beliefs.wesleyan.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                  <span className="font-medium text-sm">{rule}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-muted-foreground italic">{c.beliefs.wesleyan.rulesNote}</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-7">{c.beliefs.missionVision.heading}</h2>
          <div className="mb-7">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              {c.beliefs.missionVision.missionLabel}
            </p>
            <p className="text-base font-semibold leading-relaxed border-l-4 border-primary pl-4">
              {c.beliefs.missionVision.mission}
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              {c.beliefs.missionVision.visionLabel}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.beliefs.missionVision.vision}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-7">
            {c.beliefs.missionVision.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-sm text-primary mb-2">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{c.beliefs.missionVision.conclusion}</p>
        </section>

        {/* Church Structure */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-5">{c.structure.heading}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm mb-6">
            {c.structure.paragraphs.map((p, i) => {
              // Paragraph 3 (index 2) contains both Knut Refsdal and Oleh Starodubets — linkify both
              if (i === 2) {
                const knutUk = 'Кнут Рефсдал';
                const knutEn = 'Knut Refsdal';
                const olehUk = 'Олег Стародубець';
                const olehEn = 'Oleh Starodubets';
                const knut = lang === 'uk' ? knutUk : knutEn;
                const oleh = lang === 'uk' ? olehUk : olehEn;

                // Split at the first name found, then handle the second
                const parts: React.ReactNode[] = [];
                let remaining = p;

                const knutIdx = remaining.indexOf(knut);
                if (knutIdx !== -1) {
                  parts.push(remaining.slice(0, knutIdx));
                  parts.push(
                    <Link key="knut" to="/ministers" className="text-primary hover:underline underline-offset-2 font-medium">
                      {knut}
                    </Link>
                  );
                  remaining = remaining.slice(knutIdx + knut.length);
                }

                const olehIdx = remaining.indexOf(oleh);
                if (olehIdx !== -1) {
                  parts.push(remaining.slice(0, olehIdx));
                  parts.push(
                    <Link key="oleh" to="/ministers" className="text-primary hover:underline underline-offset-2 font-medium">
                      {oleh}
                    </Link>
                  );
                  remaining = remaining.slice(olehIdx + oleh.length);
                }

                parts.push(remaining);
                return <p key={i}>{parts}</p>;
              }
              return <p key={i}>{p}</p>;
            })}
          </div>
          {/* Mini leadership panel */}
          <div className="border-t border-gray-100 pt-5">
            <Link
              to="/ministers"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-2"
            >
              {c.readMinistryTeam}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Policy */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            {c.policy.sectionLabel}
          </p>
          <h2 className="text-xl font-bold mb-5 leading-snug">{c.policy.title}</h2>
          <div className="space-y-3">
            {c.policy.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
