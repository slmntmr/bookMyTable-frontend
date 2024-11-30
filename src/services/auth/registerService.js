export async function registerUser(registerData) {
  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Hata yanıtını JSON olarak ayrıştır
      if (errorData.errors && errorData.errors.length > 0) {
        // Backend'den gelen validasyon hataları
        throw new Error(errorData.errors[0].defaultMessage || "Kayıt başarısız oldu.");
      }
      throw new Error(errorData.message || "Kayıt başarısız oldu.");
    }

    return await response.json(); // Başarılı yanıtı JSON olarak ayrıştır
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}
