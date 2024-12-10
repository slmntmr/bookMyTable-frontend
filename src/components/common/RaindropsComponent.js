


 "use client";

import React, { useEffect } from "react";
import styles from "../../styles/common/RaindropsComponent.module.css";

export default function RaindropsComponent() {
  useEffect(() => {
    const canvas = document.getElementById("unique-raincanvas");
    const ctx = canvas.getContext("2d");

    // Canvas boyutlarını ayarla
    canvas.width = window.innerWidth;
    canvas.height = 50;

    const drops = [];

    // Damla oluşturma
    function createDrop() {
      drops.push({
        x: Math.random() * canvas.width, // Rastgele yatay pozisyon
        y: 0, // Başlangıç noktası
        radius: Math.random() * 3 + 2, // Damla büyüklüğü
        speed: Math.random() * 3 + 2, // Düşme hızı
      });
    }

    // Damla animasyonu
    function drawDrops() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((drop, index) => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fill();
        drop.y += drop.speed;

        // Damla canvas dışına çıkarsa kaldır
        if (drop.y > canvas.height) {
          drops.splice(index, 1);
        }
      });
    }

    // Animasyon döngüsü
    function animate() {
      drawDrops();
      requestAnimationFrame(animate);
    }

    setInterval(createDrop, 100); // Her 100ms'de yeni bir damla
    animate();
  }, []);

  return (
    <div id="unique-raindrops" className={styles.raindropsContainer}>
      <canvas id="unique-raincanvas" className={styles.raindropsCanvas}></canvas>
    </div>
  );
}
 

