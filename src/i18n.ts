import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        churches: 'Our Congregations',
        news: 'News',
        ministers: 'Our Ministers',
        calendar: 'Calendar',
        pidZamkom: 'Pid Zamkom',
        contacts: 'Contacts',
        education: 'Education',
        help: 'Help Us'
      },
      common: {
        learnMore: 'Learn More',
        readMore: 'Read More',
        viewAll: 'View All',
        contactUs: 'Contact Us',
        sendMessage: 'Send Message',
        backTo: 'Back to',
        comingSoon: 'Coming Soon',
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday'
      },
      footer: {
        description: 'United Methodist Church in Ukraine - serving communities with faith, hope, and love.',
        quickLinks: 'Quick Links',
        resources: 'Resources',
        contactTitle: 'Contact',
        location: 'Ukraine',
        copyright: 'Ukraine United Methodist Church. All rights reserved.'
      },
      home: {
        hero: {
          title: 'Welcome to Ukraine UMC',
          description: "We are a community of faith united in Christ, serving people across Ukraine with love, hope, and compassion. Join us in worship, fellowship, and making a difference in our communities."
        },
        about: {
          title: 'Who We Are',
          text1: "The United Methodist Church in Ukraine is a vibrant Christian community that combines spiritual life with active service to others. We support people affected by war, strengthen local communities and welcome cooperation with individuals, volunteers and international partners.",
          text2: "Love boldly. Serve joyfully. Lead courageously.",
          readStory: 'Read Our Full Story'
        },
        news: {
          title: 'Latest News',
          subtitle: 'Stay updated with our community activities and events',
          viewAll: 'View All News'
        },
        events: {
          title: 'Upcoming Events',
          subtitle: 'Join us for worship, fellowship, and community gatherings',
          viewCalendar: 'View Calendar'
        },
        map: {
          title: 'Our Congregations Across Ukraine',
          subtitle: 'Find a United Methodist Church near you',
          viewAll: 'View All Congregations'
        },
        findCongregation: {
          title: 'Find a Congregation Near You',
          description: 'Find a congregation near you and learn more about its community, worship and ministries.',
          cta: 'View All Congregations'
        },
        cta: {
          title: 'Support Our Mission',
          description: "Your generosity helps us serve communities across Ukraine, provide spiritual guidance, and make a lasting difference in people's lives. Together, we can bring hope and transformation."
        }
      },
      churches: {
        title: 'Our Churches',
        subtitle: 'Find a United Methodist Church community near you across Ukraine',
        serviceTimesTitle: 'Service Times',
        ministriesTitle: 'Main Ministries',
        locationsTitle: 'Church Locations'
      },
      congregations: {
        title: 'Our Congregations',
        intro: 'The United Methodist Church in Ukraine brings together communities in cities across the country — and beyond Ukraine\'s borders. Each congregation has its own character, history and ministries, yet all share a common faith and calling to love boldly, serve joyfully and lead courageously.',
        sectionUkraine: 'Congregations in Ukraine',
        sectionGermany: 'Congregation in Germany',
        viewCongregation: 'View congregation',
        allCongregations: 'All Congregations',
        searchPlaceholder: 'Search by name or location…',
        noResults: 'No congregations found for your search.',
        worship: 'Worship',
        about: 'About the Congregation',
        ministries: 'Our Ministries',
        findUs: 'Find Us',
        pastor: 'Pastor',
        pastors: 'Pastors',
        phone: 'Phone',
        address: 'Address',
        contactAddress: 'Contact Address',
        meetingLocation: 'Meeting Location',
        languages: 'Languages',
        schedule: 'Schedule',
        openMap: 'Open in Google Maps',
        onlineBadge: 'Online',
        scheduleUnconfirmed: 'Schedule unconfirmed',
        noLivestream: 'Services are not currently livestreamed.',
        onlineWorship: 'Online Worship',
        onlineStream: 'Watch Online'
      }
    }
  },
  uk: {
    translation: {
      nav: {
        home: 'Головна',
        about: 'Про нас',
        churches: 'Наші громади',
        news: 'Новини',
        ministers: 'Наші служителі',
        calendar: 'Календар',
        pidZamkom: 'Під Замком',
        contacts: 'Контакти',
        education: 'Освіта',
        help: 'Підтримати нас'
      },
      common: {
        learnMore: 'Дізнатися більше',
        readMore: 'Читати далі',
        viewAll: 'Переглянути все',
        contactUs: "Зв'язатися з нами",
        sendMessage: 'Надіслати повідомлення',
        backTo: 'Повернутися до',
        comingSoon: 'Незабаром',
        sunday: 'Неділя',
        monday: 'Понеділок',
        tuesday: 'Вівторок',
        wednesday: 'Середа',
        thursday: 'Четвер',
        friday: "П'ятниця",
        saturday: 'Субота'
      },
      footer: {
        description: "Об'єднана Методистська Церква в Україні - служимо громадам з вірою, надією та любов'ю.",
        quickLinks: 'Швидкі посилання',
        resources: 'Ресурси',
        contactTitle: 'Контакти',
        location: 'Україна',
        copyright: "Об'єднана Методистська Церква України. Всі права захищені."
      },
      home: {
        hero: {
          title: 'Вітаємо в ОМЦ України',
          description: "Ми — спільнота віри, об'єднана в Христі, що служить людям по всій Україні з любов'ю, надією та співчуттям. Приєднуйтеся до нас у поклонінні, спілкуванні та змінах у наших громадах."
        },
        about: {
          title: 'Хто ми',
          text1: "Об'єднана Методистська Церква України — це жива християнська спільнота, яка поєднує духовне життя з активним служінням людям. Ми підтримуємо людей, постраждалих від війни, розвиваємо громади та відкриті до співпраці з людьми, волонтерами й міжнародними партнерами.",
          text2: "Сміливо любити. Радісно служити. Відважно вести за собою.",
          readStory: 'Читати нашу повну історію'
        },
        news: {
          title: 'Останні новини',
          subtitle: 'Будьте в курсі подій нашої громади',
          viewAll: 'Всі новини'
        },
        events: {
          title: 'Майбутні події',
          subtitle: 'Приєднуйтесь до нас на богослужіння, спілкування та зібрання громади',
          viewCalendar: 'Переглянути календар'
        },
        map: {
          title: 'Наші громади по всій Україні',
          subtitle: "Знайдіть Об'єднану Методистську Церкву поблизу вас",
          viewAll: 'Переглянути всі громади'
        },
        findCongregation: {
          title: 'Знайдіть громаду поруч',
          description: 'Знайдіть громаду поруч і дізнайтеся більше про її життя, богослужіння та служіння людям.',
          cta: 'Переглянути всі громади'
        },
        cta: {
          title: 'Підтримайте нашу місію',
          description: "Ваша щедрість допомагає нам служити громадам по всій Україні, надавати духовне керівництво та робити справжню різницю в житті людей. Разом ми можемо принести надію та перетворення."
        }
      },
      churches: {
        title: 'Наші церкви',
        subtitle: "Знайдіть громаду Об'єднаної Методистської Церкви поблизу вас по всій Україні",
        serviceTimesTitle: 'Час богослужінь',
        ministriesTitle: 'Основні служіння',
        locationsTitle: 'Розташування церков'
      },
      congregations: {
        title: 'Наші громади',
        intro: 'Об\'єднана Методистська Церква в Україні об\'єднує громади в різних містах країни — і за її межами. Кожна громада має своє обличчя, свою історію та своє служіння, і водночас усіх нас єднає спільна віра і покликання — сміливо любити, радісно служити та відважно вести за собою.',
        sectionUkraine: 'Громади в Україні',
        sectionGermany: 'Громада в Німеччині',
        viewCongregation: 'Про громаду',
        allCongregations: 'Усі громади',
        searchPlaceholder: 'Пошук за назвою або містом…',
        noResults: 'За вашим пошуком громад не знайдено.',
        worship: 'Богослужіння',
        about: 'Про громаду',
        ministries: 'Наші служіння',
        findUs: 'Як нас знайти',
        pastor: 'Пастор',
        pastors: 'Пастори',
        phone: 'Телефон',
        address: 'Адреса',
        contactAddress: 'Контактна адреса',
        meetingLocation: 'Місце зустрічей',
        languages: 'Мови',
        schedule: 'Розклад',
        openMap: 'Відкрити на Google Maps',
        onlineBadge: 'Онлайн',
        scheduleUnconfirmed: 'Розклад уточнюється',
        noLivestream: 'Онлайн-трансляції наразі не проводяться.',
        onlineWorship: 'Онлайн богослужіння',
        onlineStream: 'Дивитися онлайн'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
