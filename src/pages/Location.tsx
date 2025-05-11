export default function Location() {
  return (
    <section className="home-section">
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
      <a
        href="https://www.google.com/maps/place/Data/@52.4027237,30.9095838,17z/data=!4m15!1m8!3m7!1s0x46d44307fd1ecadd:0x1b7d12936ee338d1!2sData!8m2!3d52.4027237!4d30.9095838!10e1!16s%2Fg%2F11s7ny8s8c!3m5!1s0x46d44307fd1ecadd:0x1b7d12936ee338d1!8m2!3d52.4027237!4d30.9095838!16s%2Fg%2F11s7ny8s8c?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
        className="map-button"
        style={{ backgroundColor: "#7A1E2D" }}
      >
        Открыть в Google Maps
      </a>
    </section>
  );
}
