import { Link } from "react-router-dom";
import "../styles/Headers.css";
export const Header = () => (
  <div className="navbar">
    <Link to="/">
      <button className="button-nav">Главная</button>
    </Link>
    <Link to="/location">
      <button className="button-nav">Локация</button>
    </Link>
    <Link to="/rsvp">
      <button className="button-nav">Анкета</button>
    </Link>
    <Link to="/about">
      <button className="button-nav">Доп.Инфорция</button>
    </Link>
  </div>
);
