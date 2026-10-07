import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";
import logo from "../../assets/logo.svg";

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.churches"), path: "/churches" },
    { name: t("nav.news"), path: "/news" },
    { name: t("nav.ministers"), path: "/ministers" },
    // { name: t("nav.calendar"), path: "/calendar" },
    { name: t("nav.pidZamkom"), path: "/pid-zamkom" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ukraine UMC" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link to="/help">{t("nav.help")}</Link>
            </Button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit">
              <Link to="/help" onClick={() => setIsMenuOpen(false)}>
                {t("nav.help")}
              </Link>
            </Button>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
