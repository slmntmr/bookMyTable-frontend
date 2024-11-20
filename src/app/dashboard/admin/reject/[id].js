// src/app/dashboard/admin/reject/[id].js
import { useRouter } from "next/router";
import ActionButton from "../../../../components/common/ActionButton";
import { rejectReservation } from "../../../../services/reservations/rejectServices";
import styles from "../../../../styles/reservations/reject.module.css";

export default function RejectReservation() {
  const router = useRouter();
  const { id } = router.query;

  const handleReject = async () => {
    try {
      await rejectReservation(id);
      alert("Rezervasyon başarıyla reddedildi!");
      router.push("/dashboard/admin/all");
    } catch (error) {
      alert("Rezervasyon reddedilirken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rezervasyonu Reddet</h1>
      <p>Rezervasyon ID: {id}</p>
      <ActionButton
        onClick={handleReject}
        label="Reddet"
        color="red"
      />
    </div>
  );
}
