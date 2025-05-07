import { useState } from "react";
import "./RSVP.css";

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
        name: `${formData.name}`,
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

  const handleGuestsChange = (count: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: count,
      companions:
        count > 1
          ? Array(count - 1)
              .fill("")
              .map((_, i) => prev.companions[i] || "")
          : [],
    }));
  };

  return (
    <section className="rsvp">
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
          <label>Email:</label>
          <input
            type="email"
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
            value={formData.guests}
            onChange={(e) => handleGuestsChange(parseInt(e.target.value) || 1)}
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
