import { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const events = [
  {
    id: 1,
    title: 'Sunday Worship Service',
    date: '2026-05-25',
    time: '10:00 AM',
    location: 'Kyiv Central Church',
    type: 'Worship',
    description: 'Join us for our weekly Sunday morning worship service with inspiring music and biblical teaching.'
  },
  {
    id: 2,
    title: 'Pastoral Leadership Meeting',
    date: '2026-05-28',
    time: '2:00 PM',
    location: 'Online via Zoom',
    type: 'Meeting',
    description: 'Monthly gathering of pastors and church leaders for prayer, planning, and mutual support.'
  },
  {
    id: 3,
    title: 'Youth Group Fellowship',
    date: '2026-06-01',
    time: '6:00 PM',
    location: 'Lviv UMC',
    type: 'Youth',
    description: 'Fun, faith, and friendship for teens. Games, worship, and small group discussions.'
  },
  {
    id: 4,
    title: 'Community Prayer Vigil',
    date: '2026-06-05',
    time: '7:00 PM',
    location: 'Odesa Church',
    type: 'Prayer',
    description: 'Evening of intercession for our nation, communities, and personal needs.'
  },
  {
    id: 5,
    title: 'Bible Study: Gospel of John',
    date: '2026-06-07',
    time: '6:30 PM',
    location: 'Kharkiv UMC',
    type: 'Education',
    description: 'Weekly Bible study exploring the Gospel of John. All are welcome, no prior knowledge required.'
  },
  {
    id: 6,
    title: 'Spring Youth Conference',
    date: '2026-06-14',
    time: '9:00 AM',
    location: 'Kyiv Conference Center',
    type: 'Event',
    description: 'Three-day conference for youth ages 13-18 with worship, workshops, and fellowship.'
  },
  {
    id: 7,
    title: 'Women\'s Ministry Brunch',
    date: '2026-06-15',
    time: '10:30 AM',
    location: 'Dnipro UMC',
    type: 'Fellowship',
    description: 'Monthly gathering for women to connect, share, and encourage one another in faith.'
  },
  {
    id: 8,
    title: 'Community Outreach Day',
    date: '2026-06-20',
    time: '8:00 AM',
    location: 'Various Locations',
    type: 'Outreach',
    description: 'Serve our community through food distribution, home repairs, and neighborhood care projects.'
  },
  {
    id: 9,
    title: 'Choir Rehearsal',
    date: '2026-06-21',
    time: '7:00 PM',
    location: 'Lviv UMC',
    type: 'Music',
    description: 'Weekly choir practice preparing special music for worship services.'
  },
  {
    id: 10,
    title: 'Men\'s Breakfast & Devotion',
    date: '2026-06-22',
    time: '7:30 AM',
    location: 'Kyiv Central Church',
    type: 'Fellowship',
    description: 'Monthly men\'s gathering for food, fellowship, and spiritual growth.'
  }
];

const eventTypes = ['All', 'Worship', 'Education', 'Youth', 'Fellowship', 'Prayer', 'Outreach', 'Event', 'Meeting', 'Music'];

export default function CalendarPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [currentMonth, setCurrentMonth] = useState(5);
  const [currentYear, setCurrentYear] = useState(2026);

  const filteredEvents = selectedType === 'All'
    ? events
    : events.filter(event => event.type === selectedType);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const prevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return filteredEvents.filter(event => event.date === dateStr);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Church Calendar</h1>
          <p className="text-xl text-muted-foreground">
            Stay connected with upcoming events, services, and activities
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">Filter by type:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    {monthNames[currentMonth - 1]} {currentYear}
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={prevMonth}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextMonth}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium text-sm text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: firstDay }).map((_, idx) => (
                    <div key={`empty-${idx}`} className="aspect-square" />
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, idx) => {
                    const day = idx + 1;
                    const dayEvents = getEventsForDay(day);
                    const hasEvents = dayEvents.length > 0;

                    return (
                      <div
                        key={day}
                        className={`aspect-square border rounded-lg p-2 hover:bg-gray-50 transition-colors ${
                          hasEvents ? 'border-primary bg-primary/5' : 'border-gray-200'
                        }`}
                      >
                        <div className="font-medium text-sm mb-1">{day}</div>
                        {hasEvents && (
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event) => (
                              <div
                                key={event.id}
                                className="text-xs bg-primary text-white rounded px-1 py-0.5 truncate"
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events List */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {filteredEvents.slice(0, 8).map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="bg-primary text-white rounded-lg p-2 text-center min-w-[50px] h-fit">
                        <div className="text-xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs uppercase">
                          {monthNames[new Date(event.date).getMonth()].slice(0, 3)}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{event.title}</h3>
                        <div className="space-y-1 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {event.description}
                        </p>
                        <div className="mt-2">
                          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
