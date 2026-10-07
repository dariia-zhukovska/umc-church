import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface BiLang {
  en: string;
  uk: string;
}

interface NewsSection {
  heading?: BiLang;
  paragraphs: BiLang[];
}

interface NewsPhoto {
  url: string;
  alt: BiLang;
  caption?: BiLang;
}

interface NewsArticle {
  slug: string;
  order: number;
  published: boolean;
  cover: string;
  coverAlt: BiLang;
  period: BiLang | null;
  title: BiLang;
  excerpt: BiLang;
  sections: NewsSection[];
  sourceText: BiLang;
  sourceUrl?: string;
  photos: NewsPhoto[];
}

// ── Content ───────────────────────────────────────────────────────────────────

const articles: NewsArticle[] = [
  // ── 1. Children of the King ────────────────────────────────────────────────
  {
    slug: 'children-of-the-king',
    order: 1,
    published: true,
    cover: '',
    coverAlt: {
      en: 'Children gathered at the "Children of the King" summer day camp in Kamianytsia',
      uk: 'Діти на літньому денному таборі «Діти Царя» в Кам\'яниці',
    },
    period: {
      en: 'August 19–22',
      uk: '19–22 серпня',
    },
    title: {
      en: 'Children of the King: Planting Seeds for the Next Generation',
      uk: 'Діти Царя: сіємо зерна віри для наступного покоління',
    },
    excerpt: {
      en: 'From August 19–22, around 80 children gathered in Kamianytsia for "Children of the King." Bible stories, creative activities, games, and dedicated volunteers helped plant seeds of faith that can grow for years to come.',
      uk: '19–22 серпня близько 80 дітей зібралися на денний табір «Діти Царя» в Кам\'яниці. Біблійні історії, творчість, ігри та турбота волонтерів стали частиною служіння, плоди якого зростають роками.',
    },
    sections: [
      {
        paragraphs: [
          {
            en: 'From August 19–22, the United Methodist Church in Kamianytsia welcomed around 80 children for its annual summer day camp, "Children of the King." The camp was open to children from across the village, including children from families of internally displaced persons for whom the congregation has become a new home. Some traveled especially from nearby towns and from Uzhhorod.',
            uk: '19–22 серпня Об\'єднана Методистська Церква в Кам\'яниці прийняла близько 80 дітей на щорічний літній денний табір «Діти Царя». До нього могли долучитися діти з усього села, зокрема діти з родин внутрішньо переміщених осіб, для яких громада стала новим домом. Дехто спеціально приїхав із сусідніх населених пунктів та Ужгорода.',
          },
          {
            en: 'For many local children, the camp has already become a summer tradition they look forward to eagerly. According to the congregation\'s leaders, children start asking about it long before it begins.',
            uk: 'Для багатьох місцевих дітей табір уже став літньою традицією, на яку вони чекають із нетерпінням. За словами керівників громади, діти починають запитувати про нього задовго до початку.',
          },
          {
            en: 'The theme "Children of the King" was rooted in a simple truth: God is our King, and each of us is His beloved child with a place in His Kingdom.',
            uk: 'Тема «Діти Царя» ґрунтувалася на простій думці: Бог — наш Цар, а кожен із нас — Його улюблена дитина, яка має місце в Його Царстві.',
          },
          {
            en: 'Over four days, children encountered three Bible stories. They learned about David — an ordinary young man chosen by God to become king. They heard the story of Queen Esther, who understood that her position carried a calling to serve God and people with courage. And at the center of it all was the story of Jesus Christ — our true and eternal King.',
            uk: 'Протягом чотирьох днів діти знайомилися з трьома біблійними історіями. Вони дізналися про Давида — звичайного юнака, якого Бог обрав стати царем. Почули історію цариці Естер, яка зрозуміла, що її становище передбачає покликання сміливо служити Богові та людям. Центральною ж була історія Ісуса Христа — нашого істинного й вічного Царя.',
          },
          {
            en: 'Jesus showed children a completely different picture of kingship. He came to earth not demanding recognition, honor, or power — but to live among us and serve. The central message woven through the entire camp was this: Jesus is our King, and we are His children.',
            uk: 'Ісус показав дітям зовсім інший приклад царювання. Він прийшов на землю, не вимагаючи визнання, пошани чи влади, а щоб жити серед нас і служити. Упродовж табору звучала головна думка: Ісус — наш Цар, а ми — Його діти.',
          },
        ],
      },
      {
        heading: {
          en: "Opening God's Kingdom Together",
          uk: 'Відкриваємо Боже Царство разом',
        },
        paragraphs: [
          {
            en: 'Each day the camp team gathered early to pray and prepare before the children arrived. From 10:00 a.m. to 3:00 p.m. the church was filled with music, laughter, learning, and a variety of activities.',
            uk: 'Щодня команда табору збиралася завчасно, щоб помолитися й підготуватися до приходу дітей. Із 10:00 до 15:00 церква була сповнена музики, сміху, навчання та різноманітних занять.',
          },
          {
            en: 'Children rotated through several stations. At the sports station, water games were especially popular — water balloons, sponge relays, and other competitions. At the music station, they learned Christian songs with movement and tried playing simple musical and percussion instruments.',
            uk: 'Діти по черзі відвідували кілька станцій. На спортивній станції особливо подобалися водні ігри, кульки з водою, естафети з губками та інші змагання. На музичній — вони вивчали християнські пісні з рухами та пробували грати на простих музичних і ударних інструментах.',
          },
          {
            en: 'Creative activities gave each child a chance to make something by hand: decorating a cup, making a pencil case, or crafting a bracelet connected to the camp theme.',
            uk: 'Творчі заняття давали можливість зробити щось власноруч: прикрасити чашку, виготовити пенал або створити браслет, пов\'язаний із темою табору.',
          },
          {
            en: 'Bible stories came alive at the historical drama station. Actors in period costumes portrayed David, Esther, and Jesus. The costumes and staging helped the children step into the stories rather than simply listening to them.',
            uk: 'Біблійні історії оживали на історично-театральній станції. Актори в костюмах відповідної епохи зображали Давида, Естер та Ісуса. Костюми й оформлення допомагали дітям зануритися в історії, а не лише послухати їх.',
          },
          {
            en: 'During the first three days, children worked with their mentors on team projects: brainstorming ideas, planning, and creating together. On the final day, each team presented its work to all the participants.',
            uk: 'Упродовж перших трьох днів діти разом із наставниками працювали над командними проєктами: обговорювали ідеї, планували й творили. В останній день кожна команда представила свою роботу всім учасникам.',
          },
          {
            en: 'And of course, there was no shortage of treats! Throughout the camp, children enjoyed baked goods, snacks, hot dogs, watermelon, ice cream, and other delights.',
            uk: 'І, звичайно, не бракувало частувань! Протягом табору діти ласували випічкою, перекусами, хот-догами, кавуном, морозивом та іншими смаколиками.',
          },
        ],
      },
      {
        heading: {
          en: 'Youth Serving the Next Generation',
          uk: 'Молодь служить наступному поколінню',
        },
        paragraphs: [
          {
            en: 'Around 23 young people and volunteers from Methodist churches in Kamianytsia, Uzhhorod, and Lviv gave their time, energy, and talents to make this camp happen.',
            uk: 'Близько 23 молодих людей і волонтерів із методистських церков Кам\'яниці, Ужгорода та Львова присвятили свій час, сили й таланти, щоб цей табір відбувся.',
          },
          {
            en: 'Those who observed their service were struck by their attitude. They were not simply completing tasks because someone had asked for help. They understood serving children as serving God, and they gave their best — with joy, creativity, and love.',
            uk: 'Тих, хто спостерігав за їхнім служінням, вражало їхнє ставлення до справи. Вони не просто виконували завдання, тому що хтось попросив допомогти. Вони сприймали служіння дітям як служіння Богові й віддавали найкраще з радістю, творчістю та любов\'ю.',
          },
          {
            en: 'The entire camp — activities, materials, food, and treats — was organized and funded by the Kamianytsia Methodist Church community using its own resources.',
            uk: 'Увесь табір — заняття, матеріали, харчування та частування — громада Методистської Церкви в Кам\'яниці організувала й профінансувала власними ресурсами.',
          },
          {
            en: 'But perhaps the most important part of this story begins after the four camp days come to a close.',
            uk: 'Та, мабуть, найважливіша частина цієї історії починається після завершення чотирьох табірних днів.',
          },
          {
            en: 'This year the congregation is launching a new ministry for teenagers aged 11–14. Two young people — Karina and Max — have agreed to lead it. What gives their ministry special significance is that they themselves were once participants in this very children\'s camp.',
            uk: 'Цього року громада започатковує нове служіння для підлітків віком 11–14 років. Його погодилися очолити двоє молодих людей — Каріна та Макс. Особливого значення їхньому служінню додає те, що колись вони самі були учасниками цього дитячого табору.',
          },
          {
            en: 'They grew up attending camp, later joined the church\'s youth ministry, gave their lives to God, and are now ready to serve the next generation of children. Their story shows what lasting impact this kind of ministry can have.',
            uk: 'Вони виросли, відвідуючи табір, згодом долучилися до молодіжного служіння церкви, присвятили своє життя Богові й тепер готові служити наступному поколінню дітей. Їхня історія показує, який тривалий вплив може мати таке служіння.',
          },
          {
            en: 'And this is not the first time the congregation has seen such fruit.',
            uk: 'І це не перший випадок, коли громада бачить подібні плоди.',
          },
          {
            en: 'Many years ago, following one of the children\'s camps, a youth club was founded at the church and led by Alona. Over time its participants grew up and joined the youth ministry. Today Alona continues to invest in the next generation as a Sunday school teacher.',
            uk: 'Багато років тому після одного з дитячих таборів у церкві започаткували підлітковий клуб, який очолила Альона. З часом його учасники виросли й долучилися до молодіжного служіння. Сьогодні Альона продовжує вкладати в наступне покоління як учителька недільної школи.',
          },
          {
            en: 'These stories show how ministry that begins at a children\'s camp can bear fruit for many years.',
            uk: 'Ці історії показують, як служіння, що починається з дитячого табору, може приносити плоди протягом багатьох років.',
          },
          {
            en: 'According to the congregation\'s leaders, if you were to ask many local young people aged 20–25 whether they had ever attended a children\'s camp at the Methodist Church, there is a very good chance they would say: "Yes, I did."',
            uk: 'За словами керівників громади, якщо запитати багатьох місцевих молодих людей віком 20–25 років, чи відвідували вони колись дитячий табір при Методистській Церкві, цілком імовірно, що вони скажуть: «Так, відвідували».',
          },
          {
            en: 'That is why, for the church, this ministry is far more than four fun summer days.',
            uk: 'Саме тому для церкви це служіння — набагато більше, ніж чотири веселих літніх дні.',
          },
          {
            en: 'Every Bible story, song, game, creative activity, shared meal, and friendship formed is an opportunity to plant a seed. The congregation does not always see immediately what will grow from it. Some seeds take years. But there is hope that one day the seed planted in a child\'s heart will take root, grow into faith, and bear fruit.',
            uk: 'Кожна біблійна історія, пісня, гра, творча робота, спільна трапеза та дружні стосунки — це можливість посіяти зерно. Громада не завжди одразу бачить, що з нього виросте. Деяким зернам потрібні роки. Але є надія, що одного дня зерно, посіяне в серці дитини, вкорениться, зросте у віру й принесе плід.',
          },
          {
            en: 'Karina and Max remind us that sometimes those fruits can be seen with our own eyes.',
            uk: 'Каріна та Макс нагадують нам, що іноді ці плоди можна побачити на власні очі.',
          },
          {
            en: '"Children of the King" is more than a summer camp. It is an investment in the next generation and an opportunity to plant seeds of God\'s love that will grow for many years to come.',
            uk: '«Діти Царя» — це більше, ніж літній табір. Це внесок у наступне покоління та можливість сіяти зерна Божої любові, які зростатимуть ще багато років.',
          },
        ],
      },
    ],
    sourceText: {
      en: 'Article generated from a conversation with Kamianytsia leader Katya Vuksta and shared in the In Mission Together newsletter.',
      uk: 'Статтю підготовлено на основі розмови з Катею Вукстою, лідеркою громади в Кам\'яниці. Матеріал із розсилки In Mission Together.',
    },
    sourceUrl: 'https://myemail.constantcontact.com/Ukraine-UMC-Newsletter.html?soid=1111870609845&aid=83zpiXHH6qI',
    photos: [],
  },

  // ── 2. Relationship Camp ───────────────────────────────────────────────────
  {
    slug: 'relationship-camp-no-fear',
    order: 2,
    published: true,
    cover: '',
    coverAlt: {
      en: 'Participants of Relationship Camp: No Fear',
      uk: 'Учасники Relationship Camp: No Fear',
    },
    period: {
      en: 'July 2026',
      uk: 'Липень 2026',
    },
    title: {
      en: 'Relationship Camp: No Fear — Faith, Community, and Hope',
      uk: 'Relationship Camp: No Fear — віра, спільнота та надія',
    },
    excerpt: {
      en: 'A youth camp exploring fear, trust in God, and mutual support during wartime.',
      uk: 'Молодіжний табір про страх, довіру Богові та підтримку одне одного під час війни.',
    },
    sections: [
      {
        paragraphs: [
          {
            en: 'In July 2026, Relationship Camp: No Fear brought together approximately 95 campers, leaders, and American volunteers. Around half the campers were not actively involved in church, and nearly twenty were internally displaced by the war.',
            uk: 'У липні 2026 року Relationship Camp: No Fear об\'єднав близько 95 учасників, лідерів та американських волонтерів. Майже половина учасників табору не була активно залучена до церковного життя, а близько двадцяти були внутрішньо переміщеними через війну.',
          },
          {
            en: 'Bible messages, shared prayer, and small-group conversations helped young people discuss fears about the future, loss, and loneliness while learning to trust God. Games, fellowship, and an evening around the campfire created opportunities for friendship.',
            uk: 'Біблійні роздуми, спільні молитви та розмови в малих групах допомагали молоді говорити про страх майбутнього, втрати й самотності та вчитися довіряти Богові. Спілкування, ігри й вечір біля вогнища створювали простір для нових дружніх стосунків.',
          },
          {
            en: 'After camp, some participants expressed a desire to attend church. The week reminded them that they do not face their fears alone.',
            uk: 'Після табору деякі учасники захотіли відвідувати церкву. Цей тиждень став нагадуванням: у своїх переживаннях вони не самі.',
          },
        ],
      },
    ],
    sourceText: {
      en: 'Adapted from the In Mission Together newsletter — July 2026 Summer Camp Report.',
      uk: 'Узагальнено за матеріалами розсилки In Mission Together — July 2026 Summer Camp Report.',
    },
    sourceUrl: 'https://myemail.constantcontact.com/Ukraine-UMC-Newsletter.html?soid=1111870609845&aid=83zpiXHH6qI',
    photos: [],
  },

  // ── 3. Placeholder (not published) ────────────────────────────────────────
  {
    slug: 'placeholder-3',
    order: 3,
    published: false,
    cover: '',
    coverAlt: { en: '', uk: '' },
    period: null,
    title: { en: '', uk: '' },
    excerpt: { en: '', uk: '' },
    sections: [],
    sourceText: { en: '', uk: '' },
    photos: [],
  },
];

