"use client";

import ReservationForm from "../../../../components/reservations/ReservationForm";
import { createReservation } from "../../../../services/reservations/createServices";
import styles from "../../../../styles/reservations/create.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../../../../components/common/Modal";

export default function CreateReservation() {
  const router = useRouter();
  const [modalMessage, setModalMessage] = useState("");

  const handleCreate = async (formData) => {
    try {
      await createReservation(formData);
      setModalMessage("Rezervasyon başarıyla oluşturuldu!");
      router.push("/dashboard/admin/all");
    } catch (error) {
      setModalMessage(error.message || "Rezervasyon oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Yeni Rezervasyon Oluştur</h1>
      <ReservationForm onSubmit={handleCreate} />
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
      )}
    </div>
  );
}
