import styles from "../../styles/restaurants/viewRestaurantDetails.module.css";

export default function ViewRestaurantDetails({ restaurant }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{restaurant.name}</h1>
      <p className={styles.detail}>
        <strong>Adres:</strong> {restaurant.address}
      </p>
      <p className={styles.detail}>
        <strong>Telefon:</strong> {restaurant.phone}
      </p>
      <p className={styles.detail}>
        <strong>Açıklama:</strong> {restaurant.description}
      </p>
    </div>
  );
}
