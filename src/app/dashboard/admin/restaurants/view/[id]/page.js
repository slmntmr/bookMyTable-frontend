"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // `useParams` ile dinamik ID alınır
import ViewRestaurantDetails from "../../../../../../components/restaurants/ViewRestaurantDetails";
import { getRestaurantById } from "../../../../../../services/restaurants/getRestaurantByIdService";
import Modal from "../../../../../../components/common/Modal";

export default function ViewRestaurantPage() {
  const { id } = useParams(); // `params.id` yerine `useParams()` kullan
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (error) {
        setError(error.message || "Restoran bilgisi alınamadı.");
      }
    };

    if (id) {
      fetchRestaurant();
    }
  }, [id]);

  if (error) {
    return <Modal message={error} onClose={() => setError(null)} />;
  }

  return (
    <div>
      {restaurant ? (
        <ViewRestaurantDetails restaurant={restaurant} />
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
}
