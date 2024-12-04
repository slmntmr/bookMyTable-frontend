import axios from 'axios';

export const deleteRestaurantService = async (id) => {
  const token = localStorage.getItem('token'); // Token'ı al

  if (!token) {
    throw new Error('Kullanıcı giriş yapmamış. Lütfen giriş yapın.');
  }

  try {
    const response = await axios.delete(`http://localhost:8080/api/restaurants/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Yetkilendirme
      },
    });

    if (response.status !== 204) {
      throw new Error('Restoran silinemedi. Lütfen tekrar deneyin.');
    }
  } catch (error) {
    console.error('Restoran silme işlemi sırasında hata:', error);
    throw error;
  }
};
