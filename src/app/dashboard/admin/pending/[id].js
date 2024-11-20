// src/app/dashboard/admin/pending/[id].js
import { useRouter } from "next/router";
import ActionButton from "../../../../components/common/ActionButton";
import { pendingReservation } from "../../../../services/reservations/pendingServices";
import styles from "../../../../styles//reservations/pending.module.css";

export default function PendingReservation() {
  const router = useRouter();
  const { id } = router.query; // URL'den ID alınıyor

  const handlePending = async () => {
    try {
      await pendingReservation(id); // API çağrısı
      alert("Rezervasyon başarıyla beklemeye alındı!");
      router.push("/dashboard/admin/all"); // Başarılı işlem sonrası yönlendirme
    } catch (error) {
      alert("Rezervasyon beklemeye alınırken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rezervasyonu Beklemeye Al</h1>
      <p>Rezervasyon ID: {id}</p>
      <ActionButton
        onClick={handlePending}
        label="Beklemeye Al"
        color="orange" // Buton rengi turuncu
      />
    </div>
  );
}
