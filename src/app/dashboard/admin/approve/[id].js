// src/app/dashboard/admin/approve/[id].js
import { useRouter } from "next/router";
import ActionButton from "../../../../components/common/ActionButton"; // Tekrar kullanılabilir buton
import { approveReservation } from "../../../../services/reservations/approveServices";
import styles from "../../../../styles//reservations/approve.module.css";

export default function ApproveReservation() {
  const router = useRouter();
  const { id } = router.query; // URL'deki rezervasyon ID'sini alır

  const handleApprove = async () => {
    try {
      await approveReservation(id); // API çağrısı
      alert("Rezervasyon başarıyla onaylandı!");
      router.push("/dashboard/admin/all"); // Başarılı işlem sonrası yönlendirme
    } catch (error) {
      alert("Rezervasyon onaylanırken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rezervasyonu Onayla</h1>
      <p>Rezervasyon ID: {id}</p>
      <ActionButton
        onClick={handleApprove}
        label="Onayla"
        color="green" // Buton rengi
      />
    </div>
  );
}
