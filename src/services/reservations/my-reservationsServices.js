export async function fetchMyReservations() {
  const token = localStorage.getItem("token");

  // Token'in doğru şekilde çekildiğini burada kontrol edin
  console.log("Gönderilen Token:", token);

  if (!token) {
    console.error("Token bulunamadı.");
    throw new Error("Lütfen giriş yapın ve tekrar deneyin.");
  }

  try {
    const response = await fetch("http://localhost:8080/api/reservations/my-reservations", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Header'a token ekleniyor
        "Content-Type": "application/json",
      },
    });

    console.log("Gönderilen Header:", {
      Authorization: `Bearer ${token}`,
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("API Hatası:", errorDetails);
      throw new Error(errorDetails.message || "Hata oluştu.");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}
