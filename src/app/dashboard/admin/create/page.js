"use client";

import ReservationForm from "../../../../components/reservations/ReservationForm";
import { createReservation } from "../../../../services/reservations/createServices";
import styles from "../../../../styles/reservations/create.module.css";
import { useRouter } from "next/navigation";

export default function CreateReservation() {
  const router = useRouter();

  const handleCreate = async (formData) => {
    try {
      await createReservation(formData);
      alert("Rezervasyon başarıyla oluşturuldu!");
      router.push("/reservations"); // Başarılı işlemden sonra yönlendir
    } catch (error) {
      alert(error.message || "Rezervasyon oluşturulurken bir hata oluştu."); // Hata mesajını göster
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Yeni Rezervasyon Oluştur</h1>
      <ReservationForm onSubmit={handleCreate} />
    </div>
  );
}
