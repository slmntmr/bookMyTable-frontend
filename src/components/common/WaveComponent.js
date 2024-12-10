

 "use client";

import React, { useEffect } from "react";
import styles from "../../styles/common/waveComponent.module.css";

export default function WaveComponent() {
  useEffect(() => {
    // Raindrops animasyonlarını başlatmak için gerekli kod
    const raindrops = document.getElementById("raindrops");
    if (raindrops) {
      initRaindrops(raindrops);
    }
  }, []);

  const initRaindrops = (element) => {
    const canvas = document.createElement("canvas");
    element.appendChild(canvas);

    const options = {
      waveLength: 400,
      canvasHeight: 50, // Canvas yüksekliği CSS ile uyumlu
      color: "blue",
      frequency: 4,
      waveHeight: 70, // Dalga yüksekliği de küçültüldü
      rippleSpeed: 0.1,
    };

    canvas.height = options.canvasHeight;
    canvas.width = element.offsetWidth;
    const ctx = canvas.getContext("2d");
    const springs = Array(options.waveLength)
      .fill(0)
      .map(() => new Spring());

    function Spring() {
      this.p = 0;
      this.v = 0;
      this.update = function (density, rippleSpeed) {
        this.v += -rippleSpeed * this.p - density * this.v;
        this.p += this.v;
      };
    }

    function updateSprings(spread) {
      springs.forEach((spring) => spring.update(0.02, 0.1));
      const leftDeltas = [];
      const rightDeltas = [];
      for (let t = 0; t < 8; t++) {
        springs.forEach((spring, i) => {
          if (i > 0) {
            leftDeltas[i] = spread * (spring.p - springs[i - 1].p);
            springs[i - 1].v += leftDeltas[i];
          }
          if (i < springs.length - 1) {
            rightDeltas[i] = spread * (spring.p - springs[i + 1].p);
            springs[i + 1].v += rightDeltas[i];
          }
        });
      }
    }

    function renderWaves() {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      springs.forEach((spring, i) => {
        ctx.lineTo(
          i * (canvas.width / options.waveLength),
          canvas.height / 2 + spring.p
        );
      });
      ctx.lineTo(canvas.width, canvas.height);
      ctx.fillStyle = options.color;
      ctx.fill();
    }

    function animationTick() {
      if (Math.random() * 100 < options.frequency) {
        springs[Math.floor(Math.random() * springs.length)].p =
          options.waveHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateSprings(0.1);
      renderWaves();
      requestAnimationFrame(animationTick);
    }

    animationTick();
  };

  return <div id="raindrops" className={styles.raindrops}></div>;
}
 