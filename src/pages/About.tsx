import "../styles/Home.css";
import heart from "../assets/pngtree-vector-heart-icon-png-image_925570-removebg-preview (1).png";
import cross from "../assets/png-clipart-computer-icons-christian-cross-icon-design-christian-cross-angle-logo-removebg-preview.png";
import { Header } from "../components/Header";

export default function About() {
  return (
    <section className="home-section">
      <Header />
      <h1 className="home-title">Дорогие гости!</h1>
      <p className="invitation-text">
        Цветовая гамма нашей свадьбы — благородное сочетание белого и глубокого
        бордового
      </p>
      <p style={{ textAlign: "left" }} className="invitation-text">
        Чтобы создать гармоничную атмосферу праздника, мы будем рады, если вы
        выберете наряды в одной из этих гамм:<br></br> <br></br>
        <img style={{ width: "20px", height: "20px" }} src={heart}></img>
        Классика и элегантность: <br></br>• Кремовый, шампань; <br></br> •
        Мягкий бежевый, карамельный, песочный; <br></br>• Серебристый,
        светло-серый. <br></br>
        <img style={{ width: "20px", height: "20px" }} src={heart}></img>{" "}
        Глубокие благородные тона: <br></br>• Бордовый, винный, бургунди;{" "}
        <br></br>• Темно-синий, сливовый;
        <br></br>• Шоколадный, кофейный;<br></br>• Чёрный.<br></br>
        <img style={{ width: "20px", height: "20px" }} src={heart}></img> Нежные
        акценты (по желанию): <br></br>• Пудрово-розовый, пыльная роза;{" "}
        <br></br>• Лавандовый, сиреневый; <br></br>• Персиковый. <br></br>
        <br></br>{" "}
        <img style={{ width: "25px", height: "25px" }} src={cross}></img>{" "}
        Пожалуйста, по возможности избегайте:<br></br> • Ярких неоновых
        оттенков;
        <br></br>• Кислотных цветов (зеленый, желтый, оранжевый);<br></br>•
        Красный, белый.<br></br>
      </p>
      <br></br>
      <p className="invitation-text">
        Цветы, увы, не долгожители, а вот добрые дела - вечны! Если хотите
        сделать нам подарок, выберите на свой вкус:<br></br> - бутылка
        алкогольного напитка для нашего бара,<br></br> - или корм для хвостиков
        из приюта.<br></br> Спасибо, что разделяете наши ценности и поможете
        создать идеальную картину нашего дня!
      </p>
    </section>
  );
}
