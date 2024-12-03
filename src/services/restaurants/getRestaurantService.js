// File: src/services/restaurants/getRestaurantService.js

export async function getRestaurantById(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Kullanıcı giriş yapmamış. Lütfen giriş yapın.");
  }

  const response = await fetch(`http://localhost:8080/api/restaurants/view/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Restoran bilgisi alınamadı.");
  }

  return await response.json();
}
