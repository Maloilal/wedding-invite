import { useEffect, useState } from "react";
import "../styles/Home.css";
import firstPhoto from "../assets/firstPhoto1.png";
import secondPhoto from "../assets/secondPhoto1.png";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-08-22T16:00:00").getTime(); // Указали конкретное время свадьбы

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="layout-row"
    >
      <div className={"photo-wrapper"}>
        <img
          style={{
            width: "550px",
            height: "700px",
            objectFit: "cover",
            zIndex: 100,
          }}
          src={firstPhoto}
          alt="Мария"
        />
      </div>
      <section className="home-section">
        <Header />
        <h1 className="home-title">Дорогие друзья и родные!</h1>
        <div className="couple-names">
          <span>Мария</span>
          <span className="ampersand">&</span>
          <span>Евгений</span>
        </div>
        <p className="invitation-text">Приглашаем вас на нашу свадьбу</p>
        <div
          style={{ border: "2px solid #7A1E2D", borderRadius: "40px" }}
          className="wedding-date"
        >
          22 Августа 2025 в 15:00
        </div>
        <div>
          <Link to="/rsvp">
            <button className="button">Заполните анкету</button>
          </Link>
        </div>
        <div className="countdown-container">
          <div className="countdown-title">До свадьбы осталось:</div>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-value">{countdown.days}</span>
              <span className="countdown-label">дней</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">
                {countdown.hours.toString().padStart(2, "0")}
              </span>
              <span className="countdown-label">часов</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">
                {countdown.minutes.toString().padStart(2, "0")}
              </span>
              <span className="countdown-label">минут</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">
                {countdown.seconds.toString().padStart(2, "0")}
              </span>
              <span className="countdown-label">секунд</span>
            </div>
          </div>
          <div></div>
        </div>
        <div style={{ paddingTop: "10px" }}>
          {" "}
          <p>С любовью, Евгений & Мария</p>
        </div>
      </section>
      <div className={"photo-wrapper"}>
        <img
          style={{
            width: "550px",
            height: "700px",
            objectFit: "cover",
            zIndex: 100,
          }}
          src={secondPhoto}
          alt="Мария и Евгений"
        />
      </div>
    </div>
  );
}
