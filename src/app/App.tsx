import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Churches from './pages/Churches';
import News from './pages/News';
import Ministers from './pages/Ministers';
import CalendarPage from './pages/Calendar';
import PidZamkom from './pages/PidZamkom';
import Contacts from './pages/Contacts';
import Education from './pages/Education';
import Help from './pages/Help';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/churches" element={<Churches />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<News />} />
            <Route path="/ministers" element={<Ministers />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/pid-zamkom" element={<PidZamkom />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/education" element={<Education />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}