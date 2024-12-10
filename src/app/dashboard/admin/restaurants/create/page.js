"use client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
    <form
      className="container mt-5 p-4 border rounded bg-light shadow-sm"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-center mb-4">Yeni Restoran Ekle</h2>
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
      <button type="submit" className="btn btn-primary w-100">
        Ekle
      </button>
    </form>
  );
}
