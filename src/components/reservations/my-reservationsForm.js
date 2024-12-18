import styles from "../../styles/reservations/my-reservations.module.css";

export default function ReservationTable({ reservations }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Restoran</th>
          <th>Tarih</th>
          <th>Misafir Sayısı</th>
          <th>Durum</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((res) => (
          <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.restaurant.name}</td>
            <td>{new Date(res.reservationDate).toLocaleString()}</td>
            <td>{res.numberOfGuests}</td>
            <td>{res.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
