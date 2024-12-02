"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reservationValidationSchema } from "../../validation/reservationValidation";
import styles from "../../styles/reservations/registerForm.module.css";

export default function ReservationForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reservationValidationSchema),
  });

  const submitHandler = async (data) => {
    await onSubmit(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <h2 className={styles.title}>Yeni Rezervasyon</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Tarih</label>
        <input
          type="datetime-local"
          {...register("reservationDate")}
          className={styles.input}
        />
        {errors.reservationDate && (
          <p className={styles.error}>{errors.reservationDate.message}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Misafir Sayısı</label>
        <input
          type="number"
          {...register("numberOfGuests")}
          className={styles.input}
        />
        {errors.numberOfGuests && (
          <p className={styles.error}>{errors.numberOfGuests.message}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Kullanıcı ID</label>
        <input
          type="text"
          {...register("userId")}
          className={styles.input}
        />
        {errors.userId && (
          <p className={styles.error}>{errors.userId.message}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Restoran ID</label>
        <input
          type="text"
          {...register("restaurantId")}
          className={styles.input}
        />
        {errors.restaurantId && (
          <p className={styles.error}>{errors.restaurantId.message}</p>
        )}
      </div>
      <button type="submit" className={styles.button}>
        Oluştur
      </button>
    </form>
  );
}
