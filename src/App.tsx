import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import RSVP from "./pages/RSVP";
import "./styles/main.css";
import AdminRSVP from "./pages/AdminRSVP";

function App() {
  return (
    <Router>
      <div className="wedding-site">
        <header>
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/location">Локация</Link>
            <Link to="/gallery">Галерея</Link>
            <Link to="/rsvp">RSVP</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/admin" element={<AdminRSVP />} />
          </Routes>
        </main>

        <footer>
          <p>С любовью, Евгений & Мария</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
