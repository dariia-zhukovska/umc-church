import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, User } from 'lucide-react';

interface MinisterData {
  id: number;
  name: { en: string; uk: string };
  role: { en: string; uk: string };
  congregationName?: { en: string; uk: string };
  congregationSlug?: string;   // internal route
  congregationUrl?: string;    // external URL
  email?: string;
}

const ministers: MinisterData[] = [
  {
    id: 0,
    name: { en: 'Knut Refsdal', uk: 'Кнут Рефсдал' },
    role: { en: 'Bishop', uk: 'Єпископ' },
    congregationName: { en: 'Northern Europe and Ukraine Regional Conference UMC', uk: 'Регіональна конференція Північної Європи та України ОМЦ' },
    congregationUrl: 'https://www.umc-ne.org/',
    email: 'knut.refsdal@umc-ne.org',
  },
  {
    id: 1,
    name: { en: 'Oleh Starodubets', uk: 'Олег Стародубець' },
    role: { en: 'District Superintendent', uk: 'Старший пастор' },
    congregationName: { en: 'LightHouse Church, Uzhhorod', uk: 'LightHouse Church, Ужгород' },
    congregationSlug: '/churches/lighthouse-uzhhorod',
    email: 'oleg.umc333@gmail.com',
  },
  {
    id: 2,
    name: { en: 'Yuliia Starodubets', uk: 'Юлія Стародубець' },
    role: { en: 'Director', uk: 'Директорка' },
    congregationName: { en: '"Pid Zamkom" Social and Spiritual Center', uk: 'Соціально-духовний центр «Під Замком»' },
    congregationSlug: '/pid-zamkom',
    email: 'yuliastar79@gmail.com',
  },
  {
    id: 3,
    name: { en: 'Vasyl Vuksta', uk: 'Василь Вукста' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: 'United Methodist Church in Uzhhorod', uk: "Об'єднаної Методистської Церкви в Ужгороді" },
    congregationSlug: '/churches/umc-uzhhorod',
  },
  {
    id: 4,
    name: { en: 'Alla Vuksta', uk: 'Алла Вукста' },
    role: { en: 'Pastor', uk: 'Пасторка' },
    congregationName: { en: 'United Methodist Church in Kamianytsia', uk: "Об'єднаної Методистської Церкви в Кам'яниці" },
    congregationSlug: '/churches/kamianytsia',
  },
  {
    id: 5,
    name: { en: 'Petro Korpanets', uk: 'Петро Корпанець' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: 'United Methodist Church in Perechyn', uk: 'Об\'єднаної Методистської Церкви в Перечині' },
    congregationSlug: '/churches/perechyn',
  },
  {
    id: 6,
    name: { en: 'Volodymyr Surmai', uk: 'Володимир Сурмай' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: 'Serednie United Methodist Church', uk: "Об'єднаної Методистської Церкви «Середнє»" },
    congregationSlug: '/churches/serednie',
  },
  {
    id: 7,
    name: { en: 'Volodymyr Khabryko', uk: 'Володимир Хабрико' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: 'Dzherelo United Methodist Church, Kyiv', uk: "Об'єднаної Методистської Церкви «Джерело», Київ" },
    congregationSlug: '/churches/dzherelo-kyiv',
  },
  {
    id: 8,
    name: { en: 'Oleksandr Omelchenko', uk: 'Олександр Омельченко' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: 'Hope of the World Church, Ukrainka', uk: "Церкви «Надія Світу», Українка" },
    congregationSlug: '/churches/hope-of-the-world-ukrainka',
  },
  {
    id: 9,
    name: { en: 'Volodymyr Prokip', uk: 'Володимир Прокіп' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: "St. John's United Methodist Church, Lviv", uk: "Об'єднаної Методистської Церкви святого Івана, Львів" },
    congregationSlug: '/churches/st-johns-lviv',
  },
  {
    id: 10,
    name: { en: 'Liubomyr Rudko', uk: 'Любомир Рудько' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: "St. John's United Methodist Church, Lviv", uk: "Об'єднаної Методистської Церкви святого Івана, Львів" },
    congregationSlug: '/churches/st-johns-lviv',
  },
  {
    id: 11,
    name: { en: 'Dennis Kim', uk: 'Денніс Кім' },
    role: { en: 'Pastor; online ministry', uk: 'Пастор; онлайн-служіння' },
    congregationName: { en: 'United Methodist Church in Kharkiv', uk: 'Об\'єднаної Методистської Церкви в Харкові' },
    congregationSlug: '/churches/kharkiv',
  },
  {
    id: 12,
    name: { en: 'Oleksandr Arnaut', uk: 'Олександр Арнаут' },
    role: { en: 'Pastor', uk: 'Пастор' },
    congregationName: { en: 'United Methodist Church in Bispingen, Germany', uk: 'Об\'єднаної Методистської Церкви в Біспінгені, Німеччина' },
    congregationSlug: '/churches/bispingen',
  },
  {
    id: 13,
    name: { en: 'Kateryna Dziamko', uk: 'Катерина Дзямко' },
    role: { en: 'Youth Leader of the United Methodist Church in Ukraine', uk: "Молодіжна лідерка Об'єднаної Методистської Церкви в Україні" },
  },
  {
    id: 14,
    name: { en: 'Yevheniia Fedorova', uk: 'Євгенія Федорова' },
    role: { en: 'Chaplain', uk: 'Капеланка' },
  },
];

function PortraitPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <div className="w-full aspect-[3/4] bg-gray-100 flex flex-col items-center justify-center gap-3 border-b border-border">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <User className="w-8 h-8 text-gray-400" />
      </div>
      <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">{initials}</span>
    </div>
  );
}

function MinisterCard({ minister, lang }: { minister: MinisterData; lang: 'en' | 'uk' }) {
  const name = minister.name[lang];
  const role = minister.role[lang];
  const congregationName = minister.congregationName?.[lang];

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Portrait area */}
      <PortraitPlaceholder name={name} />

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-base font-semibold leading-snug text-foreground">{name}</h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground leading-snug">{role}</p>
          {congregationName && minister.congregationUrl ? (
            <a
              href={minister.congregationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline underline-offset-2 leading-snug font-medium"
            >
              {congregationName}
            </a>
          ) : congregationName && minister.congregationSlug ? (
            <Link
              to={minister.congregationSlug}
              className="text-sm text-primary hover:underline underline-offset-2 leading-snug font-medium"
            >
              {congregationName}
            </Link>
          ) : congregationName ? (
            <p className="text-sm text-foreground leading-snug">{congregationName}</p>
          ) : null}
        </div>

        {/* Reserved email area */}
        <div className="mt-auto pt-3 border-t border-border">
          {minister.email ? (
            <a
              href={`mailto:${minister.email}`}
              className="flex items-center gap-2 text-sm text-primary hover:underline underline-offset-2"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              {minister.email}
            </a>
          ) : (
            <div className="flex items-center gap-2 text-sm text-muted-foreground/50 select-none">
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="italic">—</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Ministers() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';

  const heading = lang === 'uk' ? 'Наші служителі' : 'Our Ministry Team';
  const subtitle =
    lang === 'uk'
      ? "Пастори, капелани та лідери, які служать у громадах Об'єднаної Методистської Церкви в Україні та за кордоном."
      : 'Pastors, chaplains and leaders serving United Methodist Church communities in Ukraine and abroad.';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministers.map((minister) => (
              <MinisterCard key={minister.id} minister={minister} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
