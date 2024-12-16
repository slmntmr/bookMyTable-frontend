"use client"; // Bu dosyanın bir Client Component olduğunu belirtir

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Kullanıcı yönlendirme işlemleri için
import { fetchAllReservations } from "../../../../services/reservations/allServices"; // API çağrısı
import ReservationTable from "../../../../components/reservations/ReservationTable"; // Tablo bileşeni
import styles from "../../../../styles/reservations/all.module.css"; // Stil dosyası

export default function AllReservations() {
  const [reservations, setReservations] = useState([]); // Rezervasyonları tutar
  const [error, setError] = useState(""); // Hata mesajlarını tutar
  const router = useRouter(); // Kullanıcı yönlendirme için kullanılır

  useEffect(() => {
    // Token kontrolü ve rezervasyonları getirme
    const token = localStorage.getItem("token"); // Local Storage'dan token al
    if (!token) {
      // Eğer token yoksa kullanıcıyı giriş sayfasına yönlendir
      setError("Token bulunamadı. Lütfen giriş yapın.");
      router.push("/login");
      return;
    }

    async function getReservations() {
      try {
        const data = await fetchAllReservations(); // API çağrısı
        setReservations(data); // Rezervasyonları state'e set et
      } catch (err) {
        // Hata durumunda hata mesajını göster
        setError("Rezervasyonlar yüklenirken bir hata oluştu.");
      }
    }

    getReservations();
  }, [router]); // Router bağımlılığı eklenir

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Tüm Rezervasyonlar</h1>
      {error && <p className={styles.error}>{error}</p>} {/* Hata mesajı */}
      {!error && reservations.length === 0 && (
        <p>Henüz rezervasyon bulunmamaktadır.</p> // Rezervasyon yok mesajı
      )}
      {reservations.length > 0 && (
        <ReservationTable reservations={reservations} /> // Rezervasyon tablosu
      )}
    </div>
  );
}
