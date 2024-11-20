// src/app/dashboard/admin/all/page.js
import { useEffect, useState } from "react";
import { fetchAllReservations } from "../../../../services/reservations/allServices";
import ReservationTable from "../../../../components/reservations/ReservationTable"; // Tablo bileşeni
import styles from "../../../../styles/reservations/all.module.css";

export default function AllReservations() {
  const [reservations, setReservations] = useState([]); // Rezervasyonları tutar
  const [error, setError] = useState(""); // Hata mesajlarını tutar

  useEffect(() => {
    async function getReservations() {
      try {
        const data = await fetchAllReservations();
        setReservations(data); // API'den gelen rezervasyonları set eder
      } catch (err) {
        setError("Rezervasyonlar yüklenirken bir hata oluştu."); // Hata durumu
      }
    }
    getReservations();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Tüm Rezervasyonlar</h1>
      {error && <p className={styles.error}>{error}</p>}
      {!error && reservations.length === 0 && (
        <p>Henüz rezervasyon bulunmamaktadır.</p>
      )}
      {reservations.length > 0 && <ReservationTable reservations={reservations} />}
    </div>
  );
}
