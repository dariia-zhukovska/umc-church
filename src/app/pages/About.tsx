import { Heart, Book, Users, Cross } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground">
            United in faith, serving with love
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The United Methodist Church in Ukraine exists to make disciples of Jesus Christ for the transformation of the world. We are committed to proclaiming the good news of God's grace, nurturing believers, and serving those in need throughout Ukraine.
            </p>
            <p className="text-lg text-muted-foreground">
              Through worship, education, fellowship, and service, we seek to embody Christ's love in our communities and bring hope to all people.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">History of United Methodist Church in Ukraine</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Early Beginnings</h3>
              <p className="text-muted-foreground">
                The United Methodist Church first came to Ukraine in the early 1990s, following the independence of Ukraine from the Soviet Union. During this period of great social and spiritual change, many Ukrainians were searching for faith communities and spiritual guidance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Growth and Expansion</h3>
              <p className="text-muted-foreground">
                Throughout the 1990s and 2000s, the UMC in Ukraine grew steadily, establishing churches in major cities including Kyiv, Lviv, Odesa, Kharkiv, and Dnipro. Each congregation developed its unique ministry while maintaining strong connections to the global United Methodist community.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Modern Era</h3>
              <p className="text-muted-foreground">
                Today, the United Methodist Church in Ukraine continues to serve diverse communities across the country. We have adapted to modern challenges while staying rooted in Methodist tradition, using technology to reach new audiences and maintaining our commitment to social justice and community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Today */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Ministry Today</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cross className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-3">Worship</h3>
              <p className="text-sm text-muted-foreground">
                Weekly services in Ukrainian and Russian, bringing communities together in prayer and praise
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-3">Education</h3>
              <p className="text-sm text-muted-foreground">
                Bible studies, theological training, and Christian education programs for all ages
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-3">Outreach</h3>
              <p className="text-sm text-muted-foreground">
                Community service, humanitarian aid, and support for those facing hardship
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-3">Fellowship</h3>
              <p className="text-sm text-muted-foreground">
                Building strong Christian communities through small groups and events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What We Believe</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold mb-2">The Trinity</h3>
              <p className="text-muted-foreground">
                We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold mb-2">Scripture</h3>
              <p className="text-muted-foreground">
                We believe the Bible is the inspired Word of God, containing all things necessary for salvation and Christian living.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold mb-2">Grace</h3>
              <p className="text-muted-foreground">
                We believe in God's prevenient, justifying, and sanctifying grace, freely offered to all people.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold mb-2">Salvation</h3>
              <p className="text-muted-foreground">
                We believe salvation comes through faith in Jesus Christ, God's Son, who died for our sins and rose from the dead.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold mb-2">The Church</h3>
              <p className="text-muted-foreground">
                We believe in the universal church, the body of Christ, called to worship, fellowship, and mission.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold mb-2">Christian Living</h3>
              <p className="text-muted-foreground">
                We believe in living out our faith through works of piety and mercy, personal holiness and social justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Traditional Views */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Our Traditional Values</h2>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                As United Methodists in Ukraine, we uphold the traditional teachings of the Christian faith while engaging thoughtfully with the modern world. Our foundation rests on:
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Biblical Authority:</strong> We honor Scripture as God's revealed Word and seek to interpret it faithfully within our Ukrainian cultural context.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Family Values:</strong> We support and strengthen families as the foundation of society and faith formation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Social Holiness:</strong> We believe personal faith must be expressed through service to others and working for justice in society.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Ukrainian Heritage:</strong> We celebrate our Ukrainian identity and seek to embody Christian faith in ways meaningful to our culture.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
