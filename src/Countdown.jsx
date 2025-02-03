import { useEffect, useState } from "react";
import "./countdown.css";

export default function Countdown() {
  // Hedef tarih: Bugün saat 23:59
  const hedefTarih = new Date();
  hedefTarih.setHours(23, 59, 0, 0);

  // Sayaç durumu localStorage'da saklanır
  const sayaçBittiLocal = localStorage.getItem("sayaçBitti") === "true";
  const [sayaçBitti, setSayaçBitti] = useState(sayaçBittiLocal);
  const [timeLeft, setTimeLeft] = useState(kalanSüreHesapla());

  function kalanSüreHesapla() {
    const now = new Date();
    const fark = hedefTarih - now;

    // Eğer hedef tarih geçtiyse, sayaç bitti olarak işaretle
    if (fark < 0) {
      setSayaçBitti(true);
      localStorage.setItem("sayaçBitti", "true");
      return {
        gün: 0,
        saat: 0,
        dakika: 0,
        saniye: 0,
      };
    }

    return {
      gün: Math.floor(fark / (1000 * 60 * 60 * 24)),
      saat: Math.floor((fark / (1000 * 60 * 60)) % 24),
      dakika: Math.floor((fark / (1000 * 60)) % 60),
      saniye: Math.floor((fark / 1000) % 60),
    };
  }

  useEffect(() => {
    if (sayaçBitti) return; // Sayaç bitti ise tekrar çalıştırma

    const interval = setInterval(() => {
      setTimeLeft(kalanSüreHesapla());
    }, 1000);

    return () => clearInterval(interval);
  }, [sayaçBitti]);

  return (
    <div className="countdown-container">
      <h1>🔥 Launching Soon – Don't Miss Out! 🔥</h1>
      <h2>Follow us for more updates! 🚀</h2>
      {sayaçBitti ? (
        <img src="./completed.jpeg" alt="Sayaç Bitti" className="completed-image" />
      ) : (
        <div className="timer">
          <div className="time-box">
            <span>{timeLeft.gün}</span>
            <p>Day</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.saat}</span>
            <p>Hour</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.dakika}</span>
            <p>Minute</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.saniye}</span>
            <p>Second</p>
          </div>
        </div>
      )}
    </div>
  );
}
