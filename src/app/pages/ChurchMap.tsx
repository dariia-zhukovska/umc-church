import { useState, useMemo, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Users,
  ChevronLeft,
  Wifi,
  Globe,
} from "lucide-react";
import {
  congregations,
  type Congregation,
} from "./congregations/congregationData";
// Coordinates are calibrated to this PNG, including its transparent margins.
const W = 900,
  H = (900 * 1100) / 1430;
const MAP_POINTS: Record<string, { x: number; y: number }> = {
  kyiv: { x: 420, y: 245 },
  uzhhorod: { x: 36, y: 366 },
  "st-johns-lviv": { x: 109, y: 271 },
  kharkiv: { x: 716, y: 256 },
};
const MAP_IMAGE = "/src/assets/ukraine-map.png";
// ── Congregation positions [lon, lat] ─────────────────────────────────────────
const POSITIONS: Record<string, [number, number]> = {
  "dzherelo-kyiv": [30.52, 50.45],
  "hope-of-the-world-ukrainka": [30.74, 50.17],
  "st-johns-lviv": [24.01, 49.84],
  "lighthouse-uzhhorod": [22.3, 48.62],
  "umc-uzhhorod": [22.3, 48.62],
  kamianytsia: [22.45, 48.6],
  perechyn: [22.46, 48.74],
  serednie: [22.49, 48.53],
  kharkiv: [36.23, 49.99],
};
// ── Cluster definitions ───────────────────────────────────────────────────────
interface Cluster {
  id: string;
  en: string;
  uk: string;
  lon: number;
  lat: number;
  slugs: string[];
}
const CLUSTERS: Cluster[] = [
  {
    id: "kyiv",
    en: "Kyiv",
    uk: "Київ",
    lon: 30.62,
    lat: 50.32,
    slugs: ["dzherelo-kyiv", "hope-of-the-world-ukrainka"],
  },
  {
    id: "uzhhorod",
    en: "Uzhhorod",
    uk: "Ужгород",
    lon: 22.39,
    lat: 48.62,
    slugs: [
      "lighthouse-uzhhorod",
      "umc-uzhhorod",
      "kamianytsia",
      "perechyn",
      "serednie",
    ],
  },
];
const SINGLES = ["st-johns-lviv", "kharkiv"];
// ── City label positions ──────────────────────────────────────────────────────
const CITY_LABELS: Record<string, { en: string; uk: string }> = {
  "st-johns-lviv": { en: "Lviv", uk: "Львів" },
  kharkiv: { en: "Kharkiv", uk: "Харків" },
};
// ── Bilingual UI strings ──────────────────────────────────────────────────────
const L = {
  en: {
    title: "Congregation Map",
    subtitle: "United Methodist churches across Ukraine",
    navBack: "Our Churches",
    clickPrompt:
      "Select a marker on the map or a congregation from the list below.",
    mapAriaLabel: "Interactive map of UMC congregations in Ukraine",
    allChurches: "All Ukrainian congregations",
    germanySection: "Ukrainian congregation in Germany",
    congregationsIn: "Select a congregation",
    backToArea: "← Back to area",
    schedule: "Schedule",
    languages: "Languages",
    address: "Address",
    contactAddressNote: "Contact address — meetings are held online only.",
    phone: "Phone",
    pastor: "Pastor",
    mapsLink: "Open in Google Maps",
    viewPage: "View congregation page",
    legendCluster: "Multiple churches",
    legendSingle: "One church",
    legendOnline: "Online only",
    churches: "churches",
  },
  uk: {
    title: "Карта громад",
    subtitle: "Громади Об'єднаної Методистської Церкви в Україні",
    navBack: "Наші громади",
    clickPrompt: "Оберіть маркер на карті або громаду зі списку нижче.",
    mapAriaLabel: "Інтерактивна карта громад ОМЦ в Україні",
    allChurches: "Усі українські громади",
    germanySection: "Українська громада в Німеччині",
    congregationsIn: "Оберіть громаду",
    backToArea: "← Назад до району",
    schedule: "Розклад",
    languages: "Мови",
    address: "Адреса",
    contactAddressNote: "Контактна адреса — зустрічі проходять лише онлайн.",
    phone: "Телефон",
    pastor: "Пастор",
    mapsLink: "Відкрити в Google Maps",
    viewPage: "Сторінка громади",
    legendCluster: "Кілька церков",
    legendSingle: "Одна церква",
    legendOnline: "Лише онлайн",
    churches: "церков",
  },
} as const;
type Labels = { [K in keyof (typeof L)["en"]]: string };
// ── Sub-components ────────────────────────────────────────────────────────────
function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-2.5">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold">
          {label}
        </p>
        <div className="text-sm mt-0.5 leading-snug">{children}</div>
      </div>
    </div>
  );
}
function ClusterPanel({
  cluster,
  bySlug,
  lang,
  t,
  onSelect,
}: {
  cluster: Cluster;
  bySlug: Record<string, Congregation>;
  lang: "en" | "uk";
  t: Labels;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="mb-4">
        <h3 className="font-semibold text-base">{cluster[lang]}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {t.congregationsIn}
        </p>
      </div>
      <div className="space-y-2">
        {cluster.slugs.map((slug) => {
          const c = bySlug[slug];
          if (!c) return null;
          return (
            <button
              key={slug}
              onClick={() => onSelect(slug)}
              className="w-full text-left p-3 rounded-lg border border-gray-100 hover:border-primary/40 hover:bg-red-50/40 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                {c.name[lang]}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {c.location[lang]}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
function CongPanel({
  cong,
  lang,
  t,
  onBack,
}: {
  cong: Congregation;
  lang: "en" | "uk";
  t: Labels;
  onBack?: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4 h-full">
      {onBack && (
        <button
          onClick={onBack}
          className="text-xs text-primary hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
        >
          {t.backToArea}
        </button>
      )}
      <div>
        <h3 className="font-semibold text-base leading-snug">
          {cong.fullName[lang]}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {cong.location[lang]}
        </p>
      </div>
      {/* Online-meeting notice for Kharkiv */}
      {cong.worship.isOnline && cong.worship.onlineMeetingNote && (
        <div className="flex gap-2.5 p-3 bg-sky-50 rounded-lg">
          <Wifi className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-sky-700 leading-relaxed">
            {cong.worship.onlineMeetingNote[lang]}
          </p>
        </div>
      )}
      <div className="space-y-3">
        {/* Schedule */}
        <InfoRow
          icon={<Clock className="w-4 h-4 text-primary" />}
          label={t.schedule}
        >
          <span>{cong.worship.schedule[lang]}</span>
          {cong.worship.languages && (
            <p className="text-xs text-muted-foreground mt-0.5">
              {cong.worship.languages[lang]}
            </p>
          )}
        </InfoRow>
        {/* Physical address */}
        {cong.address && !cong.addressIsContactOnly && (
          <InfoRow
            icon={<MapPin className="w-4 h-4 text-primary" />}
            label={t.address}
          >
            <span>{cong.address[lang]}</span>
          </InfoRow>
        )}
        {/* Contact-only address (Kharkiv) */}
        {cong.address && cong.addressIsContactOnly && (
          <InfoRow
            icon={<MapPin className="w-4 h-4 text-muted-foreground/40" />}
            label={t.address}
          >
            <span className="text-muted-foreground">{cong.address[lang]}</span>
            <p className="text-[11px] text-muted-foreground/60 mt-1 leading-snug">
              {t.contactAddressNote}
            </p>
          </InfoRow>
        )}
        {/* Phone */}
        {cong.phone && (
          <InfoRow
            icon={<Phone className="w-4 h-4 text-primary" />}
            label={t.phone}
          >
            <a
              href={`tel:${cong.phone.replace(/[^+0-9]/g, "")}`}
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
            >
              {cong.phone}
            </a>
          </InfoRow>
        )}
        {/* Pastors */}
        {cong.pastors.length > 0 && (
          <InfoRow
            icon={<Users className="w-4 h-4 text-primary" />}
            label={t.pastor}
          >
            <span>{cong.pastors.map((p) => p[lang]).join(", ")}</span>
          </InfoRow>
        )}
      </div>
      {/* Links */}
      <div className="pt-3 space-y-2.5 border-t border-gray-50">
        {cong.googleMaps && (
          <a
            href={cong.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-primary hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          >
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
            {t.mapsLink}
          </a>
        )}
        <Link
          to={`/churches/${cong.slug}`}
          className="flex items-center gap-1.5 text-xs text-primary hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
        >
          <Globe className="w-3.5 h-3.5 flex-shrink-0" />
          {t.viewPage}
        </Link>
      </div>
    </div>
  );
}
// ── Main component ────────────────────────────────────────────────────────────
export default function ChurchMap() {
  const { i18n } = useTranslation();
  const lang = (i18n.language.toLowerCase().startsWith("uk") ? "uk" : "en") as
    | "en"
    | "uk";
  const t = L[lang];
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedClusterId, setSelectedClusterId] = useState<string | null>(
    null,
  );
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const bySlug = useMemo(
    () => Object.fromEntries(congregations.map((c) => [c.slug, c])),
    [],
  );
  const ukrCongregs = useMemo(
    () => congregations.filter((c) => c.region === "ukraine"),
    [],
  );
  const bispingen = useMemo(
    () => congregations.find((c) => c.slug === "bispingen"),
    [],
  );
  function pickSlug(slug: string) {
    setSelectedSlug(slug);
    setSelectedClusterId(null);
    setTimeout(() => {
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      mobilePanelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 50);
  }
  function pickCluster(id: string) {
    setSelectedClusterId(id);
    setSelectedSlug(null);
    setTimeout(() => {
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      mobilePanelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 50);
  }
  const selectedCong = selectedSlug ? bySlug[selectedSlug] : null;
  const activeCluster = selectedClusterId
    ? CLUSTERS.find((c) => c.id === selectedClusterId)
    : null;
  const parentCluster = selectedSlug
    ? CLUSTERS.find((cl) => cl.slugs.includes(selectedSlug))
    : null;
  function PanelContent() {
    if (activeCluster && !selectedSlug) {
      return (
        <ClusterPanel
          cluster={activeCluster}
          bySlug={bySlug}
          lang={lang}
          t={t}
          onSelect={pickSlug}
        />
      );
    }
    if (selectedCong) {
      return (
        <CongPanel
          cong={selectedCong}
          lang={lang}
          t={t}
          onBack={
            parentCluster
              ? () => {
                  setSelectedSlug(null);
                  setSelectedClusterId(parentCluster.id);
                }
              : undefined
          }
        />
      );
    }
    return (
      <div className="h-full min-h-[180px] flex items-center justify-center text-center p-8 bg-gray-50 rounded-xl border border-gray-100 border-dashed">
        <div>
          <MapPin className="w-9 h-9 text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-[200px] mx-auto">
            {t.clickPrompt}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <Link
        to="/churches"
        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-2 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        <ChevronLeft className="w-4 h-4" />
        {t.navBack}
      </Link>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
        <p className="text-muted-foreground mt-1 text-sm">{t.subtitle}</p>
      </div>
      {/* Map + desktop sidebar */}
      <div className="flex flex-col lg:flex-row gap-5 mb-6">
        {/* SVG map */}
        <div className="flex-1 min-w-0 bg-sky-50/20 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto block"
            role="group"
            aria-label={t.mapAriaLabel}
          >
            <image
              href={MAP_IMAGE}
              x={0}
              y={0}
              width={W}
              height={H}
              preserveAspectRatio="xMidYMid meet"
              pointerEvents="none"
            />
            {/* ── Cluster markers ── */}
            {CLUSTERS.map((cl) => {
              const { x, y } = MAP_POINTS[cl.id];
              const active = selectedClusterId === cl.id;
              return (
                <g
                  key={cl.id}
                  onClick={() => pickCluster(cl.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      pickCluster(cl.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${cl[lang]} — ${cl.slugs.length} ${t.churches}`}
                  aria-pressed={active}
                  className="outline-none focus-visible:[&>circle]:stroke-gray-900"
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulse ring when active */}
                  {active && (
                    <circle
                      cx={x}
                      cy={y}
                      r={22}
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="1.5"
                      opacity="0.22"
                    />
                  )}
                  {/* Circle background */}
                  <circle
                    cx={x}
                    cy={y}
                    r={active ? 16 : 13}
                    fill={active ? "#b91c1c" : "#dc2626"}
                    stroke="white"
                    strokeWidth="2.5"
                    style={{
                      filter: "drop-shadow(0 1px 5px rgba(0,0,0,0.22))",
                    }}
                  />
                  {/* Count badge */}
                  <text
                    x={x}
                    y={y + 0.5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="bold"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {cl.slugs.length}
                  </text>
                  {/* City label */}
                  <text
                    x={x + (active ? 20 : 17)}
                    y={y}
                    dominantBaseline="middle"
                    fill="#1f2937"
                    stroke="white"
                    strokeWidth="3"
                    paintOrder="stroke"
                    fontSize="12"
                    fontWeight="600"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {cl[lang]}
                  </text>
                </g>
              );
            })}
            {/* ── Single markers ── */}
            {SINGLES.map((slug) => {
              const pos = POSITIONS[slug];
              if (!pos) return null;
              const { x, y } = MAP_POINTS[slug];
              const active = selectedSlug === slug;
              const cong = bySlug[slug];
              const isOnline = !!cong?.worship.isOnline;
              return (
                <g
                  key={slug}
                  onClick={() => pickSlug(slug)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      pickSlug(slug);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={cong?.name[lang]}
                  aria-pressed={active}
                  className="outline-none focus-visible:[&>circle]:stroke-gray-900"
                  style={{ cursor: "pointer" }}
                >
                  {active && (
                    <circle
                      cx={x}
                      cy={y}
                      r={16}
                      fill="none"
                      stroke={isOnline ? "#0ea5e9" : "#dc2626"}
                      strokeWidth="1.5"
                      opacity="0.22"
                    />
                  )}
                  <circle
                    cx={x}
                    cy={y}
                    r={active ? 11 : 9}
                    fill={
                      isOnline
                        ? active
                          ? "#0284c7"
                          : "#0ea5e9"
                        : active
                          ? "#b91c1c"
                          : "#dc2626"
                    }
                    stroke="white"
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.2))" }}
                  />
                  {/* City label */}
                  <text
                    x={x + (active ? 15 : 13)}
                    y={y}
                    dominantBaseline="middle"
                    fill="#1f2937"
                    stroke="white"
                    strokeWidth="3"
                    paintOrder="stroke"
                    fontSize="12"
                    fontWeight="600"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {CITY_LABELS[slug]?.[lang] ?? ""}
                  </text>
                </g>
              );
            })}
          </svg>
          {/* Legend */}
          <div className="px-4 pb-3 pt-2 border-t border-gray-100 flex flex-wrap gap-x-5 gap-y-1.5">
            <LegendItem color="#dc2626" label={t.legendCluster} badge="3" />
            <LegendItem color="#dc2626" label={t.legendSingle} />
            <LegendItem color="#0ea5e9" label={t.legendOnline} />
          </div>
        </div>
        {/* Desktop info panel */}
        <div className="hidden lg:flex flex-col lg:w-80 xl:w-96 flex-shrink-0">
          <PanelContent />
        </div>
      </div>
      {/* Mobile info panel — appears below map, scrolled into view on selection */}
      <div ref={mobilePanelRef} className="lg:hidden mb-8">
        <PanelContent />
      </div>
      {/* Congregation quick-select list */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
          {t.allChurches}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {ukrCongregs.map((cong) => {
            const isSelected = selectedSlug === cong.slug;
            return (
              <button
                key={cong.slug}
                onClick={() => pickSlug(cong.slug)}
                className={`text-left p-3 rounded-xl border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "border-primary bg-red-50 shadow-sm"
                    : "border-gray-100 bg-white hover:border-primary/30 hover:bg-red-50/30"
                }`}
              >
                <p
                  className={`font-medium text-xs leading-snug ${isSelected ? "text-primary" : ""}`}
                >
                  {cong.name[lang]}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                  {cong.location[lang]}
                </p>
              </button>
            );
          })}
        </div>
      </section>
      {/* Germany section */}
      {bispingen && (
        <section className="border-t border-gray-100 pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-5">
            {t.germanySection}
          </h2>
          <div className="max-w-sm">
            <CongPanel cong={bispingen} lang={lang} t={t} />
          </div>
        </section>
      )}
    </div>
  );
}
function LegendItem({
  color,
  label,
  badge,
}: {
  color: string;
  label: string;
  badge?: string;
}) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {badge ? (
        <span
          className="inline-flex w-4 h-4 rounded-full text-white text-[8px] items-center justify-center font-bold flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {badge}
        </span>
      ) : (
        <span
          className="inline-block w-3 h-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      {label}
    </span>
  );
}
