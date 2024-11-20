// src/services/auth/registerService.js

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
      throw new Error(errorData.message); // Hata mesajını fırlat
    }

    const data = await response.json(); // Başarılı yanıtı JSON olarak ayrıştır
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}
