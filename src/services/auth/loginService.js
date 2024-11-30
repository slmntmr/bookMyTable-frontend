export async function loginUser(loginData) {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      // Hata durumunda, backend'den dönen hata mesajını yakalarız
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed. Please try again.");
    }

    const data = await response.json();
    return data; // token ve role bilgisi döner
  } catch (error) {
    console.error("Login error:", error.message); // Konsola detaylı hata yazılır
    throw new Error(
      error.message === "Failed to fetch"
        ? "Unable to connect to the server. Please try again later."
        : error.message
    );
  }
}
