import { useState } from "react";
import "./carousel.css";

const resimler = [
  "/carusel2.jpeg",
  "/carusel3.jpeg",
  "/carusel4.jpeg"
];

export default function Carousel() {
  const [aktifIndex, setAktifIndex] = useState(0);
  const [gizle, setGizle] = useState(false);

  const sonraki = () => {
    setGizle(true); // Geçiş sırasında eski resmi gizle
    setTimeout(() => {
      setAktifIndex((prevIndex) => (prevIndex + 1) % resimler.length);
      setGizle(false); // Yeni resim görünür hale gelir
    }, 500); // Geçiş süresiyle uyumlu (0.5 saniye)
  };

  const onceki = () => {
    setGizle(true);
    setTimeout(() => {
      setAktifIndex((prevIndex) => (prevIndex - 1 + resimler.length) % resimler.length);
      setGizle(false);
    }, 500);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          src={resimler[aktifIndex]}
          alt={`Görsel ${aktifIndex + 1}`}
          className={`carousel-image ${gizle ? "hidden" : ""}`} // Gizleme sınıfı ekle
        />
        <button onClick={onceki} className="carousel-button left">&#10094;</button>
        <button onClick={sonraki} className="carousel-button right">&#10095;</button>
      </div>
    </div>
  );
}
