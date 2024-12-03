"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRestaurantById } from "../../../../../services/restaurants/getRestaurantService";
import styles from "../../../../../styles/restaurants/viewRestaurant.module.css";

export default function ViewRestaurantPage() {
  const router = useRouter();
  const { id } = router.query; // Dinamik rota parametresi alınır
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // ID varsa veri çek

    async function fetchRestaurant() {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchRestaurant();
  }, [id]);

  if (error) {
    return <p className={styles.error}>Hata: {error}</p>;
  }

  if (!restaurant) {
    return <p className={styles.loading}>Yükleniyor...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{restaurant.name}</h1>
      <p className={styles.detail}><strong>Adres:</strong> {restaurant.address}</p>
      <p className={styles.detail}><strong>Telefon:</strong> {restaurant.phone}</p>
      <p className={styles.detail}><strong>Açıklama:</strong> {restaurant.description}</p>
    </div>
  );
}
