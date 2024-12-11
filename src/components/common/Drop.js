"use client";

import React, { useEffect } from "react";

export default function Drop() {
  useEffect(() => {
    // jQuery'yi dinamik olarak yükleme
    const jQueryScript = document.createElement("script");
    jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jQueryScript.onload = () => {
      console.log("jQuery yüklendi.");

      // jQuery UI'yi dinamik olarak yükleme
      const jQueryUiScript = document.createElement("script");
      jQueryUiScript.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js";
      jQueryUiScript.onload = () => {
        console.log("jQuery UI yüklendi.");

        // Raindrops plugin'ini dinamik olarak yükleme
        const raindropsScript = document.createElement("script");
        raindropsScript.src = "/libs/jquery.raindrops.js";
        raindropsScript.onload = () => {
          console.log("Raindrops plugin yüklendi.");

          // Plugin çalıştır
          if (window.jQuery && window.jQuery.fn.raindrops) {
            console.log("Raindrops plugin tanımlandı.");
            window.jQuery("#drop-container").raindrops({
              waveLength: 340, // Dalga uzunluğu
              canvasHeight: 30, // Canvas yüksekliği
              color: "#84ba3f", // Dalga rengi
              frequency: 3, // Damlaların düşme sıklığı
              waveHeight: 50, // Dalga yüksekliği
              rippleSpeed: 0.1, // Dalga yayılma hızı
            });
          } else {
            console.error("Raindrops plugin tanımlanamadı.");
          }
        };
        raindropsScript.onerror = () => {
          console.error("Raindrops plugin yüklenemedi.");
        };
        document.body.appendChild(raindropsScript);
      };

      jQueryUiScript.onerror = () => {
        console.error("jQuery UI script yüklenemedi.");
      };
      document.body.appendChild(jQueryUiScript);
    };

    jQueryScript.onerror = () => {
      console.error("jQuery script yüklenemedi.");
    };

    document.body.appendChild(jQueryScript);
  }, []);

  return (
    <section id="drop-container" className="drop-container" style={{ height: "40px" }}>
      <canvas id="drop-canvas"></canvas>
    </section>
  );
}
