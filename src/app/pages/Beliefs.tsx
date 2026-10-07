import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// ── Bilingual content ─────────────────────────────────────────────────────────

const content = {
  uk: {
    hero: {
      title: 'У що ми віримо як Методистська Церква',
    },
    intro:
      'Об\'єднана Методистська Церква є частиною вселенської Христової Церкви. Наша віра укорінена в Святому Письмі і сформована весліанською традицією — живою спадщиною, яка поєднує особисте перетворення з активним служінням у світі.',
    beliefsHeading: 'Наші переконання',
    beliefs: [
      {
        title: 'Ми віримо в Триєдиного Бога',
        text: 'Ми віримо в єдиного Бога, який існує у трьох особах: Отця, Сина і Святого Духа. Бог є Творцем, Спасителем і Помічником усього живого. Троїця — не богословська формула, яку треба вирішити, а таємниця, до якої нас запрошують: бути у стосунках з Богом, Який є любов\'ю.',
      },
      {
        title: 'Ми віримо в Ісуса Христа',
        text: 'Ми віримо, що Ісус Христос є Сином Божим — повністю Богом і повністю людиною. Він народився від Діви Марії, жив серед людей, страждав, був розп\'ятий, помер і воскрес на третій день. Через Ісуса Бог відкриває нам, Хто Він є і чого хоче для людини. Ісус Христос є нашим Спасителем і Господом.',
      },
      {
        title: 'Ми віримо у Святого Духа',
        text: 'Ми віримо у Святого Духа, Який присутній і діє у світі та Церкві. Святий Дух переконує у гріху, привертає людей до Бога, перетворює серця і наділяє вірян силою для служіння та свідчення. Дух скеровує Церкву до істини і підтримує нас у вірі.',
      },
      {
        title: 'Ми віримо в авторитет Святого Письма',
        text: 'Ми віримо, що Біблія є Богонатхненним Словом Божим і головним джерелом авторитету у питаннях віри та християнського життя. Писання містить усе необхідне для спасіння. Ми читаємо його в громаді вірян — у діалозі з християнською традицією, із залученням розуму та у світлі власного досвіду.',
      },
      {
        title: 'Ми віримо в Божу благодать',
        text: 'Ми віримо, що Божа благодать діє в житті кожної людини — навіть тоді, коли ми ще не усвідомлюємо цього. Ця попередня благодать веде нас до Бога, робить можливою нашу відповідь на Євангеліє. Благодать Божа не заслуговується — вона дається вільно. І вона продовжує діяти в нас як виправдовуюча і освячуюча благодать.',
      },
      {
        title: 'Ми віримо, що спасіння — це Божий дар',
        text: 'Ми віримо, що спасіння є Божим даром, прийнятим через віру в Ісуса Христа. Ми не можемо заробити його власними зусиллями чи добрими вчинками. Коли ми довіряємо Христу, Бог прощає наші гріхи, відновлює нашу спілку з Ним і розпочинає в нас перетворювальну роботу.',
      },
      {
        title: 'Ми віримо у святість серця і життя',
        text: 'Ми віримо, що спасіння — це не лише прощення гріхів, а й перетворення всієї особи. Ціль Бога для кожного вірянина — повна святість: бути наповненим любов\'ю до Бога і ближнього, бути звільненим від влади гріха і постійно зростати в благодаті. Це не досконалізм, а шлях — стати повніше тією людиною, якою нас створив Бог.',
      },
      {
        title: 'Ми віримо в Церкву',
        text: 'Ми віримо у святу вселенську Церкву — Тіло Христове, зібране Святим Духом для поклоніння, спілкування, навчання і служіння. Церква існує у своїх місцевих виявах і як частина всесвітньої спільноти вірян. Їй довірено служіння примирення, і вона покликана бути знаком Царства Божого, що наближається.',
      },
      {
        title: 'Ми віримо в Таїнства',
        text: 'Ми віримо у два Таїнства, встановлені Христом: Хрещення і Вечерю Господню (Свята Причастя). Через ці зовнішні знаки й дії ми отримуємо внутрішню благодать. Хрещення означає вступ до спільноти вірян. Вечеря Господня — це трапеза пам\'яті, присутності і надії, в якій ми зустрічаємо живого Христа.',
      },
      {
        title: 'Ми віримо, що віра повинна приносити плід',
        text: 'Ми віримо, що справжня віра завжди проявляється в дії. Іти за Ісусом — означає дбати про бідних, служити вразливим, шукати справедливості і творити мир. Наша віра не лише особиста — вона є спільнотною і суспільною. Ми покликані бути руками та ногами Христа у цьому світі.',
      },
    ],
    wesleyan: {
      heading: 'Наша весліанська спадщина',
      paragraphs: [
        'Джон Веслі (1703–1791), англіканський священик і богослов, став засновником методистського руху. Разом зі своїм братом Чарльзом та однодумцями він прагнув відновлення автентичного християнського життя — вкоріненого в благодаті, вираженого через особисту святість і втіленого в служінні іншим.',
        'Веслі розумів Божу благодать як доступну кожній людині. Він вчив, що перш ніж ми звернемося до Бога, Бог вже діє в нашому житті — привертає нас, пробуджує совість, робить можливою нашу відповідь на Євангеліє. Це переконання — що благодать не для вибраних, а для кожного — є серцем методистської традиції.',
        'Веслі наголошував одночасно на особистій і суспільній святості. Він вірив, що християнське життя не може бути прожите наодинці — воно завжди формується і виражається у спільноті. Слідувати за Ісусом означає не лише плекати внутрішнє молитовне і біблійне життя, а й активно піклуватися про бідних, протистояти несправедливості, служити вразливим. Він описав методистський спосіб життя через три прості правила: «Не чини зла. Роби добро. Перебувай у засобах Божої благодаті». Третє правило — перебувати в засобах благодаті — сьогодні нерідко виражають так: «Залишайся в любові з Богом». Ці три правила залишаються практичним дороговказом для учнівства Христового. Жити Євангелієм — не приватне досягнення, а спільне покликання, втілене через Christian common life: спільне поклоніння, служіння і свідчення світу.',
      ],
      rulesLabel: 'Три правила методиста:',
      rules: [
        '«Не чини зла.»',
        '«Роби добро.»',
        '«Перебувай у засобах Божої благодаті.»',
      ],
      rulesNote: 'Третє правило сьогодні нерідко виражають словами: «Залишайся в любові з Богом».',
    },
    missionVision: {
      heading: 'Наша місія та бачення',
      missionLabel: 'Місія',
      mission:
        'Місія Об\'єднаної Методистської Церкви — робити учнями Ісуса Христа задля перетворення світу.',
      visionLabel: 'Бачення',
      vision:
        'Об\'єднана Методистська Церква формує учнів Ісуса Христа, які, сповнені силою Святого Духа, сміливо люблять, радісно служать і відважно ведуть за собою у своїх місцевих громадах та у всесвітній спільноті Церкви.',
      pillars: [
        {
          title: 'Сміливо любити',
          text: 'Бути учнем Христовим — означає любити Бога всім серцем, розумом і силою та любити ближнього як самого себе. Така любов є сміливою: вона долає страх, перетинає межі й обирає служіння замість зручності.',
        },
        {
          title: 'Радісно служити',
          text: 'Служіння — не обов\'язок, а відповідь на Божу любов. Ми покликані радісно служити: у своїх громадах, у суспільстві та у всесвітній спільноті Церкви — кожен відповідно до своїх дарів і покликання.',
        },
        {
          title: 'Відважно вести за собою',
          text: 'Учнівство Христове вимагає відваги: вести інших до Господа, будувати сильні громади, розвивати нових лідерів і здійснювати служіння, що змінює світ. Ми відважно беремо на себе відповідальність — заради Царства Божого.',
        },
      ],
      conclusion:
        'Ця місія і це бачення стають видимими в тому, як ми любимо, служимо і ведемо — у кожній громаді, у кожному акті милосердя, у кожному вчинку справедливості.',
    },
  },
  en: {
    hero: {
      title: 'What We Believe as a Methodist Church',
    },
    intro:
      'The United Methodist Church is part of the universal Church of Jesus Christ. Our faith is rooted in Scripture and shaped by the Wesleyan tradition — a living heritage that joins personal transformation with active service in the world.',
    beliefsHeading: 'Our Beliefs',
    beliefs: [
      {
        title: 'We believe in the Triune God',
        text: 'We believe in one God existing in three persons — Father, Son, and Holy Spirit. God is Creator, Redeemer, and Sustainer of all life. The Trinity is not a theological puzzle to be solved but a mystery to be entered: an invitation into relationship with God who is love.',
      },
      {
        title: 'We believe in Jesus Christ',
        text: 'We believe that Jesus Christ is the Son of God — fully divine and fully human. He was born of the Virgin Mary, lived among us, suffered, was crucified, died, and rose from the dead on the third day. Through Jesus, God reveals who He is and what He desires for humanity. Jesus Christ is our Savior and Lord.',
      },
      {
        title: 'We believe in the Holy Spirit',
        text: 'We believe in the Holy Spirit, who is present and active in the world and in the Church. The Holy Spirit convicts of sin, draws people to God, transforms hearts, and empowers believers for ministry and witness. The Spirit guides the Church into truth and sustains us in faith.',
      },
      {
        title: 'We believe in the authority of Scripture',
        text: 'We believe the Bible is the inspired Word of God and the primary source of authority for Christian faith and life. Scripture contains all that is necessary for salvation. We read it in the community of faith — in dialogue with Christian tradition, with the use of reason, and in the light of our experience.',
      },
      {
        title: 'We believe in God\'s grace',
        text: 'We believe that God\'s grace is at work in every person\'s life — even before we are aware of it. This prevenient grace draws us toward God and makes it possible for us to respond to the Gospel. God\'s grace is not earned but freely given, and it continues to work in us as justifying and sanctifying grace.',
      },
      {
        title: 'We believe salvation is a gift of God',
        text: 'We believe that salvation is a gift of God, received through faith in Jesus Christ. We cannot earn it through our own efforts or good works. When we place our trust in Christ, God forgives our sins, restores our relationship with Him, and begins a transforming work within us.',
      },
      {
        title: 'We believe in holiness of heart and life',
        text: 'We believe that salvation is not only the forgiveness of sins but the transformation of the whole person. God\'s goal for every believer is entire sanctification — being filled with love for God and neighbor, freed from the power of sin, and growing continually in grace. This is not perfectionism but a journey: becoming more fully the person God created us to be.',
      },
      {
        title: 'We believe in the Church',
        text: 'We believe in the holy universal Church — the body of Christ — called together by the Holy Spirit for worship, fellowship, learning, and service. The Church exists in its local expression and as part of the worldwide community of believers. It is entrusted with the ministry of reconciliation and called to be a sign of God\'s coming kingdom.',
      },
      {
        title: 'We believe in the sacraments',
        text: 'We believe in two sacraments instituted by Christ: Baptism and the Lord\'s Supper (Holy Communion). Through these outward signs and acts, we receive inward grace. Baptism marks initiation into the community of faith. Holy Communion is a meal of remembrance, presence, and hope — a table at which we encounter the living Christ.',
      },
      {
        title: 'We believe faith must bear fruit',
        text: 'We believe that genuine faith is always expressed in action. Following Jesus means caring for the poor, serving the vulnerable, seeking justice, and working for peace. Our faith is not only personal — it is communal and social. We are called to be the hands and feet of Christ in the world.',
      },
    ],
    wesleyan: {
      heading: 'Our Wesleyan Heritage',
      paragraphs: [
        'John Wesley (1703–1791), an Anglican priest and theologian, was the founder of the Methodist movement. Together with his brother Charles and other like-minded Christians, he sought a renewal of authentic Christian life — grounded in grace, expressed through personal holiness, and lived out in service to others.',
        'Wesley understood God\'s grace as available to every person. He taught that before we turn to God, God is already at work in our lives — drawing us, awakening our conscience, and making it possible for us to respond to the Gospel. This conviction — that grace is not reserved for a chosen few but offered freely to every person — lies at the heart of the Methodist tradition.',
        'Wesley emphasized both personal holiness and social holiness. He believed that the Christian life cannot be lived in isolation — it is always formed and expressed within community. Following Jesus means not only cultivating an inner life of prayer and Scripture but also caring actively for the poor, opposing injustice, and serving the vulnerable. He summarized the Methodist way of life in three simple rules. These rules remain a practical guide for Christian discipleship. Living the Gospel is not a private achievement but a shared calling — expressed through Christian community, worship, service, and witness to the world.',
      ],
      rulesLabel: 'The Three Methodist Rules:',
      rules: [
        '"Do no harm."',
        '"Do good."',
        '"Attend upon the ordinances of God."',
      ],
      rulesNote: 'The third rule is often expressed today as: "Stay in love with God."',
    },
    missionVision: {
      heading: 'Our Mission and Vision',
      missionLabel: 'Mission',
      mission:
        'The mission of The United Methodist Church is to make disciples of Jesus Christ for the transformation of the world.',
      visionLabel: 'Vision',
      vision:
        'The United Methodist Church forms disciples of Jesus Christ who, empowered by the Holy Spirit, love boldly, serve joyfully, and lead courageously in local communities and worldwide connections.',
      pillars: [
        {
          title: 'Love Boldly',
          text: 'To be a disciple of Christ is to love God with all your heart, mind, and strength, and to love your neighbor as yourself. That love is bold: it overcomes fear, crosses boundaries, and chooses service over comfort.',
        },
        {
          title: 'Serve Joyfully',
          text: 'Service is not an obligation but a response to God\'s love. We are called to serve joyfully — in our local communities, in society, and in the worldwide connection of the Church — each according to their gifts and calling.',
        },
        {
          title: 'Lead Courageously',
          text: 'Discipleship requires courage: leading others to the Lord, building strong congregations, developing new leaders, and carrying out ministry that transforms the world. We take on responsibility courageously — for the sake of God\'s Kingdom.',
        },
      ],
      conclusion:
        'This mission and vision become visible in the way we love, serve, and lead — in every congregation, in every act of mercy, and in every pursuit of justice.',
    },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Beliefs() {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-0 leading-tight">{c.hero.title}</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-14">

        {/* Introduction */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <p className="text-lg text-muted-foreground leading-relaxed">{c.intro}</p>
        </section>

        {/* Ten Beliefs */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-7">{c.beliefsHeading}</h2>
          <div className="space-y-6">
            {c.beliefs.map((belief, i) => (
              <div key={i} className="border-l-4 border-primary pl-5">
                <h3 className="font-semibold mb-1.5">{belief.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{belief.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wesleyan Heritage */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-6">{c.wesleyan.heading}</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-7">
            {c.wesleyan.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Three Rules */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              {c.wesleyan.rulesLabel}
            </p>
            <ol className="space-y-2 mb-4">
              {c.wesleyan.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                  <span className="font-medium text-sm">{rule}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-muted-foreground italic">{c.wesleyan.rulesNote}</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-7">{c.missionVision.heading}</h2>

          {/* Mission */}
          <div className="mb-7">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              {c.missionVision.missionLabel}
            </p>
            <p className="text-base font-semibold leading-relaxed border-l-4 border-primary pl-4">
              {c.missionVision.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              {c.missionVision.visionLabel}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.missionVision.vision}</p>
          </div>

          {/* Three pillars */}
          <div className="grid sm:grid-cols-3 gap-4 mb-7">
            {c.missionVision.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-sm text-primary mb-2">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{c.missionVision.conclusion}</p>
        </section>

        {/* Back to About */}
        <div className="pb-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← {lang === 'uk' ? 'Про нас' : 'About Us'}
          </Link>
        </div>

      </div>
    </div>
  );
}
