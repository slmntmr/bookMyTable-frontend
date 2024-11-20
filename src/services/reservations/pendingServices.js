// src/services/reservations/pendingServices.js
export async function pendingReservation(id) {
  const response = await fetch(`http://localhost:8080/api/reservations/pending/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Token eklenir
    },
  });

  if (!response.ok) {
    throw new Error("Rezervasyon beklemeye alınırken hata oluştu.");
  }

  return await response.json();
}
