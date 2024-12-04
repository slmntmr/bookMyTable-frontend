//src>components>restaurants>GetAllRestaurantsForm.fs
'use client';

import React, { useEffect, useState } from 'react';
import { getAllRestaurantsService } from '@/services/restaurants/getAllRestaurantsService';
import styles from '@/styles/restaurants/getAllRestaurantsForm.module.css';

const GetAllRestaurantsForm = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurantsService();
        setRestaurants(data);
        setLoading(false);
      } catch (err) {
        setError('Restoranlar yüklenirken bir hata oluştu.');
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Yükleniyor...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Restoranlar</h1>
      <div className={styles.cardContainer}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{restaurant.name}</h2>
            <p className={styles.cardText}>{restaurant.address}</p>
            <p className={styles.cardText}>{restaurant.phone}</p>
            <p className={styles.cardDescription}>{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllRestaurantsForm;
