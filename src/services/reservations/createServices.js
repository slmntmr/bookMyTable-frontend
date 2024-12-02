export async function createReservation(formData) {
  try {
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Bilinmeyen bir hata oluştu.");
    }

    return await response.json();
  } catch (error) {
    console.error("Create reservation error:", error.message || error);
    throw error;
  }
}