const visibleArticles = articles
  .filter((a) => a.published)
  .sort((a, b) => a.order - b.order);

// ── UI labels ─────────────────────────────────────────────────────────────────

const ui = {
  en: {
    pageTitle: 'News',
    pageSubtitle: 'Stories from our church communities across Ukraine',
    readMore: 'Read more',
    allNews: 'All news',
    gallery: 'Photo gallery',
    source: 'Source',
    of: 'of',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    relatedLabel: 'Read also',
  },
  uk: {
    pageTitle: 'Новини',
    pageSubtitle: 'Розповіді з наших громад по всій Україні',
    readMore: 'Читати далі',
    allNews: 'Усі новини',
    gallery: 'Фотогалерея',
    source: 'Джерело',
    of: 'із',
    close: 'Закрити',
    prev: 'Попереднє',
    next: 'Наступне',
    relatedLabel: 'Читайте також',
  },
};

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  photos,
  startIndex,
  onClose,
  lang,
  labels,
}: {
  photos: NewsPhoto[];
  startIndex: number;
  onClose: () => void;
  lang: 'en' | 'uk';
  labels: typeof ui.en;
}) {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (dx > 50) prev();
        else if (dx < -50) next();
        touchStartX.current = null;
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <span className="text-white/70 text-sm">{index + 1} {labels.of} {photos.length}</span>
        <button onClick={onClose} className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors" aria-label={labels.close}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center px-16 min-h-0" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.url}
          alt={photo.alt[lang]}
          className="max-h-full max-w-full object-contain rounded-sm select-none"
        />
      </div>

      {/* Caption */}
      {photo.caption?.[lang] && (
        <div className="px-5 pt-3 pb-1 text-center flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <p className="text-white/70 text-sm">{photo.caption[lang]}</p>
        </div>
      )}

      {/* Nav */}
      <div className="flex justify-between items-center px-5 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <button onClick={prev} className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors p-2 hover:bg-white/10 rounded-lg" aria-label={labels.prev}>
          <ChevronLeft className="w-5 h-5" /> {labels.prev}
        </button>
        <button onClick={next} className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors p-2 hover:bg-white/10 rounded-lg" aria-label={labels.next}>
          {labels.next} <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ── Photo Gallery ─────────────────────────────────────────────────────────────

