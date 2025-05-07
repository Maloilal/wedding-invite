import { useEffect, useState } from "react";
import "./AdminRSVP.css";

type RSVPEntry = {
  id: number;
  name: string;
  email: string;
  guests: number;
  attending: string;
  created_at: string;
  companions: string[];
};

export default function AdminRSVP() {
  const [entries, setEntries] = useState<RSVPEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/rsvp")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при получении RSVP:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="admin-rsvp">
      <h2>RSVP Ответы</h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : entries.length === 0 ? (
        <p>Ответов пока нет.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Email</th>
              <th>Гостей</th>
              <th>Спутники</th>
              <th>Статус</th>
              <th>Когда</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.guests}</td>
                <td>
                  {entry.companions.map((companion, idx) => (
                    <div key={idx} className="companion-name">
                      {companion}
                    </div>
                  ))}
                </td>
                <td>{entry.attending === "yes" ? "Придёт" : "Не придёт"}</td>
                <td>{new Date(entry.created_at).toLocaleString("ru-RU")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
