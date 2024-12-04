"use client";

import React, { useState, useEffect } from 'react';
import { deleteRestaurantService } from '@/services/restaurants/deleteRestaurantService';
import styles from '@/styles/restaurants/deleteRestaurantForm.module.css';

const DeleteRestaurantForm = ({ id }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [userRoles, setUserRoles] = useState([]); // Kullanıcının rolleri

  useEffect(() => {
    // Kullanıcının rolleri token'dan alınır
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Token'in payload kısmını çözümle
        setUserRoles(payload.roles || []); // Rolleri al
      } catch (err) {
        console.error('Token çözümleme hatası:', err);
        setError('Yetkilendirme hatası.');
      }
    } else {
      setError('Kullanıcı giriş yapmamış.');
    }
  }, []);

  const handleDelete = async () => {
    try {
      await deleteRestaurantService(id); // Restoran silme servisi
      setSuccess(true);
    } catch (err) {
      setError('Restoran silinemedi: ' + err.message);
    }
  };

  // Kullanıcının yetkisi yoksa buton devre dışı bırakılır
  const isAdmin = userRoles.includes('ADMIN');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Restoranı Sil</h1>
      {error && <p className={styles.error}>{error}</p>}
      {success ? (
        <p className={styles.success}>Restoran başarıyla silindi!</p>
      ) : (
        <button
          className={styles.button}
          onClick={handleDelete}
          disabled={!isAdmin} // Kullanıcı admin değilse buton devre dışı
        >
          Restoranı Sil
        </button>
      )}
      {!isAdmin && !error && (
        <p className={styles.warning}>
          Bu işlem için ADMIN yetkisine sahip olmalısınız.
        </p>
      )}
    </div>
  );
};

export default DeleteRestaurantForm;
