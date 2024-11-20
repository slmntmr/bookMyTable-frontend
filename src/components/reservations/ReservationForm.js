// src/components/ReservationForm.js
import { useState } from "react";
import styles from "../../styles/reservations/RegisterForm.module.css";

export default function ReservationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    reservationDate: "",
    numberOfGuests: "",
    userId: "",
    restaurantId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Form verilerini gönder
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Tarih:</label>
      <input
        type="datetime-local"
        name="reservationDate"
        value={formData.reservationDate}
        onChange={handleChange}
      />
      <label>Misafir Sayısı:</label>
      <input
        type="number"
        name="numberOfGuests"
        value={formData.numberOfGuests}
        onChange={handleChange}
      />
      <label>Kullanıcı ID:</label>
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
      />
      <label>Restoran ID:</label>
      <input
        type="text"
        name="restaurantId"
        value={formData.restaurantId}
        onChange={handleChange}
      />
      <button type="submit">Oluştur</button>
    </form>
  );
}