function PhotoGallery({ photos, lang, labels }: { photos: NewsPhoto[]; lang: 'en' | 'uk'; labels: typeof ui.en }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  return (
    <section className="mt-10 pt-8 border-t border-gray-100">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Images className="w-5 h-5 text-primary" />
        {labels.gallery}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={photo.url}
              alt={photo.alt[lang]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          lang={lang}
          labels={labels}
        />
      )}
    </section>
  );
}

// ── Cover placeholder ─────────────────────────────────────────────────────────

function CoverPlaceholder({ aspectClass = 'aspect-[21/9]' }: { aspectClass?: string }) {
  return (
    <div className={`${aspectClass} bg-gray-100 flex items-center justify-center rounded-xl`}>
      <span className="text-gray-300 text-sm">Photo</span>
    </div>
  );
}

// ── Article page ──────────────────────────────────────────────────────────────

function ArticlePage({ article, lang }: { article: NewsArticle; lang: 'en' | 'uk' }) {
  const labels = ui[lang];
  const other = visibleArticles.filter((a) => a.slug !== article.slug).slice(0, 1)[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back */}
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {labels.allNews}
        </Link>

        {/* Header */}
        <div className="mb-6">
          {article.period && (
            <p className="text-sm text-primary font-medium mb-3">{article.period[lang]}</p>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{article.title[lang]}</h1>
        </div>

        {/* Cover */}
        <div className="mb-8 rounded-xl overflow-hidden">
          {article.cover
            ? <img src={article.cover} alt={article.coverAlt[lang]} className="w-full aspect-[21/9] object-cover" />
            : <CoverPlaceholder />}
        </div>

        {/* Article body */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          {article.sections.map((section, si) => (
            <div key={si} className={si > 0 ? 'mt-8' : ''}>
              {section.heading && (
                <h2 className="text-xl font-bold mb-4 mt-2">{section.heading[lang]}</h2>
              )}
              <div className="space-y-4">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-sm text-muted-foreground leading-relaxed">{p[lang]}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Source */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{labels.source}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {article.sourceText[lang]}
              {article.sourceUrl && (
                <>
                  {' '}
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-2 break-all"
                  >
                    In Mission Together
                  </a>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <PhotoGallery photos={article.photos} lang={lang} labels={labels} />

        {/* Related */}
        {other && (
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">{labels.relatedLabel}</p>
            <Link
              to={`/news/${other.slug}`}
              className="group flex gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                {other.cover
                  ? <img src={other.cover} alt={other.coverAlt[lang]} className="w-full h-full object-cover" />
                  : <div className="w-full h-full bg-gray-100" />}
              </div>
              <div className="flex flex-col justify-center min-w-0">
                {other.period && <p className="text-xs text-primary font-medium mb-1">{other.period[lang]}</p>}
                <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">{other.title[lang]}</h3>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 self-center ml-auto group-hover:text-primary transition-colors" />
            </Link>
          </div>
        )}

        {/* Back bottom */}
        <div className="mt-10">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {labels.allNews}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── News list ─────────────────────────────────────────────────────────────────

function NewsList({ lang }: { lang: 'en' | 'uk' }) {
  const labels = ui[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{labels.pageTitle}</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">{labels.pageSubtitle}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/news/${article.slug}`}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-gray-200 transition-all flex flex-col"
              >
                {/* Cover */}
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 flex-shrink-0">
                  {article.cover
                    ? <img src={article.cover} alt={article.coverAlt[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    : <div className="w-full h-full bg-gray-100 flex items-center justify-center"><span className="text-gray-300 text-xs">Photo</span></div>}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  {article.period && (
                    <p className="text-xs font-medium text-primary mb-2">{article.period[lang]}</p>
                  )}
                  <h2 className="text-lg font-bold leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title[lang]}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                    {article.excerpt[lang]}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                    {labels.readMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function News() {
  const { id } = useParams<{ id?: string }>();
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';

  if (id) {
    const article = visibleArticles.find((a) => a.slug === id);
    if (!article) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{lang === 'uk' ? 'Статтю не знайдено.' : 'Article not found.'}</p>
            <Link to="/news" className="text-primary hover:underline underline-offset-2 text-sm font-medium">
              {ui[lang].allNews}
            </Link>
          </div>
        </div>
      );
    }
    return <ArticlePage article={article} lang={lang} />;
  }

  return <NewsList lang={lang} />;
}
