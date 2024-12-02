export async function loginService(credentials) {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    // Backend'den gelen yanıtın kontrolü
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    // Backend'den başarılı yanıt
    const data = await response.json();
    return data; // Token ve rol bilgisi döner
  } catch (error) {
    console.error("Login error:", error.message || "Failed to fetch");
    throw new Error(
      error.message === "Failed to fetch"
        ? "Sunucuya bağlanılamıyor. Lütfen daha sonra tekrar deneyin."
        : error.message
    );
  }
}
