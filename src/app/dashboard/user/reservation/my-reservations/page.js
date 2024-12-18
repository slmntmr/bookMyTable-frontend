"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchMyReservations } from "../../../../../services/reservations/my-reservationsServices";
import ReservationTable from "../../../../../components/reservations/my-reservationsForm";
import styles from "../../../../../styles/reservations/my-reservations.module.css";

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token bulunamadı. Lütfen giriş yapın.");
      router.push("/login");
      return;
    }

    async function getReservations() {
      try {
        const data = await fetchMyReservations();
        setReservations(data);
      } catch (err) {
        setError("Rezervasyonlar yüklenirken bir hata oluştu.");
      }
    }

    getReservations();
  }, [router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Kendi Rezervasyonlarım</h1>
      {error && <p className={styles.error}>{error}</p>}
      {!error && reservations.length === 0 && (
        <p>Henüz rezervasyonunuz bulunmamaktadır.</p>
      )}
      {reservations.length > 0 && (
        <ReservationTable reservations={reservations} />
      )}
    </div>
  );
}
