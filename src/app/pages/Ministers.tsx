import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const pastors = [
  {
    id: 1,
    name: 'Rev. Oleksandr Petrov',
    role: 'Senior Pastor',
    church: 'Kyiv Central UMC',
    city: 'Kyiv',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Rev. Oleksandr has served as Senior Pastor of Kyiv Central UMC since 2015. He holds a Master of Divinity from Kyiv Theological Seminary and has over 20 years of ministry experience. His passion is equipping believers for service and building strong, missional communities.',
    email: 'o.petrov@ukraineumc.org',
    phone: '+380 44 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Rev. Natalia Kovalenko',
    role: 'Lead Pastor',
    church: 'Lviv UMC',
    city: 'Lviv',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Rev. Natalia brings creativity and compassion to her ministry in Lviv. With a background in social work and theology, she specializes in community outreach and youth ministry. She has been serving in pastoral ministry since 2012.',
    email: 'n.kovalenko@ukraineumc.org',
    phone: '+380 32 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Rev. Viktor Melnyk',
    role: 'Pastor',
    church: 'Odesa Methodist Community',
    city: 'Odesa',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Rev. Viktor has dedicated his ministry to serving the coastal communities of Odesa. His warm, relational approach to pastoral care creates a welcoming environment where people encounter God\'s love. He joined the UMC in 2010.',
    email: 'v.melnyk@ukraineumc.org',
    phone: '+380 48 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Rev. Iryna Shevchenko',
    role: 'Associate Pastor',
    church: 'Kharkiv UMC',
    city: 'Kharkiv',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Rev. Iryna serves with deep compassion and theological insight. Her ministry focuses on spiritual formation, women\'s ministry, and teaching. She is known for her powerful preaching and gift of encouragement.',
    email: 'i.shevchenko@ukraineumc.org',
    phone: '+380 57 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 5,
    name: 'Rev. Dmytro Bondarenko',
    role: 'Pastor',
    church: 'Dnipro UMC Fellowship',
    city: 'Dnipro',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Rev. Dmytro is passionate about discipleship and leadership development. He has planted two new churches and mentors emerging ministry leaders. His dynamic teaching style engages people of all ages.',
    email: 'd.bondarenko@ukraineumc.org',
    phone: '+380 56 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  }
];

const chaplains = [
  {
    id: 1,
    name: 'Chaplain Mykola Tkachenko',
    role: 'Hospital Chaplain',
    location: 'Kyiv Regional Hospital',
    city: 'Kyiv',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Chaplain Mykola provides spiritual care to patients, families, and medical staff at Kyiv Regional Hospital. His gentle presence and pastoral wisdom bring comfort to those facing illness and loss.',
    email: 'm.tkachenko@ukraineumc.org',
    phone: '+380 44 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Chaplain Anna Lysenko',
    role: 'Military Chaplain',
    location: 'Armed Forces of Ukraine',
    city: 'Multiple Locations',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Chaplain Anna serves Ukrainian service members with courage and compassion. She provides spiritual support, counseling, and worship services to military personnel and their families during challenging times.',
    email: 'a.lysenko@ukraineumc.org',
    phone: '+380 XX XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Chaplain Serhiy Kravchuk',
    role: 'Prison Chaplain',
    location: 'Correctional Facilities',
    city: 'Lviv Region',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    bio: 'Chaplain Serhiy ministers to incarcerated individuals, offering hope, rehabilitation support, and spiritual guidance. He leads Bible studies and facilitates programs that help inmates prepare for reintegration.',
    email: 's.kravchuk@ukraineumc.org',
    phone: '+380 32 XXX XXXX',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  }
];

function MinisterCard({ minister }: { minister: typeof pastors[0] }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={minister.photo}
            alt={minister.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1">{minister.name}</h3>
          <p className="text-primary font-medium mb-4">{minister.role}</p>

          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">{'church' in minister ? minister.church : minister.location}</div>
                <div>{minister.city}</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {minister.bio}
          </p>

          <div className="space-y-2 mb-6 text-sm">
            <a
              href={`mailto:${minister.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {minister.email}
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              {minister.phone}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <a
              href={minister.social.facebook}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={minister.social.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Ministers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Ministers</h1>
          <p className="text-xl text-muted-foreground">
            Meet the dedicated pastors and chaplains serving our communities
          </p>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Pastors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastors.map((pastor) => (
              <MinisterCard key={pastor.id} minister={pastor} />
            ))}
          </div>
        </div>
      </section>

      {/* Chaplains Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Chaplains</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Our chaplains serve in specialized ministry contexts, providing spiritual care in hospitals, military units, prisons, and other settings where people need God's presence and compassion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chaplains.map((chaplain) => (
              <MinisterCard key={chaplain.id} minister={chaplain} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
