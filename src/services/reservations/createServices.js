// src/services/reservations/createServices.js
export async function createReservation(formData) {
  const response = await fetch("http://localhost:8080/api/reservations/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Token
    },
    body: JSON.stringify(formData), // Form verilerini JSON olarak gönder
  });

  if (!response.ok) {
    throw new Error("Rezervasyon oluşturulurken hata oluştu.");
  }

  return await response.json();
}
