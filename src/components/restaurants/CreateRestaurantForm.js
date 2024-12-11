"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createRestaurant } from "../../services/restaurants/createRestaurantService";
import "bootstrap/dist/css/bootstrap.min.css";

// Doğrulama şeması
const restaurantValidationSchema = Yup.object().shape({
  name: Yup.string().required("Restoran adı gereklidir."),
  address: Yup.string().required("Adres gereklidir."),
  phone: Yup.string().required("Telefon numarası gereklidir."),
  description: Yup.string().required("Açıklama gereklidir."),
});

export default function CreateRestaurantForm() {
  const [message, setMessage] = useState(null); // Kullanıcıya gösterilecek mesaj
  const [isError, setIsError] = useState(false); // Mesajın hata mı başarı mı olduğunu belirlemek için
  const [isLoading, setIsLoading] = useState(false); // Yüklenme durumunu kontrol etmek için

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(restaurantValidationSchema),
  });

  const submitHandler = async (data) => {
    setIsLoading(true); // Yükleniyor durumunu başlat
    try {
      const result = await createRestaurant(data);
      setMessage("Restoran başarıyla kaydedildi!");
      setIsError(false);
      reset(); // Formu sıfırla
    } catch (error) {
      setMessage(error.message || "Bir hata oluştu, tekrar deneyin.");
      setIsError(true);
    } finally {
      setIsLoading(false); // Yükleniyor durumunu kapat
      // Mesajı 3 saniye sonra otomatik kapat
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="container p-4 border rounded bg-light" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 text-primary">Yeni Restoran Ekle</h2>

      {/* Mesaj gösterimi */}
      {message && (
        <div
          className={`alert ${
            isError ? "alert-danger" : "alert-success"
          } text-center`}
        >
          {message}
        </div>
      )}

      {/* Yükleniyor durumu */}
      {isLoading && <p className="text-center text-secondary">Yükleniyor...</p>}

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-3">
          <label className="form-label">Ad</label>
          <input
            type="text"
            {...register("name")}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Adres</label>
          <input
            type="text"
            {...register("address")}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Telefon</label>
          <input
            type="text"
            {...register("phone")}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Açıklama</label>
          <textarea
            {...register("description")}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            rows="4"
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading} // Yükleniyorken butonu devre dışı bırak
        >
          {isLoading ? "Kaydediliyor..." : "Ekle"}
        </button>
      </form>
    </div>
  );
}
