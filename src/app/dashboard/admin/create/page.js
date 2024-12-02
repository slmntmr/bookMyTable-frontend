"use client";

import ReservationForm from "../../../../components/reservations/ReservationForm";
import { createReservation } from "../../../../services/reservations/createServices";
import styles from "../../../../styles/reservations/create.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateReservation() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleCreate = async (formData) => {
    setError(null);
    try {
      await createReservation(formData);
      alert("Rezervasyon başarıyla oluşturuldu!");
      router.push("/reservations");
    } catch (error) {
      setError(error.message || "Rezervasyon oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Yeni Rezervasyon Oluştur</h1>
      {error && <p className={styles.error}>{error}</p>}
      <ReservationForm onSubmit={handleCreate} />
    </div>
  );
}
