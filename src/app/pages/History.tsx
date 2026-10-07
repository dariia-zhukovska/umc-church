import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';

const content = {
  uk: {
    backLabel: 'Про нас',
    pageTitle: 'Історія Об\'єднаної Методистської Церкви в Україні',
    chapters: [
      {
        title: 'Методистське коріння в Україні',
        paragraphs: [
          'Історія методизму в Україні має понад столітню традицію. Перші методистські громади на території сучасної України з\'явилися ще на початку ХХ століття. Особливе місце в цій історії посідає Закарпаття, де методистське служіння розвивалося в Ужгороді та навколишніх селах.',
          '26 березня 1923 року Місіонерська рада Методистської Єпископальної Церкви Півдня зі Сполучених Штатів придбала будівлю для методистської громади в Ужгороді. Цей дім молитви став одним із важливих центрів методистського життя краю.',
          'Від самого початку методисти поєднували проповідь Євангелія з практичним служінням людям. Християнська освіта, турбота про дітей і сім\'ї, допомога нужденним та активна участь у житті громади були природним виявом методистського розуміння віри.',
        ],
      },
      {
        title: 'Віра, збережена в часи переслідувань',
        paragraphs: [
          'Після Другої світової війни Закарпаття увійшло до складу Радянського Союзу. Для церков настав важкий період державного атеїзму, обмежень і переслідувань. Церковне майно було конфісковане, а можливості для відкритого служіння значно звузилися.',
          'Проте методистська традиція в Україні не зникла. Громади в Ужгороді та Кам\'яниці зберігали свою віру навіть у радянський період. Одним із людей, які стали символом цієї вірності, був пастор Іван Вукста. Попри тиск радянської влади та переслідування за християнське служіння, він продовжував служити Богові й людям.',
        ],
      },
      {
        title: 'Відродження після незалежності України',
        paragraphs: [
          'Після розпаду Радянського Союзу та проголошення незалежності України для відкритого християнського служіння з\'явилися нові можливості. На початку 1990-х років методистське служіння в Україні почало активно відроджуватися та розвиватися.',
          'У 1992 році історичну будівлю методистської церкви в Ужгороді, конфісковану радянською владою, було повернуто громаді. Відновлення церковного життя відбувалося не лише на Закарпатті: поступово виникали та розвивалися методистські громади в інших регіонах України.',
          'Українські методисти стали частиною великої всесвітньої родини Об\'єднаної Методистської Церкви, зберігаючи водночас власну українську ідентичність та відповідаючи на потреби свого суспільства.',
          'У 2005 році Україна була виокремлена з Південної Російсько-Українсько-Молдовської конференції, і була сформована окрема Тимчасова щорічна конференція України та Молдови.',
        ],
      },
      {
        title: 'Шлях до Північної Європи та Балтії',
        paragraphs: [
          'Важливою сторінкою сучасної історії Церкви став 2020 рік. Під час Щорічної конференції делегати 100% голосів проголосували за вихід з Євразійської єпископальної території та за пошук нового майбутнього для Української Методистської Церкви в європейському методистському контексті. Це рішення стало важливим вираженням єдності українських методистів та їхнього бачення подальшого розвитку Церкви.',
          'Наступні два роки стали непростим перехідним періодом. Фактично Українська Методистська Церква залишалася два роки без безпосереднього єпископського керівництва, очікуючи на вирішення питання щодо свого подальшого місця в структурі Об\'єднаної Методистської Церкви.',
          'Навесні 2022 року, у перші місяці повномасштабного російського вторгнення в Україну, для нашої Церкви розпочався новий етап. У надзвичайно важкий для України час нас прийняла до своєї єпископальної території Об\'єднана Методистська Церква Північної Європи та Балтії.',
          'Особливу роль у цьому процесі відіграв єпископ Крістіан Алстед (Christian Alsted), який прийняв єпископську відповідальність за Україну та Молдову. Для українських методистів це було не лише адміністративною зміною. У час війни ми відчули конкретну солідарність великої методистської родини — через молитву, особисту присутність, гуманітарну допомогу, партнерство та підтримку наших церков і служінь.',
          'Відтоді зв\'язки українських методистів із церквами Північної Європи та Балтії стали значно глибшими. Церкви та методисти Норвегії, Швеції, Данії, Фінляндії та інших країн стали важливими партнерами України в час війни.',
        ],
      },
      {
        title: 'Церква, яка залишилася зі своїм народом',
        paragraphs: [
          'Війна, що розпочалася у 2014 році, а особливо повномасштабне вторгнення Росії в Україну 24 лютого 2022 року, докорінно змінили життя країни та служіння Церкви.',
          'Методистські пастори та громади залишилися поруч зі своїми людьми. Частина людей була змушена залишити свої домівки, а деякі громади втратили можливість служити у своїх містах. Водночас церкви відкривали двері для внутрішньо переміщених осіб, організовували евакуацію, прихистки та гуманітарну допомогу, приймали сім\'ї, які втратили свої домівки, підтримували дітей, молодь, людей похилого віку та інших постраждалих від війни.',
          'Водночас Церква продовжувала проповідувати Євангеліє, звершувати богослужіння, створювати нові служіння та громади, працювати з молоддю, надавати духовну й психологічну підтримку та шукати нові способи служити українському суспільству.',
          'Війна змінила багато форм нашого служіння, але не змінила його суті: бути з людьми, свідчити про Христа і практично виявляти Божу любов там, де вона найбільше потрібна.',
        ],
      },
      {
        title: 'Наша історія продовжується',
        paragraphs: [
          'Сьогодні Об\'єднана Методистська Церква в Україні продовжує проповідувати Євангеліє Ісуса Христа та служити людям у складний для країни час.',
          'Наші громади розвивають служіння дітям і молоді, підтримують сім\'ї та внутрішньо переміщених людей, здійснюють соціальне й гуманітарне служіння, створюють простори для духовного, психологічного та фізичного відновлення і виховують нове покоління християнських лідерів.',
          'Ми шануємо наше минуле, служимо Україні сьогодні та з надією дивимося в майбутнє, вірячи, що Бог продовжує Свою працю через Методистську Церкву в Україні.',
        ],
      },
    ],
    keyDates: {
      heading: 'Ключові дати',
      items: [
        { year: '1923', label: 'Придбання будівлі для методистської громади в Ужгороді' },
        { year: '1940-і', label: 'Включення Закарпаття до СРСР; початок обмежень та переслідувань' },
        { year: '1992', label: 'Повернення конфіскованої будівлі церкви в Ужгороді' },
        { year: '2005', label: 'Утворення окремої Тимчасової щорічної конференції України та Молдови' },
        { year: '2020', label: 'Рішення делегатів про вихід з Євразійської єпископальної території' },
        { year: '2022', label: 'Прийняття до єпископальної території Північної Європи та Балтії' },
      ],
    },
  },
  en: {
    backLabel: 'About Us',
    pageTitle: 'History of The United Methodist Church in Ukraine',
    chapters: [
      {
        title: 'Methodist Roots in Ukraine',
        paragraphs: [
          'The history of Methodism in Ukraine spans more than a century. The first Methodist congregations in the territory of present-day Ukraine appeared in the early twentieth century. Transcarpathia holds a special place in this history, as Methodist ministry developed in Uzhhorod and the surrounding villages.',
          'On March 26, 1923, the Mission Board of the Methodist Episcopal Church, South, in the United States purchased a building for the Methodist congregation in Uzhhorod. This house of prayer became one of the important centers of Methodist life in the region.',
          'From the very beginning, Methodists combined the proclamation of the Gospel with practical service to people. Christian education, care for children and families, assistance to those in need, and active participation in community life were natural expressions of the Methodist understanding of faith.',
        ],
      },
      {
        title: 'Faith Preserved in Times of Persecution',
        paragraphs: [
          'After World War II, Transcarpathia became part of the Soviet Union. For the churches, this marked the beginning of a difficult period of state atheism, restrictions, and persecution. Church property was confiscated, and opportunities for public ministry were severely limited.',
          'Yet the Methodist tradition in Ukraine did not disappear. The congregations in Uzhhorod and Kamianytsia preserved their faith even during the Soviet period. One of the people who became a symbol of this faithfulness was Pastor Ivan Vuksta. Despite pressure from the Soviet authorities and persecution for his Christian ministry, he continued to serve God and people.',
        ],
      },
      {
        title: "Revival after Ukraine's Independence",
        paragraphs: [
          "After the collapse of the Soviet Union and the proclamation of Ukraine's independence, new opportunities emerged for public Christian ministry. In the early 1990s, Methodist ministry in Ukraine began to revive and develop actively.",
          'In 1992, the historic Methodist church building in Uzhhorod, which had been confiscated by the Soviet authorities, was returned to the congregation. The renewal of church life took place not only in Transcarpathia: Methodist congregations gradually emerged and developed in other regions of Ukraine as well.',
          'Ukrainian Methodists became part of the worldwide family of The United Methodist Church, while preserving their Ukrainian identity and responding to the needs of their society.',
          'In 2005, Ukraine was separated from the South Russia–Ukraine–Moldova Conference, and a separate Ukraine and Moldova Provisional Annual Conference was formed.',
        ],
      },
      {
        title: 'The Path to Northern Europe and the Baltics',
        paragraphs: [
          'The year 2020 became an important chapter in the modern history of the Church. During the Annual Conference, the delegates voted unanimously to leave the Eurasia Episcopal Area and to seek a new future for the Methodist Church in Ukraine within the European Methodist context. This decision became an important expression of the unity of Ukrainian Methodists and their vision for the Church\'s further development.',
          'The following two years were a difficult period of transition. In practice, the Methodist Church in Ukraine remained for two years without direct episcopal oversight while awaiting a decision concerning its future place within the structure of The United Methodist Church.',
          "In the spring of 2022, during the first months of Russia's full-scale invasion of Ukraine, a new chapter began for our Church. At an extraordinarily difficult time for Ukraine, we were received into the episcopal area of The United Methodist Church in Northern Europe and the Baltics.",
          'Bishop Christian Alsted played a special role in this process, assuming episcopal responsibility for Ukraine and Moldova. For Ukrainian Methodists, this was more than an administrative change. During the war, we experienced the tangible solidarity of the wider Methodist family through prayer, personal presence, humanitarian assistance, partnership, and support for our churches and ministries.',
          'Since then, the ties between Ukrainian Methodists and the churches of Northern Europe and the Baltics have grown much deeper. Churches and Methodists in Norway, Sweden, Denmark, Finland, and other countries have become important partners of Ukraine during the war.',
        ],
      },
      {
        title: 'A Church That Remained with Its People',
        paragraphs: [
          "The war that began in 2014, and especially Russia's full-scale invasion of Ukraine on February 24, 2022, profoundly changed the life of the country and the ministry of the Church.",
          'Methodist pastors and congregations remained alongside their people. Many were forced to leave their homes, and some congregations lost the ability to minister in their own cities. At the same time, churches opened their doors to internally displaced persons, organized evacuations, shelters, and humanitarian assistance, welcomed families who had lost their homes, and supported children, young people, older adults, and others affected by the war.',
          'At the same time, the Church continued to proclaim the Gospel, hold worship services, establish new ministries and congregations, work with young people, provide spiritual and psychological support, and seek new ways to serve Ukrainian society.',
          'The war changed many forms of our ministry, but it did not change its essence: to be with people, to bear witness to Christ, and to demonstrate God\'s love in practical ways where it is needed most.',
        ],
      },
      {
        title: 'Our Story Continues',
        paragraphs: [
          'Today, The United Methodist Church in Ukraine continues to proclaim the Gospel of Jesus Christ and to serve people during this difficult time for the country.',
          'Our congregations develop ministries for children and young people, support families and internally displaced persons, carry out social and humanitarian ministries, create spaces for spiritual, psychological, and physical recovery, and nurture a new generation of Christian leaders.',
          'We honor our past, serve Ukraine today, and look to the future with hope, believing that God continues His work through the Methodist Church in Ukraine.',
        ],
      },
    ],
    keyDates: {
      heading: 'Key Dates',
      items: [
        { year: '1923', label: 'Purchase of the Methodist congregation building in Uzhhorod' },
        { year: '1940s', label: 'Transcarpathia incorporated into the USSR; beginning of restrictions and persecution' },
        { year: '1992', label: 'Return of the confiscated church building in Uzhhorod' },
        { year: '2005', label: 'Formation of the separate Ukraine and Moldova Provisional Annual Conference' },
        { year: '2020', label: 'Delegates vote to leave the Eurasia Episcopal Area' },
        { year: '2022', label: 'Received into the episcopal area of Northern Europe and the Baltics' },
      ],
    },
  },
};

export default function History() {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {c.backLabel}
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{c.pageTitle}</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Key Dates timeline */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10 mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
            {c.keyDates.heading}
          </h2>
          <ol className="space-y-4">
            {c.keyDates.items.map((item) => (
              <li key={item.year} className="flex gap-5">
                <span className="text-primary font-bold text-sm w-12 flex-shrink-0 pt-0.5">{item.year}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{item.label}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Chapters */}
        <div className="space-y-10">
          {c.chapters.map((chapter, i) => (
            <section key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
              <h2 className="text-xl font-bold mb-5 leading-snug">{chapter.title}</h2>
              <div className="space-y-4">
                {chapter.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {c.backLabel}
          </Link>
        </div>

      </div>
    </div>
  );
}
