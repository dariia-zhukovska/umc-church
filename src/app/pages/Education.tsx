import { BookOpen, GraduationCap, Users, Video, FileText, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const futurePrograms = [
  {
    icon: BookOpen,
    title: 'Bible Study Courses',
    description: 'Comprehensive courses covering Old and New Testament, biblical theology, and practical application for daily life.'
  },
  {
    icon: GraduationCap,
    title: 'Theological Training',
    description: 'Seminary-level courses for those called to ministry, including systematic theology, church history, and pastoral care.'
  },
  {
    icon: Users,
    title: 'Small Group Leader Training',
    description: 'Equipping facilitators with skills for leading effective Bible studies and discipleship groups.'
  },
  {
    icon: Video,
    title: 'Online Learning Platform',
    description: 'Access courses and resources from anywhere with our upcoming digital education platform.'
  },
  {
    icon: FileText,
    title: 'Study Resources',
    description: 'Library of commentaries, study guides, devotionals, and other materials for personal growth.'
  },
  {
    icon: Sparkles,
    title: 'Specialized Workshops',
    description: 'Focused training on topics like prayer, worship, evangelism, and Christian living.'
  }
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">Christian Education</h1>
          <p className="text-xl text-muted-foreground">
            We're building a comprehensive education platform to help you grow in faith and knowledge
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm mb-12">
            <h2 className="text-3xl font-bold mb-6">Growing in Faith Together</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that spiritual growth is a lifelong journey, and education is essential for developing mature, faithful disciples of Jesus Christ. Our upcoming education ministry will provide resources and opportunities for believers at every stage of their faith journey.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're new to the Christian faith, seeking deeper theological understanding, or preparing for ministry leadership, our education programs will offer the teaching, training, and support you need to grow spiritually and serve effectively.
            </p>
          </div>

          {/* Future Programs */}
          <h2 className="text-3xl font-bold mb-12 text-center">What's Coming</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {futurePrograms.map((program) => {
              const Icon = program.icon;
              return (
                <div key={program.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              );
            })}
          </div>

          {/* Current Offerings */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Available Now</h2>
            <p className="text-xl mb-8 opacity-90">
              While we develop our comprehensive education platform, you can still grow in faith through our existing programs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">Sunday School</h3>
                <p className="text-sm opacity-90">Weekly classes for all ages at local churches</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">Bible Studies</h3>
                <p className="text-sm opacity-90">Small groups meeting throughout the week</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">Discipleship</h3>
                <p className="text-sm opacity-90">One-on-one mentoring relationships</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/churches">Find a Local Church</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contacts">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="bg-white rounded-2xl p-12 shadow-sm mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Want to be notified when our education platform launches? Contact us to join our mailing list and be among the first to know when new courses and resources become available.
            </p>
            <Button asChild>
              <Link to="/contacts">Get Notified</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
