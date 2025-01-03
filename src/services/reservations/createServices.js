export async function createReservation(formData) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Kullanıcı giriş yapmamış. Lütfen giriş yapın.");
  }

  const response = await fetch("http://localhost:8080/api/reservations/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  // Durum kontrolü
  if (response.status === 404) {
    return { success: false, message: "Restoran bulunamadı" };
  }

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Bilinmeyen bir hata oluştu.");
  }

  return { success: true, data: await response.json() };
}
