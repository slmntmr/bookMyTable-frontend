// src/services/reservations/rejectServices.js
export async function rejectReservation(id) {
  const response = await fetch(`http://localhost:8080/api/reservations/reject/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Rezervasyon reddedilirken hata oluştu.");
  }

  return await response.json();
}
