import { Link } from "react-router-dom";

export const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/location">Локация</Link>
      </li>
      <li>
        <Link to="/schedule">Программа</Link>
      </li>
      <li>
        <Link to="/rsvp">RSVP</Link>
      </li>
    </ul>
  </nav>
);
