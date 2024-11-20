// src/services/reservations/allServices.js
export async function fetchAllReservations() {
  const response = await fetch("http://localhost:8080/api/reservations/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Token
    },
  });

  if (!response.ok) {
    throw new Error("Rezervasyonları getirirken hata oluştu.");
  }

  return await response.json(); // API'den dönen veriyi parse et
}
