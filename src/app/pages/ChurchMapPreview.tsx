import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  /** Set this to the existing route that renders ChurchMap. */
  to?: string;
  className?: string;
};

// Same image coordinates as the supplied interactive ChurchMap.
const MARKERS = [
  { id: "kyiv", x: 420, y: 245, uk: "Київ", en: "Kyiv", count: 2 },
  { id: "uzhhorod", x: 36, y: 366, uk: "Ужгород", en: "Uzhhorod", count: 5 },
  { id: "lviv", x: 109, y: 271, uk: "Львів", en: "Lviv", count: 1 },
  { id: "kharkiv", x: 716, y: 256, uk: "Харків", en: "Kharkiv", count: 1 },
];

const MAP_IMAGE = "/src/assets/ukraine-map.png";

export default function ChurchMapPreview({
  to = "/map",
  className = "",
}: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language.toLowerCase().startsWith("uk") ? "uk" : "en";
  const label =
    lang === "uk"
      ? "Відкрити інтерактивну карту громад"
      : "Open the interactive congregation map";

  return (
    <Link
      to={to}
      aria-label={label}
      className={`group block overflow-hidden rounded-2xl border border-gray-100 bg-sky-50/20 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 ${className}`}
    >
      <svg
        viewBox={`0 0 900 ${(900 * 1100) / 1430}`}
        aria-hidden="true"
        focusable="false"
        className="block h-full w-full"
      >
        <image
          href={MAP_IMAGE}
          x={0}
          y={0}
          width={900}
          height={(900 * 1100) / 1430}
          preserveAspectRatio="xMidYMid meet"
          pointerEvents="none"
        />
        {MARKERS.map((marker) => (
          <g key={marker.id} pointerEvents="none">
            <circle
              cx={marker.x}
              cy={marker.y}
              r={marker.count > 1 ? 13 : 9}
              fill={marker.id === "kharkiv" ? "#0ea5e9" : "#dc2626"}
              stroke="white"
              strokeWidth={2.5}
            />
            {marker.count > 1 && (
              <text
                x={marker.x}
                y={marker.y + 0.5}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={11}
                fontWeight="bold"
              >
                {marker.count}
              </text>
            )}
            <text
              x={marker.x + (marker.count > 1 ? 17 : 13)}
              y={marker.y}
              dominantBaseline="middle"
              fill="#1f2937"
              stroke="white"
              strokeWidth={3}
              paintOrder="stroke"
              fontSize={12}
              fontWeight={600}
            >
              {marker[lang]}
            </text>
          </g>
        ))}
      </svg>
      <div className="flex items-center justify-center gap-2 border-t border-gray-100 px-4 py-4 text-center text-sm font-medium text-primary group-hover:underline">
        {label}
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
