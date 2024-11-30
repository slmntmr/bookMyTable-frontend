"use client";

import { useState } from "react";
import styles from "../../styles/reservations/registerForm.module.css";

export default function ReservationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    reservationDate: "",
    numberOfGuests: "",
    userId: "",
    restaurantId: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tarih validasyonu
    const enteredDate = new Date(formData.reservationDate);
    const now = new Date();
    const maxAllowedDate = new Date("9999-12-31T23:59:59"); // Maksimum desteklenen tarih

    if (!formData.reservationDate) {
      setError("Lütfen bir rezervasyon tarihi seçin.");
      return;
    }

    // Geçersiz tarih kontrolü
    if (isNaN(enteredDate.getTime())) {
      setError("Geçersiz bir tarih girdiniz. Lütfen doğru bir tarih seçin.");
      return;
    }

    // Tarih geçmişte mi?
    if (enteredDate < now) {
      setError("Rezervasyon tarihi geçmiş bir tarih olamaz.");
      return;
    }

    // Tarih maksimum sınırdan büyük mü?
    if (enteredDate > maxAllowedDate) {
      setError("Rezervasyon tarihi maksimum desteklenen tarihi aşamaz.");
      return;
    }

    if (formData.numberOfGuests <= 0) {
      setError("Misafir sayısı pozitif bir değer olmalıdır.");
      return;
    }
    if (!formData.userId) {
      setError("Kullanıcı ID'si boş bırakılamaz.");
      return;
    }
    if (!formData.restaurantId) {
      setError("Restoran ID'si boş bırakılamaz.");
      return;
    }

    setError(""); // Hata yoksa temizle

    // Tarihi ISO 8601 formatına dönüştür
    const [datePart, timePart] = formData.reservationDate.split("T");
    const formattedDate = `${datePart}T${timePart}:00.000Z`;

    const formattedData = {
      ...formData,
      reservationDate: formattedDate,
    };

    onSubmit(formattedData); // Dönüştürülmüş veriyi gönder
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Yeni Rezervasyon</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Tarih:</label>
        <input
          type="datetime-local"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Misafir Sayısı:</label>
        <input
          type="number"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Kullanıcı ID:</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Restoran ID:</label>
        <input
          type="text"
          name="restaurantId"
          value={formData.restaurantId}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>} {/* Hata mesajı */}
      <button type="submit" className={styles.button}>
        Oluştur
      </button>
    </form>
  );
}
