import { Routes, Route } from "react-router-dom";
import "../i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Churches from "./pages/Churches";
import CongregationPage from "./pages/congregations/CongregationPage";
import News from "./pages/News";
import Ministers from "./pages/Ministers";
// import CalendarPage from './pages/Calendar';
import PidZamkom from "./pages/PidZamkom";
import Contacts from "./pages/Contacts";
import Education from "./pages/Education";
import Help from "./pages/Help";
import Beliefs from "./pages/Beliefs";
import History from "./pages/History";
import ChurchMap from "./pages/ChurchMap";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/churches" element={<Churches />} />
            <Route path="/churches/:slug" element={<CongregationPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<News />} />
            <Route path="/ministers" element={<Ministers />} />
            {/* <Route path="/calendar" element={<CalendarPage />} /> */}
            <Route path="/pid-zamkom" element={<PidZamkom />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/beliefs" element={<Beliefs />} />
            <Route path="/history" element={<History />} />
            <Route path="/map" element={<ChurchMap />} />
            <Route path="/education" element={<Education />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
