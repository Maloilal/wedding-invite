import { Header } from "../components/Header";
import "../styles/mapContainer.css";

export default function Location() {
  const handleOpenMap = () => {
    window.open(
      "https://maps.google.com?q=г. Гомель, Речицкий проспект 158",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <section className="home-section">
      <Header />
      <h2 style={{ color: "#7A1E2D" }}>Локация</h2>
      <div style={{ color: "#7A1E2D" }} className="address">
        <p>Data</p>
        <p>г. Гомель, Речицкий просп. 158</p>
        <p>Начало в 15:00</p>
      </div>
      <div className="map-container">
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.218079749386!2d30.9095838!3d52.402723699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d44307fd1ecadd%3A0x1b7d12936ee338d1!2sData!5e0!3m2!1sru!2sus!4v1746472099121!5m2!1sru!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <button className="map-button" onClick={handleOpenMap}>
        Открыть в Google Maps
      </button>
    </section>
  );
}
