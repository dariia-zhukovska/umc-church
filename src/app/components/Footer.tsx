import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";

const PHONE = "+380 98 382 91 50";
const PHONE_TEL = "tel:+380983829150";
const EMAIL = "unitedmethodistchurchua@gmail.com";

const address = {
  uk: "вул. Верховинна, 84, м. Київ, 03173, Україна",
  en: "84 Verkhovynna Street, Kyiv, 03173, Ukraine",
};

const legalName = {
  uk: "Релігійна організація «Релігійне Управління Об'єднаної Методистської Церкви України»",
  en: 'Religious Organization "Religious Administration of the United Methodist Church in Ukraine"',
};

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === "uk" ? "uk" : "en") as "en" | "uk";

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Ukraine UMC" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-medium mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "uk" ? "Історія церкви" : "Church History"}
                </Link>
              </li>
              <li>
                <Link
                  to="/churches"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.churches")}
                </Link>
              </li>
              <li>
                <Link
                  to="/map"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "uk" ? "Карта громад" : "Congregation Map"}
                </Link>
              </li>
              <li>
                <Link
                  to="/ministers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.ministers")}
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/calendar"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.calendar")}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/news"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link
                  to="/pid-zamkom"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.pidZamkom")}
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/education"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.education")}
                </Link>
              </li> */}
              <li>
                <Link
                  to="/help"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.help")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{address[lang]}</span>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-sm text-primary hover:underline underline-offset-2 font-medium"
                >
                  {lang === "uk" ? "Усі контакти →" : "All Contacts →"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-200 mt-8 pt-8 space-y-1 text-center text-xs text-muted-foreground/70">
          <p>{legalName[lang]}</p>
          <p>
            {lang === "uk"
              ? "Ідентифікаційний код: 26334000"
              : "Identification Code: 26334000"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
