import { Link } from 'react-router-dom';
import { Calendar, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    alt: 'Church worship service'
  },
  {
    url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    alt: 'Community gathering'
  },
  {
    url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    alt: 'Prayer and worship'
  },
  {
    url: 'https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    alt: 'Community praise'
  }
];

const newsItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    date: 'May 15, 2026',
    title: 'Spring Youth Conference 2026',
    excerpt: 'Join us for an inspiring weekend of faith, fellowship, and spiritual growth as young people from across Ukraine gather together.',
    category: 'Events'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1550633600-4cfc6929e592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    date: 'May 10, 2026',
    title: 'Community Outreach Initiative',
    excerpt: 'Our churches are partnering with local organizations to provide food, clothing, and spiritual support to those in need.',
    category: 'Ministry'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    date: 'May 5, 2026',
    title: 'New Bible Study Groups Starting',
    excerpt: 'Discover the Word of God in community. New small group Bible studies are forming in multiple cities across Ukraine.',
    category: 'Education'
  }
];

const upcomingEvents = [
  {
    id: 1,
    date: { day: '25', month: 'May' },
    title: 'Sunday Worship Service',
    time: '10:00 AM',
    location: 'Kyiv Central Church'
  },
  {
    id: 2,
    date: { day: '28', month: 'May' },
    title: 'Pastoral Leadership Meeting',
    time: '2:00 PM',
    location: 'Online via Zoom'
  },
  {
    id: 3,
    date: { day: '01', month: 'Jun' },
    title: 'Youth Group Fellowship',
    time: '6:00 PM',
    location: 'Lviv UMC'
  },
  {
    id: 4,
    date: { day: '05', month: 'Jun' },
    title: 'Community Prayer Vigil',
    time: '7:00 PM',
    location: 'Odesa Church'
  }
];

const churches = [
  { id: 1, name: 'Lviv', position: { top: '35%', left: '24%' } },
  { id: 2, name: 'Uzhhorod', position: { top: '40%', left: '18%' } },
  { id: 3, name: 'Kamianytsia', position: { top: '40.5%', left: '19.5%' } },
  { id: 4, name: 'Ukrainka', position: { top: '30%', left: '48%' } },
  { id: 5, name: 'Kharkiv', position: { top: '35%', left: '65%' } },
  { id: 6, name: 'Perychyn', position: { top: '38%', left: '22%' } }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">{t('home.hero.title')}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t('home.hero.description')}
              </p>
              <Button size="lg" asChild>
                <Link to="/about">{t('common.learnMore')}</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={carouselImages[currentSlide].url}
                  alt={carouselImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">{t('home.about.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('home.about.text1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.about.text2')}
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">{t('home.about.readStory')} <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('home.news.title')}</h2>
              <p className="text-muted-foreground">{t('home.news.subtitle')}</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/news">{t('home.news.viewAll')}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary">{item.category}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="text-sm font-medium text-primary hover:underline">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('home.events.title')}</h2>
              <p className="text-muted-foreground">{t('home.events.subtitle')}</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/calendar">{t('home.events.viewCalendar')}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[60px]">
                      <div className="text-2xl font-bold">{event.date.day}</div>
                      <div className="text-xs uppercase">{event.date.month}</div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{event.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Ukraine Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{t('home.map.title')}</h2>
            <p className="text-muted-foreground">{t('home.map.subtitle')}</p>
          </div>

          <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 aspect-[16/10] max-w-4xl mx-auto">
            <svg viewBox="0 0 800 500" className="w-full h-full">
              {/* Ukraine map shape */}
              <path
                d="M 120 180 L 140 160 L 160 150 L 180 155 L 200 165 L 215 180 L 230 190 L 250 185 L 270 175 L 290 170 L 310 165 L 330 160 L 350 155 L 370 152 L 390 150 L 420 152 L 450 155 L 480 160 L 510 165 L 540 172 L 570 180 L 600 190 L 625 200 L 645 215 L 660 230 L 670 250 L 675 270 L 678 290 L 675 310 L 670 330 L 660 350 L 645 365 L 625 375 L 600 380 L 575 385 L 550 388 L 525 390 L 500 392 L 480 395 L 460 400 L 445 410 L 435 425 L 425 415 L 410 410 L 390 405 L 370 402 L 350 400 L 330 398 L 310 395 L 290 390 L 270 385 L 250 380 L 230 375 L 210 370 L 190 360 L 175 350 L 160 335 L 150 315 L 142 295 L 135 275 L 130 255 L 125 235 L 122 215 L 120 195 Z"
                fill="#4ade80"
                stroke="#22c55e"
                strokeWidth="3"
                opacity="0.4"
              />
              {/* Crimean peninsula */}
              <path
                d="M 440 410 L 455 415 L 470 418 L 485 420 L 500 418 L 510 415 L 515 410 L 510 405 L 500 402 L 485 400 L 470 401 L 455 405 Z"
                fill="#4ade80"
                stroke="#22c55e"
                strokeWidth="2"
                opacity="0.4"
              />
            </svg>

            {churches.map((church) => (
              <Link
                key={church.id}
                to="/churches"
                className="absolute group"
                style={{ top: church.position.top, left: church.position.left, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg group-hover:scale-150 transition-transform cursor-pointer"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
                    {church.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/churches">{t('home.map.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Help/Donation CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.cta.description')}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/help">{t('nav.help')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
