// src/app/dashboard/admin/delete/[id].js
import { useRouter } from "next/router";
import ActionButton from "../../../../components/common/ActionButton";
import { deleteReservation } from "../../../../services/reservations/deleteServices";
import styles from "../../../../styles/reservations/delete.module.css";

export default function DeleteReservation() {
  const router = useRouter();
  const { id } = router.query; // URL'den ID alınıyor

  const handleDelete = async () => {
    try {
      await deleteReservation(id); // API çağrısı
      alert("Rezervasyon başarıyla silindi!");
      router.push("/dashboard/admin/all"); // Başarılı işlem sonrası yönlendirme
    } catch (error) {
      alert("Rezervasyon silinirken bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rezervasyonu Sil</h1>
      <p>Rezervasyon ID: {id}</p>
      <ActionButton
        onClick={handleDelete}
        label="Sil"
        color="red" // Buton rengi kırmızı
      />
    </div>
  );
}
