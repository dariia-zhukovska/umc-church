import { Heart, Users, Gift, CircleDollarSign, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ── External giving links ────────────────────────────────────────────────────
const ADVANCE_URL =
  'https://gbhem-umc.my.site.com/hemgm/s/campaign/a3fPo000000D46a/ukraine-and-moldova-in-mission-together';
const UMCOR_URL = 'https://umcmission.org/giving';

// ── Bilingual content ────────────────────────────────────────────────────────
const content = {
  en: {
    hero: {
      title: 'Support Our Mission',
      subtitle:
        'Your generosity helps communities across Ukraine serve others, care for people in need, and share hope.',
    },
    whyMatters: {
      title: 'Why Your Support Matters',
      p1: 'Even amid war, the United Methodist Church in Ukraine continues to serve its communities, share Christ’s love, and care for people in need.',
      p2: 'Your gifts help sustain shelters, provide humanitarian assistance and trauma care, support pastors, and develop youth ministry and community programs.',
      p3: 'Thank you to everyone who contributes through giving, prayer, and personal service. Your support helps this work continue.',
    },
    support: {
      title: 'Ways to Support',
      subtitle: "Choose how you’d like to support our ministry",
      cards: [
        {
          title: 'General Ministry Support',
          description:
            "Support the church’s mission, worship services, pastoral care, and outreach in communities across Ukraine.",
        },
        {
          title: 'Community Programs',
          description:
            'Help sustain humanitarian assistance, shelters, and care for displaced families and others in need.',
        },
        {
          title: 'Children & Youth Ministry',
          description:
            'Support Sunday school, youth groups, camps, and the development of the next generation of leaders.',
        },
        {
          title: 'Church Building & Maintenance',
          description:
            'Help maintain spaces where communities gather for worship, fellowship, and service.',
        },
      ],
    },
    howToGive: {
      title: 'How to Give',
      p1: 'To support the mission and ministry of the United Methodist Church in Ukraine and Moldova, give through The Advance #14053A.',
      p2: 'Your contribution helps support congregations, pastors, training, leadership development, and ministry to people in need.',
      cta: 'Give Through The Advance',
      contactText: 'Have questions about giving or bank transfers?',
      contactLink: 'Contact us.',
    },
    advanceUmcor: {
      title: 'The Advance and UMCOR: What’s the Difference?',
      intro:
        'We are grateful for every gift supporting people affected by the war. Choose a giving option according to the ministry you wish to support.',
      advance: {
        badge: '#14053A',
        name: 'The Advance #14053A',
        subtitle: 'Supporting United Methodist Ministry in Ukraine and Moldova',
        p1: 'This project supports the mission and ministry of the United Methodist Church in Ukraine and Moldova, including pastoral support, training, leadership development, and local church programs.',
        p2: 'According to In Mission Together, gifts also help sustain shelters, humanitarian assistance, and care for people affected by trauma.',
        p3: 'If you wish to support the mission and ministry of our United Methodist communities specifically, choose The Advance #14053A.',
        cta: 'Support the Ministry',
      },
      umcor: {
        badge: 'Advance #982450',
        name: 'UMCOR',
        subtitle: 'International Disaster Response and Recovery',
        p1: 'UMCOR assists people affected by disasters and humanitarian crises around the world, including those impacted by the war in Ukraine.',
        p2: 'It works through a broad network of humanitarian and faith-based partners. Contributions to this fund support international humanitarian work and are not designated exclusively for the ministries of the United Methodist Church in Ukraine.',
        cta: 'Learn About UMCOR',
      },
    },

    impact: {
      title: 'Together, We Make a Difference',
      p1: 'Thanks to the generosity and dedication of supporters like you, the United Methodist Church in Ukraine continues to worship God, serve communities, and bring hope to those who need it most.',
      p2: 'Thank you for prayerfully considering how you can support the United Methodist Church in Ukraine. We are honored to serve alongside you.',
    },
  },
  uk: {
    hero: {
      title: 'Підтримайте наше служіння',
      subtitle:
        'Ваша щедрість допомагає громадам по всій Україні служити людям, підтримувати тих, хто потребує допомоги, та ділитися надією.',
    },
    whyMatters: {
      title: 'Чому ваша підтримка важлива',
      p1: "Навіть під час війни Об'єднана Методистська Церква України продовжує служити своїм громадам, ділитися любов'ю Христа та підтримувати людей у потребі.",
      p2: 'Ваші пожертви допомагають підтримувати прихистки, надавати гуманітарну допомогу, піклуватися про людей, які пережили травматичні події, підтримувати пасторів і розвивати молодіжне служіння та програми громад.',
      p3: 'Дякуємо кожному, хто долучається через пожертви, молитву та особисте служіння. Ваша підтримка допомагає продовжувати цю працю.',
    },
    support: {
      title: 'Напрями підтримки',
      subtitle: 'Оберіть, як ви хочете підтримати наше служіння',
      cards: [
        {
          title: 'Загальна підтримка служіння',
          description:
            "Підтримуйте місію церкви, богослужіння, пасторську опіку та служіння людям у громадах України.",
        },
        {
          title: 'Допомога громаді',
          description:
            'Допомагайте забезпечувати гуманітарну підтримку, прихистки та турботу про переміщені родини й інших людей у потребі.',
        },
        {
          title: 'Дитяче та молодіжне служіння',
          description:
            'Підтримуйте недільну школу, молодіжні групи, табори та розвиток наступного покоління лідерів.',
        },
        {
          title: 'Утримання церковних приміщень',
          description:
            'Допомагайте утримувати простори, де громади збираються для богослужінь, спілкування та служіння людям.',
        },
      ],
    },
    howToGive: {
      title: 'Як зробити пожертву',
      p1: "Щоб підтримати місію та служіння Об'єднаної Методистської Церкви в Україні й Молдові, зробіть пожертву через The Advance #14053A.",
      p2: 'Ваш внесок допомагає підтримувати церковні громади, пасторів, навчання, розвиток лідерів і служіння людям.',
      cta: 'Пожертвувати через The Advance',
      contactText: 'Маєте запитання щодо пожертви або банківського переказу?',
      contactLink: "Зв'яжіться з нами.",
    },
    advanceUmcor: {
      title: 'The Advance та UMCOR: у чому різниця?',
      intro:
        'Ми вдячні за кожну пожертву на підтримку людей, які постраждали від війни. Оберіть спосіб підтримки відповідно до того, яке служіння ви хочете підтримати.',
      advance: {
        badge: '#14053A',
        name: 'The Advance #14053A',
        subtitle: 'Підтримка методистського служіння в Україні та Молдові',
        p1: "Цей проєкт підтримує місію та служіння Об'єднаної Методистської Церкви в Україні й Молдові, зокрема підтримку пасторів, навчання, розвиток лідерів і програми церковних громад.",
        p2: 'За інформацією In Mission Together, внески також допомагають підтримувати прихистки, гуманітарну допомогу та турботу про людей, які пережили травматичні події.',
        p3: "Якщо ви бажаєте підтримати саме місію та служіння наших методистських громад, оберіть The Advance #14053A.",
        cta: 'Підтримати служіння',
      },
      umcor: {
        badge: 'Advance #982450',
        name: 'UMCOR',
        subtitle: 'Міжнародна допомога та відновлення після катастроф',
        p1: 'UMCOR допомагає людям, які постраждали від катастроф і гуманітарних криз у різних країнах світу, зокрема від війни в Україні.',
        p2: "Організація працює через широку мережу гуманітарних і релігійних партнерів. Внески до цього фонду підтримують міжнародну гуманітарну діяльність і не призначені виключно для служінь Об'єднаної Методистської Церкви України.",
        cta: 'Дізнатися про UMCOR',
      },
    },

    impact: {
      title: 'Разом ми маємо значення',
      p1: "Завдяки щедрості та відданості таких людей, як ви, Об'єднана Методистська Церква в Україні продовжує поклонятися Богу, служити громадам і нести надію тим, хто її найбільше потребує.",
      p2: "Дякуємо, що молитовно розглядаєте, як ви можете підтримати Об'єднану Методистську Церкву в Україні. Ми раді служити разом з вами.",
    },
  },
} as const;

const SUPPORT_ICONS = [Heart, Users, Gift, CircleDollarSign];

export default function Help() {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── 1. Hero banner ─────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{c.hero.title}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">{c.hero.subtitle}</p>
        </div>
      </section>

      {/* ── 2. Why your support matters ───────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">{c.whyMatters.title}</h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">{c.whyMatters.p1}</p>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">{c.whyMatters.p2}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.whyMatters.p3}</p>
          </div>
        </div>
      </section>

      {/* ── 3. Support area cards + 4. How to Give ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.support.title}</h2>
            <p className="text-xl text-muted-foreground">{c.support.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {c.support.cards.map((card, idx) => {
              const Icon = SUPPORT_ICONS[idx];
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* How to Give */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">{c.howToGive.title}</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">{c.howToGive.p1}</p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{c.howToGive.p2}</p>
            <Button size="lg" asChild className="mb-6">
              <a href={ADVANCE_URL} target="_blank" rel="noopener noreferrer">
                {c.howToGive.cta}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              {c.howToGive.contactText}{' '}
              <Link to="/contacts" className="text-primary hover:underline underline-offset-2">
                {c.howToGive.contactLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. The Advance vs UMCOR ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{c.advanceUmcor.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {c.advanceUmcor.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 — The Advance */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardContent className="p-7 lg:p-8 flex flex-col h-full">
                <div className="mb-5">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
                    {c.advanceUmcor.advance.badge}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{c.advanceUmcor.advance.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{c.advanceUmcor.advance.subtitle}</p>
                </div>
                <div className="space-y-3 flex-1 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.advanceUmcor.advance.p1}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.advanceUmcor.advance.p2}</p>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{c.advanceUmcor.advance.p3}</p>
                </div>
                <Button className="w-full" asChild>
                  <a href={ADVANCE_URL} target="_blank" rel="noopener noreferrer">
                    {c.advanceUmcor.advance.cta}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 — UMCOR */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardContent className="p-7 lg:p-8 flex flex-col h-full">
                <div className="mb-5">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
                    {c.advanceUmcor.umcor.badge}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{c.advanceUmcor.umcor.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{c.advanceUmcor.umcor.subtitle}</p>
                </div>
                <div className="space-y-3 flex-1 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.advanceUmcor.umcor.p1}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.advanceUmcor.umcor.p2}</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={UMCOR_URL} target="_blank" rel="noopener noreferrer">
                    {c.advanceUmcor.umcor.cta}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ── Impact statement ─────────────────────────────────────────────── */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{c.impact.title}</h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">{c.impact.p1}</p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">{c.impact.p2}</p>
        </div>
      </section>

    </div>
  );
}
