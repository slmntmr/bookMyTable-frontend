"use client";

import React, { useState } from "react";
import { deleteRestaurantService } from "@/services/restaurants/deleteRestaurantService";
import styles from "@/styles/restaurants/deleteRestaurantForm.module.css";

const DeleteRestaurantForm = ({ id }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteRestaurantService(id); // Servis çağrısı
      setSuccess(true);
    } catch (err) {
      setError("Restoran silinemedi: " + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Restoranı Sil</h1>
      {error && <p className={styles.error}>{error}</p>}
      {success ? (
        <p className={styles.success}>Restoran başarıyla silindi!</p>
      ) : (
        <button className={styles.button} onClick={handleDelete}>
          Restoranı Sil
        </button>
      )}
    </div>
  );
};

export default DeleteRestaurantForm;
