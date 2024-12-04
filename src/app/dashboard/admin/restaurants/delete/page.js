"use client";

import React, { useState, useEffect } from "react"; // React'ten gerekli hook'ları import ettik
import { getAllRestaurantsService } from "@/services/restaurants/getAllRestaurantsService";
import { deleteRestaurantService } from "@/services/restaurants/deleteRestaurantService";

const DeleteRestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]); // Restoran listesi
  const [error, setError] = useState(""); // Hata mesajı
  const [isLoading, setIsLoading] = useState(true); // Yüklenme durumu

  // Restoranları API'den çek
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true); // Yüklenme durumu başlat
        const data = await getAllRestaurantsService(); // Restoranları getir
        setRestaurants(data); // Restoranları state'e kaydet
        setError(""); // Hata yoksa mesajı sıfırla
      } catch (err) {
        setError("Restoranlar yüklenemedi: " + err.message); // Hata mesajı
      } finally {
        setIsLoading(false); // Yüklenme durumu tamamlandı
      }
    };

    fetchRestaurants();
  }, []);

  // Restoranı sil
  const handleDelete = async (id) => {
    try {
      await deleteRestaurantService(id); // Restoranı sil
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id)); // Listeden kaldır
      setError(""); // Hata yoksa sıfırla
    } catch (err) {
      setError("Restoran silinemedi: " + err.message); // Hata mesajı
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Yükleniyor...</p> {/* Yüklenme mesajı */}
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ color: "red" }}>{error}</p> {/* Hata mesajı */}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Restoranlar</h1>
      {restaurants.length === 0 ? ( // Eğer restoran yoksa
        <p style={{ textAlign: "center" }}>Hiç restoran bulunamadı.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0, maxWidth: "600px", margin: "0 auto" }}>
          {restaurants.map((restaurant) => (
            <li
              key={restaurant.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}
            >
              <span>{restaurant.name}</span>
              <button
                onClick={() => handleDelete(restaurant.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteRestaurantPage;
