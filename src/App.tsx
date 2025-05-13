import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/admin" element={<AdminRSVP />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
