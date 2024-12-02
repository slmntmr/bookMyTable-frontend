"use client"; // Dosyanın Client Component olduğunu belirtir
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReservationForm from "../../../../components/reservations/ReservationForm";
import { createReservation } from "../../../../services/reservations/createServices";
import Modal from "../../../../components/common/Modal";
import styles from "../../../../styles/reservations/create.module.css";

export default function CreateReservation() {
  const router = useRouter();
  const [modalMessage, setModalMessage] = useState(null);

  const handleCreate = async (formData) => {
    try {
      const result = await createReservation(formData);

      if (!result.success) {
        setModalMessage(result.message); // Başarısızlık durumunda mesaj göster
        return;
      }

      setModalMessage("Rezervasyon başarıyla oluşturuldu!");
      router.push("/dashboard/admin/all");
    } catch (error) {
      setModalMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Yeni Rezervasyon Oluştur</h1>
      <ReservationForm onSubmit={handleCreate} />
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage(null)} />
      )}
    </div>
  );
}
