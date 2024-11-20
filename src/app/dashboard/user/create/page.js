// src/app/dashboard/user/create/page.js
import ReservationForm from "../../../../components/reservations/ReservationForm"; // Form bileşeni
import { createReservation } from "../../../../services/reservations/createServices";
import styles from "../../../../styles/reservations/create.module.css";

export default function CreateReservation() {
  const handleCreate = async (formData) => {
    try {
      await createReservation(formData); // API çağrısı
      alert("Rezervasyon başarıyla oluşturuldu!");
    } catch (error) {
      alert("Rezervasyon oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Yeni Rezervasyon Oluştur</h1>
      <ReservationForm onSubmit={handleCreate} /> {/* Form bileşeni */}
    </div>
  );
}
