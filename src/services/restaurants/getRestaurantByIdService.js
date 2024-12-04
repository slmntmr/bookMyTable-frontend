export async function getFirstRestaurantId() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Kullanıcı giriş yapmamış. Lütfen giriş yapın.");
  }

  const response = await fetch("http://localhost:8080/api/restaurants", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Restoran bilgisi alınamadı.");
  }

  const data = await response.json();

  // İlk restoranın ID'sini döndür
  return data.length > 0 ? data[0].id : null;
}
