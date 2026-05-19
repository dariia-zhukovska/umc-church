import { Heart, Users, BookOpen, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: Heart,
    title: 'Spiritual Support',
    description: 'Prayer ministry, pastoral counseling, spiritual direction, and worship services for those seeking deeper connection with God.'
  },
  {
    icon: Users,
    title: 'Social Support',
    description: 'Community assistance programs including food distribution, clothing closets, and emergency aid for families in need.'
  },
  {
    icon: BookOpen,
    title: 'Educational Programs',
    description: 'Bible studies, seminars, workshops, and training programs for personal development and spiritual growth.'
  }
];

const activities = [
  {
    title: 'Weekly Prayer Meetings',
    description: 'Join us every Wednesday evening for corporate prayer and intercession.'
  },
  {
    title: 'Community Meals',
    description: 'Free hot meals served every Saturday to anyone in need, no questions asked.'
  },
  {
    title: 'Counseling Services',
    description: 'Professional Christian counseling available by appointment for individuals and families.'
  },
  {
    title: 'Children\'s Programs',
    description: 'After-school programs, tutoring, and safe spaces for children from the community.'
  },
  {
    title: 'Job Training',
    description: 'Skills training, resume workshops, and job search support for those seeking employment.'
  },
  {
    title: 'Support Groups',
    description: 'Addiction recovery, grief support, and other groups addressing life challenges.'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1550633600-4cfc6929e592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
];

export default function PidZamkom() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Pid Zamkom Spiritual & Social Center</h1>
              <p className="text-xl text-muted-foreground mb-8">
                A place of hope, healing, and transformation in the heart of our community
              </p>
              <Button size="lg" asChild>
                <Link to="/contacts">Contact Us</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Pid Zamkom Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pid Zamkom ("Under the Castle") is a comprehensive ministry center combining spiritual nurture with practical social support. We believe that God cares about the whole person - spiritual, emotional, physical, and social needs.
            </p>
            <p className="text-lg text-muted-foreground">
              Our center serves as a beacon of hope in the community, offering a safe, welcoming space where people can encounter God's love, find practical help, and build supportive relationships. We walk alongside individuals and families through life's challenges, providing resources, encouragement, and the transforming power of Christian community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div key={program.title} className="bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Main Activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Photo Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Whether you need support, want to volunteer, or wish to partner with us in ministry, we'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="font-medium mb-1">Location</div>
                <div className="text-sm text-muted-foreground">Kyiv, Ukraine</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="font-medium mb-1">Phone</div>
                <div className="text-sm text-muted-foreground">+380 44 XXX XXXX</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="font-medium mb-1">Email</div>
                <div className="text-sm text-muted-foreground">pz@ukraineumc.org</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/contacts">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/help">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
