import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/svg/church-logo.svg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Ukraine UMC" className="h-10" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

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
                  to="/churches"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.churches")}
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
              <li>
                <Link
                  to="/calendar"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.calendar")}
                </Link>
              </li>
            </ul>
          </div>

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
              <li>
                <Link
                  to="/education"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.education")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contacts")}
                </Link>
              </li>
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

          <div>
            <h4 className="font-medium mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.location")}</li>
              <li>info@ukraineumc.org</li>
              <li>+380 XX XXX XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
