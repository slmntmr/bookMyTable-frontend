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

    // Input validation
    const now = new Date();
    const enteredDate = new Date(formData.reservationDate);
    if (!formData.reservationDate || enteredDate < now) {
      setError("Lütfen gelecekte bir rezervasyon tarihi seçin.");
      return;
    }
    if (formData.numberOfGuests <= 0) {
      setError("Misafir sayısı pozitif olmalıdır.");
      return;
    }
    if (!formData.userId || !formData.restaurantId) {
      setError("Kullanıcı ve restoran bilgilerini doldurun.");
      return;
    }

    setError(""); // Clear errors
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Yeni Rezervasyon</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Tarih</label>
        <input
          type="datetime-local"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Misafir Sayısı</label>
        <input
          type="number"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Kullanıcı ID</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Restoran ID</label>
        <input
          type="text"
          name="restaurantId"
          value={formData.restaurantId}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>
        Oluştur
      </button>
    </form>
  );
}
