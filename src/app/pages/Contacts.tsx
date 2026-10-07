import { useRef, useState } from "react";
import { Mail, Phone, Hash, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const content = {
  uk: {
    pageTitle: "Контакти",
    general: {
      heading: "Загальні контакти",
      orgName:
        "Релігійна організація «Релігійне Управління Об'єднаної Методистської Церкви України»",
      codeLabel: "Ідентифікаційний код",
      address: "вул. Верховинна, 84, м. Київ, 03173, Україна",
    },
    leadership: {
      heading: "Керівництво та адміністрація",
      topicsHeading: "З питань",
    },
    people: [
      {
        nameUk: "Олег Стародубець",
        nameEn: "Oleh Starodubets",
        role: "Старший пастор",
        phone: "+380 98 382 91 50",
        phoneTel: "tel:+380983829150",
        email: "oleg.umc333@gmail.com",
        topics: [
          "Загального церковного служіння.",
          "Пасторського служіння.",
          "Церковних громад.",
          "Співпраці між громадами.",
          "Розвитку Об'єднаної Методистської Церкви України.",
        ],
        pidZamkomLink: null as string | null,
        roleWithLink: false,
      },
      {
        nameUk: "Юлія Стародубець",
        nameEn: "Yuliia Starodubets",
        role: "Директорка соціально-духовного центру «Під Замком»",
        roleWithLink: true,
        phone: "+380 98 170 03 31",
        phoneTel: "tel:+380981700331",
        email: "yuliastar79@gmail.com",
        topics: [
          "Соціального служіння.",
          "Діяльності центру «Під Замком».",
          "Соціальних та гуманітарних ініціатив.",
          "Співпраці у соціальних проєктах.",
        ],
        pidZamkomLink: "/pid-zamkom" as string | null,
      },
      {
        nameUk: "Анастасія Михтонюк",
        nameEn: "Anastasiia Mykhtoniuk",
        role: "Секретар",
        roleWithLink: false,
        phone: "+380 67 886 51 14",
        phoneTel: "tel:+380678865114",
        email: "unitedmethodistchurchua@gmail.com",
        topics: [
          "Загальної інформації про ОМЦ України.",
          "Адміністративних питань.",
          "Офіційної кореспонденції.",
          "Контактів із церквами та служителями.",
          "Організаційних питань.",
        ],
        pidZamkomLink: null as string | null,
      },
    ],
    form: {
      heading: "Надіслати повідомлення",
      subtitle:
        "Маєте запитання або хочете дізнатися більше про нашу церкву? Заповніть форму і ми відповімо якнайшвидше.",
      firstName: "Ім'я",
      lastName: "Прізвище",
      firstNamePlaceholder: "Іван",
      lastNamePlaceholder: "Петренко",
      email: "Email",
      emailPlaceholder: "ivan@example.com",
      phone: "Телефон (необов'язково)",
      phonePlaceholder: "+380 XX XXX XXXX",
      subject: "Тема",
      subjectPlaceholder: "Як ми можемо допомогти?",
      message: "Повідомлення",
      messagePlaceholder: "Ваше повідомлення…",
      send: "Надіслати",
      successTitle: "Повідомлення надіслано!",
      successText: "Дякуємо за звернення. Ми відповімо вам найближчим часом.",
    },
  },
  en: {
    pageTitle: "Contacts",
    general: {
      heading: "General Contact Information",
      orgName:
        'Religious Organization "Religious Administration of the United Methodist Church in Ukraine"',
      codeLabel: "Identification Code",
      address: "84 Verkhovynna Street, Kyiv, 03173, Ukraine",
    },
    leadership: {
      heading: "Leadership and Administration",
      topicsHeading: "Contact for",
    },
    people: [
      {
        nameUk: "Олег Стародубець",
        nameEn: "Oleh Starodubets",
        role: "District Superintendent",
        phone: "+380 98 382 91 50",
        phoneTel: "tel:+380983829150",
        email: "oleg.umc333@gmail.com",
        topics: [
          "General church ministry.",
          "Pastoral ministry.",
          "Local congregations.",
          "Cooperation between congregations.",
          "Development of the United Methodist Church in Ukraine.",
        ],
        pidZamkomLink: null as string | null,
        roleWithLink: false,
      },
      {
        nameUk: "Юлія Стародубець",
        nameEn: "Yuliia Starodubets",
        role: 'Director of the "Pid Zamkom" Social and Spiritual Center',
        roleWithLink: true,
        phone: "+380 98 170 03 31",
        phoneTel: "tel:+380981700331",
        email: "yuliastar79@gmail.com",
        topics: [
          "Social ministry.",
          'Activities of the "Pid Zamkom" center.',
          "Social and humanitarian initiatives.",
          "Cooperation on social projects.",
        ],
        pidZamkomLink: "/pid-zamkom" as string | null,
      },
      {
        nameUk: "Анастасія Михтонюк",
        nameEn: "Anastasiia Mykhtoniuk",
        role: "Secretary",
        roleWithLink: false,
        phone: "+380 67 886 51 14",
        phoneTel: "tel:+380678865114",
        email: "unitedmethodistchurchua@gmail.com",
        topics: [
          "General information about the United Methodist Church in Ukraine.",
          "Administrative matters.",
          "Official correspondence.",
          "Contact with congregations and ministers.",
          "Organizational matters.",
        ],
        pidZamkomLink: null as string | null,
      },
    ],
    form: {
      heading: "Send Us a Message",
      subtitle:
        "Have a question or want to learn more about our church? Fill out the form and we'll get back to you as soon as possible.",
      firstName: "First Name",
      lastName: "Last Name",
      firstNamePlaceholder: "John",
      lastNamePlaceholder: "Doe",
      email: "Email",
      emailPlaceholder: "john.doe@example.com",
      phone: "Phone (Optional)",
      phonePlaceholder: "+380 XX XXX XXXX",
      subject: "Subject",
      subjectPlaceholder: "How can we help you?",
      message: "Message",
      messagePlaceholder: "Your message here…",
      send: "Send Message",
      successTitle: "Message sent!",
      successText:
        "Thank you for reaching out. We will get back to you as soon as possible.",
    },
  },
};
const PHONE = "+380 98 382 91 50";
const PHONE_TEL = "tel:+380983829150";
const EMAIL = "unitedmethodistchurchua@gmail.com";
const WEB3FORMS_KEY = "2cd7c2eb-1b04-4220-81a3-a94055639e8c";
function getInitials(name: string) {
  return name
    .trim()
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}
const avatarColors = [
  "bg-red-100 text-red-700",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
];
export default function Contacts() {
  const { i18n } = useTranslation();
  const lang = (i18n.language.toLowerCase().startsWith("uk") ? "uk" : "en") as
    | "en"
    | "uk";
  const c = content[lang];
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const submitting = useRef(false);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const fields = new FormData(e.currentTarget);
    if (fields.get("botcheck")) return;
    submitting.current = true;
    setSending(true);
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "UMC Ukraine Website",
          name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          botcheck: false,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true)
        throw new Error("Submission failed");
      setSent(true);
    } catch {
      setError(
        lang === "uk"
          ? "Не вдалося підтвердити надсилання. Спробуйте пізніше або напишіть нам на email."
          : "We could not confirm submission. Please try later or contact us by email.",
      );
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
      setSending(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{c.pageTitle}</h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* General contacts */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
          <h2 className="text-xl font-bold mb-6">{c.general.heading}</h2>
          <div className="space-y-5">
            <p className="text-sm text-foreground leading-relaxed">
              {c.general.orgName}
            </p>
            <div className="flex items-start gap-3 text-sm">
              <Hash className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-muted-foreground">
                  {c.general.codeLabel}:{" "}
                </span>
                <span className="font-medium">26334000</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{c.general.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a
                href={PHONE_TEL}
                className="hover:text-primary transition-colors hover:underline underline-offset-2"
              >
                {PHONE}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-primary transition-colors hover:underline underline-offset-2 break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
        {/* Leadership */}
        <section>
          <h2 className="text-xl font-bold mb-6">{c.leadership.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.people.map((person, idx) => {
              const name = lang === "uk" ? person.nameUk : person.nameEn;
              const initials = getInitials(name);
              return (
                <div
                  key={person.email + person.phone}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${avatarColors[idx % avatarColors.length]}`}
                    >
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base leading-snug">
                        {name}
                      </h3>
                      {"roleWithLink" in person &&
                      person.roleWithLink &&
                      person.pidZamkomLink ? (
                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                          {lang === "uk" ? "Директорка центру " : "Director, "}
                          <Link
                            to={person.pidZamkomLink}
                            className="text-primary hover:underline underline-offset-2 font-medium"
                          >
                            {lang === "uk" ? "«Під Замком»" : '"Pid Zamkom"'}
                          </Link>
                        </p>
                      ) : (
                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                          {person.role}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a
                      href={person.phoneTel}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                      {person.phone}
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="break-all">{person.email}</span>
                    </a>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {c.leadership.topicsHeading}
                    </p>
                    <ul className="space-y-1">
                      {person.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Contact form */}
        <section>
          <h2 className="text-2xl font-bold mb-2">{c.form.heading}</h2>
          <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
            {c.form.subtitle}
          </p>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 lg:p-10">
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle className="w-12 h-12 text-primary" />
                <h3 className="text-lg font-bold">{c.form.successTitle}</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  {c.form.successText}
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-2 text-sm text-primary hover:underline underline-offset-2"
                >
                  {lang === "uk" ? "Надіслати ще одне" : "Send another message"}
                </button>
              </div>
            ) : (
              <form
                aria-busy={sending}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                />
                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">
                      {c.form.firstName}
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder={c.form.firstNamePlaceholder}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">
                      {c.form.lastName}
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder={c.form.lastNamePlaceholder}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">{c.form.email}</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={c.form.emailPlaceholder}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">{c.form.phone}</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={c.form.phonePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">
                    {c.form.subject}
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={c.form.subjectPlaceholder}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-white rounded-lg py-3 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                  {sending
                    ? lang === "uk"
                      ? "Надсилаємо…"
                      : "Sending…"
                    : c.form.send}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
