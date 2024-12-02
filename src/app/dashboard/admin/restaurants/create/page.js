"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateRestaurantForm from "../../../../components/restaurants/CreateRestaurantForm";
import { createRestaurant } from "../../../../services/restaurants/createRestaurantService";
import Modal from "../../../../components/common/Modal";
import styles from "../../../../styles/restaurants/createRestaurant.module.css";

export default function CreateRestaurantPage() {
  const router = useRouter();
  const [modalMessage, setModalMessage] = useState(null);

  const handleCreate = async (formData) => {
    try {
      await createRestaurant(formData);
      setModalMessage("Restoran başarıyla eklendi!");
      router.push("/dashboard/admin/restaurants");
    } catch (error) {
      setModalMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Yeni Restoran Ekle</h1>
      <CreateRestaurantForm onSubmit={handleCreate} />
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage(null)} />
      )}
    </div>
  );
}
