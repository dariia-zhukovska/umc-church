import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Images, ImageOff, X, ChevronLeft, ChevronRight, Home, Heart, Users, Sparkles } from 'lucide-react';

// ── Photo gallery (same pattern as CongregationPage) ─────────────────────────

const photos: string[] = [];

function PhotoGallery({ lang }: { lang: 'en' | 'uk' }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : i)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : i)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, close, prev, next]);

  const heading = lang === 'uk' ? 'Фотогалерея' : 'Photo Gallery';
  const placeholder =
    lang === 'uk'
      ? 'Фотографії центру буде додано найближчим часом.'
      : 'Photos of the center will be added soon.';

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Images className="w-5 h-5 text-primary" />
          {heading}
        </h2>

        {photos.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-14 text-muted-foreground border border-dashed border-gray-200 rounded-xl bg-gray-50">
            <ImageOff className="w-8 h-8 text-gray-300" />
            <p className="text-sm text-center max-w-xs">{placeholder}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {photos.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
              >
                <img
                  src={src}
                  alt={`${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}

        {lightboxIndex !== null && photos.length > 0 && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={photos[lightboxIndex]}
              alt={`${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
              {lightboxIndex + 1} / {photos.length}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Content ───────────────────────────────────────────────────────────────────

const content = {
  uk: {
    hero: {
      title: '«Під замком»: простір прихистку, відновлення та надії',
      intro:
        'Духовно-соціальний центр «Під замком» у селі Кам\'яниця на Закарпатті — простір безпеки, турботи та духовної підтримки для людей, які постраждали від війни.',
    },
    acquired: {
      heading: 'Комплекс, придбаний для служіння людям',
      p1: 'На початку весни 2024 року, у розпал повномасштабної війни та активного служіння внутрішньо переміщеним особам, Об\'єднана Методистська Церква України за підтримки UMCOR придбала комплекс «Під замком» у селі Кам\'яниця на Закарпатті.',
      p2: 'Від самого початку це придбання мало дві основні цілі. Першою було створення безпечного прихистку для родин, змушених залишити свої домівки через війну. Другою — розвиток реабілітаційної діяльності для людей, які переживають психологічні, фізичні та духовні наслідки війни.',
    },
    shelter: {
      heading: 'Дім для внутрішньо переміщених родин',
      p1: 'Із квітня 2024 року до кінця липня 2026 року в центрі постійно проживали внутрішньо переміщені особи — дорослі й діти, цілі родини, які втратили безпечний дім.',
      p2: 'Упродовж цього часу центр забезпечував людей житлом, регулярним харчуванням, гуманітарною допомогою, практичною підтримкою та духовним супроводом.',
      p3: 'Для багатьох мешканців «Під замком» став не просто тимчасовим дахом над головою, а місцем, де їх приймали з повагою, допомагали адаптуватися до нових умов і повертали відчуття стабільності.',
      p4: 'Турбота про людей здійснювалася не лише через задоволення базових потреб, а й через особисте спілкування, молитву та присутність поруч.',
      supportLabel: 'Підтримка включала:',
      support: [
        'Житло та регулярне харчування.',
        'Гуманітарна допомога.',
        'Практична підтримка.',
        'Духовний супровід, спілкування та молитва.',
      ],
    },
    restoration: {
      heading: 'Новий етап: відновлення жінок, які постраждали від війни',
      p1: 'У серпні 2026 року центр розпочав новий етап служіння — проведення реабілітаційно-рекреаційних програм для жінок, які живуть із наслідками війни, хронічною тривогою та виснаженням.',
      participantsLabel: 'Учасниці програм:',
      participants: [
        'Жінки з міст і сіл, що перебувають під постійними обстрілами.',
        'Жінки-капеланки.',
        'Військовослужбовиці.',
        'Дружини військових.',
        'Жінки, які тривалий час здійснюють відповідальне соціальне служіння.',
      ],
      p2: 'Програми поєднують психологічне, фізичне та духовне відновлення. Учасниці мають можливість зупинитися, відпочити в безпечному середовищі, краще почути потреби свого тіла й душі, попрацювати з емоціями та відновити внутрішні ресурси.',
      activitiesLabel: 'До програм входять:',
      activities: [
        'Групові та індивідуальні зустрічі з психологом.',
        'Арттерапевтичні практики.',
        'Робота з тілом і масаж.',
        'Спокійний відпочинок.',
        'Духовні роздуми та молитва.',
        'Спілкування в підтримувальній спільноті.',
      ],
      p3: 'Від серпня 2026 року підтримку в центрі вже отримали три різні групи жінок. Дві з них складалися з жінок-капеланок, які служать пораненим військовим у шпиталях Києва та інших міст України, що регулярно зазнають небезпеки.',
      p4: 'Щодня вони перебувають поруч із людським болем, травмою та втратою, тому самі потребують місця, де можуть відпочити, бути почутими й відновити сили для подальшого служіння.',
    },
    generations: {
      heading: 'Служіння різним поколінням',
      p1: 'Діяльність «Під замком» не обмежується прихистком і програмами для жінок. У комплексі регулярно проводяться зустрічі та заходи для ветеранів війни, людей похилого віку, церковних служителів і волонтерів.',
      p2: 'Центр також бере участь у наданні гуманітарної допомоги людям, які опинилися у складних життєвих обставинах.',
      p3: 'Таким чином, «Під замком» поступово розвивається як простір комплексної турботи — місце, де поєднуються соціальна допомога, психологічна підтримка, фізичне відновлення та духовна опіка.',
    },
    mission: {
      heading: 'Місце, де відновлюється надія',
      p1: 'Місія центру ґрунтується на християнському переконанні, що кожна людина має гідність і не повинна залишатися наодинці зі своїм болем.',
      p2: 'Війна змінила потреби українського суспільства, і служіння «Під замком» також розвивається, відповідаючи на ці потреби.',
      p3: 'Сьогодні центр продовжує бути місцем гостинності, безпеки та живої віри — місцем, де виснажені люди можуть зупинитися, отримати підтримку, відновити сили й знову побачити надію на майбутнє.',
    },
    wider: {
      heading: 'Частина ширшого служіння церкви',
      note: 'Наведені нижче дані стосуються служіння Об\'єднаної Методистської Церкви України загалом, а не лише центру «Під замком».',
      p1: 'За чотири з половиною роки повномасштабної війни через прихистки та духовно-соціальні центри церкви допомогу отримали близько 4 000 внутрішньо переміщених осіб.',
      p2: 'Водночас Об\'єднана Методистська Церква України й сьогодні утримує та підтримує роботу окремого прихистку для внутрішньо переміщених осіб у місті Ужгороді. У ньому постійно проживають понад 40 людей — родини, які були змушені залишити свої домівки через війну.',
    },
  },
  en: {
    hero: {
      title: '"Pid Zamkom": A Place of Shelter, Restoration, and Hope',
      intro:
        'The "Pid Zamkom" Spiritual and Social Center in Kamianytsia, Zakarpattia, offers safety, care and spiritual support to people affected by the war.',
    },
    acquired: {
      heading: 'A Center Acquired to Serve People',
      p1: 'In early spring 2024, amid the full-scale war and the Church\'s active ministry to internally displaced persons, The United Methodist Church in Ukraine, with the support of UMCOR, acquired the "Pid Zamkom" complex in the village of Kamianytsia in Zakarpattia.',
      p2: 'From the beginning, the acquisition had two primary purposes. The first was to create a safe shelter for families who had been forced to leave their homes because of the war. The second was to develop rehabilitation programs for people experiencing the psychological, physical, and spiritual consequences of war.',
    },
    shelter: {
      heading: 'A Home for Internally Displaced Families',
      p1: 'From April 2024 until the end of July 2026, internally displaced people lived at the center on a permanent basis — adults and children, including entire families who had lost the safety of their homes.',
      p2: 'During this period, the center provided accommodation, regular meals, humanitarian assistance, practical support, and spiritual care.',
      p3: 'For many residents, "Pid Zamkom" became more than simply a temporary roof over their heads. It became a place where they were welcomed with dignity, helped to adapt to new circumstances, and supported in regaining a sense of stability.',
      p4: 'Care was provided not only by meeting basic needs, but also through personal communication, prayer, and simply being present with people in difficult circumstances.',
      supportLabel: 'Support provided included:',
      support: [
        'Accommodation and regular meals.',
        'Humanitarian assistance.',
        'Practical support.',
        'Spiritual care, personal connection and prayer.',
      ],
    },
    restoration: {
      heading: 'A New Stage: Restoration for Women Affected by War',
      p1: 'In August 2026, the center entered a new stage of ministry by launching rehabilitation and restorative programs for women living with the consequences of war, chronic anxiety, and exhaustion.',
      participantsLabel: 'Program participants include:',
      participants: [
        'Women from towns and villages under constant attack.',
        'Female chaplains.',
        'Servicewomen.',
        'Military spouses.',
        'Women who have carried demanding and long-term responsibilities in social ministry.',
      ],
      p2: 'The programs combine psychological, physical, and spiritual restoration. Participants are given an opportunity to pause, rest in a safe environment, become more attentive to the needs of their bodies and souls, work through their emotions, and restore their inner resources.',
      activitiesLabel: 'The programs include:',
      activities: [
        'Group and individual sessions with a psychologist.',
        'Art therapy.',
        'Body-oriented practices and massage.',
        'Quiet rest.',
        'Spiritual reflection and prayer.',
        'Fellowship within a supportive community.',
      ],
      p3: 'Since August 2026, three different groups of women have already received support at the center. Two of these groups consisted of female chaplains who minister to wounded service members in hospitals in Kyiv and other Ukrainian cities that regularly face danger.',
      p4: 'Every day, these women encounter human suffering, trauma, and loss. For this reason, they themselves need a place where they can rest, be heard, and regain strength for their continued ministry.',
    },
    generations: {
      heading: 'Ministry Across Generations',
      p1: 'The work of "Pid Zamkom" is not limited to shelter and programs for women. The complex regularly hosts meetings and activities for war veterans, older adults, church ministers, and volunteers.',
      p2: 'The center also participates in providing humanitarian assistance to people facing difficult life circumstances.',
      p3: 'In this way, "Pid Zamkom" is gradually developing into a space of comprehensive care — a place where social assistance, psychological support, physical restoration, and spiritual care come together.',
    },
    mission: {
      heading: 'A Place Where Hope Is Restored',
      p1: 'The mission of the center is grounded in the Christian conviction that every person has dignity and should not be left alone with their pain.',
      p2: 'The war has changed the needs of Ukrainian society, and the ministry of "Pid Zamkom" continues to develop in response to those needs.',
      p3: 'Today, the center continues to be a place of hospitality, safety, and living faith — a place where exhausted people can pause, receive support, regain their strength, and begin to see hope for the future again.',
    },
    wider: {
      heading: "Part of the Church's Wider Ministry",
      note: 'The figures below relate to the ministry of The United Methodist Church in Ukraine as a whole, not to the "Pid Zamkom" center alone.',
      p1: 'Over four and a half years of the full-scale war, approximately 4,000 internally displaced people have received assistance through the Church\'s shelters and spiritual and social centers.',
      p2: 'At the same time, The United Methodist Church in Ukraine continues to operate and support a separate shelter for internally displaced people in the city of Uzhhorod. More than 40 people live there permanently — families who were forced to leave their homes because of the war.',
    },
  },
};

// ── Page component ─────────────────────────────────────────────────────────────

export default function PidZamkom() {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">{c.hero.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{c.hero.intro}</p>
        </div>
      </section>

      {/* ── Hero photo placeholder ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 pb-10">
          <div className="w-full aspect-[16/7] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <ImageOff className="w-10 h-10 text-gray-300" />
            <span className="text-sm">
              {lang === 'uk' ? 'Загальне фото центру буде додано тут' : 'Main photo of the center will appear here'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-14">

        {/* ── Acquired ── */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-2xl font-bold mb-5">{c.acquired.heading}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{c.acquired.p1}</p>
            <p>{c.acquired.p2}</p>
          </div>
        </section>

        {/* ── Shelter (historical stage) ── */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <div className="flex items-center gap-2 mb-5">
            <Home className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">{c.shelter.heading}</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
            <p>{c.shelter.p1}</p>
            <p>{c.shelter.p2}</p>
            <p>{c.shelter.p3}</p>
            <p>{c.shelter.p4}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">{c.shelter.supportLabel}</p>
            <ul className="space-y-2">
              {c.shelter.support.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Restoration programs ── */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">{c.restoration.heading}</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{c.restoration.p1}</p>
          </div>

          <div className="mt-6 mb-6 grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">{c.restoration.participantsLabel}</p>
              <ul className="space-y-2">
                {c.restoration.participants.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">{c.restoration.activitiesLabel}</p>
              <ul className="space-y-2">
                {c.restoration.activities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{c.restoration.p2}</p>
            <p>{c.restoration.p3}</p>
            <p>{c.restoration.p4}</p>
          </div>
        </section>

        {/* ── Generations ── */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <div className="flex items-center gap-2 mb-5">
            <Users className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">{c.generations.heading}</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{c.generations.p1}</p>
            <p>{c.generations.p2}</p>
            <p>{c.generations.p3}</p>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <div className="flex items-center gap-2 mb-5">
            <Heart className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">{c.mission.heading}</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{c.mission.p1}</p>
            <p>{c.mission.p2}</p>
            <p>{c.mission.p3}</p>
          </div>
        </section>

        {/* ── Wider ministry (contextually distinct) ── */}
        <section className="rounded-xl border border-gray-200 bg-gray-100 p-7 lg:p-10">
          <h2 className="text-xl font-bold mb-3">{c.wider.heading}</h2>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-5 border-l-2 border-primary pl-3">
            {c.wider.note}
          </p>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>{c.wider.p1}</p>
            <p>{c.wider.p2}</p>
          </div>
        </section>

      </div>

      {/* ── Photo gallery ── */}
      <PhotoGallery lang={lang} />

    </div>
  );
}
