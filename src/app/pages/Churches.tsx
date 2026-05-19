import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useTranslation } from "react-i18next";

const churches = [
  {
    id: 1,
    name: {
      en: "St John's UMC",
      uk: "Церква св. Івана",
    },
    city: {
      en: "Lviv",
      uk: "Львів",
    },
    address: "Svobody Avenue 15, Lviv, 79000",
    phone: "+380 32 XXX XXXX",
    email: "lviv@ukraineumc.org",
    ministries: [
      "Sunday School",
      "Music Ministry",
      "Food Bank",
      "Prayer Groups",
    ],
    services: [
      { day: "Sunday", time: "9:30 AM - Main Service" },
      { day: "Sunday", time: "11:30 AM - Sunday School" },
      { day: "Thursday", time: "7:00 PM - Bible Study" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 2,
    name: {
      en: "Lighthouse UMC",
      uk: "Lighthouse",
    },
    city: {
      en: "Uzhhorod",
      uk: "Ужгород",
    },
    address: "Uzhhorod, Zakarpattia Oblast",
    phone: "+380 31 XXX XXXX",
    email: "lighthouse@ukraineumc.org",
    ministries: [
      "Youth Ministry",
      "Community Outreach",
      "Worship Services",
      "Bible Studies",
    ],
    services: [
      { day: "Sunday", time: "10:00 AM - Worship Service" },
      { day: "Wednesday", time: "6:00 PM - Prayer Meeting" },
      { day: "Friday", time: "5:00 PM - Youth Group" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 3,
    name: {
      en: "Uzhhorod UMC",
      uk: "Ужгород ОМЦ",
    },
    city: {
      en: "Uzhhorod",
      uk: "Ужгород",
    },
    address: "Uzhhorod, Zakarpattia Oblast",
    phone: "+380 31 XXX XXXX",
    email: "uzhhorod@ukraineumc.org",
    ministries: [
      "Children's Ministry",
      "Fellowship",
      "Discipleship",
      "Community Service",
    ],
    services: [
      { day: "Sunday", time: "10:30 AM - Sunday Worship" },
      { day: "Tuesday", time: "7:00 PM - Bible Study" },
      { day: "Saturday", time: "10:00 AM - Community Service" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 4,
    name: {
      en: "Kamianytsia UMC",
      uk: "Камяниця ОМЦ",
    },
    city: {
      en: "Kamianytsia",
      uk: "с. Камяниця",
    },
    address: "Kamianytsia, Lviv Oblast",
    phone: "+380 32 XXX XXXX",
    email: "kamianytsia@ukraineumc.org",
    ministries: [
      "Worship Arts",
      "Prayer Ministry",
      "Small Groups",
      "Mission Support",
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - Morning Worship" },
      { day: "Wednesday", time: "6:30 PM - Midweek Prayer" },
      { day: "Thursday", time: "7:00 PM - Small Groups" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 5,
    name: {
      en: "Ukrainka UMC",
      uk: "Українка ОМЦ",
    },
    city: {
      en: "Ukrainka",
      uk: "Українка",
    },
    address: "Ukrainka, Kyiv Oblast",
    phone: "+380 44 XXX XXXX",
    email: "ukrainka@ukraineumc.org",
    ministries: [
      "Children's Church",
      "Senior Fellowship",
      "Evangelism",
      "Prayer Groups",
    ],
    services: [
      { day: "Sunday", time: "10:00 AM - Family Service" },
      { day: "Sunday", time: "6:00 PM - Evening Service" },
      { day: "Tuesday", time: "7:00 PM - Prayer Night" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 6,
    name: {
      en: "Kharkiv UMC",
      uk: "Харків ОМЦ",
    },
    city: {
      en: "Kharkiv",
      uk: "Харків",
    },
    address: "Sumska Street 45, Kharkiv, 61000",
    phone: "+380 57 XXX XXXX",
    email: "kharkiv@ukraineumc.org",
    ministries: [
      "Refugee Support",
      "Counseling",
      "Adult Education",
      "Community Care",
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - Sunday Worship" },
      { day: "Wednesday", time: "7:00 PM - Midweek Prayer" },
      { day: "Saturday", time: "10:00 AM - Community Service" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 7,
    name: {
      en: "Perychyn UMC",
      uk: "Перичин ОМЦ",
    },
    city: {
      en: "Perychyn",
      uk: "Перичин",
    },
    address: "Perychyn, Lviv Oblast",
    phone: "+380 32 XXX XXXX",
    email: "perychyn@ukraineumc.org",
    ministries: [
      "Worship Ministry",
      "Youth Programs",
      "Community Outreach",
      "Bible Studies",
    ],
    services: [
      { day: "Sunday", time: "10:00 AM - Morning Worship" },
      { day: "Tuesday", time: "6:00 PM - Bible Study" },
      { day: "Friday", time: "7:00 PM - Youth Meeting" },
    ],
    social: {
      facebook: "#",
      instagram: "#",
    },
    image:
      "https://images.unsplash.com/photo-1550633600-4cfc6929e592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export default function Churches() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "uk";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("churches.title")}</h1>
          <p className="text-xl text-muted-foreground">
            {t("churches.subtitle")}
          </p>
        </div>
      </section>

      {/* Churches Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {churches.map((church) => (
              <Card
                key={church.id}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={church.image}
                    alt={church.name[currentLang]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">
                    {church.name[currentLang]}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {church.city[currentLang]}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {church.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {church.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {church.email}
                      </span>
                    </div>
                  </div>

                  {/* Service Times */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      {t("churches.serviceTimesTitle")}
                    </h4>
                    <div className="space-y-2">
                      {church.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-muted-foreground pl-7"
                        >
                          <span className="font-medium text-foreground">
                            {service.day}:
                          </span>{" "}
                          {service.time}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ministries */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">
                      {t("churches.ministriesTitle")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {church.ministries.map((ministry, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs"
                        >
                          {ministry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    <a
                      href={church.social.facebook}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={church.social.instagram}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("churches.locationsTitle")}
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 aspect-[16/9] flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Interactive map showing all church locations across Ukraine
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
