// src/components/ReservationTable.js
import styles from "../../styles/reservations/ReservationTable.module.css";

export default function ReservationTable({ reservations }) {
  // reservations: Tüm rezervasyonlar için liste
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Kullanıcı</th>
          <th>Tarih</th>
          <th>Misafir Sayısı</th>
          <th>Durum</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((res) => (
          <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.userId}</td>
            <td>{res.reservationDate}</td>
            <td>{res.numberOfGuests}</td>
            <td>{res.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
