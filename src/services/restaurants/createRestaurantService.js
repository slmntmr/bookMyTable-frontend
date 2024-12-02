export async function createRestaurant(formData) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Kullanıcı giriş yapmamış. Lütfen giriş yapın.");
  }

  const response = await fetch("http://localhost:8080/api/restaurants/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Restoran eklenemedi.");
  }

  return await response.json();
}
