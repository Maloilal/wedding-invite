import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import RSVP from "./pages/RSVP";
import "./styles/main.css";
import AdminRSVP from "./pages/AdminRSVP";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="wedding-site">
        <header>
          <nav>
            <Link to="/">
              <button className="button-nav">Главная</button>
            </Link>
            <Link to="/location">
              <button className="button-nav">Локация</button>
            </Link>
            <Link to="/rsvp">
              <button className="button-nav">RSVP</button>
            </Link>
            <Link to="/about">
              <button className="button-nav">Доп.Инфорция</button>
            </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/admin" element={<AdminRSVP />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            color: "black",
          }}
        >
          <p>С любовью, Евгений & Мария</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
