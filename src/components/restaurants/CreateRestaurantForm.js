"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "../../styles/restaurants/createRestaurantForm.module.css";

const restaurantValidationSchema = Yup.object().shape({
  name: Yup.string().required("Restoran adı gereklidir."),
  address: Yup.string().required("Adres gereklidir."),
  phone: Yup.string().required("Telefon numarası gereklidir."),
  description: Yup.string().required("Açıklama gereklidir."),
});

export default function CreateRestaurantForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(restaurantValidationSchema),
  });

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <h2 className={styles.title}>Yeni Restoran Ekle</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Ad</label>
        <input
          type="text"
          {...register("name")}
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Adres</label>
        <input
          type="text"
          {...register("address")}
          className={styles.input}
        />
        {errors.address && <p className={styles.error}>{errors.address.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Telefon</label>
        <input
          type="text"
          {...register("phone")}
          className={styles.input}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Açıklama</label>
        <textarea
          {...register("description")}
          className={styles.textarea}
        />
        {errors.description && (
          <p className={styles.error}>{errors.description.message}</p>
        )}
      </div>
      <button type="submit" className={styles.button}>
        Ekle
      </button>
    </form>
  );
}
