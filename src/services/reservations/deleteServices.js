// src/services/reservations/deleteServices.js
export async function deleteReservation(id) {
  const response = await fetch(`http://localhost:8080/api/reservations/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Token eklenir
    },
  });

  if (!response.ok) {
    throw new Error("Rezervasyon silinirken hata oluştu.");
  }

  return await response.text(); // Silme işlemi genelde string döner
}
