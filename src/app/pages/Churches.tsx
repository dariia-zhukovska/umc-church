import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Clock, ArrowRight, Wifi } from "lucide-react";
import { useTranslation } from "react-i18next";
import { congregations } from "./congregations/congregationData";

export default function Churches() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "uk";
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return congregations;
    return congregations.filter((c) => {
      const haystack = [
        c.name.en,
        c.name.uk,
        c.location.en,
        c.location.uk,
        c.fullName.en,
        c.fullName.uk,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  const ukraine = filtered.filter((c) => c.region === "ukraine");
  const germany = filtered.filter((c) => c.region === "germany");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t("congregations.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("congregations.intro")}</p>
        </div>
      </section>

      {/* Search */}
      <div className="bg-white border-b border-gray-200 py-5 sticky top-[73px] z-40">
        <div className="max-w-xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("congregations.searchPlaceholder")}
              aria-label={t("congregations.searchPlaceholder")}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 space-y-14">
        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">{t("congregations.noResults")}</p>
          </div>
        )}

        {/* Ukraine section */}
        {ukraine.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">{t("congregations.sectionUkraine")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukraine.map((c) => (
                <CongregationCard key={c.slug} c={c} lang={lang} t={t} />
              ))}
            </div>
          </section>
        )}

        {/* Germany section */}
        {germany.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">{t("congregations.sectionGermany")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {germany.map((c) => (
                <CongregationCard key={c.slug} c={c} lang={lang} t={t} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

interface CardProps {
  c: (typeof congregations)[number];
  lang: "en" | "uk";
  t: ReturnType<typeof useTranslation>["t"];
}

function CongregationCard({ c, lang, t }: CardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Name + location */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-lg leading-snug">{c.name[lang]}</h3>
            {c.worship.isOnline && (
              <span className="flex-shrink-0 inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-2 py-0.5 rounded-full">
                <Wifi className="w-2.5 h-2.5" />
                {t("congregations.onlineBadge")}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            {c.location[lang]}
          </p>
        </div>

        {/* Worship schedule */}
        <div className="flex items-start gap-1.5 text-sm">
          <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
          {c.worship.scheduleUnconfirmed ? (
            <span className="text-amber-700 text-xs bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
              {t("congregations.scheduleUnconfirmed")}
            </span>
          ) : (
            <span className="text-muted-foreground">{c.worship.schedule[lang]}</span>
          )}
        </div>

        {/* Excerpt */}
        {c.cardExcerpt && (
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {c.cardExcerpt[lang]}
          </p>
        )}

        {/* CTA */}
        <div className="pt-2 border-t border-gray-100 mt-auto">
          <Link
            to={`/churches/${c.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {t("congregations.viewCongregation")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
