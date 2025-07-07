import { useState } from "react";
import "./RSVP.css";
import { Header } from "../components/Header";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    attending: "yes",
    companions: [""],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://79.133.182.46:3001/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        guests: formData.guests,
        attending: formData.attending,
        companions: formData.companions,
      }),
    });

    if (response.ok) {
      alert(`Спасибо, ${formData.name}! Ваш ответ сохранён.`);
      setFormData({
        name: "",
        email: "",
        guests: 1,
        attending: "yes",
        companions: [""],
      });
    } else {
      alert("Произошла ошибка при отправке данных.");
    }
  };

  const handleGuestsChange = (value: string) => {
    const count = parseInt(value) || 0;
    setFormData((prev) => {
      const requiredLength = Math.max(count - 1, 0);
      const newCompanions = [...prev.companions];

      if (newCompanions.length < requiredLength) {
        while (newCompanions.length < requiredLength) {
          newCompanions.push("");
        }
      } else if (newCompanions.length > requiredLength) {
        newCompanions.length = requiredLength;
      }

      return {
        ...prev,
        guests: count,
        companions: newCompanions,
      };
    });
  };

  return (
    <section className="rsvp">
      <Header />
      <h2>Подтвердите присутствие</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имя и Фамилия:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {formData.guests > 1 &&
          formData.companions.map((companion, idx) => (
            <div className="form-group" key={idx}>
              <label>Имя и фамилия гостя №{idx + 2}:</label>
              <input
                type="text"
                value={companion}
                onChange={(e) => {
                  const updated = [...formData.companions];
                  updated[idx] = e.target.value;
                  setFormData({ ...formData, companions: updated });
                }}
                required
              />
            </div>
          ))}

        <div className="form-group">
          <label>
            Контактная информация (telegram, email, номер телефона):
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Количество гостей:</label>
          <input
            type="number"
            min="1"
            placeholder="1"
            value={formData.guests === 0 ? "" : formData.guests}
            onChange={(e) => handleGuestsChange(e.target.value)}
          />
        </div>

        <div className="form-group radio-group">
          <label>
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={formData.attending === "yes"}
              onChange={() => setFormData({ ...formData, attending: "yes" })}
            />
            С радостью приду!
          </label>
          <label>
            <input
              type="radio"
              name="attending"
              value="no"
              checked={formData.attending === "no"}
              onChange={() => setFormData({ ...formData, attending: "no" })}
            />
            К сожалению, не смогу
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
    </section>
  );
}
