import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ChurchMapPreview from "./ChurchMapPreview";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Church worship service",
  },
  {
    url: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Community gathering",
  },
  {
    url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Prayer and worship",
  },
  {
    url: "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Community praise",
  },
];

const newsItems = [
  {
    slug: "children-of-the-king",
    cover: "",
    period: { en: "August 19–22", uk: "19–22 серпня" },
    title: {
      en: "Children of the King: Planting Seeds for the Next Generation",
      uk: "Діти Царя: сіємо зерна віри для наступного покоління",
    },
    excerpt: {
      en: 'From August 19–22, around 80 children gathered in Kamianytsia for "Children of the King." Bible stories, creative activities, games, and dedicated volunteers helped plant seeds of faith.',
      uk: "19–22 серпня близько 80 дітей зібралися на денний табір «Діти Царя» в Кам'яниці. Біблійні історії, творчість, ігри та турбота волонтерів стали частиною служіння, плоди якого зростають роками.",
    },
  },
  {
    slug: "relationship-camp-no-fear",
    cover: "",
    period: { en: "July 2026", uk: "Липень 2026" },
    title: {
      en: "Relationship Camp: No Fear — Faith, Community, and Hope",
      uk: "Relationship Camp: No Fear — віра, спільнота та надія",
    },
    excerpt: {
      en: "A youth camp exploring fear, trust in God, and mutual support during wartime.",
      uk: "Молодіжний табір про страх, довіру Богові та підтримку одне одного під час війни.",
    },
  },
];

// const upcomingEvents = [
//   {
//     id: 1,
//     date: { day: '25', month: 'May' },
//     title: 'Sunday Worship Service',
//     time: '10:00 AM',
//     location: 'Kyiv Central Church'
//   },
//   {
//     id: 2,
//     date: { day: '28', month: 'May' },
//     title: 'Pastoral Leadership Meeting',
//     time: '2:00 PM',
//     location: 'Online via Zoom'
//   },
//   {
//     id: 3,
//     date: { day: '01', month: 'Jun' },
//     title: 'Youth Group Fellowship',
//     time: '6:00 PM',
//     location: 'Lviv UMC'
//   },
//   {
//     id: 4,
//     date: { day: '05', month: 'Jun' },
//     title: 'Community Prayer Vigil',
//     time: '7:00 PM',
//     location: 'Odesa Church'
//   }
// ];

const churchPoints = [
  { id: 1, name: "Kyiv (Dzherelo)", position: { top: "30%", left: "55%" } },
  { id: 2, name: "Ukrainka", position: { top: "32%", left: "56%" } },
  { id: 3, name: "Lviv", position: { top: "35%", left: "24%" } },
  { id: 4, name: "Uzhhorod", position: { top: "40%", left: "18%" } },
  { id: 5, name: "Kamianytsia", position: { top: "40.5%", left: "19.5%" } },
  { id: 6, name: "Perechyn", position: { top: "38%", left: "22%" } },
  { id: 7, name: "Serednie", position: { top: "42%", left: "20.5%" } },
  { id: 8, name: "Kharkiv", position: { top: "35%", left: "65%" } },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === "uk" ? "uk" : "en") as "en" | "uk";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t("home.hero.description")}
              </p>
              <Button size="lg" asChild>
                <Link to="/about">{t("common.learnMore")}</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={carouselImages[currentSlide].url}
                  alt={carouselImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">{t("home.about.title")}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t("home.about.text1")}
            </p>
            <p className="text-xl font-semibold text-primary mb-8 border-l-4 border-primary pl-4">
              {t("home.about.text2")}
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">
                {t("home.about.readStory")}{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {t("home.news.title")}
              </h2>
              <p className="text-muted-foreground">{t("home.news.subtitle")}</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/news">{t("home.news.viewAll")}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <Card
                key={item.slug}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/news/${item.slug}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100 flex items-center justify-center">
                    {item.cover ? (
                      <img
                        src={item.cover}
                        alt={item.title[lang]}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-gray-300 text-xs">Photo</span>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs font-medium text-primary mb-2">
                      {item.period[lang]}
                    </p>
                    <h3 className="font-bold mb-2 leading-snug">
                      {item.title[lang]}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.excerpt[lang]}
                    </p>
                    <span className="text-sm font-medium text-primary hover:underline">
                      {lang === "uk" ? "Читати далі →" : "Read more →"}
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('home.events.title')}</h2>
              <p className="text-muted-foreground">{t('home.events.subtitle')}</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/calendar">{t('home.events.viewCalendar')}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[60px]">
                      <div className="text-2xl font-bold">{event.date.day}</div>
                      <div className="text-xs uppercase">{event.date.month}</div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{event.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Interactive Ukraine Map */}
      <ChurchMapPreview to="/map" className="mx-auto w-full max-w-[600px]" />
      {/* Find a Congregation Near You */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {t("home.findCongregation.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl">
                {t("home.findCongregation.description")}
              </p>
            </div>
            <Button size="lg" asChild className="flex-shrink-0">
              <Link to="/churches">
                {t("home.findCongregation.cta")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Help/Donation CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("home.cta.description")}</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/help">{t("nav.help")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
