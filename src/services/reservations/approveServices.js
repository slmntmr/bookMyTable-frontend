// src/services/reservations/approveServices.js
export async function approveReservation(id) {
  const response = await fetch(`http://localhost:8080/api/reservations/approve/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Token eklenir
    },
  });

  if (!response.ok) {
    throw new Error("Rezervasyon onaylanırken hata oluştu.");
  }

  return await response.json();
}
