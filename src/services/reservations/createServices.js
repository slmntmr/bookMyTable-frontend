export async function createReservation(formData) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Kullanıcı giriş yapmamış. Lütfen önce giriş yapın.");
    }

    const response = await fetch("http://localhost:8080/api/reservations/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Token
      },
      body: JSON.stringify(formData), // ISO formatlı JSON verisi gönderiliyor
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Rezervasyon oluşturulurken hata oluştu.");
    }

    return await response.json(); // Başarılı yanıtı JSON olarak ayrıştır
  } catch (error) {
    console.error("Create reservation error:", error.message || error);
    throw error;
  }
}
