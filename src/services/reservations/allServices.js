export async function fetchAllReservations() {
  const token = localStorage.getItem("token");

  // Eğer token yoksa hata at
  if (!token) {
    console.error("Token bulunamadı. Kullanıcı giriş yapmamış.");
    throw new Error("Lütfen giriş yapın ve tekrar deneyin.");
  }

  try {
    // Backend'e istek gönder
    const response = await fetch("http://localhost:8080/api/reservations/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Token'ı gönder
        "Content-Type": "application/json", // JSON formatını belirt
      },
    });

    // Yanıt başarılı değilse hata fırlat
    if (!response.ok) {
      const errorDetails = await response.json(); // Hata detaylarını al
      console.error("API Hatası:", errorDetails);
      throw new Error(errorDetails.message || "Rezervasyonları getirirken hata oluştu.");
    }

    // Başarılı yanıt durumunda JSON veriyi döndür
    return await response.json();
  } catch (error) {
    // Daha açıklayıcı hata mesajları için
    console.error("Fetch Error:", error.message);
    if (error.message === "Failed to fetch") {
      throw new Error("Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edin.");
    }
    throw error; // Diğer hataları tekrar fırlat
  }
}
