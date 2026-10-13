import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ChurchMapPreview from "./ChurchMapPreview";

import lvivChurchPhoto from "../../assets/churches-main/01 - Lviv Main.jpg";
import kamChurchPhoto from "../../assets/churches-main/02 - Kam mai.jpg";
import dzChurchPhoto from "../../assets/churches-main/03 - Dz Main.jpg";
import perChurchPhoto from "../../assets/churches-main/04 - Per main.jpg";
import camp01 from "../../assets/news/2026/kam/01.png";
import camp02 from "../../assets/news/2026/camp/01.jpg";

const SLIDE_INTERVAL = 2500;

const carouselImages = [
  {
    url: lvivChurchPhoto,
    alt: "St. John's UMC Lviv",
  },
  {
    url: kamChurchPhoto,
    alt: "Kamianytsia UMC",
  },
  {
    url: dzChurchPhoto,
    alt: "Dzherelo UMC Kyiv",
  },
  {
    url: perChurchPhoto,
    alt: "Perechyn Church",
  },
];

const newsItems = [
  {
    slug: "children-of-the-king",
    cover: camp01,
    period: {
      en: "August 19–22",
      uk: "19–22 серпня",
    },
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
    cover: camp02,
    period: {
      en: "July 2026",
      uk: "Липень 2026",
    },
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timerReset, setTimerReset] = useState(0);

  const { t, i18n } = useTranslation();
  const lang: "en" | "uk" = (i18n.resolvedLanguage ?? i18n.language).startsWith(
    "uk",
  )
    ? "uk"
    : "en";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setTimerReset((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
    setTimerReset((prev) => prev + 1);
  };

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
    setTimerReset((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [timerReset]);

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
                type="button"
                onClick={prevSlide}
                aria-label={lang === "uk" ? "Попереднє фото" : "Previous photo"}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label={lang === "uk" ? "Наступне фото" : "Next photo"}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((image, index) => (
                  <button
                    key={image.url}
                    type="button"
                    onClick={() => selectSlide(index)}
                    aria-label={
                      lang === "uk"
                        ? `Показати фото ${index + 1}`
                        : `Show photo ${index + 1}`
                    }
                    aria-current={index === currentSlide ? "true" : undefined}
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
                {t("home.about.readStory")}
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
                    <img
                      src={item.cover}
                      alt={item.title[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
