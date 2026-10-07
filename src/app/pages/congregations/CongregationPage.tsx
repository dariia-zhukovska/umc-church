import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useCallback, useEffect } from "react";
import { MapPin, Phone, Clock, Globe, Facebook, Instagram, Youtube, ChevronRight, ExternalLink, Wifi, Images, X, ChevronLeft, ChevronRight as ChevronRightIcon, ImageOff } from "lucide-react";
import { congregations } from "./congregationData";

function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function PhotoGallery({ photos, lang }: { photos?: string[]; lang: "en" | "uk" }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null && photos ? (i - 1 + photos.length) % photos.length : i)),
    [photos]
  );
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null && photos ? (i + 1) % photos.length : i)),
    [photos]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  const heading = lang === "uk" ? "Фотогалерея" : "Photo Gallery";
  const placeholder = lang === "uk"
    ? "Фотографії цієї громади буде додано найближчим часом."
    : "Photos of this congregation will be added soon.";

  return (
    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
      <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
        <Images className="w-5 h-5 text-primary" />
        {heading}
      </h2>

      {!photos || photos.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-muted-foreground border border-dashed border-gray-200 rounded-lg bg-gray-50">
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

      {/* Lightbox */}
      {lightboxIndex !== null && photos && photos.length > 0 && (
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
            <ChevronRightIcon className="w-6 h-6" />
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
    </section>
  );
}

export default function CongregationPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "uk";

  const congregation = congregations.find((c) => c.slug === slug);

  if (!congregation) {
    return <Navigate to="/churches" replace />;
  }

  const c = congregation;
  const hasSocial =
    c.social.facebook ||
    c.social.instagram ||
    c.social.instagram2 ||
    c.social.youtube;

  const aboutParagraphs = c.about
    ? c.about[lang].split("\n\n").filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">
              {lang === "uk" ? "Головна" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to="/churches" className="hover:text-primary transition-colors">
              {t("congregations.title")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-foreground font-medium truncate">{c.name[lang]}</span>
          </nav>

          <div className="flex items-start gap-3 flex-wrap">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{c.fullName[lang]}</h1>
              <p className="text-lg text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                {c.location[lang]}
              </p>
            </div>
            {c.worship.isOnline && (
              <span className="mt-1 inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                <Wifi className="w-3 h-3" />
                {t("congregations.onlineBadge")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Worship section */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            {t("congregations.worship")}
          </h2>
          <dl className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="text-sm font-semibold text-muted-foreground w-32 flex-shrink-0 mb-1 sm:mb-0">
                {t("congregations.schedule")}
              </dt>
              <dd className="text-sm">
                {c.worship.scheduleUnconfirmed ? (
                  <span className="inline-flex items-center gap-1.5 text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-medium">
                    {c.worship.schedule[lang]}
                  </span>
                ) : (
                  <span className="font-medium">{c.worship.schedule[lang]}</span>
                )}
              </dd>
            </div>

            {c.worship.languages && (
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-muted-foreground w-32 flex-shrink-0 mb-1 sm:mb-0">
                  {t("congregations.languages")}
                </dt>
                <dd className="text-sm">{c.worship.languages[lang]}</dd>
              </div>
            )}

            {c.worship.isOnline && c.worship.onlineMeetingNote && (
              <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                {c.worship.onlineMeetingNote[lang]}
              </div>
            )}

            {c.worship.noLivestream && (
              <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-muted-foreground">
                {t("congregations.noLivestream")}
              </div>
            )}

            {c.worship.onlineStreamUrl && (
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-muted-foreground w-32 flex-shrink-0 mb-1 sm:mb-0">
                  {t("congregations.onlineWorship")}
                </dt>
                <dd className="text-sm">
                  <a
                    href={c.worship.onlineStreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                  >
                    {c.worship.onlineStreamLabel ? c.worship.onlineStreamLabel[lang] : t("congregations.onlineStream")}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </section>

        {/* About section */}
        {aboutParagraphs.length > 0 && (
          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-bold mb-5">{t("congregations.about")}</h2>
            <div className="space-y-4">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Ministries section */}
        {c.ministries && c.ministries.length > 0 && (
          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-bold mb-5">{t("congregations.ministries")}</h2>
            <ul className="space-y-2">
              {c.ministries.map((ministry, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  {ministry[lang]}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Additional sections */}
        {c.sections && c.sections.length > 0 && (
          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
            <div className="space-y-6">
              {c.sections.map((section, i) => {
                const paragraphs = section.content[lang].split('\n\n').filter(Boolean);
                return (
                  <div key={i} className={i > 0 ? "pt-6 border-t border-gray-100" : ""}>
                    {section.title[lang] && (
                      <h3 className="font-semibold mb-3">{section.title[lang]}</h3>
                    )}
                    <div className="space-y-3">
                      {paragraphs.map((p, j) => (
                        <p key={j} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Photo gallery */}
        <PhotoGallery photos={c.photos} lang={lang} />

        {/* Find Us section */}
        {(c.address || c.googleMaps) && (
          <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {t("congregations.findUs")}
            </h2>
            {c.address && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {c.addressIsContactOnly
                    ? t("congregations.contactAddress")
                    : t("congregations.address")}
                </p>
                <p className="text-sm">{c.address[lang]}</p>
                {c.addressIsContactOnly && (
                  <p className="mt-1 text-xs text-muted-foreground italic">
                    {lang === "uk"
                      ? "Богослужіння проводяться онлайн."
                      : "Sunday services are held online."}
                  </p>
                )}
              </div>
            )}
            {!c.address && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {t("congregations.meetingLocation")}
                </p>
                <p className="text-sm">{c.location[lang]}</p>
              </div>
            )}
            {/* Map link: use verified googleMaps link if available, otherwise generate from address */}
            {(() => {
              const mapHref = c.googleMaps
                ? c.googleMaps
                : c.address
                ? `https://maps.google.com/?q=${encodeURIComponent(c.address.en)}`
                : null;
              return mapHref ? (
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  {t("congregations.openMap")}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null;
            })()}
          </section>
        )}

        {/* Contact section */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-5">{lang === "uk" ? "Контакти" : "Contact"}</h2>
          <dl className="space-y-4">
            {c.pastors.length > 0 && (
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-muted-foreground w-32 flex-shrink-0 mb-1 sm:mb-0">
                  {c.pastors.length === 1 ? t("congregations.pastor") : t("congregations.pastors")}
                </dt>
                <dd className="text-sm space-y-0.5">
                  {c.pastors.map((pastor, i) => (
                    <div key={i}>{pastor[lang]}</div>
                  ))}
                </dd>
              </div>
            )}

            {c.phone && (
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-muted-foreground w-32 flex-shrink-0 mb-1 sm:mb-0">
                  {t("congregations.phone")}
                </dt>
                <dd className="text-sm">
                  <a
                    href={telHref(c.phone)}
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {c.phone}
                  </a>
                </dd>
              </div>
            )}

            {hasSocial && (
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-muted-foreground w-32 flex-shrink-0 mb-1 sm:mb-0">
                  {lang === "uk" ? "Соцмережі" : "Social"}
                </dt>
                <dd className="flex flex-col gap-2">
                  {c.social.facebook && (
                    <a
                      href={c.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Facebook className="w-4 h-4 text-blue-600" />
                      <span>{c.social.facebookLabel ? c.social.facebookLabel[lang] : "Facebook"}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </a>
                  )}
                  {c.social.instagram && (
                    <a
                      href={c.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span>{c.social.instagramLabel ? c.social.instagramLabel[lang] : "Instagram"}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </a>
                  )}
                  {c.social.instagram2 && (
                    <a
                      href={c.social.instagram2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span>{c.social.instagram2Label ? c.social.instagram2Label[lang] : "Instagram"}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </a>
                  )}
                  {c.social.youtube && (
                    <a
                      href={c.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Youtube className="w-4 h-4 text-red-600" />
                      <span>{c.social.youtubeLabel ? c.social.youtubeLabel[lang] : "YouTube"}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </section>

        {/* Back link */}
        <div className="pb-4">
          <Link
            to="/churches"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t("congregations.allCongregations")}
          </Link>
        </div>
      </div>
    </div>
  );
}
