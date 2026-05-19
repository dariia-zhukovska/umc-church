import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';

const newsArticles = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: 'May 15, 2026',
    category: 'Events',
    title: 'Spring Youth Conference 2026',
    excerpt: 'Join us for an inspiring weekend of faith, fellowship, and spiritual growth as young people from across Ukraine gather together.',
    content: `Our annual Spring Youth Conference brings together hundreds of young people from across Ukraine for a transformative weekend of worship, learning, and community building. This year's theme, "Rooted in Faith," explores how young Christians can develop deep spiritual foundations in a rapidly changing world.

The conference features dynamic worship sessions, interactive workshops, small group discussions, and opportunities for service. Participants will hear from inspiring speakers, connect with peers from other cities, and discover new ways to live out their faith in daily life.

The weekend includes outdoor activities, creative arts sessions, and times of quiet reflection. We believe this holistic approach helps young people encounter God in multiple ways and build lasting friendships with other believers.

Registration is now open for all youth ages 13-18. Early bird pricing available until June 1st. Scholarships are available for those who need financial assistance. Contact your local church youth leader for more information.`
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1550633600-4cfc6929e592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: 'May 10, 2026',
    category: 'Ministry',
    title: 'Community Outreach Initiative',
    excerpt: 'Our churches are partnering with local organizations to provide food, clothing, and spiritual support to those in need.',
    content: `The United Methodist Church in Ukraine is launching a comprehensive community outreach initiative across all our church locations. This collaborative effort brings together volunteers, resources, and partnerships to serve our most vulnerable neighbors.

Each church will operate a weekly food distribution program, providing groceries and hot meals to families facing food insecurity. We're also establishing clothing closets with donated items for children and adults.

Beyond material support, we're offering free counseling services, job training workshops, and language classes. Our goal is to address both immediate needs and help people build better futures for themselves and their families.

Volunteers are needed in every city. Whether you can give a few hours a week or participate in special events, your service makes a real difference. Contact your local church to learn about volunteer opportunities.

Financial donations are also welcome and will be used to purchase food, supplies, and program materials. Every contribution helps us serve more people and expand our impact in communities across Ukraine.`
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: 'May 5, 2026',
    category: 'Education',
    title: 'New Bible Study Groups Starting',
    excerpt: 'Discover the Word of God in community. New small group Bible studies are forming in multiple cities across Ukraine.',
    content: `We're excited to announce the formation of new small group Bible studies in churches across Ukraine. These groups provide opportunities for deeper spiritual growth, authentic community, and practical application of Scripture to daily life.

Studies will focus on various topics including the Gospels, Old Testament wisdom literature, Paul's letters, and contemporary Christian living. Each group meets weekly for discussion, prayer, and mutual encouragement.

Groups are available at different times and in various formats to accommodate different schedules and learning preferences. Some meet in person at church facilities, while others gather in homes or connect online for maximum flexibility.

All studies use quality curriculum materials and are led by trained facilitators who create welcoming, grace-filled environments for learning and sharing. No prior Bible knowledge is required – just a desire to grow in faith and connect with other believers.

To join a small group, contact your local church office or visit our website to see the full list of available studies. Groups are starting in June, and space is limited, so register soon.`
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: 'April 28, 2026',
    category: 'Announcement',
    title: 'Pastoral Leadership Conference',
    excerpt: 'Church leaders from across Ukraine gathered for annual training, fellowship, and strategic planning for the year ahead.',
    content: `Our annual Pastoral Leadership Conference brought together ministers, lay leaders, and church staff from all UMC congregations in Ukraine. The three-day event focused on equipping leaders with new skills, sharing best practices, and building stronger connections across our church network.

Sessions covered topics including effective preaching, youth ministry strategies, small group leadership, financial stewardship, and community engagement. Participants also received training in pastoral care, conflict resolution, and organizational management.

A highlight of the conference was the strategic planning sessions where leaders collaborated on vision and goals for the coming year. We discussed how to better serve our communities, reach new people with the gospel, and strengthen existing ministries.

The conference included daily worship services, times of prayer and reflection, and informal fellowship meals where relationships were deepened and ideas were exchanged. Many participants noted how encouraging it was to connect with other leaders facing similar challenges and opportunities.

Next year's conference is already being planned. We encourage all church leaders to mark their calendars and plan to attend this valuable time of renewal and equipping.`
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: 'April 20, 2026',
    category: 'Mission',
    title: 'Humanitarian Aid Distribution Success',
    excerpt: 'Thanks to generous donors and dedicated volunteers, we distributed essential supplies to hundreds of families in need.',
    content: `Our recent humanitarian aid distribution event was a tremendous success, serving over 500 families across multiple cities in Ukraine. This effort was made possible through the generosity of international partners and the dedicated service of local volunteers.

Families received packages containing food staples, hygiene products, cleaning supplies, and children's items. Many also received winter clothing, blankets, and household goods. Each package was carefully assembled to meet basic needs and show Christ's love in practical ways.

The distribution events were organized efficiently to serve people with dignity and respect. Volunteers greeted each family warmly, prayed with those who requested it, and provided information about other available resources and support services.

Beyond the material assistance, these events created opportunities for meaningful connections. Many families shared their stories, volunteers offered encouragement, and new relationships were formed. Several people expressed interest in learning more about our churches and faith community.

This is an ongoing ministry, and we continue to need donations and volunteers. Financial contributions help us purchase supplies, while volunteers are essential for organizing and distributing aid. Contact your local UMC church to learn how you can participate.`
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: 'April 15, 2026',
    category: 'Worship',
    title: 'Easter Celebrations Across Ukraine',
    excerpt: 'Churches throughout our network celebrated the resurrection of Jesus Christ with joy, worship, and renewed hope.',
    content: `United Methodist churches across Ukraine celebrated Easter with special services, musical performances, and community gatherings. The resurrection of Jesus Christ was proclaimed with joy and hope in every congregation.

Easter Sunday services featured special music from choirs and worship teams, powerful preaching about the empty tomb and victory over death, and the sacrament of Holy Communion. Many churches held sunrise services in addition to their regular worship times.

Churches decorated with flowers, banners, and symbols of new life created beautiful worship environments. Families dressed in their finest clothes, children participated in Easter programs, and congregations sang beloved hymns of resurrection and hope.

Several churches organized community Easter egg hunts and fellowship meals, creating opportunities for church members to invite friends and neighbors. These events helped people experience the warmth of Christian community and hear the Easter message.

Attendance was higher than usual across all churches, with many first-time visitors joining regular members for worship. Follow-up teams are now connecting with visitors to welcome them and invite them to participate in ongoing church life.

The Easter season continues through Pentecost Sunday on June 8th, when we'll celebrate the gift of the Holy Spirit and the birth of the church.`
  }
];

export default function News() {
  const { id } = useParams();

  if (id) {
    const article = newsArticles.find(a => a.id === parseInt(id));

    if (!article) {
      return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Article not found</p>
      </div>;
    }

    const relatedArticles = newsArticles.filter(a => a.id !== article.id).slice(0, 3);

    return (
      <div className="min-h-screen bg-gray-50">
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img
                src={article.image}
                alt={article.title}
                className="w-full aspect-[21/9] object-cover"
              />

              <div className="p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-primary">{article.category}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-8">{article.title}</h1>

                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Card key={related.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Link to={`/news/${related.id}`}>
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <span className="text-xs font-medium text-primary">{related.category}</span>
                          <h3 className="font-bold mt-2 mb-1 line-clamp-2">{related.title}</h3>
                          <p className="text-xs text-muted-foreground">{related.date}</p>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl text-muted-foreground">
            Stay connected with the latest from our church community
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <Link to={`/news/${article.id}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                    <span className="text-sm font-medium text-primary hover:underline">
                      Read More →
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
