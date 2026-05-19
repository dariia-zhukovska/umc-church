import { Heart, HandHeart, Users, Gift, CircleDollarSign, Calendar } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const donationOptions = [
  {
    icon: Heart,
    title: 'General Ministry Support',
    description: 'Support the overall mission and ministry of the United Methodist Church in Ukraine, including worship services, pastoral care, and community outreach.'
  },
  {
    icon: Users,
    title: 'Community Programs',
    description: 'Fund food distribution, clothing closets, counseling services, and other programs that serve people in need across Ukraine.'
  },
  {
    icon: Gift,
    title: 'Children & Youth Ministry',
    description: 'Invest in the next generation through Sunday school, youth groups, camps, and educational programs for young people.'
  },
  {
    icon: CircleDollarSign,
    title: 'Church Building & Maintenance',
    description: 'Help maintain and improve church facilities so they can continue serving as centers of worship and community life.'
  }
];

const volunteerOpportunities = [
  {
    title: 'Worship Team',
    description: 'Musicians, singers, and technical volunteers to enhance our worship services.',
    commitment: 'Weekly or bi-weekly'
  },
  {
    title: 'Children\'s Ministry',
    description: 'Teachers, helpers, and activity coordinators for Sunday school and children\'s programs.',
    commitment: 'Weekly or monthly'
  },
  {
    title: 'Community Outreach',
    description: 'Volunteers for food distribution, home visits, and community service projects.',
    commitment: 'Monthly or as needed'
  },
  {
    title: 'Administrative Support',
    description: 'Office assistance, communications, social media, and organizational tasks.',
    commitment: 'Flexible schedule'
  },
  {
    title: 'Hospitality Team',
    description: 'Greeters, ushers, and hosts to welcome people and create a friendly environment.',
    commitment: 'Weekly or monthly'
  },
  {
    title: 'Prayer Ministry',
    description: 'Committed intercessors who pray for church needs, community concerns, and individual requests.',
    commitment: 'Ongoing'
  }
];

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl opacity-90">
            Your generosity and service make a real difference in communities across Ukraine
          </p>
        </div>
      </section>

      {/* Our Position */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Why Your Support Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The United Methodist Church in Ukraine is committed to serving God and our communities through worship, fellowship, education, and compassionate outreach. We believe the church should be a place of hope, healing, and transformation for all people.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Your support enables us to maintain vibrant worship services, provide pastoral care, operate community assistance programs, train future leaders, and share the love of Christ in practical ways throughout Ukraine.
            </p>
            <p className="text-lg text-muted-foreground">
              Every gift and every volunteer hour helps us fulfill our mission to make disciples of Jesus Christ for the transformation of the world. We are grateful for your partnership in this vital ministry.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Give</h2>
            <p className="text-xl text-muted-foreground">
              Choose how you'd like to support our ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {donationOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card key={option.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                        <p className="text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your financial contribution supports all aspects of our ministry. All donations are used responsibly and with accountability to honor your generosity and God's calling on our church.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="bg-white rounded-xl p-6 flex-1 max-w-xs">
                <div className="font-bold text-lg mb-2">One-Time Gift</div>
                <p className="text-sm text-muted-foreground mb-4">Make a single donation to support our mission</p>
                <Button className="w-full">Give Once</Button>
              </div>

              <div className="bg-white rounded-xl p-6 flex-1 max-w-xs">
                <div className="font-bold text-lg mb-2">Monthly Giving</div>
                <p className="text-sm text-muted-foreground mb-4">Join our sustaining partners with recurring gifts</p>
                <Button className="w-full">Give Monthly</Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              For bank transfer details or questions about giving, please <Link to="/contacts" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HandHeart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your time, talents, and passion to serve others and grow in faith. There's a place for everyone in our ministry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{opportunity.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{opportunity.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Serve?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to help you find a volunteer opportunity that matches your gifts, interests, and availability. Reach out to your local church or contact our main office to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contacts">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/churches">Find Your Church</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Together, We Make a Difference</h2>
          <p className="text-xl opacity-90 mb-8">
            Thanks to the generosity and dedication of supporters like you, we're able to worship God, serve our communities, and share the transforming love of Jesus Christ throughout Ukraine. Your partnership in ministry changes lives and brings hope to those who need it most.
          </p>
          <p className="text-lg opacity-90">
            Thank you for prayerfully considering how you can support the United Methodist Church in Ukraine. We're honored to serve alongside you in this important work.
          </p>
        </div>
      </section>
    </div>
  );
}
